import { useState, useEffect, useCallback, useRef } from "react";

export type BreathingPhase = "inhale" | "exhale" | "paused";

export interface BreathingState {
  phase: BreathingPhase;
  timeRemaining: number;
  cycleCount: number;
  isActive: boolean;
  progress: number; // 0-1 for animation
}

export const useBreathing = () => {
  const [state, setState] = useState<BreathingState>({
    phase: "paused",
    timeRemaining: 4,
    cycleCount: 0,
    isActive: false,
    progress: 0,
  });

  const intervalRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Breathing pattern: 4 seconds in, 6 seconds out
  const INHALE_DURATION = 4000; // 4 seconds
  const EXHALE_DURATION = 6000; // 6 seconds

  const updateProgress = useCallback(() => {
    if (!state.isActive || !startTimeRef.current) return;

    const now = Date.now();
    const elapsed = now - startTimeRef.current;
    const totalDuration =
      state.phase === "inhale" ? INHALE_DURATION : EXHALE_DURATION;
    const progress = Math.min(elapsed / totalDuration, 1);

    setState((prev) => ({
      ...prev,
      progress: state.phase === "inhale" ? progress : 1 - progress,
      timeRemaining: Math.max(0, Math.ceil((totalDuration - elapsed) / 1000)),
    }));

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(updateProgress);
    }
  }, [state.isActive, state.phase]);

  const switchPhase = useCallback(() => {
    setState((prev) => {
      const newPhase = prev.phase === "inhale" ? "exhale" : "inhale";
      const newCycleCount =
        newPhase === "inhale" ? prev.cycleCount + 1 : prev.cycleCount;

      return {
        ...prev,
        phase: newPhase,
        timeRemaining: newPhase === "inhale" ? 4 : 6,
        cycleCount: newCycleCount,
        progress: 0,
      };
    });

    startTimeRef.current = Date.now();
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(updateProgress);
  }, [updateProgress]);

  const start = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isActive: true,
      phase: "inhale",
      timeRemaining: 4,
      progress: 0,
    }));

    startTimeRef.current = Date.now();

    // Set up phase switching
    intervalRef.current = setInterval(() => {
      switchPhase();
    }, INHALE_DURATION);

    // Start progress animation
    animationRef.current = requestAnimationFrame(updateProgress);
  }, [switchPhase, updateProgress]);

  const pause = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isActive: false,
      phase: "paused",
    }));

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      phase: "paused",
      timeRemaining: 4,
      cycleCount: 0,
      isActive: false,
      progress: 0,
    });

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, []);

  // Update interval timing when phase changes
  useEffect(() => {
    if (!state.isActive) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const duration =
      state.phase === "inhale" ? INHALE_DURATION : EXHALE_DURATION;
    intervalRef.current = setInterval(switchPhase, duration);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.phase, state.isActive, switchPhase]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    state,
    start,
    pause,
    reset,
  };
};

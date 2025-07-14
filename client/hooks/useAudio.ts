import { useState, useEffect, useRef, useCallback } from "react";
import { BreathingPhase } from "./useBreathing";

export interface AudioSettings {
  soundCuesEnabled: boolean;
  frequencyToneEnabled: boolean;
  volume: number;
}

export const useAudio = (breathingPhase: BreathingPhase) => {
  const [settings, setSettings] = useState<AudioSettings>({
    soundCuesEnabled: true,
    frequencyToneEnabled: false,
    volume: 0.5,
  });

  const audioContextRef = useRef<AudioContext>();
  const frequencyOscillatorRef = useRef<OscillatorNode>();
  const gainNodeRef = useRef<GainNode>();
  const previousPhaseRef = useRef<BreathingPhase>("paused");

  // Initialize audio context
  useEffect(() => {
    try {
      audioContextRef.current = new AudioContext();
      gainNodeRef.current = audioContextRef.current.createGain();
      gainNodeRef.current.connect(audioContextRef.current.destination);
      gainNodeRef.current.gain.value = settings.volume * 0.1; // Keep 40Hz tone quiet
    } catch (error) {
      console.warn("Web Audio API not supported:", error);
    }

    return () => {
      if (frequencyOscillatorRef.current) {
        frequencyOscillatorRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = settings.volume * 0.1;
    }
  }, [settings.volume]);

  // Play sound cue
  const playSoundCue = useCallback(
    (type: "inhale" | "exhale") => {
      if (!settings.soundCuesEnabled || !audioContextRef.current) return;

      try {
        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        // Different frequencies for inhale vs exhale
        oscillator.frequency.value = type === "inhale" ? 800 : 400;
        oscillator.type = "sine";

        // Quick beep
        gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
        gainNode.gain.linearRampToValueAtTime(
          settings.volume * 0.3,
          audioContextRef.current.currentTime + 0.05,
        );
        gainNode.gain.exponentialRampToValueAtTime(
          0.001,
          audioContextRef.current.currentTime + 0.2,
        );

        oscillator.start();
        oscillator.stop(audioContextRef.current.currentTime + 0.2);
      } catch (error) {
        console.warn("Error playing sound cue:", error);
      }
    },
    [settings.soundCuesEnabled, settings.volume],
  );

  // Start/stop 40Hz frequency tone
  const toggle40HzTone = useCallback((enable: boolean) => {
    if (!audioContextRef.current || !gainNodeRef.current) return;

    if (enable && !frequencyOscillatorRef.current) {
      try {
        const oscillator = audioContextRef.current.createOscillator();
        oscillator.frequency.value = 40; // 40 Hz for brain health
        oscillator.type = "sine";
        oscillator.connect(gainNodeRef.current);
        oscillator.start();
        frequencyOscillatorRef.current = oscillator;
      } catch (error) {
        console.warn("Error starting 40Hz tone:", error);
      }
    } else if (!enable && frequencyOscillatorRef.current) {
      try {
        frequencyOscillatorRef.current.stop();
        frequencyOscillatorRef.current = undefined;
      } catch (error) {
        console.warn("Error stopping 40Hz tone:", error);
      }
    }
  }, []);

  // Handle breathing phase changes
  useEffect(() => {
    if (
      breathingPhase !== previousPhaseRef.current &&
      breathingPhase !== "paused"
    ) {
      playSoundCue(breathingPhase);
    }
    previousPhaseRef.current = breathingPhase;
  }, [breathingPhase, playSoundCue]);

  // Handle 40Hz tone toggle
  useEffect(() => {
    toggle40HzTone(settings.frequencyToneEnabled);
  }, [settings.frequencyToneEnabled, toggle40HzTone]);

  const updateSettings = useCallback((newSettings: Partial<AudioSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }, []);

  return {
    settings,
    updateSettings,
  };
};

import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Settings } from "lucide-react";
import { BreathingState } from "@/hooks/useBreathing";

interface BreathingControlsProps {
  state: BreathingState;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onSettings: () => void;
}

export default function BreathingControls({
  state,
  onStart,
  onPause,
  onReset,
  onSettings,
}: BreathingControlsProps) {
  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Main control button */}
      <Button
        onClick={state.isActive ? onPause : onStart}
        size="lg"
        className="w-20 h-20 rounded-full text-white font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105"
        style={{
          background: state.isActive
            ? "linear-gradient(135deg, #EF4444, #DC2626)"
            : "linear-gradient(135deg, #10B981, #059669)",
        }}
      >
        {state.isActive ? (
          <Pause className="w-8 h-8" />
        ) : (
          <Play className="w-8 h-8 ml-1" />
        )}
      </Button>

      {/* Secondary controls */}
      <div className="flex items-center space-x-4">
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>

        <Button
          onClick={onSettings}
          variant="outline"
          size="sm"
          className="rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </div>

      {/* Cycle counter */}
      {state.cycleCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-gray-600 font-medium">
            Breathing Cycles Completed
          </p>
          <p className="text-2xl font-bold text-primary">{state.cycleCount}</p>
        </div>
      )}
    </div>
  );
}

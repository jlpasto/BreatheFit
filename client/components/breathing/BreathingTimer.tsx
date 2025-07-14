import { motion } from "framer-motion";
import { BreathingPhase } from "@/hooks/useBreathing";

interface BreathingTimerProps {
  phase: BreathingPhase;
  timeRemaining: number;
  isActive: boolean;
}

export default function BreathingTimer({
  phase,
  timeRemaining,
  isActive,
}: BreathingTimerProps) {
  const getPhaseText = () => {
    switch (phase) {
      case "inhale":
        return "Breathe In";
      case "exhale":
        return "Breathe Out";
      default:
        return "Ready to Start";
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "inhale":
        return "#10B981"; // Green
      case "exhale":
        return "#3B82F6"; // Blue
      default:
        return "#6B7280"; // Gray
    }
  };

  return (
    <div className="text-center space-y-4">
      {/* Phase instruction */}
      <motion.div
        key={phase}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h2
          className="text-3xl font-bold transition-colors duration-500"
          style={{ color: getPhaseColor() }}
        >
          {getPhaseText()}
        </h2>

        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center space-x-2"
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: getPhaseColor() }}
            />
            <span className="text-lg text-gray-600 font-medium">
              {timeRemaining}s
            </span>
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: getPhaseColor() }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Breathing guidance */}
      {!isActive && (
        <div className="text-gray-600 space-y-2">
          <p className="text-lg">Follow the rhythm:</p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <span className="text-green-600 font-bold">4s</span>
              </div>
              <p className="text-sm text-gray-500">Inhale</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <span className="text-blue-600 font-bold">6s</span>
              </div>
              <p className="text-sm text-gray-500">Exhale</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

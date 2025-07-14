import { motion } from "framer-motion";
import { BreathingPhase } from "@/hooks/useBreathing";

interface BreathingCircleProps {
  phase: BreathingPhase;
  progress: number;
  isActive: boolean;
  animationVariant: string;
}

const sportIcons = {
  soccer: "⚽",
  basketball: "🏀",
  tennis: "🎾",
  swimming: "🏊‍♀️",
  running: "🏃‍♂️",
  cycling: "🚴‍♀️",
  baseball: "⚾",
  volleyball: "🏐",
};

export default function BreathingCircle({
  phase,
  progress,
  isActive,
  animationVariant,
}: BreathingCircleProps) {
  const getScale = () => {
    if (!isActive) return 1;
    if (phase === "inhale") {
      return 1 + progress * 0.8; // Scale up to 1.8x
    } else if (phase === "exhale") {
      return 1.8 - progress * 0.8; // Scale down from 1.8x to 1x
    }
    return 1;
  };

  const getGradientColors = () => {
    switch (phase) {
      case "inhale":
        return ["#10B981", "#059669", "#047857"]; // Green gradient
      case "exhale":
        return ["#3B82F6", "#2563EB", "#1D4ED8"]; // Blue gradient
      default:
        return ["#6B7280", "#4B5563", "#374151"]; // Gray gradient
    }
  };

  const colors = getGradientColors();
  const scale = getScale();

  // Get sport icon based on variant
  const sportIconKeys = Object.keys(sportIcons);
  const iconKey = sportIconKeys[
    parseInt(animationVariant) % sportIconKeys.length
  ] as keyof typeof sportIcons;
  const sportIcon = sportIcons[iconKey];

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer breathing circle */}
      <motion.div
        className="relative"
        animate={{
          scale,
          rotate: isActive ? 360 : 0,
        }}
        transition={{
          scale: { duration: 0.1, ease: "easeOut" },
          rotate: { duration: 20, ease: "linear", repeat: Infinity },
        }}
      >
        {/* Main circle with gradient */}
        <div
          className="w-64 h-64 rounded-full flex items-center justify-center shadow-2xl"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
          }}
        >
          {/* Inner circle */}
          <motion.div
            className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
            animate={{
              boxShadow: isActive
                ? `0 0 ${20 + progress * 40}px ${colors[0]}40, inset 0 0 ${10 + progress * 20}px ${colors[1]}20`
                : "0 0 10px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Sport icon */}
            <div className="text-6xl filter drop-shadow-lg">{sportIcon}</div>
          </motion.div>
        </div>

        {/* Breathing particles */}
        {isActive && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: colors[0],
                  top: "50%",
                  left: "50%",
                  originX: 0.5,
                  originY: 0.5,
                }}
                animate={{
                  x: Math.cos((i * Math.PI * 2) / 8) * (60 + progress * 40),
                  y: Math.sin((i * Math.PI * 2) / 8) * (60 + progress * 40),
                  opacity: [0.8, 0.3, 0.8],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: phase === "inhale" ? 4 : 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Progress ring */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
          />
          {isActive && (
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke={colors[0]}
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress }}
              transition={{ duration: 0.1 }}
              style={{
                filter: `drop-shadow(0 0 8px ${colors[0]})`,
              }}
            />
          )}
        </svg>
      </div>
    </div>
  );
}

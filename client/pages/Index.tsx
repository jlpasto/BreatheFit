import { useState } from "react";
import { useBreathing } from "@/hooks/useBreathing";
import { useAudio } from "@/hooks/useAudio";
import BreathingCircle from "@/components/breathing/BreathingCircle";
import BreathingControls from "@/components/breathing/BreathingControls";
import BreathingTimer from "@/components/breathing/BreathingTimer";
import SoundControls from "@/components/breathing/SoundControls";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GraduationCap, Heart, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const { state, start, pause, reset } = useBreathing();
  const { settings, updateSettings } = useAudio(state.phase);
  const [showSettings, setShowSettings] = useState(false);
  const [animationVariant, setAnimationVariant] = useState("0");

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Reduce Stress",
      description: "Lower cortisol levels and promote relaxation",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Improve Focus",
      description: "Enhance concentration and mental clarity",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Boost Performance",
      description: "Optimize athletic and cognitive performance",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Better Sleep",
      description: "Prepare your mind and body for restful sleep",
    },
  ];

  const sportThemes = [
    { name: "Soccer", emoji: "⚽", value: "0" },
    { name: "Basketball", emoji: "🏀", value: "1" },
    { name: "Tennis", emoji: "🎾", value: "2" },
    { name: "Swimming", emoji: "🏊‍♀️", value: "3" },
    { name: "Running", emoji: "🏃‍♂️", value: "4" },
    { name: "Cycling", emoji: "🚴‍♀️", value: "5" },
    { name: "Baseball", emoji: "⚾", value: "6" },
    { name: "Volleyball", emoji: "🏐", value: "7" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">🫁</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">BreatheFit</h1>
                <p className="text-sm text-gray-600">Sport Breathing Coach</p>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <Link
                to="/learn"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Learn
              </Link>
              <Link
                to="/progress"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Progress
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Master Your Breath,{" "}
            <span className="text-primary">Elevate Your Game</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Improve focus, reduce stress, and boost performance with guided
            breathing exercises designed for athletes and active minds.
          </p>
        </div>

        {/* Sport Theme Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-600 mb-3 text-center">
              Choose your sport:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {sportThemes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => setAnimationVariant(theme.value)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    animationVariant === theme.value
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{theme.emoji}</span>
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Breathing Interface */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16 mb-16">
          {/* Breathing Circle */}
          <div className="flex-shrink-0">
            <BreathingCircle
              phase={state.phase}
              progress={state.progress}
              isActive={state.isActive}
              animationVariant={animationVariant}
            />
          </div>

          {/* Controls and Timer */}
          <div className="space-y-8 text-center lg:text-left">
            <BreathingTimer
              phase={state.phase}
              timeRemaining={state.timeRemaining}
              isActive={state.isActive}
            />
            <BreathingControls
              state={state}
              onStart={start}
              onPause={pause}
              onReset={reset}
              onSettings={() => setShowSettings(true)}
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Why Controlled Breathing Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Tips for Success
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="font-medium text-gray-700">Find Your Posture</p>
              </div>
              <p className="text-sm text-gray-600">
                Sit or stand comfortably with your spine straight and shoulders
                relaxed.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="font-medium text-gray-700">Breathe Deep</p>
              </div>
              <p className="text-sm text-gray-600">
                Let your belly expand on inhale, not just your chest. Feel the
                air fill your lungs.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <p className="font-medium text-gray-700">Stay Consistent</p>
              </div>
              <p className="text-sm text-gray-600">
                Practice for just 5-10 minutes daily to see improvements in
                focus and calm.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Audio & Settings</DialogTitle>
          </DialogHeader>
          <SoundControls
            settings={settings}
            onSettingsChange={updateSettings}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

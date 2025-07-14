import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Heart,
  Brain,
  Zap,
  Target,
  Activity,
  Timer,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Breathing
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">🫁</span>
              </div>
              <h1 className="text-lg font-bold text-gray-800">
                BreatheFit Learn
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Science of <span className="text-primary">Breathing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how controlled breathing can transform your performance,
            health, and well-being through evidence-based techniques.
          </p>
        </div>

        {/* Why Breathing Matters */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <Activity className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-gray-800">
                Why Breathing Matters
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Breathing is the only autonomic function we can consciously
                  control. While your body breathes automatically, taking
                  control of this process unlocks powerful benefits for both
                  mind and body.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Research shows that controlled breathing activates the
                  parasympathetic nervous system, reducing stress hormones like
                  cortisol while increasing focus and emotional regulation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Fast Facts</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Average person takes 17,000-30,000 breaths per day</li>
                  <li>• 4-7-8 breathing can reduce anxiety in minutes</li>
                  <li>• Athletes use breathing to improve oxygen efficiency</li>
                  <li>
                    • Controlled breathing improves heart rate variability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Proven Benefits of Controlled Breathing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Physical Health
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Lower blood pressure</li>
                <li>• Improved heart rate variability</li>
                <li>• Enhanced oxygen delivery</li>
                <li>• Reduced inflammation</li>
                <li>• Better sleep quality</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Mental Performance
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Enhanced focus and concentration</li>
                <li>• Reduced anxiety and stress</li>
                <li>• Improved emotional regulation</li>
                <li>• Better decision-making</li>
                <li>• Increased mental clarity</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Athletic Performance
                </h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Improved oxygen efficiency</li>
                <li>• Enhanced endurance</li>
                <li>• Faster recovery times</li>
                <li>• Better pre-game calm</li>
                <li>• Reduced performance anxiety</li>
              </ul>
            </div>
          </div>
        </section>

        {/* The 4-6 Technique */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <Timer className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                The 4-6 Breathing Technique
              </h2>
              <p className="text-xl opacity-90">
                Our signature pattern for optimal calm and focus
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Inhale for 4 seconds</p>
                      <p className="text-sm opacity-80">
                        Breathe in slowly through your nose, filling your lungs
                        completely
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Exhale for 6 seconds</p>
                      <p className="text-sm opacity-80">
                        Breathe out slowly through your mouth, releasing all
                        tension
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Why This Ratio?</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  The 4:6 ratio activates your parasympathetic nervous system
                  more effectively than equal breathing. The longer exhale
                  signals to your brain that it's safe to relax, lowering heart
                  rate and reducing stress hormones. This pattern is backed by
                  research and used by elite athletes worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 40Hz Frequency */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">40Hz</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                The Power of 40Hz Gamma Waves
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our app offers an optional 40Hz frequency tone that plays in
                  the background during breathing exercises. This frequency
                  corresponds to gamma brain waves, which are associated with
                  heightened awareness, cognitive function, and enhanced focus.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Research suggests that 40Hz stimulation may support brain
                  health by promoting neural synchronization and potentially
                  helping with memory consolidation and attention span.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Research Highlights
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• MIT studies on gamma wave benefits</li>
                  <li>• Enhanced cognitive performance</li>
                  <li>• Improved memory formation</li>
                  <li>• Increased neural connectivity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-8">
            <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Breathing?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start with just 5 minutes a day. Choose your favorite sport theme,
              enable sound cues, and begin your journey to better focus,
              performance, and well-being.
            </p>
            <Link to="/">
              <Button size="lg" className="text-white font-semibold">
                Start Breathing Exercise
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

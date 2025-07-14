import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Calendar, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Progress() {
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
                BreatheFit Progress
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your Breathing <span className="text-primary">Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your progress, celebrate milestones, and see how consistent
            breathing practice transforms your well-being.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-4xl mx-auto">
          {/* Placeholder Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">0</p>
              <p className="text-sm text-gray-600">Days Practiced</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">0</p>
              <p className="text-sm text-gray-600">Total Sessions</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">0</p>
              <p className="text-sm text-gray-600">Breathing Cycles</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">0</p>
              <p className="text-sm text-gray-600">Achievements</p>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white rounded-xl p-12 shadow-lg border border-gray-200 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Progress Tracking Coming Soon!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're building an amazing progress tracking system that will help
              you monitor your breathing journey, set goals, and celebrate your
              achievements. Features will include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Daily Practice Streaks
                    </p>
                    <p className="text-sm text-gray-600">
                      Track your consistency and build healthy habits
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Session Analytics
                    </p>
                    <p className="text-sm text-gray-600">
                      See detailed insights about your breathing patterns
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">
                      Achievement Badges
                    </p>
                    <p className="text-sm text-gray-600">
                      Unlock rewards for reaching milestones
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Personal Goals</p>
                    <p className="text-sm text-gray-600">
                      Set and track custom breathing objectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Progress Charts</p>
                    <p className="text-sm text-gray-600">
                      Visualize your improvement over time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Export & Share</p>
                    <p className="text-sm text-gray-600">
                      Share your achievements with coaches and friends
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <p className="text-sm text-gray-600 mb-4">
                In the meantime, start building your breathing practice! Every
                session counts toward your future progress.
              </p>
              <Link to="/">
                <Button size="lg" className="text-white font-semibold">
                  Start Your First Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

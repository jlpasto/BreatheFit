import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Volume2, VolumeX, Waves } from "lucide-react";
import { AudioSettings } from "@/hooks/useAudio";

interface SoundControlsProps {
  settings: AudioSettings;
  onSettingsChange: (settings: Partial<AudioSettings>) => void;
}

export default function SoundControls({
  settings,
  onSettingsChange,
}: SoundControlsProps) {
  return (
    <div className="space-y-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center">
        <Volume2 className="w-5 h-5 mr-2" />
        Audio Settings
      </h3>

      {/* Sound cues toggle */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="font-medium text-gray-700">Breathing Cues</p>
          <p className="text-sm text-gray-500">
            Audio signals for inhale/exhale timing
          </p>
        </div>
        <Switch
          checked={settings.soundCuesEnabled}
          onCheckedChange={(checked) =>
            onSettingsChange({ soundCuesEnabled: checked })
          }
        />
      </div>

      {/* 40Hz frequency toggle */}
      <div className="flex items-center justify-between">
        <div className="space-y-1 flex-1">
          <div className="flex items-center">
            <Waves className="w-4 h-4 mr-2 text-purple-600" />
            <p className="font-medium text-gray-700">40Hz Focus Tone</p>
          </div>
          <p className="text-sm text-gray-500">
            Background frequency for enhanced focus and brain health
          </p>
        </div>
        <Switch
          checked={settings.frequencyToneEnabled}
          onCheckedChange={(checked) =>
            onSettingsChange({ frequencyToneEnabled: checked })
          }
        />
      </div>

      {/* Volume control */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-medium text-gray-700">Volume</p>
          <span className="text-sm text-gray-500">
            {Math.round(settings.volume * 100)}%
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <VolumeX className="w-4 h-4 text-gray-400" />
          <Slider
            value={[settings.volume]}
            onValueChange={([value]) => onSettingsChange({ volume: value })}
            max={1}
            min={0}
            step={0.1}
            className="flex-1"
          />
          <Volume2 className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      {/* Info about 40Hz */}
      {settings.frequencyToneEnabled && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start">
            <Waves className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-purple-800">40Hz Gamma Waves</p>
              <p className="text-purple-700 mt-1">
                Research suggests 40Hz frequencies may support cognitive
                function, focus, and overall brain health during meditation and
                breathing exercises.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

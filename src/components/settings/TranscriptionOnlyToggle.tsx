import { Switch, Label, Header } from "@/components";
import { useApp } from "@/contexts";

interface TranscriptionOnlyToggleProps {
  className?: string;
}

export const TranscriptionOnlyToggle = ({
  className,
}: TranscriptionOnlyToggleProps) => {
  const { transcriptionOnlyMode, setTranscriptionOnlyMode } = useApp();

  const handleSwitchChange = (checked: boolean) => {
    setTranscriptionOnlyMode(checked);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Header
        title="Transcription Only Mode"
        description="Skip AI processing and show only transcriptions"
        isMainTitle
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <Label className="text-sm font-medium">
              {transcriptionOnlyMode
                ? "Transcription Only (AI Disabled)"
                : "Transcription + AI Response"}
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              {transcriptionOnlyMode
                ? "Only show transcribed text without AI processing"
                : "Transcribe audio and get AI-powered responses (default)"}
            </p>
          </div>
        </div>
        <Switch
          checked={transcriptionOnlyMode}
          onCheckedChange={handleSwitchChange}
          title={`Toggle to ${
            !transcriptionOnlyMode
              ? "enable transcription only mode"
              : "enable AI processing"
          }`}
          aria-label={`Toggle to ${
            transcriptionOnlyMode
              ? "enable AI processing"
              : "enable transcription only mode"
          }`}
        />
      </div>
    </div>
  );
};


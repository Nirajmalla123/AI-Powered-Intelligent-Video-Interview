import sounddevice as sd
from scipy.io.wavfile import write
import keyboard
import time
from faster_whisper import WhisperModel


# Load Whisper model locally
# Options: tiny, base, small, medium, large-v3
model = WhisperModel(
    "small",
    device="cpu",          # Change to "cuda" if you have NVIDIA GPU
    compute_type="int8"    # Use "float16" for GPU
)


def record_audio():
    print("Press Enter to Start Recording..")
    keyboard.wait("enter")

    print("Recording.. Press Enter again to stop.")

    start_time = time.time()

    fs = 44100
    channels = 1

    recording = sd.rec(
        int(fs * 300),
        samplerate=fs,
        channels=channels
    )

    keyboard.wait("enter")

    print("Stopping...")

    sd.stop()

    duration = time.time() - start_time

    write(
        "output.wav",
        fs,
        recording[:int(duration * fs)]
    )

    print("Audio saved.")


def speech_to_text():
    segments, info = model.transcribe(
        "output.wav",
        beam_size=5
    )

    text = ""

    for segment in segments:
        text += segment.text + " "

    return text.strip()


def transcribe():
    while True:
        record_audio()

        output = speech_to_text()

        print("\nTranscription:")
        print(output)
        print()
        choice = input("\nRecord again? (y/n): ")

        if choice.lower() != "y":
            break

if __name__ == "__main__":
    transcribe()
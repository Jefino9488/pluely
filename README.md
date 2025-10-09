# Pluely - Personal Fork

> **This is a personal fork of [Pluely](https://github.com/iamsrikanthnani/pluely)**, modified for my specific requirements.


---

## ✨ Personal Modifications

- **Transcription-Only Mode**: Added toggle to skip AI processing and show only transcriptions
- Customized for personal workflow and preferences

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Tauri (Rust)
- **UI Components**: shadcn/ui
- **Speech-to-Text**: Multiple provider support (OpenAI Whisper, Groq, ElevenLabs, etc.)
- **AI Integration**: OpenAI, Anthropic Claude, Google Gemini, xAI Grok, and custom providers

---

## 🚀 Development

### Prerequisites
- Node.js (v18 or higher)
- Rust (latest stable)
- System dependencies for Tauri - see [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/)

### Setup

```bash
# Clone the repository
git clone https://github.com/Jefino9488/pluely.git
cd pluely

# Install dependencies
npm install

# Start development server
npm run tauri dev
```

### Build

```bash
# Build for production
npm run tauri build
```

Build outputs will be in `src-tauri/target/release/bundle/`:
- **Linux**: `.deb`, `.rpm`, `.AppImage`
- **Windows**: `.msi`, `.exe` (build on Windows)
- **macOS**: `.dmg` (build on macOS)

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

This project is a fork of [Pluely by Srikanth Nani](https://github.com/iamsrikanthnani/pluely).

Original project features and documentation can be found at the [original repository](https://github.com/iamsrikanthnani/pluely).

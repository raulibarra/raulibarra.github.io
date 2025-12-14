# Raul Ibarra Aranda - Game Developer Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing game development projects, skills, and experience.

## ✨ Latest Features: AI Companion (nMaD)
The portfolio now features an interactive **AI Companion** named **nMaD** (neural-Mapped autonomous Droid).
- **Interactive Assistance**: nMaD provides real-time answers about Raul's experience, projects, and skills.
- **Technology**: Powered by **Puter.js** using the **Gemini 2.5 Flash** model for fast, context-aware responses.
- **Customizable Brain**:
  - `src/data/chatbotcontext.dat`: Contains the full knowledge base (RAG-like context) about the portfolio.
  - `src/data/system_prompt.txt`: Defines nMaD's personality and behavioral instructions.
- **Visuals**: originally a 3D model, now optimized as a **2D sprite** for better performance and smoother animations, with a custom chat interface utilizing glassmorphism.

## 🎨 Theme: Deep Void
A dark, sci-fi inspired theme designed to immerse visitors.
- **Aesthetics**: Atmospheric background, dynamic lighting, and "glassmorphism" UI elements.
- **Interactivity**: Custom **SVG cursors** (Default and Pointer) with precise hotspot adjustments for a polished feel.

## 🛠 Tech Stack
- **Framework**: React 19 + Vite
- **AI Integration**: Puter.js (Gemini 2.5 Flash)
- **Styling**: Vanilla CSS (modular usage via `index.css`), Bootstrap 4 (utility classes)
- **Deployment**: GitHub Pages

## 📂 Project Structure
- `src/components`: Reusable UI components.
  - `NMadCompanion.jsx`: The floating AI sprite component.
  - `ChatInterface.jsx`: The chat window logic and UI.
- `src/data`: Data-driven content.
  - `projects.js`: Portfolio projects list.
  - `chatbotcontext.dat`: Knowledge base for the AI.
  - `system_prompt.txt`: System instructions for the AI.
- `src/assets`: Local assets.
- `public/assets`: Static assets like images.

## 🚀 Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

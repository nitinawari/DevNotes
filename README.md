# 📒 DevNotes

**DevNotes** is a personal developer wiki built with [Docusaurus](https://docusaurus.io/) — designed to organize technical notes, cheat sheets, mind maps, and resources in one searchable, version-controlled space.

---

## ✨ Features

- 🖥 **Custom UI** — Tailored theme for better readability.
- 🔍 **Full-text Search** — Local search with Algolia planned for future.
- 🗂 **Category-based Navigation** — Organize notes by topic.
- ⚡ **GitHub Pages Deployment** — Automatic CI/CD publishing.
- 📄 **Markdown Powered** — Simple writing format.
- 📚 **Multi-topic Coverage** — Programming, DevOps, Linux, and more.

---

 ## 📂 Folder Structure

```bash
DevNotes/
├── docs/                  # Main documentation content
├── blog/                  # Blog posts (optional)
├── sidebars.ts            # Sidebar configuration
├── docusaurus.config.ts   # Site configuration
├── src/                   # Custom components & styles
└── static/                # Static assets (images, icons, etc.)
```
---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/nitinawari/DevNotes.git
cd DevNotes
```
--- 

### 2. Install Dependencies
```bash
npm install
```
--- 

### 3. Start Development Server
```bash
npm run start
```

- Visit http://localhost:3000 to preview.
---

### 4. Build for Production
```bash
npm run build
```
---

### 🌐 Deployment
This project is automatically deployed to GitHub Pages using GitHub Actions.

To deploy manually:
```bash
GIT_USER=<YourGitHubUsername> npm run deploy
```
---
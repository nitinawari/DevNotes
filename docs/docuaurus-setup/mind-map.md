# DevNotes Project — Mind Map & Cheatsheet

---
*08 August 2025* 
## 🧠 Mind Map Overview

### DevNotes Project

- **Setup**
  - Initialize Docusaurus (v3, TypeScript)
  - `npm init docusaurus@latest DevNotes classic`
  - Configure `docusaurus.config.ts`
    - `url`: `https://nitinawari.github.io`
    - `baseUrl`: `/DevNotes/` (In which route you want to serve project)
    - `organizationName`: `nitinawari`
    - `projectName` : `DevNotes`
    - `editUrl` points to your GitHub repo
      - for docs `https://github.com/nitinawari/DevNotes/tree/main/`
      - for blogs `https://github.com/nitinawari/DevNotes/tree/main/blog/`
  

- **Project Structure**
  - `docs/` — Markdown documentation files
  - `src/`
    - `components/` — React components
    - `pages/` — React pages for routing
    - `css/custom.css` — Custom styling
  - `static/img/` — Favicons, logos, images

- **Development**
  - Use React + TypeScript for pages/components
  - Write content in Markdown files inside `docs/`
  - Configure sidebar navigation (`sidebars.ts`)

- **Deployment**
  - Create repo on github and push code
  - `settings->pages->set root as default folder and gh-pages as default branch`
  - Deployment branch: `gh-pages`
  - Deploy command:
    ```
    USE_SSH=true GIT_USER=nitinawari npm run deploy
    ```
  - **Fixes & tips**:
    - our machine should have proper ssh token setup, verify with
      - `ssh -T git@github.com`
    - Use Personal Access Token (PAT) if using HTTPS (optional)

- **Learned Concepts**
  - Docusaurus config basics (`url`, `baseUrl`, `organizationName`, `projectName`)
  - Difference between `docs` (Markdown) and `pages` (React)
  - GitHub Pages deployment workflow
  - SSH authentication setup for Git operations

---

## 📋 Command & Config Cheatsheet

| Topic                      | Command / Notes                                                       |
|----------------------------|----------------------------------------------------------------------|
| **Start local dev server**   | `npm start` or `yarn start`                                          |
| **Build production**         | `npm run build` or `yarn build`                                      |
| **Test production build locally** | `npm run serve`                                                 |
| **Deploy to GitHub Pages**   | `USE_SSH=true GIT_USER=nitinawari npm run deploy`                    |
| **Change Git remote to SSH** | `git remote set-url origin git@github.com:nitinawari/DevNotes.git`   |
| **Check SSH connection**     | `ssh -T git@github.com` (should show successful authentication)      |
| **Key docusaurus.config.ts fields** | `url`, `baseUrl`, `organizationName`, `projectName`             |
| **Edit URLs in config**      | Point to your GitHub repo for “edit this page” links                 |
| **Docs folder**              | Markdown files for documentation, auto-routed                        |
| **Pages folder**             | React/TSX files for custom pages/routes                              |
| **Sidebar config**           | Controls doc navigation (`sidebars.ts`)                              |
| **Custom CSS location**      | `src/css/custom.css` (imported via theme config)                     |
| **GitHub Pages deployment branch** | `gh-pages`                                                       |
| **Base URL (case sensitive)** | Match your repo name exactly in `baseUrl` (e.g., `/DevNotes/`)      |
| **Repo projectName**         | Use exact case-sensitive name in `projectName` (e.g., `DevNotes`)    |

---

> **Tip:** Always test your production build locally with `npm run serve` before deploying!

---



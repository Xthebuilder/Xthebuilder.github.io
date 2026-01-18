# Xavier Martin Cofield — Portfolio

A modern, cyberpunk-themed portfolio website built with React, Tailwind CSS, and Vite. Features a professional dark UI with neon accents, subtle animations, and a tasteful signal-drift glitch effect.

![Portfolio Preview](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite)

## 🚀 Features

- **Cyberpunk Aesthetic** — Professional dark theme with neon cyan, green, and magenta accents
- **Signal Drift Glitch Effect** — Tasteful glitch animation on the hero name (hover-triggered)
- **Responsive Design** — Fully responsive across all device sizes
- **CSS-First Animations** — Smooth, performant animations under 300ms
- **Static Site** — Fast loading, no backend required
- **GitHub Pages Ready** — Auto-deploys via GitHub Actions

## 🛠️ Tech Stack

- **React 18** — Component-based UI
- **Tailwind CSS 3.4** — Utility-first styling
- **Vite 5** — Fast development and optimized builds
- **JetBrains Mono** — Monospace font for code aesthetic
- **Inter** — Clean sans-serif for body text

## 📦 Local Development

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Xthebuilder/Professional_Website2.git
cd Professional_Website2

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview production build locally |

## 🚀 Deployment

### GitHub Pages (Automatic)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

#### Setup Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Xthebuilder/Professional_Website2.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source
   - The workflow will run automatically on the next push

3. **Update Base Path** (if needed)
   
   The site is configured to deploy to `xthebuilder.github.io` (root path). If deploying to a project repo like `username.github.io/repo-name`, update the `base` path in `vite.config.js`:
   
   ```js
   base: '/repo-name/',
   ```

4. **Access Your Site**
   
   Once deployed, your site will be available at:
   ```
   https://xthebuilder.github.io/
   ```

### Manual Deployment

You can also build and deploy manually:

```bash
# Build the project
npm run build

# The /dist folder contains the production-ready files
# Upload these to any static hosting service
```

## 📁 Project Structure

```
Professional_Website2/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero section with glitch effect
│   │   ├── About.jsx         # About me section
│   │   ├── Projects.jsx      # Project cards
│   │   ├── Skills.jsx        # Skills grid
│   │   ├── Contact.jsx       # Contact links
│   │   └── Footer.jsx        # Footer component
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles & Tailwind
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`:

```js
colors: {
  'neon-cyan': '#22d3ee',
  'neon-green': '#22c55e',
  'neon-magenta': '#e879f9',
  'cyber-dark': '#0a0a0f',
  // ... more colors
}
```

### Content

- **Personal Info**: Update `src/components/Hero.jsx` and `src/components/About.jsx`
- **Projects**: Edit the `projects` array in `src/components/Projects.jsx`
- **Skills**: Modify the `skillGroups` array in `src/components/Skills.jsx`
- **Contact Links**: Update `contactLinks` in `src/components/Contact.jsx`

### Glitch Effect

The glitch effect can be customized in `src/index.css`. Adjust the keyframes `glitch-shift-1` and `glitch-shift-2` for different effects.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [https://xthebuilder.github.io/](https://xthebuilder.github.io/)
- **GitHub**: [https://github.com/Xthebuilder](https://github.com/Xthebuilder)
- **LinkedIn**: [Xavier Martin C.](https://www.linkedin.com/in/xavier-martin-c-21447138a/)

---

Built with 💻 by Xavier Martin Cofield

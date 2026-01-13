# Smit Lila – Portfolio

React + TypeScript + Vite single-page portfolio featuring projects, experience, and skills.

## Tech stack
- React 19, TypeScript, Vite
- TailwindCSS
- Lucide icons

## Quick start
```bash
cd app
npm install
npm run dev -- --host --port 5173
```
Open the shown localhost URL (default: http://localhost:5173).

## Build
```bash
cd app
npm run build
npm run preview
```

## Project data
- Experiences: `src/data/experiences.ts`
- Projects: `src/data/projects.ts` (includes GitHub links and hero images in `public/`)
- Skills: `src/data/skills.ts`

## Structure
- `src/App.tsx` composes section components in `src/components/`
- Images and assets in `public/`

## Notes
- Only the “More info” buttons open modals for projects and experiences.
- Tailwind config lives in `postcss.config.js` and global styles in `src/index.css`.

# MF Estética Automotiva

Website for MF Estética Automotiva, a car detailing business in Manoel Ribas - PR.

Built with React 19, TypeScript, Vite, and Linaria for styling.

## Getting Started

```bash
npm install
npm run dev
```

## Project Documentation

See [AGENTS.md](AGENTS.md) for complete project overview, architecture decisions, code style guidelines, and development workflows.

## Tech Stack

- React 19
- TypeScript
- Vite
- Linaria (CSS-in-JS)
- ESLint

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
  import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```

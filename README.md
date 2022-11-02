# Setup

Voraussetzungen:

- Node.js (https://nodejs.org/en/)
- IDE (https://code.visualstudio.com/, https://www.jetbrains.com/de-de/webstorm/)

1. `npx create-react-app my-app --template typescript`
2. `cd my-app`
3. `npm start`
4. Browser öffnen mit http://localhost:3000

# Links

- Initialisierung
  - CRA (https://create-react-app.dev/) `npx create-react-app my-app --template typescript`
  - Vite (https://vitejs.dev/) `npm create vite@latest my-react-app -- --template react-ts`
  - Bun.sh ACHTUNG NICHT NUTZEN https://github.com/oven-sh/bun#using-bun-with-create-react-app
- Renderer
  - https://reactnative.dev/
  - https://github.com/vadimdemedes/ink
  - https://github.com/pmndrs/react-three-fiber
- https://eslint.org/
- https://github.com/browserslist/browserslist
- React Blog: https://reactjs.org/blog/
- Changelog: https://github.com/facebook/react/blob/main/CHANGELOG.md
- https://github.com/timarney/react-app-rewired
- https://prettier.io/

# Komponenten

- Sind einfache JS/TS Funktionen
- Geben eine JSX-Struktur zurück
- 1 Komponente pro Datei
- Der Komponentenname beginnt mit einem Großbuchstaben
- Die Komponente wird in JSX als Tag eingebunden (`<App />`)

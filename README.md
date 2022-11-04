# Setup

Voraussetzungen:

- Node.js (https://nodejs.org/en/)
- IDE (https://code.visualstudio.com/, https://www.jetbrains.com/de-de/webstorm/)

1. `npx create-react-app my-app --template typescript`
2. `cd my-app`
3. `npm start`
4. Browser öffnen mit http://localhost:3000

## Backend

1. `npm install @faker-js/faker json-server`
2. `scripts` (data, prebackend, backend) aus der `package.json` aus dem Repo kopieren
3. die `index.js` aus dem Wurzelverzeichnis kopieren
4. `npm run backend`

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
- Immutability
  - Immutabilit-Helper: https://github.com/kolodny/immutability-helper
  - Immer: https://github.com/immerjs/immer
  - Immutable.js: https://immutable-js.com/
- https://developer.mozilla.org/en-US/
- https://overreacted.io/
- https://reactjs.org/docs/hooks-rules.html
- https://tanstack.com/query/v4/docs/overview
- https://plugins.jetbrains.com/plugin/9792-key-promoter-x
- https://npmtrends.com/
- Typsicherheit
  - sehr rudimentär: https://www.npmjs.com/package/prop-types - zur Laufzeit
  - auch nicht gut: https://flow.org/ - static typechecker
  - der "Standard": https://www.typescriptlang.org/ - zur compilezeit
- React Doku: https://beta.reactjs.org/ (neu)
- https://kentcdodds.com/blog/how-to-use-react-context-effectively
- Testing
  - https://jestjs.io
  - https://testing-library.com/
  - https://mswjs.io/

# Komponenten

- Sind einfache JS/TS Funktionen
- Geben eine JSX-Struktur zurück
- 1 Komponente pro Datei
- Der Komponentenname beginnt mit einem Großbuchstaben
- Die Komponente wird in JSX als Tag eingebunden (`<App />`)

# Schleifen und Bedingungen

- Schleifen mit Array + Map
  - Jedes Top-level-Element benötigt eine eindeutiges key-Attribut
- Bedingungen:
  - if/else und Rückgabewert
  - if/else in Kombination mit Variablen und JSX Strukturen
  - Inline Bedinungen mit ?:-Operator

# useEffect

`useEffect(effectFn, dependencies)`

- dependencies:

  - []: effectFn wird nur einmalig beim initialen Einbinden getriggert
  - [x]: effectFn wird nur getriggert wenn sich x ändert
  - keine dependencies: effectFn wird bei jeder Aktualisierung der Komponente getriggert

- Lifecylce-phasen (pro Komponenteninstanz):
  - mount (einhängen): `useEffect(() => {}, [])`
  - update: `useEffect(() => {})` oder `useEffect(() => {}, [dep])`
  - unmount (aushängen): `useEffect(() => {... return () => {...}})`

# Custom Hooks

- Wiederverwendbarkeit von "Komponentenlogik"
- Auslagern von Logik aus einer Komponente

## Architekturpatterns

- CustomHooks - am häufigsten verwendete in modernen Applikationen
- ContainerComponents
- HoC (Higher order Components)
- Render Props

# Routing

- BrowserRouter: Standardrouter - den wollt ihr nutzen - HTML5 History API als Basis
- HashRouter: die alte Welt - Hash Navigation als Basis
- MemoryRouter: für Testing

# Styling

- Inline styling: `<div style={{backgroundColor: 'black'}}>text</div>`
- CSS import + Klassen (ggf. https://www.npmjs.com/package/classnames)

```ts
import 'MyComponent.css';

...
<div className="myFancyClass">test</div>
```

- SCSS: wie CSS import nur mit SCSS - Voraussetzung. `npm install sass` https://create-react-app.dev/docs/adding-a-sass-stylesheet
- CSS Modules: Klassenbasiert und scoped https://create-react-app.dev/docs/adding-a-css-modules-stylesheet
- Bibliotheken
  - https://styled-components.com/
  - https://emotion.sh/docs/introduction
- Utility first CSS Frameworks (https://tailwindcss.com/)
  - https://tailwindcss.com/docs/guides/create-react-app

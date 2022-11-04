# Aufgabe 13 - Routing

Integriere den React Router in die Applikation

`npm install react-router-dom`

Definiere die folgenden Routen:

- / => Standardroute - leitet auf /list weiter
- /list => Stellt die Liste dar
- /new => Rendert das Formular
- In der List-Komponente gibt es einen Link auf die `/new`-Route, um einen neuen Datensatz anlegen zu können
- Nach dem Speichern bzw. Abbrechen wird der/die NutzerIn zurück auf die Liste geleitet

## Bonus

- sorge dafür, dass über das Formular Datensätze editiert werden können. Route: `/edit/:id`
  - Zugriff auf die id: `const {id} = useParams<{id: string}>()`
  - Lade die zu editierenden Daten
  - Implementiere eine Funktion `handleSave`, die die Daten per HTTP PUT auf dem Server speichert

```ts
fetch('http://localhost:3001/users/' + person.id, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(person),
});
```

## Bonusbonus

- rendere das Formular als Subroute der `/list` Route in einem MUI Dialog

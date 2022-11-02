# Aufgabe 6 - Serverkommunikation

Lade die Daten für die Personenliste der `List`-Komponente vom Server `http://localhost:3001/users` (im useEffect).

```ts
fetch('http://localhost:3001/users')
  .then((response) => response.json())
  .then((data) => setState(data));
```

## Bonus 1: loading indicator

Definiere zusätzlich einen "loading" state, den du nach dem Laden der Daten auf `false` setzt. Zeige während des Ladens den Text "Lade daten..." an.

## Bonus 2: Löschen der Daten vom Server

Lösche die Daten vom Server (im handleDelete) und aktualisiere nach erfolgreichem Löschen den State.

```ts
fetch('http://localhost:3001/users/' + id, {
  method: 'DELETE',
}).then((response) => {
  // modifiy state
});
```

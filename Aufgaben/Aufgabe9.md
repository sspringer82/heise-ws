# Aufgabe 9 - Formulare

Erzeuge eine neue Komponente `Form` mit der du einen neuen Datensatz anlegen kannst.

Binde die `Form` Komponente als Kindkomponente der `List` Komponente ein.

- Das Speichern eines Datensatzes fügt den Datensatz zur Liste hinzu (lokal)
- Bonus: Das Speichern speichert den Datensatz auf dem Server

```ts
fetch('http://localhost:3001/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(person),
})
  .then((response) => response.json())
  .then((newPerson) => console.log(newPerson));
```

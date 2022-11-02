# Aufgabe 7 - Kindkomponenten

Lagere die Anzeige einer Tabellenzeile in eine eigene Komponente `ListItem` aus.

Die `ListItem` Komponente sollte folgende Props akzeptieren:

```ts
type Props {
  person: Person;
  onDelete: (id: number) => void;
}
```

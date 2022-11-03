# Aufgabe 12 - Context

Erzeuge einen `PersonContext`, in dem die Personendaten gespeichert werden und auf den du im Custom Hook statt des States zugreifst.

- erzeuge eine neue Datei `PersonProvider.tsx`
- erzeuge einen `PersonContext` mit `createContext` (typ: `[Person[], Dispatch<SetStateAction<Person[]>>]`) initalwert: `[[], () => {}]`
- erzeuge + exportiere eine neue Komponente `PersonProvider`, die einen lokalen State definiert (typ: `Person[]`) und diesen (mit Setter + Getter) über den `value` der `PersonContext.Provider`-Komponente verfügbar macht
- erzeuge einen neuen custom hook `usePersonContext` in dem du über `useContext` auf den `PersonContext` zugreifst und den Wert des Contextes zurückgibst.
- ersetze in `usePerson` den `useState` aufruf durch `usePersonContext`

# Entkopplung von List und Form

- Extrahiere die `Form` Komponente aus der `List`-Komponente und platziere beide nebeneinander im `PersonProvider`. Sorge dafür dass beide den Context verwenden und unabhängig voneinander funktionieren.

```ts
const personsState = useState([]);
<PersonContext.Provider value={personsState}>
  {children}
</PersonContext.Provider>;

const [persons, setPersons] = useContext(PersonContext);
```

# Aufgabe 12 - Context

Erzeuge einen `PersonContext`, in dem die Personendaten gespeichert werden und auf den du im Custom Hook statt des States zugreifst.

- erzeuge eine neue Datei `PersonProvider`
- erzeuge einen `PersonContext` mit `createContext` (typ: `[Person[], Dispatch<SetStateAction<Person[]>>]`) initalwert: `[[], () => {}]`
- erzeuge + exportiere eine neue Komponente `PersonProvider`, die einen lokalen State definiert (typ: `Person[]`) und diesen über den `value` der `PersonContext.Provider`-Komponente verfügbar macht
- erzeuge einen neuen custom hook `usePersonContext` in dem du über `useContext` auf den `PersonContext` zugreifst und den Wert des Contextes zurückgibst.

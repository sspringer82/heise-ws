# Aufgabe 8 - Custom Hook

Lagere die personenbezogene-Funktionalität aus der `List`-Komponente aus.

- Identifiziere alles, was du auslagern möchtest (State, Effect, Hilfsfunktionalität)
- Schneide die entsprechenden Codeblöcke aus
- füge den Code in eine Custom Hook-Funktion ein
- Verbinde die Custom Hook-Funktion mit der Komponente
  - was fehlt in der Komponente (z.B. person aus useState)
  - definiere den Rückgabewert der Custom Hook-Funktion, sodass die Komponente Zugriff auf die benötigten Strukturen erhält

```ts
type ReturnValue = [Person[], (item: Person) => void];

function usePerson(): ReturnValue {
  const [state, setState] = useState<Person[]>([]);

  function addItem(item: Person) {
    setState((prevState) => [...prevSate, item]);
  }

  return [state, addItem];
}

const [state, addItem] = usePerson();
```

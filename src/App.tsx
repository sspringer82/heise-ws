import React from 'react';
import Person from './Person';

const klaus: Person = {
  id: 1,
  firstName: 'Klaus',
  lastName: 'Müller',
  birthdate: '1970-01-01T01:00:00Z',
  street: 'Main street 5',
  city: 'Democity',
  zipCode: '12345',
};

// export default function App() { ... }
const App: React.FC = () => {
  function getName() {
    return 'Lisa';
  }

  return (
    <div>
      Hallo {1 + 2} {'foo'} {getName()} {klaus.firstName + ' ' + klaus.lastName}
      {true ? <div>wahr</div> : <div>falsch</div>}
    </div>
  );
};

export default App;

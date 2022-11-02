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
  const list = ['a', 'b', 'c'];

  let content = <div>Hallo Welt</div>;
  if (true) {
    content = <div>Hallo Mond</div>;
  }

  const condition = true;
  if (condition) {
    return (
      <div>
        {content}
        <div>
          {list.map((listItem) => {
            return <div key={listItem}>{listItem}</div>;
          })}
        </div>
        {condition ? <div>Hallo</div> : <div>Tschüss</div>}
      </div>
    );
  } else {
    return <div>Oh no!</div>;
  }
};

export default App;

import React from 'react';
import { useMyContext } from './ContextProvider';

const Child: React.FC = () => {
  const [state, setState] = useMyContext();
  return (
    <div>
      Hallo ich bin Child! Objekt: {state.name} {state.age}
      <button onClick={() => setState((p: any) => ({ ...p, age: p.age + 1 }))}>
        +1
      </button>
    </div>
  );
};

export default Child;

import React from 'react';
import { useState } from 'react';

// ------- Child.tsx -------
type Props = {
  value: string;
  onDelete: (id: string) => void;
};

const Child: React.FC<Props> = ({ value, onDelete }) => {
  return (
    <div>
      {value}
      <button onClick={() => onDelete(value)}>löschen</button>
    </div>
  );
};

// ------- Parent.tsx -------
const Parent: React.FC = () => {
  const [state, setState] = useState<string[]>(['a', 'b', 'c']);

  function handleDelete(value: string) {
    setState((prevState) => prevState.filter((v) => v !== value));
  }

  return (
    <div>
      {state.map((value) => (
        <Child value={value} onDelete={handleDelete} key={value} />
      ))}
    </div>
  );
};

export default Parent;

import React from 'react';
import { useState } from 'react';

const State: React.FC = () => {
  const [state, setState] = useState(['a', 'b', 'c']);

  console.log('render');

  function handleClick(value: string) {
    setState(function (prevState) {
      const newState = prevState.filter(
        (prevStateValue) => prevStateValue !== value
      );
      return newState;
    });

    // setState(['1', '2', '3']);
  }

  return (
    <ul>
      {state.map((value) => (
        <li
          key={value}
          onClick={() => {
            handleClick(value);
          }}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default State;

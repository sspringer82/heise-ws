import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Lifecycle: React.FC = () => {
  console.log('render');

  const [state, setState] = useState(0);

  useEffect(() => {
    console.log('Effect');

    // Serverkommunikation (initiales datenladen), Websocket connection öffnen, Timeout setzen
    const intervalHandle = setInterval(() => {
      console.log('xxx');
      setState((prevState) => prevState + 1);
    }, 1000);

    return () => {
      console.log('cleanup routine');

      // clearInterval(intervalHandle);
    };
  }, []);

  return <div>Die Zahl ist: {state} </div>;
};

export default Lifecycle;

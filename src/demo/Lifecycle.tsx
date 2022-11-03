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
      setState((prevState) => prevState + 1);
    }, 1000);

    return () => {
      console.log('cleanup routine');
      clearInterval(intervalHandle);
    };
  }, []);

  return <div>Die Zahl ist: {state} </div>;
};

function Initial() {
  useEffect(() => {
    console.log('mount');
  }, []);

  return <div></div>;
}

function Update1() {
  useEffect(() => {
    console.log('update on every change');
  });

  return <div></div>;
}

function Update2() {
  const xyz = 'xxx';
  useEffect(() => {
    console.log('update only if xyz changes');
  }, [xyz]);

  return <div></div>;
}

function Unmount() {
  useEffect(() => {
    // ressourcen allkoation
    return () => {
      // ressource freigeben
      console.log('cleanup');
    };
  }, []);

  return <div></div>;
}

export default Lifecycle;

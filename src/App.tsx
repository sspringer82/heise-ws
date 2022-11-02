import React, { useState } from 'react';
import { useEffect } from 'react';
import Lifecycle from './demo/Lifecycle';

const App: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2_000);
  }, []);

  if (show === true) {
    return <Lifecycle />;
  } else {
    return <div>Hallo Welt</div>;
  }
};

export default App;

import React, { useEffect, useState } from 'react';

// darf nur in Komponenten und anderen Hooks verwendet werden
// darf NICHT in Bedingungen und Schleifen verwendet werden
function useCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return count;
}

const CustomHook: React.FC = () => {
  const count = useCounter();

  return <div>{count}</div>;
};

const Counter: React.FC = () => {
  const count = useCounter();
  return <p>{count}</p>;
};

export default CustomHook;

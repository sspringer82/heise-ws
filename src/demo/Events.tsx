import React from 'react';

const Events: React.FC = () => {
  function handleEvent() {
    console.log('i was clicked');
  }
  return <button onClick={handleEvent}>click me</button>;
};

export default Events;

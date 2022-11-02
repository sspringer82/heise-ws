import React from 'react';

const Loop: React.FC = () => {
  const list = ['a', 'b', 'c'];
  return (
    <div>
      {list.map((listItem) => (
        <div key={listItem}>{listItem}</div>
      ))}
    </div>
  );
};

export default Loop;

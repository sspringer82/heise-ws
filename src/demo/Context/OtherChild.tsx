import React from 'react';
import { useMyContext } from './ContextProvider';

const OtherChild: React.FC = () => {
  const [value] = useMyContext();
  return (
    <div>
      {value.name} {value.age}
    </div>
  );
};

export default OtherChild;

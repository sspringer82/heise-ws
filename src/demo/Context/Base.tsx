import React from 'react';
import Child from './Child';
import ContextProvider from './ContextProvider';
import Intermediate from './Intermediate';
import OtherChild from './OtherChild';

const Base: React.FC = () => {
  return (
    <ContextProvider>
      <Intermediate>
        <Child />
      </Intermediate>
      <OtherChild />
    </ContextProvider>
  );
};

export default Base;

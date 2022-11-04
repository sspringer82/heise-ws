import React from 'react';
import Base from './demo/Routing/Base';
import Form from './Form';
import List from './List';
import PersonProvider from './PersonProvider';

const App: React.FC = () => {
  return (
    <>
      <Base />
      <hr />
      <PersonProvider>
        <Form />
        <List />
      </PersonProvider>
    </>
  );
};

export default App;

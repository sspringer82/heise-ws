import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Form from './person/Form/Form';
import List from './person/List/List';
import PersonProvider from './person/PersonProvider';

const App: React.FC = () => {
  return (
    <PersonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/list" />} />
          <Route path="/list" element={<List />} />
          <Route path="/new" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </PersonProvider>
  );
};

export default App;

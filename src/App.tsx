import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Form from './Form';
import List from './List';
import PersonProvider from './PersonProvider';

const App: React.FC = () => {
  return (
    <PersonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/list" />} />
          <Route path="/list" element={<List />} />
          <Route path="/new" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </PersonProvider>
  );
};

export default App;

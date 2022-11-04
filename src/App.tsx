import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Form from './person/Form/Form';
import List from './person/List/List';
import { FormPerson } from './person/Person';
import usePerson from './person/usePerson';

const App: React.FC = () => {
  const { save } = usePerson();
  const navigate = useNavigate();
  function handleSave(person: FormPerson) {
    save(person);
    navigate('/list');
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list" />} />
      <Route path="/list" element={<List />} />
      <Route path="/new" element={<Form onSubmit={handleSave} />} />
      <Route path="/edit/:id" element={<Form onSubmit={handleSave} />} />
    </Routes>
  );
};

export default App;

import { useState, useEffect } from 'react';
import Person from './Person';

type ReturnType = {
  loading: boolean;
  persons: Person[];
  handleDelete: (id: number) => void;
};

export default function usePerson(): ReturnType {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => {
        setPersons(data);
        setLoading(false);
      });
  }, []);

  function handleDelete(id: number): void {
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setPersons((prevPersons) => {
          const newPersons = prevPersons.filter(
            (prevPerson) => prevPerson.id !== id
          );
          return newPersons;
        });
      } else {
        alert('Oh no!');
      }
    });
  }

  return {
    loading,
    persons,
    handleDelete,
  };
}

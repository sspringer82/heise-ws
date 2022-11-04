import { useState, useEffect } from 'react';
import Person, { FormPerson } from './Person';
import { usePersonContext } from './PersonProvider';

type ReturnType = {
  loading: boolean;
  persons: Person[];
  handleDelete: (id: number) => void;
  handleAdd: (newPerson: FormPerson) => void;
  getPerson: (id: number) => Person;
  fetchPerson: (id: number) => Promise<Person>;
};

export default function usePerson(loadData = false): ReturnType {
  const [persons, setPersons] = usePersonContext();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loadData) {
      fetch('http://localhost:3001/users')
        .then((response) => response.json())
        .then((data) => {
          setPersons(data);
          setLoading(false);
        });
    }
  }, [loadData, setPersons]);

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

  function handleAdd(person: FormPerson) {
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(person),
    })
      .then((response) => response.json())
      .then((newPerson) => {
        // setPersons((prevPersons) => {
        //   const personsClone = [...prevPersons];
        //   personsClone.push(newPerson);
        //   return personsClone;
        // });
        setPersons((prevPersons) => [...prevPersons, newPerson]);
      });
  }

  function getPerson(id: number): Person {
    return persons.find((person) => person.id === id) as Person;
  }

  async function fetchPerson(id: number): Promise<Person> {
    const response = await fetch(`http://localhost:3001/users/${id}`);
    return response.json();
  }

  return {
    loading,
    persons,
    handleDelete,
    handleAdd,
    getPerson,
    fetchPerson,
  };
}

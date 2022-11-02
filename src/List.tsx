import React, { useState } from 'react';
import { useEffect } from 'react';
import ListItem from './ListItem';
import Person from './Person';

const List: React.FC = () => {
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

  if (loading === true) {
    return <div>...lade Daten</div>;
  }

  if (persons.length === 0) {
    return <div>Es sind aktuell keine Datensätze vorhanden</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Birth date</th>
          <th>Street</th>
          <th>City</th>
          <th>Zip code</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person) => {
          return <ListItem person={person} onDelete={handleDelete} />;
        })}
      </tbody>
    </table>
  );
};

export default List;

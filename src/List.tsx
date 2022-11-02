import React, { useState } from 'react';
import Person from './Person';

const initialPersons: Person[] = [
  {
    id: 1,
    firstName: 'Klaus',
    lastName: 'Müller',
    birthdate: '1970-01-01T01:00:00Z',
    street: 'Main street 5',
    city: 'Democity',
    zipCode: '12345',
  },
  {
    id: 2,
    firstName: 'Lisa',
    lastName: 'Müller',
    birthdate: '1970-01-01T01:00:00Z',
    street: 'Main street 5',
    city: 'Democity',
    zipCode: '12345',
  },
];

const List: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>(initialPersons);

  function handleDelete(id: number): void {
    setPersons((prevPersons) => {
      const newPersons = prevPersons.filter(
        (prevPerson) => prevPerson.id !== id
      );
      return newPersons;
    });
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
          return (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.birthdate}</td>
              <td>{person.street}</td>
              <td>{person.city}</td>
              <td>{person.zipCode}</td>
              <td>
                <button onClick={() => handleDelete(person.id)}>löschen</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;

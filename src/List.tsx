import React from 'react';
import Person from './Person';

const List: React.FC = () => {
  const person: Person = {
    id: 1,
    firstName: 'Klaus',
    lastName: 'Müller',
    birthdate: '1970-01-01T01:00:00Z',
    street: 'Main street 5',
    city: 'Democity',
    zipCode: '12345',
  };

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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{person.id}</td>
          <td>{person.firstName}</td>
          <td>{person.lastName}</td>
          <td>{person.birthdate}</td>
          <td>{person.street}</td>
          <td>{person.city}</td>
          <td>{person.zipCode}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;

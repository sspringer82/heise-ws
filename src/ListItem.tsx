import React from 'react';
import Person from './Person';

type Props = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ person, onDelete }) => {
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
        <button onClick={() => onDelete(person.id)}>löschen</button>
      </td>
    </tr>
  );
};

export default ListItem;

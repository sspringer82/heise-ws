import React from 'react';
import Form from './Form';
import ListItem from './ListItem';
import usePerson from './usePerson';

const List: React.FC = () => {
  const { loading, persons, handleDelete, handleAdd } = usePerson();

  if (loading === true) {
    return <div>...lade Daten</div>;
  }

  if (persons.length === 0) {
    return <div>Es sind aktuell keine Datensätze vorhanden</div>;
  }

  return (
    <>
      <Form onSubmit={handleAdd} />
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
              <ListItem
                person={person}
                onDelete={handleDelete}
                key={person.id}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;

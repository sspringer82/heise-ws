import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from '@mui/material';
import React from 'react';
import ListItem from './ListItem';
import usePerson from './usePerson';

const List: React.FC = () => {
  const { loading, persons, handleDelete } = usePerson(true);
  console.log('list');

  if (loading === true) {
    return <div>...lade Daten</div>;
  }

  if (persons.length === 0) {
    return <div>Es sind aktuell keine Datensätze vorhanden</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Birth date</th>
            <th>Street</th>
            <th>City</th>
            <th>Zip code</th>
            <th></th>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((person) => {
            return (
              <ListItem
                person={person}
                onDelete={handleDelete}
                key={person.id}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

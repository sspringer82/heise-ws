import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import Person from '../Person';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

type Props = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ person, onDelete }) => {
  return (
    <TableRow key={person.id}>
      <TableCell data-testid="id">{person.id}</TableCell>
      <TableCell data-testid="firstName">{person.firstName}</TableCell>
      <TableCell data-testid="lastName">{person.lastName}</TableCell>
      <TableCell data-testid="birthdate">{person.birthdate}</TableCell>
      <TableCell data-testid="street">{person.street}</TableCell>
      <TableCell data-testid="city">{person.city}</TableCell>
      <TableCell data-testid="zipCode">{person.zipCode}</TableCell>
      <TableCell>
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => onDelete(person.id)}
          data-testid="delete-btn"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <Link to={`/edit/${person.id}`}>bearbeiten</Link>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;

import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import Person from './Person';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  person: Person;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ person, onDelete }) => {
  return (
    <TableRow key={person.id}>
      <TableCell>{person.id}</TableCell>
      <TableCell>{person.firstName}</TableCell>
      <TableCell>{person.lastName}</TableCell>
      <TableCell>{person.birthdate}</TableCell>
      <TableCell>{person.street}</TableCell>
      <TableCell>{person.city}</TableCell>
      <TableCell>{person.zipCode}</TableCell>
      <TableCell>
        <IconButton
          aria-label="delete"
          disabled
          color="primary"
          onClick={() => onDelete(person.id)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ListItem;

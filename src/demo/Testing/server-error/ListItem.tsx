import { FC } from 'react';
import User from '../User';

type Props = {
  user: User;
  onDelete: (id: number) => void;
};

const ListItem: FC<Props> = ({ user, onDelete }) => {
  return (
    <tr>
      <td data-testid="id">{user.id}</td>
      <td data-testid="firstname">{user.firstname}</td>
      <td data-testid="lastname">{user.lastname}</td>
      <td>
        <button onClick={() => onDelete(user.id)} data-testid="delete-btn">
          löschen
        </button>
      </td>
    </tr>
  );
};

export default ListItem;

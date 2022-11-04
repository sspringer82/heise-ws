import { FC, useState } from 'react';
import ListItem from './ListItem';
import User from '../User';

type Props = {
  users: User[];
};

function filterFn(user: User, filter: string): boolean {
  const lcFilter = filter.toLowerCase();
  return (
    user.firstname.toLowerCase().includes(lcFilter) ||
    user.lastname.toLowerCase().includes(lcFilter)
  );
}

const List: FC<Props> = ({ users }) => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <div>
        Find:{' '}
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          data-testid="filter"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>first name</th>
            <th>last name</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => filterFn(user, filter))
            .map((user) => (
              <ListItem user={user} onDelete={() => {}} key={user.id} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default List;

import { useEffect, useState } from 'react';
import List from './List';
import User from '../User';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError(true);
        }
      })
      .then((data) => setUsers(data));
  }, []);

  if (error) {
    return <div data-testid="error">Whoops an error happened!</div>;
  } else {
    return <List users={users} />;
  }
};

export default App;

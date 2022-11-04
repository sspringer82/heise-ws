import React from 'react';
import { Link, useParams } from 'react-router-dom';

const C: React.FC = () => {
  console.log('RENDER C');
  const { id } = useParams<{ id: string }>();

  const existingIds = [1, 2, 4, 5];

  if (existingIds.find((i) => i === parseInt(id!, 10))) {
    return (
      <div>
        <div>The id is {id}</div>
        This is C<Link to="/a">goto a</Link>
      </div>
    );
  } else {
    return (
      <div>
        the requested id does not exist
        <br />
        This is C<Link to="/a">goto a</Link>
      </div>
    );
  }
};

export default C;

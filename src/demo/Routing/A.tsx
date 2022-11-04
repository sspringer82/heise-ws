import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const A: React.FC = () => {
  console.log('RENDER A');

  useEffect(() => {
    console.log('mount A');
    return () => {
      console.log('cleanup A');
    };
  }, []);

  return (
    <div>
      This is A
      <div>
        <Link to="/b">go to B</Link>
        <br />
        <Link to="/c/42">go to C (42)</Link>
        <br />
        <Link to="/c/4">go to C (4)</Link>
        <br />
        <Link to="/c">go to C (ohne)</Link>
      </div>
    </div>
  );
};

export default A;

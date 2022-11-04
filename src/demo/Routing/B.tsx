import React from 'react';
import { useNavigate } from 'react-router-dom';

const B: React.FC = () => {
  console.log('RENDER B');
  const navigate = useNavigate();
  return (
    <div>
      This is B
      <div>
        <button onClick={() => navigate('/a')}>go to A</button>
      </div>
    </div>
  );
};

export default B;

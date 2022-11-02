import React from 'react';

const Condition: React.FC = () => {
  const cond1 = true;
  const cond2 = true;
  const cond3 = true;

  let content = <span>false</span>;
  if (cond2) {
    content = <span>true</span>;
  }

  if (cond1) {
    return (
      <div>
        true
        <div>{content}</div>
        {cond3 ? <div>inline true</div> : <div>inline false</div>}
      </div>
    );
  } else {
    return <div>false</div>;
  }
};

export default Condition;

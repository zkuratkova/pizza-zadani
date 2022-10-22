import React from 'react';
import './style.css';

const Check = ({ onChange, checked }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button className="check" onClick={handleClick}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;

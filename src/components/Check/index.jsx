import React from 'react';
import { usePrefs } from '../../prefs-context';
import './style.css';

const Check = ({ onChange, checked, vegan }) => {
  const { veganOnly } = usePrefs();

  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button
      className={
        veganOnly ? (vegan ? 'check' : 'check--disabled check') : 'check'
      }
      onClick={handleClick}
      disabled={veganOnly ? (vegan ? false : true) : false}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;

import React from 'react';
import { usePrefs } from '../../prefs-context';

const Header = () => {
  const { veganOnly, handleVegan } = usePrefs();
  const handleClick = () => {
    handleVegan();
  };
  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <button onClick={handleClick}>
        {veganOnly ? 'All toppings' : 'Just vegan'}
      </button>
    </header>
  );
};

export default Header;

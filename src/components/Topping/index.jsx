import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, handleChange }) => {
  return (
    <div className="topping">
      <Check onChange={handleChange} checked={topping.selected} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;

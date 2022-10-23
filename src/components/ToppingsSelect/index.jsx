import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState([{ toppings }]);

  const handleChange = (index, checked) => {
    const newToppings = [...toppings];
    if (checked == true) {
      newToppings[index].selected = true;
    } else if (checked == false) {
      newToppings[index].selected = false;
    }
    setChecked(newToppings);
  };

  let countChecked = 0;
  countChecked = checked.filter((topping) => {
    if (topping.selected == true) {
      return true;
    }
    return false;
  }).length;

  let price = 0;
  checked.forEach((topping) => {
    if (topping.selected == true) {
      return (price += topping.price);
    }
  });

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {countChecked}, total price: {+price.toFixed(2)} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={index}
            handleChange={(checked) => handleChange(index, checked)}
            vegan={topping.vegan}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;

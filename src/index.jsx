import React from 'react';
import { createRoot } from 'react-dom/client';
import Topping from './components/Topping';
import './style.css';

const toppings = [
  {
    name: 'Pepperoni',
    price: 1,
  },
  {
    name: 'Mushroom',
    price: 0.35,
  },
  {
    name: 'Extra cheese',
    price: 0.5,
  },
  {
    name: 'Sausage',
    price: 0.8,
  },
  {
    name: 'Onion',
    price: 0.25,
  },
  {
    name: 'Black olives',
    price: 0.65,
  },
  {
    name: 'Green pepper',
    price: 0.55,
  },
  {
    name: 'Fresh garlic',
    price: 0.1,
  },
  {
    name: 'Tomato',
    price: 0.5,
  },
  {
    name: 'Fresh basil',
    price: 0.15,
  },
];

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="pizza" />
        <h1>Build your own pizza</h1>
      </header>
      <main>
        <p>Choose as many toppings as you want</p>
        <p>Selected toppings: 0, total price: 0 Euro</p>
        <div class="toppings">
          {toppings.map((topping) => (
            <Topping topping={topping} key={topping.name} />
          ))}
        </div>
      </main>
      
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

import React from 'react';
import './Menu.css';
import { Link } from "react-router-dom";

// Sample menu items data
const menuItems = [
  { id: 1, name: 'Pizza', price: '$10' },
  { id: 2, name: 'Burger', price: '$8' },
  { id: 3, name: 'Salad', price: '$6' },
  { id: 4, name: 'Pasta', price: '$12' },
];

// Menu item component
const MenuItem = ({ item }) => (
  <div className="menu-item">
    <h3>{item.name}</h3>
    <p>{item.price}</p>
  </div>
);

// Menu page component
function Menu() {
  return (
    <div className="menu-container">
      <Link className="btn btn-light mx-1" to="/" role="button">
            Back
          </Link>
      <header>
        <h1>Hotel Menu</h1>
      </header>
      <main>
        
        {menuItems.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}

export default Menu;
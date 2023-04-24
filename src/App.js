import React from 'react';
import './App.css';
import Users from './components/users/Users.js';
import Products from './components/products/Products';

const App = () => {
  return (
    <div className="app">
      <div>
        <h1>Welcome to my app</h1>
        <Users />
      </div>

      <div>
        <h2>Welocome to my app 2</h2>
        <Products />
      </div>
    </div>
  );
};

export default App;

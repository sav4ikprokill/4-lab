import React from 'react';
import './index.css';
import cart from '../src/img/cart.svg'
import search from '../src/img/Search.png'
import logo from '../src/img/Logo.svg';
function App() {
  return (
    <>
    <div className='header'>
      <img src={logo} alt="logo"></img>
      <p>my-app</p>
      <ul className='tab'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">News</a></li>
      </ul>
      <div className="input">
        <input type="text" />
        <img src={search} alt =''/>
      </div>
    <div className='cart'> 
      <img src={cart} alt =''/>
      <p>cart(0)</p>
    </div>
  </div> 
  </>
  );
}

export default App; 

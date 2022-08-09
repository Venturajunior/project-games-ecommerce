import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './styles.css';

function Header() {
  return (
    <header className="header-main">
      <span className="item-menu">Home</span>
      <span className="item-menu">Products</span>
      <div className="cart-icon">
        <FaShoppingCart size={24} color="#3e3e3e" />
      </div>
    </header>
  );
}

export default Header;

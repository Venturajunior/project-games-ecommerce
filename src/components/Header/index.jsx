import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './styles.css';

function Header() {
  return (
    <header className="header-main">
      <Link to="/">
        <span className="item-menu">Home</span>
      </Link>
      <Link to="/products">
        <span className="item-menu">Products</span>
      </Link>
      <div className="cart-icon">
        <FaShoppingCart size={24} color="#3e3e3e" />
      </div>
    </header>
  );
}

export default Header;

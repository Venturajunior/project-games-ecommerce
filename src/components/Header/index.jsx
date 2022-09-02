import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuffer, FaShoppingCart } from 'react-icons/fa';
import './styles.css';

function Header() {
  return (
    <header className="header-main">
      <div className="header-wrapper-items">
        <div className="header-item">
          <Link to="/">
            <FaHome color="#fff" size={24} />
            <span className="header-item-text">Home</span>
          </Link>
        </div>
        <div className="header-item">
          <Link to="/products">
            <FaBuffer color="#fff" size={24} />
            <span className="header-item-text">Produtos</span>
          </Link>
        </div>
      </div>
      <div className="header-item header-cart-icon">
        <FaShoppingCart size={24} color="#fff" />
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <button className="menu-btn" aria-label="메뉴 열기">
      <span className="menu-icon">☰</span>
    </button>
    <h1 className="cafe-title">Bluebird Cafe</h1>
  </header>
);

export default Header; 
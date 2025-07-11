import React from 'react';
import './MenuCard.css';

interface MenuCardProps {
  name: string;
  price: number;
  image: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, price, image }) => (
  <div className="menu-card">
    <img src={image} alt={name} className="menu-image" />
    <div className="menu-info">
      <h3>{name}</h3>
      <p>{price.toLocaleString()}원</p>
    </div>
  </div>
);

export default MenuCard; 
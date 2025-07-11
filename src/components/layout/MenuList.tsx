import React from 'react';
import MenuCard from './MenuCard';
import './MenuList.css';

const sampleMenus = {
  '커피': [
    { name: '아메리카노', price: 3000, image: '/coffee1.png' },
    { name: '카페라떼', price: 3500, image: '/coffee2.png' },
  ],
  '티': [
    { name: '녹차', price: 3500, image: '/tea1.png' },
    { name: '얼그레이', price: 4000, image: '/tea2.png' },
  ],
  '디저트': [
    { name: '치즈케이크', price: 5000, image: '/dessert1.png' },
    { name: '마카롱', price: 2000, image: '/dessert2.png' },
  ],
};

interface MenuListProps {
  category: string;
}

const MenuList: React.FC<MenuListProps> = ({ category }) => (
  <div className="menu-list">
    {sampleMenus[category].map((item) => (
      <MenuCard key={item.name} {...item} />
    ))}
  </div>
);

export default MenuList; 
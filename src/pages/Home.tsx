import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CategoryTabs from '../components/layout/CategoryTabs';
import MenuList from '../components/layout/MenuList';
import './Home.css';

const Home: React.FC = () => {
  const [category, setCategory] = useState('커피');

  return (
    <div className="home-container">
      <Header />
      <CategoryTabs selected={category} onSelect={setCategory} />
      <MenuList category={category} />
      <Footer />
    </div>
  );
};

export default Home; 
import React from 'react';
import './CategoryTabs.css';

const categories = ['커피', '티', '디저트'];

interface CategoryTabsProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ selected, onSelect }) => (
  <nav className="category-tabs">
    {categories.map((cat) => (
      <button
        key={cat}
        className={`tab-btn${selected === cat ? ' active' : ''}`}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </button>
    ))}
  </nav>
);

export default CategoryTabs; 
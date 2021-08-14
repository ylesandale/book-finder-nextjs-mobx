import React from 'react';

import book from '../store/store';
import { observer } from 'mobx-react-lite';

const useCategoriesSettings = () => {
  const categories = {
    title: 'Categories',
    options: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
    value: book.category,
    onChange: (value: string) => book.setCategory(value),
  };
  return { categories };
};

export default useCategoriesSettings;

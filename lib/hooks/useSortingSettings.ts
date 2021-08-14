import React from 'react';

import book from '../store/store';

const useSortingSettings = () => {
  const sorting = {
    title: 'Sorting by',
    options: ['relevance', 'newest'],
    value: book.sorting,
    onChange: (value: string) => book.setSortingType(value),
  };
  return { sorting };
};

export default useSortingSettings;

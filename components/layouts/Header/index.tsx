// modules
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';

// components
import { Input, Select } from '../../base';

// store
import book from '../../../lib/store/store';

// api
import { onSearchBooks } from '../../../lib/api';

// hooks
import { useCategoriesSettings, useSortingSettings } from '../../../lib/hooks';

// styles
import styles from './Header.module.css';

const Header = observer(() => {
  const router = useRouter();
  const { categories } = useCategoriesSettings();
  const { sorting } = useSortingSettings();
  const [value, setValue] = React.useState<string>('');

  const handleSearchBook = async (title: string) => {
    try {
      if (window.location.pathname !== '/') {
        await router.push('/');
      }

      const { data } = await onSearchBooks(title, 0, book.sorting, book.category);

      if (data.totalItems === 0) {
        book.setBooks([]);
        book.setTotalBooks(data.totalItems);
        book.setSearchValue(title);
      }

      const loadedBooks = data.items.map((item: any) => ({
        id: item.id,
        info: item.volumeInfo,
      }));

      if (data.totalItems > 0) {
        book.setTotalBooks(data.totalItems);
        book.setBooks(loadedBooks);
        book.setSearchValue(title);
        book.setNumberOfBooks(book.numberOfBooks + 30);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    book.setCurrentPage(window.location.pathname);
  });

  React.useEffect(() => {
    if (book.searchValue && book.currentPage === '/') {
      (async function onRefreshBooks() {
        await handleSearchBook(book.searchValue);
      })();
    }
  }, [book.category, book.sorting]);

  return (
    <div className={styles.header}>
      <div className={styles.main}>
        <h1 className={styles.title}>Search for books</h1>
        <Input
          value={value}
          setValue={(e: React.FormEvent<HTMLInputElement>) =>
            setValue((e.target as HTMLInputElement).value)
          }
          handleSearchBook={handleSearchBook}
        />
        <div className={styles.filters}>
          <Select {...categories} />
          <Select {...sorting} />
        </div>
      </div>
      <div className={styles.bg}></div>
    </div>
  );
});

export default Header;

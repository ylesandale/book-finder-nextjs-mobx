// modules
import React from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import Link from 'next/link';

// components
import BookCard from '../../BookCard';

// store
import book from '../../../lib/store/store';

// img
import unknown from '../../../img/unknown.svg';

// api
import { onSearchBooks } from '../../../lib/api';

// styles
import styles from './Content.module.css';

const Content = observer(() => {
  const handleLoadMore = async () => {
    const { data } = await onSearchBooks(
      book.searchValue,
      book.numberOfBooks,
      book.sorting,
      book.category
    );
    const loadedBooks = data.items.map((item: any) => ({
      id: item.id,
      info: item.volumeInfo,
    }));
    book.setBooks(book.books.concat(loadedBooks));
    book.setNumberOfBooks(book.numberOfBooks + 30);
  };

  React.useEffect(() => {
    console.log(toJS(book.books));
  }, [book.books]);

  return (
    <div className={styles.content}>
      <h4>Found {book.totalBooks} results</h4>
      <div className={styles.books}>
        {book.books.map((item: any, index: number) => (
          <Link href={`/book/${item.id}`} key={item.id + index} passHref>
            <a>
              <BookCard
                authors={item.info && item.info.authors ? item.info.authors : ['']}
                categories={item.info && item.info.categories ? item.info.categories : ['']}
                title={item.info && item.info.title ? item.info.title : ''}
                cover={
                  item.info && item.info.imageLinks ? item.info.imageLinks.smallThumbnail : unknown
                }
              />
            </a>
          </Link>
        ))}
      </div>
      {book.books.length > 1 && book.totalBooks !== book.books.length && (
        <div className={styles.button}>
          <button onClick={handleLoadMore} type="button">
            Load more
          </button>
        </div>
      )}
    </div>
  );
});

export default Content;

// modules
import React from 'react';
import Image from 'next/image';
import { GetServerSideProps } from 'next';

// components
import { Header } from '../../components/layouts';

// api
import { onGetBook } from '../../lib/api';

// styles
import s from '../../styles/Home.module.css';
import styles from './Book.module.css';

// img
import unknown from '../../img/unknown.svg';

interface BookProps {
  currentBook: any;
}

const Book: React.FC<BookProps> = ({ currentBook }: BookProps): React.ReactElement => {
  return (
    <div className={s.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.cover}>
          <Image
            width={300}
            height={400}
            src={currentBook.imageLinks ? currentBook.imageLinks.thumbnail : unknown}
            alt="Book cover"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.categoriesBlock}>
            {currentBook.categories
              ? currentBook.categories.map((item: string, index: number) => (
                  <p key={index + 1} className={styles.category}>
                    {item}
                  </p>
                ))
              : ''}
          </div>
          <h3 className={styles.title}>{currentBook.title}</h3>
          {currentBook.authors
            ? currentBook.authors.map((item: string, index: number) => (
                <p key={index + 1} className={styles.author}>
                  {item}
                  {index + 1 !== currentBook.authors.length ? ',' : null}
                </p>
              ))
            : ''}
          <div className={styles.description}>
            <p>{currentBook.description ? currentBook.description : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { data } = await onGetBook(params.id);
  return {
    props: {
      currentBook: data.volumeInfo,
    },
  };
};

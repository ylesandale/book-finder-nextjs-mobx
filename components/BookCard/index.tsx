// modules
import React from 'react';
import Image from 'next/image';

// styles
import styles from './BookCard.module.css';

interface BookCardProps {
  title: string;
  cover: string;
  categories: string[];
  authors: string[];
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  cover,
  categories,
  authors,
}: BookCardProps): React.ReactElement => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <Image height={200} width={130} src={cover} alt="BookCover" />
      </div>
      <p className={styles.category}>{categories[0]}</p>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.authors}>
        {authors.slice(0, 2).map((item, index) => (
          <p key={item} className={styles.author}>
            {item}
            {index + 1 !== authors.length ? ',' : null}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BookCard;

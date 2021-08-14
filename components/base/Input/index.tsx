// modules
import React from 'react';

// styles
import styles from './Input.module.css';

interface InputProps {
  value: string;
  setValue(e: React.FormEvent<HTMLInputElement>): void;
  handleSearchBook(title: string): void;
}

const Input: React.FC<InputProps> = ({
  value,
  setValue,
  handleSearchBook,
}: InputProps): React.ReactElement => {
  return (
    <div className={styles.input}>
      <input value={value} onChange={setValue} placeholder="Name of the book" type="text" />
      <button onClick={() => handleSearchBook(value)} type="submit" className={styles.button}>
        Найти
      </button>
    </div>
  );
};

export default Input;

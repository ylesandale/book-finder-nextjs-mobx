// modules
import React from 'react';

// styles
import styles from './Select.module.css';

interface SelectProps {
  title: string;
  options: string[];
  value: string;
  onChange(value: string): void;
}

const Select: React.FC<SelectProps> = ({
  title,
  options,
  value,
  onChange,
}: SelectProps): React.ReactElement => {
  return (
    <div className={styles.select}>
      <p>{title}</p>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((item, index) => (
          <option value={item} key={index + 1}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;

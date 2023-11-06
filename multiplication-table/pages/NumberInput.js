import React, { useState } from 'react';
import styles from '../styles/MultiplicationTable.module.css';

const NumberInput = ({ onSubmit }) => {
  const [number, setNumber] = useState(1);

  const handleNumberChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumber(value); 
  };
  

  const handleSubmit = () => {
    onSubmit(number);
  };

  return (
    <div className={styles.inputlabel}>
      <input className={styles.inputNumber}
        type="number"
        id="numberInput"
        value={number}
        onChange={handleNumberChange}
      />
      <button onClick={handleSubmit} className={styles.btn}>Submit</button>
    </div>
  );
};

export default NumberInput;

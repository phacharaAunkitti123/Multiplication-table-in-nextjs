import React, { useState } from 'react';
import NumberInput from './NumberInput';
import MultiplicationTable from './MultiplicationTable';
import styles from '../styles/MultiplicationTable.module.css'

const Home = () => {
  const [tableNumber, setTableNumber] = useState(1);

  const handleGenerateTable = (number) => {
    setTableNumber(number);
  };
  

  return (
    <div>
      <h1 className={styles.heading}>Phachara Multiplication Table</h1>
      <NumberInput onSubmit={handleGenerateTable} />
      <MultiplicationTable number={tableNumber} />
    </div>
  );
};

export default Home;

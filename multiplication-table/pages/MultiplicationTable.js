import React from 'react';
import styles from '../styles/MultiplicationTable.module.css'

const MultiplicationTable = ({ number }) => {
  const rows = 12;

  const table = [];
  for (let i = 1; i <= rows; i++) {
    const result = `${number} x ${i} = ${number * i}`;
    table.push(<p key={i}>{result}</p>);
  }

  return (
    <div>
      <h2 className={styles.numberTable}>Multiplication Table for {number}</h2>
      <section className={styles.table} >{table}</section>
    </div>
  );
};

export default MultiplicationTable;

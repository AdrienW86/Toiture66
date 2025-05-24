import React from 'react';
import styles from './email.module.css';

export default function EmailButton() {
  return (
    <a href="mailto:toiture66000@gmail.com" className={styles.link}>
      <p>✉️ toiture66000@gmail.com</p>
    </a>
  );
}
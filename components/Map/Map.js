'use client';

import React from 'react';
import styles from './map.module.css';

export default function GoogleMap() {
  const address = {
    name: "Toiture 66",
    email: "toiture66@gmail.com",
    phone: "07 57 51 64 14",
    fullAddress: "Perpignan et alentours",
  };

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.addressDetails}>
        <h2 className={styles.name}>{address.name}</h2>
        <p className={styles.span}>
          <strong 
          >Zone d'intervention :</strong> {address.fullAddress}
        </p>
        <p className={styles.span}>
          <strong>Téléphone :</strong> {address.phone}
        </p>
        <p className={styles.span}>
          <strong>Email :</strong> {address.email}
        </p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186295.02789860705!2d2.8685391435457595!3d43.14947303712503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1ab414900fb89%3A0x4078821166d23a0!2s11100%20Narbonne!5e0!3m2!1sfr!2sfr!4v1746358348656!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>     
    </div>
  );
}
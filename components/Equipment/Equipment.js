import React from 'react'
import styles from "./equipment.module.css"

export default function Equipment() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}> Votre expert toiture</h1>
        <div className={styles.column}>
          Chez <span className={styles.span}> Toiture 66</span>, nous offrons 
          des services complets de rénovation de toiture, y compris nettoyage, traitement 
          hydrofuge, recherche de fuites et bien plus pour votre confort et sécurité.
        </div>
    </section>
  )
}

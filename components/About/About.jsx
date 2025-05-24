import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Qui sommes-nous ?</h1>
        <p className={styles.intro}>
          Toiture 66 est une entreprise artisanale spécialisée dans la couverture, la rénovation et l’entretien de toitures dans les Pyrénées-Orientales. Notre équipe d’artisans couvreurs passionnés met tout son savoir-faire au service de vos projets pour garantir qualité, fiabilité et durabilité.
        </p>

        <h2 className={styles.h2}>Une entreprise locale à votre écoute</h2>
        <p className={styles.p}>
          Chez Toiture 66, chaque projet de toiture est unique. Nous proposons un accompagnement personnalisé, adapté à vos besoins et à votre budget. Particuliers et professionnels bénéficient de solutions sur mesure, esthétiques et performantes, pour une toiture durable et bien protégée.
        </p>

        <h2 className={styles.h2}>Des artisans couvreurs qualifiés et expérimentés</h2>
        <p className={styles.p}>
          Notre équipe est composée d’artisans couvreurs expérimentés, formés aux techniques modernes de couverture et rénovation. Nous sélectionnons rigoureusement des matériaux de qualité pour garantir à votre toiture robustesse, étanchéité et longévité.
        </p>

        <h2 className={styles.h2}>Qualité, respect des délais et satisfaction client</h2>
        <p className={styles.p}>
          De la prise de contact à la réception des travaux, Toiture 66 s’engage à respecter les délais, assurer la propreté du chantier et garantir votre entière satisfaction. Tous nos travaux sont couverts par une garantie décennale, preuve de notre sérieux et professionnalisme.
        </p>

        <p className={styles.intro}>
          Faites confiance à Toiture 66, votre expert en couverture et rénovation de toiture dans les Pyrénées-Orientales, pour des travaux réalisés dans les règles de l’art et en toute tranquillité.
        </p>
    </section>
  )
}

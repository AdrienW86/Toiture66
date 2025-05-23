import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> Qui sommes-nous ? </h1>
            <p className={styles.intro}> Narbonne Toiture, c’est une équipe d’artisans passionnés, entièrement dédiés à vos projets de couverture et de rénovation. Fondée sur des valeurs fortes telles que la fiabilité, la qualité et l’engagement, notre entreprise est aujourd'hui reconnue pour son sérieux dans le domaine de la toiture. </p>

        <h2 className={styles.h2}> Une entreprise à taille humaine, proche de vos attentes </h2>
            <p className={styles.p}> Chez Narbonne Toiture, chaque projet est unique. Nous privilégions un accompagnement sur mesure, basé sur l'écoute attentive de vos besoins. Que vous soyez un particulier ou un professionnel, notre objectif est de vous apporter des solutions durables, esthétiques et adaptées à votre budget. </p>

        <h2 className={styles.h2}> Des couvreurs expérimentés, un véritable savoir-faire </h2>
            <p className={styles.p}> Notre équipe se compose d'artisans qualifiés, passionnés par leur métier et régulièrement formés aux dernières techniques. Nous sélectionnons rigoureusement nos matériaux afin de garantir à votre toiture robustesse, esthétisme et longévité. </p>

        <h2 className={styles.h2}> L'exigence de qualité au cœur de notre métier </h2>
            <p className={styles.p}> De votre premier contact jusqu’à la réception du chantier, nous nous engageons à respecter les délais, assurer la propreté du chantier et garantir votre entière satisfaction. Toutes nos réalisations sont couvertes par notre garantie décennale, preuve de notre sérieux et de notre professionnalisme. </p>

        <p className={styles.intro}>Narbonne Toiture, c’est bien plus qu’une entreprise de couverture : c’est votre partenaire de confiance pour des travaux réalisés en toute tranquillité.</p>
    </section>
  )
}
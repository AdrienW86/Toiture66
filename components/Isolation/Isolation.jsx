import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Isolation() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Isolation des combles professionnelle avec Toiture 66 dans les Pyrénées-Orientales
      </h1>

      <p className={styles.intro}>
        Toiture 66 est votre spécialiste de l’isolation des combles à Perpignan et dans tout le département des Pyrénées-Orientales (66). Nous vous aidons à améliorer le confort thermique de votre habitation tout en réduisant vos dépenses énergétiques grâce à des solutions d’isolation performantes et durables.
      </p>

      <SectionImage
        src="/image7.png"
        alt="Isolation des combles à Perpignan dans les Pyrénées-Orientales"
      />

      <h2 className={styles.h2}>1. Diagnostic thermique complet de vos combles</h2>
      <p className={styles.p}>
        Nos experts réalisent un audit thermique précis pour évaluer les déperditions de chaleur et identifier les zones à isoler. Ce diagnostic personnalisé permet de choisir la meilleure méthode d’isolation adaptée à votre logement et à votre budget.
      </p>

      <h2 className={styles.h2}>2. Choix des matériaux isolants performants et écologiques</h2>
      <p className={styles.p}>
        Nous utilisons des isolants thermiques de haute qualité (laine de verre, laine de roche, ouate de cellulose, etc.) respectueux de l’environnement. Ces matériaux assurent une isolation efficace contre le froid en hiver et la chaleur en été.
      </p>

      <h2 className={styles.h2}>3. Pose professionnelle et respect des normes</h2>
      <p className={styles.p}>
        Notre équipe d’artisans couvreurs intervient avec soin et précision pour garantir une pose conforme aux normes en vigueur (RT 2020, etc.). L’isolation des combles est réalisée dans les règles de l’art pour maximiser les économies d’énergie.
      </p>

      <h2 className={styles.h2}>4. Amélioration du confort et réduction des factures énergétiques</h2>
      <p className={styles.p}>
        Une bonne isolation des combles contribue à améliorer la qualité de vie dans votre maison en limitant les variations de température. Vous bénéficiez également d’une réduction significative de votre consommation énergétique et de vos factures de chauffage.
      </p>

      <p className={styles.intro}>
        Faites confiance à Toiture 66 pour l’isolation de vos combles dans les Pyrénées-Orientales. Contactez-nous dès aujourd’hui pour un devis gratuit et profitez d’un habitat plus confortable et économique.
      </p>
    </section>
  )
}


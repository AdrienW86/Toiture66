import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Reparation() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Réparation de toiture professionnelle avec Toiture 66 dans les Pyrénées-Orientales
      </h1>

      <p className={styles.intro}>
        Toiture 66 est votre expert en réparation de toiture à Perpignan et dans tout le département des Pyrénées-Orientales (66). Notre équipe d’artisans couvreurs qualifiés intervient rapidement pour réparer tous types de dégâts afin de préserver l’étanchéité, la solidité et l’esthétique de votre toiture.
      </p>

      <SectionImage
        src="/image2.png"
        alt="Réparation de toiture à Perpignan dans les Pyrénées-Orientales"
      />

      <h2 className={styles.h2}>1. Diagnostic précis des dommages de votre toiture</h2>
      <p className={styles.p}>
        Nous réalisons une inspection complète pour identifier les problèmes : tuiles cassées ou déplacées, infiltrations d’eau, fissures, ou encore problèmes de zinguerie. Ce diagnostic nous permet de vous proposer des solutions adaptées et durables.
      </p>

      <h2 className={styles.h2}>2. Réparation rapide et efficace des éléments défectueux</h2>
      <p className={styles.p}>
        Qu’il s’agisse de remplacer des tuiles, réparer des fuites ou remettre en état les éléments de zinguerie (gouttières, chéneaux), notre équipe intervient avec rigueur pour restaurer l’intégrité de votre toiture dans les meilleurs délais.
      </p>

      <h2 className={styles.h2}>3. Prévention des dégâts futurs grâce à un entretien adapté</h2>
      <p className={styles.p}>
        Toiture 66 vous conseille également sur les meilleures pratiques d’entretien et vous propose des contrats de maintenance pour éviter la réapparition des problèmes et prolonger la durée de vie de votre toiture.
      </p>

      <h2 className={styles.h2}>4. Garantie de qualité et conformité aux normes</h2>
      <p className={styles.p}>
        Toutes nos réparations sont réalisées dans le respect des normes de construction et d’étanchéité, avec des matériaux de qualité professionnelle. Votre satisfaction et la durabilité de votre toiture sont nos priorités.
      </p>

      <p className={styles.intro}>
        Faites confiance à Toiture 66 pour la réparation de votre toiture dans les Pyrénées-Orientales. Contactez-nous dès maintenant pour un devis gratuit et redonnez à votre toiture toute sa solidité et sa protection.
      </p>
    </section>
  )
}

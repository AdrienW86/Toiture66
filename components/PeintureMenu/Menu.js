import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Travaux de couverture : les étapes clés d’un chantier réussi avec Toiture 66
      </h1>

      <p className={styles.intro}>
        Toiture 66 est votre expert en couverture dans les Pyrénées-Orientales. De la rénovation complète à la pose de toiture neuve, chaque projet est mené avec précision, savoir-faire et exigence. Découvrez les étapes de notre méthode de travail, gage de qualité et de durabilité.
      </p>

      <SectionImage
        src="/image2.png"
        alt="Inspection technique de toiture à Perpignan"
      />

      <h2 className={styles.h2}>1. Analyse de votre toiture et diagnostic personnalisé</h2>
      <p className={styles.p}>
        Lors d’un premier rendez-vous, nos couvreurs inspectent votre toiture : état général, étanchéité, matériaux existants, ventilation, isolation. Vous recevez ensuite un devis gratuit et détaillé, adapté à vos besoins et à votre budget.
      </p>

      <h2 className={styles.h2}>2. Préparation du chantier et sécurisation</h2>
      <ul className={styles.ul}>
        Avant d’intervenir, nos équipes préparent minutieusement la zone :
      </ul>
      <li className={styles.li}>Installation d’échafaudages et lignes de vie pour un chantier sécurisé.</li>
      <li className={styles.li}>Protection des abords de votre habitation (façade, jardin, terrasse).</li>
      <li className={styles.li}>Dépose éventuelle de l’ancienne toiture dans le respect des normes environnementales.</li>
      <li className={styles.li}>Contrôle de la charpente et des supports avant la pose de la nouvelle couverture.</li>

      <h2 className={styles.h2}>3. Réalisation des travaux de couverture</h2>
      <p className={styles.p}>
        En fonction de votre projet, nous posons tuiles, ardoises, bac acier ou zinc avec une précision artisanale. L’étanchéité est assurée à chaque étape pour protéger durablement votre habitat.
      </p>

      <h2 className={styles.h2}>4. Finitions, zinguerie et habillage</h2>
      <p className={styles.p}>
        Nous apportons un soin particulier aux finitions : faîtage, rives, noues, gouttières en zinc ou PVC, habillage des débords de toit. Ces éléments garantissent l’esthétique et la longévité de votre toiture.
      </p>

      <h2 className={styles.h2}>5. Nettoyage du chantier et réception des travaux</h2>
      <p className={styles.p}>
        Une fois la couverture terminée, nous nettoyons l’ensemble de la zone, retirons les protections et vérifions chaque détail. La réception du chantier s’effectue en votre présence pour garantir votre satisfaction.
      </p>

      <p className={styles.intro}>
        Faire appel à Toiture 66, c’est choisir un couvreur professionnel, réactif et rigoureux. Contactez-nous pour un devis gratuit et redonnez à votre toiture toute sa performance.
      </p>
    </section>
  )
}

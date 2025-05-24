import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Remplacement() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Remplacement de toiture professionnel avec Toiture 66 dans les Pyrénées-Orientales
      </h1>

      <p className={styles.intro}>
        Toiture 66 est votre spécialiste du remplacement de toiture à Perpignan et dans tout le département des Pyrénées-Orientales (66). Nous intervenons pour remplacer votre toiture vieillissante ou endommagée afin de garantir la protection, l’isolation et l’esthétique de votre habitation.
      </p>

      <SectionImage
        src="/image18.png"
        alt="Remplacement de toiture à Perpignan dans les Pyrénées-Orientales"
      />

      <h2 className={styles.h2}>1. Diagnostic complet et évaluation de l’état de votre toiture</h2>
      <p className={styles.p}>
        Nos artisans couvreurs effectuent une inspection détaillée pour évaluer l’état de votre toiture et déterminer si un remplacement complet est nécessaire. Ce diagnostic personnalisé nous permet de vous proposer un devis précis et adapté.
      </p>

      <h2 className={styles.h2}>2. Dépose et évacuation de l’ancienne toiture</h2>
      <p className={styles.p}>
        Nous procédons au retrait soigneux de l’ancienne couverture en respectant les normes environnementales et de sécurité. L’évacuation des déchets est organisée de manière professionnelle pour préserver votre environnement.
      </p>

      <h2 className={styles.h2}>3. Pose d’une nouvelle toiture durable et performante</h2>
      <p className={styles.p}>
        Toiture 66 installe votre nouvelle toiture avec des matériaux de qualité adaptés à votre habitat : tuiles, ardoises, zinc, bac acier… Chaque étape est réalisée avec soin pour assurer étanchéité, isolation et esthétisme.
      </p>

      <h2 className={styles.h2}>4. Finitions et contrôle qualité rigoureux</h2>
      <p className={styles.p}>
        Nous soignons les finitions (zinguerie, faîtage, gouttières) et effectuons un contrôle complet avant la réception du chantier. Votre satisfaction est notre priorité, ainsi que la durabilité de votre toiture.
      </p>

      <p className={styles.intro}>
        Confiez le remplacement de votre toiture à Toiture 66, votre expert local dans les Pyrénées-Orientales. Contactez-nous dès aujourd’hui pour un devis gratuit et redonnez à votre maison toute sa protection et son confort.
      </p>
    </section>
  )
}

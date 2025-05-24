import React from 'react'
import SectionImage from '../SectionImage/SectionImage'
import styles from './menu.module.css'

export default function Demoussage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Démoussage de toiture professionnel avec Toiture 66 dans les Pyrénées-Orientales
      </h1>

      <p className={styles.intro}>
        Toiture 66 est votre spécialiste du démoussage de toiture à Perpignan et dans tout le département des Pyrénées-Orientales (66). Notre équipe d’artisans couvreurs qualifiés intervient pour nettoyer, traiter et protéger votre toiture afin d’assurer sa durabilité et son étanchéité.
      </p>

      <SectionImage
        src="/image16.png"
        alt="Démoussage et nettoyage de toiture à Perpignan"
      />

      <h2 className={styles.h2}>1. Inspection complète et diagnostic personnalisé</h2>
      <p className={styles.p}>
        Nous commençons par une inspection minutieuse de votre toiture pour identifier la présence de mousses, lichens, algues et autres salissures. Ce diagnostic nous permet de vous proposer un traitement de démoussage adapté à votre type de toiture et à son état.
      </p>

      <h2 className={styles.h2}>2. Nettoyage en profondeur de votre toiture</h2>
      <p className={styles.p}>
        À l’aide de techniques professionnelles et de produits écologiques, nous nettoyons votre toiture pour éliminer toutes les impuretés et micro-organismes. Ce nettoyage soigneux contribue à restaurer l’aspect esthétique de votre toiture tout en préparant la surface au traitement.
      </p>

      <h2 className={styles.h2}>3. Traitement anti-mousse et protection hydrofuge</h2>
      <p className={styles.p}>
        Après le nettoyage, nous appliquons un traitement anti-mousse fongicide efficace qui prévient la réapparition des mousses et algues. Nous complétons par un traitement hydrofuge qui protège votre toiture contre l’humidité, les intempéries et le vieillissement prématuré.
      </p>

      <h2 className={styles.h2}>4. Entretien et suivi pour une toiture durable</h2>
      <p className={styles.p}>
        Toiture 66 vous conseille sur l’entretien régulier de votre toiture pour prolonger sa durée de vie et maintenir ses performances. Nous proposons également des contrats d’entretien adaptés à vos besoins.
      </p>

      <p className={styles.intro}>
        Faites confiance à Toiture 66 pour un démoussage de toiture efficace et un service de qualité dans les Pyrénées-Orientales. Contactez-nous dès aujourd’hui pour un devis gratuit et redonnez à votre toiture toute sa solidité et sa beauté.
      </p>
    </section>
  )
}

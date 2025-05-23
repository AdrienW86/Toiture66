'use client';

import React from 'react';
import Image from 'next/image';
import styles from './description.module.css';

export default function Description() {
 
  return (    
      <section className={styles.description}>
        <div className={styles.box}>
          <h2 className={styles.h2}>
            Services de Rénovation
          </h2>
          <p className={styles.intro}> 
            Nous offrons des services complets pour la rénovation de 
            toiture et l'entretien de votre maison.
          </p>
        </div>
        <section className={styles.localisation}>
          <div className={styles.card}>
            <Image          
              src="/image10.avif"
              alt="un ouvrier en train de travailler sur un toit"
              width={320}
              height={250}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.cardTxt}>
            <h3 className={styles.h3}> Nettoyage de Toiture</h3>
            <p className={styles.pCard}> Service professionnel pour nettoyer et entretenir votre toiture efficacement et durablement. </p>
            </div>
          </div>       
          <div className={styles.card}>
            <Image          
              src="/image17.avif"
              alt="toiture"
              width={320}
              height={250}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.cardTxt}>
            <h3 className={styles.h3}> Isolation des Combles </h3>
            <p className={styles.pCard}>
            Améliorez votre confort avec notre service d'isolation des combles pour une meilleure efficacité énergétique. </p>
            </div>
          </div>       
          <div className={styles.card}>
            <Image          
              src="/image12.avif"
              alt="chantier en cours"
              width={320}
              height={250}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.cardTxt}>
            <h3 className={styles.h3}> Protection durable toiture</h3>
            <p className={styles.pCard}> Traitement hydrofuge et anti-mousse pour une protection durable et un aspect impeccable de votre toiture.</p>
            </div>
          </div>       
        </section>
      </section>
  );
}
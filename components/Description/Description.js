import Card from '@/components/Card/Card';
import cardsData from '../Card/data';
import styles from './description.module.css';

export default function Description() {
 
  return (    
      <section className={styles.description}>
        <div className={styles.box}>
          <h2 className={styles.h2}>
            Services de Rénovation
          </h2>
          <p className={styles.intro}> 
            Nous proposons des services complets de rénovation de toiture, 
            d’entretien de couverture et d’amélioration de l’habitat pour garantir 
            la durabilité et le confort de votre maison.
          </p>
        </div>
        <section className={styles.localisation}>
            {cardsData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          imageAlt={card.imageAlt}
          title={card.title}
          description={card.description}
        />
      ))}
        </section>
      </section>
  );
}
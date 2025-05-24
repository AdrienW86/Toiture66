import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import styles from '../page.module.css'

export const metadata = {
  title: 'Contactez Toiture 66 - Couvreur à Perpignan',
  description: 'Besoin d’un devis ou d’un renseignement ? Contactez Toiture 66, artisan couvreur à Perpignan, pour tous vos projets de toiture dans les Pyrénées-Orientales.',
};

export default function Contact() {
  return (
    <main className={styles.container}>      
      <section className={styles.background}>
        <h2 className={styles.h2}>  Nous contacter </h2> 
          <Map />         
        </section>
        <section className={styles.background2}>
          <Form />
        </section>     
    </main>
  )
}
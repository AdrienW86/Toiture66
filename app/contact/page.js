import Header from '@/components/Header/Header'
import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import Footer from '@/components/Footer/Footer'
import styles from '../page.module.css'


export default function Contact() {
  return (
    <main className={styles.container}>
      <Header />
      
         <section className={styles.background}>
           <h2 className={styles.h2}>  Nous contacter </h2> 
          <Map />
          
        </section>
        <section className={styles.background2}>
          <Form />
        </section>
       
       
       
      <Footer />    
    </main>
  )
}
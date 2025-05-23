import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import styles from '@/app/page.module.css'

export default function page() {
  return (
     <main className={styles.main}>
      <Header />
      <Banner />
      <About />
      <Footer />     
    </main>
  )
}
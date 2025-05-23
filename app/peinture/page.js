import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import PeintureMenu from '@/components/PeintureMenu/Menu'
import Footer from '@/components/Footer/Footer'
import styles from '@/app/page.module.css'

export default function page() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <PeintureMenu />
      <Footer />     
    </main>
  )
}

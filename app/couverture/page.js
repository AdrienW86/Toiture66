import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import Footer from '@/components/Footer/Footer'
import styles from '@/app/page.module.css'

export default function page() {
  return (
   <main className={styles.main}>
      <Header />
      <Banner />
      <Menu />
      <Footer />     
    </main>
  )
}

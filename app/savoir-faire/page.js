import Banner from '@/components/Banner/Banner'
import About from '@/components/About/About'
import styles from '@/app/page.module.css'

export default function page() {
  return (
     <main className={styles.main}>
      <Banner />
      <About />
    </main>
  )
}
import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import styles from '@/app/page.module.css'

export default function page() {
  return (
   <main className={styles.main}>
      <Banner />
      <Menu />    
    </main>
  )
}

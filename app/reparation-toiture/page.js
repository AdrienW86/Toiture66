import Banner from '@/components/Banner/Banner'
import Reparation from '@/components/Reparation/Reparation'
import styles from '@/app/page.module.css'

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Reparation /> 
    </main>
  )
}
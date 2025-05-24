import Banner from '@/components/Banner/Banner'
import Remplacement from '@/components/Remplacement/Remplacement'
import styles from '@/app/page.module.css'

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Remplacement /> 
    </main>
  )
}

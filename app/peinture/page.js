import Banner from '@/components/Banner/Banner'
import PeintureMenu from '@/components/PeintureMenu/Menu'
import styles from '@/app/page.module.css'

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <PeintureMenu /> 
    </main>
  )
}

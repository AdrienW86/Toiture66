import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Couverture/Couverture'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Pose de toiture neuve à Perpignan - Couvreurs Toiture 66',
  description: 'Toiture 66 réalise la pose de toitures neuves à Perpignan. Solutions sur mesure pour maisons neuves ou extensions dans les Pyrénées-Orientales.',
};

export default function page() {
  return (
   <main className={styles.main}>
      <Banner />
      <Menu />    
    </main>
  )
}

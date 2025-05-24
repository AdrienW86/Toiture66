import Banner from '@/components/Banner/Banner'
import Remplacement from '@/components/Remplacement/Remplacement'
import styles from '@/app/page.module.css'

export const metadata = {
  title: 'Remplacement de toiture à Perpignan - Toiture 66',
  description: 'Votre toiture est trop endommagée ? Faites appel à Toiture 66 pour un remplacement complet de couverture à Perpignan et dans le 66.',
};

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Remplacement /> 
    </main>
  )
}

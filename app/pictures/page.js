import Gallery from '@/components/Gallery/Gallery'
import styles from '../page.module.css'

export const metadata = {
  title: 'Galerie de réalisations - Toiture 66 à Perpignan',
  description: 'Découvrez les chantiers réalisés par Toiture 66 à Perpignan : nettoyage, rénovation, pose de toitures dans les Pyrénées-Orientales.',
};

export default function Pictures() {
  return (
    <main className={styles.main}>
      <Gallery />     
    </main>
  )
}

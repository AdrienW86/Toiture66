import Head from 'next/head'
import Banner from '@/components/Banner/Banner'
import Mousse from '@/components/Mousse/Mousse'
import styles from '@/app/page.module.css'

export default function page() {
  return (
    <main className={styles.main}>   
     <Head>
        <title>Démoussage de toiture professionnel avec Toiture 66 - Pyrénées-Orientales</title>
        <meta 
          name="description" 
          content="Toiture 66 à Perpignan vous propose un démoussage de toiture professionnel pour éliminer mousses, lichens et algues. Nettoyage et traitement anti-mousse efficaces dans les Pyrénées-Orientales."
        />
      </Head>
      <Banner />
      <Mousse /> 
    </main>
  )
}

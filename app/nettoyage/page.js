import Head from 'next/head'
import Banner from '@/components/Banner/Banner'
import Nettoyage from '@/components/Nettoyage/Nettoyage'
import styles from '@/app/page.module.css'

export default function page() {
  return (
    <main className={styles.main}>   
      <Banner />
      <Nettoyage /> 
    </main>
  )
}

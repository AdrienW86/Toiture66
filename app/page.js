import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Description from '@/components/Description/Description'
import PhoneButton from '@/components/PhoneButton/PhoneButton'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Equipment />
      <Description />
      <PhoneButton />  
    </main>
  )
}

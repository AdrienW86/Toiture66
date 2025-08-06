import React from 'react'
import styles from './phone.module.css'

export default function PhoneButton() {
  return (
       <a href="tel:+33743260451" className={styles.link}>
          <p> 📞 07.43.26.04.51</p>                        
        </a>
  )
}

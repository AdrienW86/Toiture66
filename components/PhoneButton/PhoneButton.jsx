import React from 'react'
import styles from './phone.module.css'

export default function PhoneButton() {
  return (
       <a href="tel:+33757516414" className={styles.link}>
          <p> 📞 07.57.51.64.14</p>                        
        </a>
  )
}

import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo-black.svg'
import styles from '../page.module.css'

 const Footer = () => {
  return (
   <footer className={styles.footer}>
    <div>
        <a href='https://code-v.fr'>
            <Image 
                src={Logo} 
                alt= "logo Codev"
                width={220}
                height={110}
                className={styles.footer_logo}
            />
        </a>
    </div>
    
   </footer>
  )
}
export default Footer
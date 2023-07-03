import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg'
import styles from '../page.module.css'

 const Nav = () => {
  return (
    <nav className={styles.nav}>
       <a href ="https://code-v.fr" className={styles.logo}>
        <Image 
          src={Logo} 
           height={200}  
           width={200}
           alt="logo codev"
           priority
        />
        </a>
    </nav>
  )
}

export default Nav
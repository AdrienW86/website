"use client"

import React, { useState } from 'react';

import Image from 'next/image'
import styles from './page.module.css'

 const Card = (props) => {

    const [hovered, setHovered] = useState(false);
   
    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };

  return (
    <section className={styles.card_container}>
        <h2 style={{color: props.color, fontFamily: props.font}}
            className={styles.title_card} 
        >
            {props.title} <span>-&gt;</span>
        </h2>
        <p
           className={styles.card_description}
           style={{ color: hovered ? props.color : null}}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}

        >
            {props.description}.
        </p>
         <a href={props.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image 
                src={props.image} 
                alt="description de l'image de couverture du site"
                width={295} 
                height={400} 
                className={styles.picture}
                priority
            />
        </a>
    </section>
  )
}
export default Card
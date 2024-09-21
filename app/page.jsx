"use client"

import React, { useState } from 'react'
import styles from './page.module.css'

export default function Component() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.sunflowerContainer}>
          <div className={styles.sunflower} onClick={toggleCard}>
            <div className={styles.head}>
              {[...Array(24)].map((_, index) => (
                <div key={index} className={styles.petal} style={{ transform: `rotate(${index * 15}deg)` }}></div>
              ))}
            </div>
            <div className={styles.center}></div>
          </div>
        </div>
        <div className={styles.stem}></div>
        <div className={styles.leaves}>
          <div className={styles.leaf}></div>
          <div className={styles.leaf}></div>
        </div>
        <div className={`${styles.card} ${isCardOpen ? styles.open : ''}`} style={{ overflowY: 'auto', maxHeight: '600px' }}>
          <h2>Feliz Día de las Flores Amarillas, mi amor</h2>
          <p>En este Día de las Flores Amarillas, quiero regalarte esta flor como símbolo de mi amor y esperanza.</p>
          <p>No es la flor más definida, pero es una flor hecha de todo corazón.</p>
          <p>Que esta flor ilumine tu día con su calidez y nos recuerde siempre la alegría y el amor que compartimos. Cada pétalo representa un momento especial que hemos vivido juntos y todos los que aún nos esperan.</p>
          <p>En cada detalle de esta flor, está reflejado el cariño y la dedicación que pongo en nuestra relación. Aunque no sea perfecta, es un reflejo de mi amor sincero y profundo por ti. Espero que esta flor te haga sonreír y te recuerde lo mucho que significas para mí.</p>
          <p>Quiero que sepas que cada día a tu lado es un regalo, y esta flor es solo una pequeña muestra de todo lo que siento por ti. Gracias por ser mi compañera, mi mejor amiga, mi amor, mi vida. Que esta flor amarilla sea un recordatorio de los hermosos momentos que hemos compartido y de todos los que aún están por venir.</p>
          <img src="https://th.bing.com/th/id/OIP.W9MfMoM5e58kmLDXJRIdHQHaHQ?rs=1&pid=ImgDetMain" alt="Flor Amarilla" />
        </div>
      </div>
    </main>
  )
}

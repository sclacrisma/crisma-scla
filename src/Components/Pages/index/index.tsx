import React from 'react'
import styles from "./index.module.css"
import jesus from './jesus.jpg'
import Image from 'next/image'

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <Image src={jesus} alt='Jesus' />
      </div>
      <h1>Crisma</h1>
    </main>
  )
}

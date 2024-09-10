import React from 'react'
import styles from './FaqPage.module.css'
import Perguntas from './Perguntas'

export default function FaqPage() {
  return (
    <main className={styles.main}>
      <Perguntas />
    </main>
  )
}

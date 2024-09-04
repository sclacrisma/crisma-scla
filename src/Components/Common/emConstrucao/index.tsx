import React from 'react'
import styles from './emConstrucao.module.css'
import Image from 'next/image'
import emConstrucaoGif from './emCOnstrucao.gif'

export default function EmConstrucao() {
  return (
    <main className={styles.main} >
      <Image
        src={emConstrucaoGif}
        alt='Placa de em construção'
        width="266"
        height="266"
      />
    </main>
  )
}

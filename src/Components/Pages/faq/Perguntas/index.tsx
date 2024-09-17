'use client'
import React from 'react'
import styles from './Perguntas.module.css'
import { Accordion } from 'react-bootstrap'
import { pergunta } from '@/infra/types/IPerguntas'
import Pergunta from './Pergunta/Pergunta'

interface IPerguntas {
  perguntas: pergunta[]
}

export default function Perguntas({ perguntas }: IPerguntas) {

  return (
    <div className={styles.perguntas} >
      <Accordion>
        {perguntas.map((pergunta, index) => {
          return (
            <Pergunta key={index} id={pergunta.id} titulo={pergunta.pergunta} texto={pergunta.resposta} />
          )
        })}
      </Accordion>
    </div>
  )
}

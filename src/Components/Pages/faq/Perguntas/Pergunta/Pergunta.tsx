import React from 'react'
import { Accordion } from 'react-bootstrap'
import styles from './Pergunta.module.css'

interface IPergunta {
  id: string,
  titulo: string,
  texto: string
}

export default function Pergunta({ id, titulo, texto }: IPergunta) {
  return (
    <Accordion.Item eventKey={id} >
      <Accordion.Header>{titulo} </Accordion.Header>
      <Accordion.Body>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: texto }}></div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

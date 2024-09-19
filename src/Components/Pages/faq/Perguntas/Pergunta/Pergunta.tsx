import React from 'react'
import { Accordion } from 'react-bootstrap'

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
        <div dangerouslySetInnerHTML={{ __html: texto }}></div>
      </Accordion.Body>
    </Accordion.Item>
  )
}

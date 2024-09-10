'use client'
import React from 'react'
import styles from './Perguntas.module.css'
import { Accordion } from 'react-bootstrap'

export default function Perguntas() {
  return (
    <div className={styles.perguntas} >
      <Accordion>
        <Accordion.Item eventKey='0'>
          <Accordion.Header> O que é Crisma? </Accordion.Header>
          <Accordion.Body>A Crisma é o sacramento que nos dá o Espírito Santo, imprime na alma o caráter de soldado de Jesus Cristo e faz-nos perfeitos cristãos.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header> Pergunta 2</Accordion.Header>
          <Accordion.Body>Resposta para a pergunta 2</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

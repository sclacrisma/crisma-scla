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
          <Accordion.Header> Quem pode ser padrinho/madrinha de Crisma? </Accordion.Header>
          <Accordion.Body>
            Para ser padrinho/madrinha de Crisma, a pessoa deve:

            - Ser católica

            - Ter recebido os sacramentos do Batismo, Crisma e Eucaristia

            - Ter no mínimo 16 anos

            - Viver de acordo com a fé da Igreja Católica

            - Ir à Missa aos domingos e dias santos

            - Confessar-se com frequência
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

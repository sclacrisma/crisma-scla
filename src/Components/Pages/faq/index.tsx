import React from 'react'
import styles from './FaqPage.module.css'
import Perguntas from './Perguntas'
import { cmsService } from '@/infra/cms/cmsService'

export const revalidate = 0;

const query = `
query { allPerguntaFrequentes { id pergunta resposta } } `
export default async function FaqPage() {
  const dados = await cmsService({ query, preview: false }).then(data => data)
  const perguntas = dados.allPerguntaFrequentes
  const allPerguntaFrequentes = {
    allPerguntaFrequentes: perguntas
  }
  return (
    <main className={styles.main}>
      <Perguntas perguntas={perguntas} />

    </main>
  )
}

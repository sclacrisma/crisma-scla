import React from 'react'
import styles from './FaqPage.module.css'
import Perguntas from './Perguntas'
import { cmsService } from '@/infra/cms/cmsService'
import IPerguntas from '@/infra/types/IPerguntas'


const query = `
query { allPerguntaFrequentes { id pergunta resposta } } `
export default async function FaqPage() {
  const dados = await cmsService<IPerguntas>({ query, tag: "faq", preview: false }).then(data => data)
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

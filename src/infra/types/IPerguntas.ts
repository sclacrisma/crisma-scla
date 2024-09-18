
export interface pergunta {
  id: string,
  pergunta: string,
  resposta:string
}


export default interface IPerguntas {
  allPerguntaFrequentes: Array<pergunta>
}

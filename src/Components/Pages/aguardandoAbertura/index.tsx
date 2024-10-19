import { cmsService } from '@/infra/cms/cmsService'
import styles from './AguardandoAbertura.module.css'
import IDatas from '@/infra/types/IDatas'

export const revalidate = 3600

const query = `
query { dataImportante{ id inicioDasInscriOes fimDasInscriEs inicioDaCrisma fimDaCrisma } } `

export default async function AguardandoAbertura() {
  const datas = await cmsService<IDatas>({ query, tag: "datas", preview: false, revalidate: 3600 })
  const abertura = new Date(`${datas.dataImportante.inicioDasInscriOes} 00:00:00  GMT-0300`)
  const today = new Date()
  const diferencaEmMs = abertura.getTime() - today.getTime();
  const diferencaEmDias = Math.ceil(diferencaEmMs / (1000 * 60 * 60 * 24));
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.anuncio} >As incrições <br /> abrem em:</h2>
        <div className={styles.mostrador}>
          <p className={styles.numero}>{diferencaEmDias}</p>
          <hr className={styles.separador} />
          <p className={styles.texto}>dias</p>
        </div>
      </div>

    </main>
  )
}

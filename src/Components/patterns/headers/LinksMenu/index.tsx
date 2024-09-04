'use client'

import Link from 'next/link'
import styles from './LinksMenu.module.css'
import { usePathname } from 'next/navigation'

export default function LinksMenu() {
  const menus = [
    { name: "Home", path: '/' },
    { name: "Inscrição", path: '/inscricao' },
    { name: "Perguntas frequentes", path: '/faq' },
    { name: "Galeria", path: '/galeria' }
  ]
  const path = usePathname()

  return (
    menus.map((menu, index) => {
      return (
        <li key={index} className={path.split("/")[1] === menu.path.split("/")[1] ? styles.active : styles.linkBox}>
          <Link href={menu.path} className={`${styles.link}`}>
            {/* <p className={styles.index}>0{index}</p> */}
            <p>{menu.name}</p>
          </Link>
        </li>
      )
    })
  )
}
'use client'

import { useState } from 'react'
import styles from './DropdownMenu.module.css'
import LinksMenu from '../LinksMenu'
import Image from 'next/image'

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.dropdownMenu}>
      <Image
        alt={`${isOpen ? "fechar menu" : "abrir menu"}`} src={`/assets/shared/icon-${isOpen ? "close" : "hamburger"}.svg`}
        onClick={() => setIsOpen(!isOpen)}
        width="24"
        height="24"
      />
      <div className={`${isOpen ? styles.open : styles.close}`}>
        <nav className={styles.nav}>
          <ul>
            <LinksMenu />
          </ul>
        </nav>

      </div>
    </div>
  )
}
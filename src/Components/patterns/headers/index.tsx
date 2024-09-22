import Image from 'next/image'
import DropdownMenu from './DropdownMenu'
import styles from './Header.module.css'
import LinksMenu from './LinksMenu'
import logo from './logo.png'

function Header() {


  return (
    <header className={styles.Header} >
      <div className={styles.logo}>
        <Image src={logo} alt='Logo' width="40" height="23" />
        {/* <img src="/assets/shared/logo.svg" alt="Logo" /> */}
      </div>

      <div className={styles.dropdownMenu}>
        <DropdownMenu />
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu_list}>
          <LinksMenu />
        </ul>
      </div>

    </header>
  )
}

export default Header
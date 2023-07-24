import styles from './Navbar.module.scss'
import Image from 'next/image'
import IconButton from '../IconButton/IconButton'

// Icons
import LanguageIcon from '@mui/icons-material/Language'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} container`}>
        <Image
          className={styles.sugarfansLogo}
          src="sugarfans-logo.svg"
          width={150}
          height={50}
          alt="Sugarfans logo"
          priority={true}
          quality={100}
        />
        <IconButton>
          <LanguageIcon fontSize={'small'} />
        </IconButton>
      </div>
    </nav>
  )
}

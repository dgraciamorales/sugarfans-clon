import styles from './Navbar.module.scss'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'

// Icons
import SugarfansLogo from '@/public/sugarfans-logo'
import LanguageIcon from '@mui/icons-material/Language'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} container`}>
        <SugarfansLogo className={styles.sugarfansLogo}/>
        <IconButton>
          <LanguageIcon fontSize='small'/>
        </IconButton>
      </div>
    </nav>
  )
}

'use client'

import styles from './MyNavbar.module.scss'
import { useRouter } from 'next/navigation'
import IconButton from '@mui/material/IconButton'

// Icons
import SugarfansLogo from '@/public/sugarfans-logo'
import LanguageIcon from '@mui/icons-material/Language'

export default function MyNavbar() {
  const router = useRouter()

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.wrapper} container`}>
        <SugarfansLogo onClick={() => router.push('/')} className={styles.sugarfansLogo}/>
        <IconButton name='changeLanguage'>
          <LanguageIcon fontSize='small'/>
        </IconButton>
      </div>
    </nav>
  )
}

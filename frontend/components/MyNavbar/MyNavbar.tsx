'use client'

import { useRouter, usePathname } from 'next/navigation'
import IconButton from '@mui/material/IconButton'

// Icons
import SugarfansLogo from '@/public/sugarfans-logo'
import LanguageIcon from '@mui/icons-material/Language'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  navbar: {
    top: 0,
    backgroundColor: theme.palette.background.default,
    borderBottom: '1px solid rgb(224, 224, 224)',
    position: 'fixed',
    width: '100%',
    height: '60px',
    zIndex: '999',

    '.sugarfansLogo': {
      width: '150px',
      cursor: 'pointer'
    }
  },
  wrapper: {
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
}))

export default function MyNavbar() {
  const { classes } = useStyles()
  const router = useRouter()
  const pathname = usePathname()

  // This will remove navbar from landing.
  if (pathname === '/') {
    document.getElementById('layout-content')?.classList.remove('navbarSpace') 
    return null
  } else {
    document.getElementById('layout-content')?.classList.add('navbarSpace') 
  }

  return (
    <nav className={classes.navbar}>
      <div className={`${classes.wrapper} container`}>
        <SugarfansLogo onClick={() => router.push('/')} className={'sugarfansLogo'}/>
        <IconButton name='changeLanguage'>
          <LanguageIcon fontSize='small'/>
        </IconButton>
      </div>
    </nav>
  )
}

'use client'

// Styles
import styles from './MyAuthentication.module.scss'

import { useInternationalizationContext } from '@/contexts/internationalization'
import SugarfansLogo from '@/public/sugarfans-logo'
import { useState } from 'react'
import MyLoginForm from './MyLoginForm/MyLoginForm'
import MyRegisterForm from './MyRegisterForm/MyRegisterForm'
import { Typography, Button } from '@mui/material'

export default function MyAuthentication() {
  const { t } = useInternationalizationContext()
  const [login, setForm] = useState(true)

  return (
    <div className={styles.authenticationWrapper}>
      <div className={styles.authenticationContainer}>
        <SugarfansLogo className={styles.sugarfansLogo} />

        <Typography className={styles.welcomeYou} variant="body1">
          {login ? t('we_welcome_you') : t('sign_up_free')}
        </Typography>

        {login ? <MyLoginForm /> : <MyRegisterForm />}

        <hr className={styles.divider} />

        <div className={styles.switchForm}>
          <Typography>
            {login ? t('dont_have_account') : t('have_account')}
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => setForm(!login)}>
            <Typography variant="button">
              {login ? t('sign_up_free') : t('log_in')}
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

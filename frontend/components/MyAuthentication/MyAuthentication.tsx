'use client'

import { useInternationalizationContext } from '@/contexts/internationalization'
import SugarfansLogo from '@/public/sugarfans-logo'
import { useState } from 'react'
import MyLoginForm from './Forms/MyLoginForm'
import MyRegisterForm from './Forms/MyRegisterForm'
import { Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  authenticationWrapper: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    padding: '0 80px',
  },
  authenticationContainer: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '.sugarfansLogo': {
      width: '200px',
    },

    form: {
      width: '100%',
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  welcomeYou: {
    fontSize: '24px',
    fontWeight: '800',
    color: theme.palette.primary.main,
    textAlign: 'center',
    lineHeight: '50px',
  },
  divider: {
    width: '50%',
    margin: '10px auto',
    opacity: '0.6',
  },
  switchForm: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',

    button: {
      color: theme.palette.grey[800],
      padding: '4px 16px',

      '&:hover': {
        color: theme.palette.common.black,
      },
    },
  },
}))

export default function MyAuthentication() {
  const { t } = useInternationalizationContext()
  const { classes } = useStyles()
  const [login, setForm] = useState(true)

  return (
    <div className={classes.authenticationWrapper}>
      <div className={classes.authenticationContainer}>
        <SugarfansLogo className={'sugarfansLogo'} />

        <Typography className={classes.welcomeYou} variant="body1">
          {login ? t('we_welcome_you') : t('sign_up_free')}
        </Typography>

        {login ? <MyLoginForm /> : <MyRegisterForm />}

        <hr className={classes.divider} />

        <div className={classes.switchForm}>
          <Typography>{login ? t('dont_have_account') : t('have_account')}</Typography>
          <Button variant="contained" color="secondary" onClick={() => setForm(!login)}>
            <Typography variant="button">{login ? t('sign_up_free') : t('log_in')}</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

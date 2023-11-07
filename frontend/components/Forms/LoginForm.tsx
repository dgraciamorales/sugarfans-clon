'use client'

import { useInternationalizationContext } from '@/contexts/internationalization'
import { FocusEvent, ChangeEvent, FormEvent, useState } from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import MyTextField from '@/components/MyTextField/MyTextField'
import { makeStyles } from 'tss-react/mui'

interface User {
  username: string
  password: string
  [key: string]: string
}

interface UserError {
  username: boolean | string
  password: boolean | string
  [key: string]: boolean | string
}

const useStyles = makeStyles()((theme) => ({
  forgotPasswordWrapper: {
    display: 'flex'
  },
  forgotPassword: {
    textDecoration: 'underline',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    fontWeight: '800',
    marginTop: '10px',
    marginBottom: '10px'
  }
}))

export default function MyLoginForm() {
  const { t } = useInternationalizationContext()
  const { classes } = useStyles()
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
  })

  const [userError, setUserError] = useState<UserError>({
    username: false,
    password: false,
  })

  const errorHandling = (name: string) => {
    if (user[name] === '') {
      setUserError((prevUserError) => ({
        ...prevUserError,
        [name]: t(`required_${name}`),
      }))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))

    setUserError((prevUserError) => ({
      ...prevUserError,
      [name]: '',
    }))
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {

  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    Object.keys(user).map((key) => {
      errorHandling(key)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <MyTextField
        id="login-username"
        name="username"
        value={user.username}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('username')}
        error={userError.username}
      />

      <MyTextField
        id="login-password"
        name="password"
        autoComplete="off"
        value={user.password}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('password')}
        type={'password'}
        error={userError.password}
      />

      <div className={classes.forgotPasswordWrapper}>
        <Typography variant="body1" className={classes.forgotPassword}>
          {t('forgot_password')}
        </Typography>
      </div>

      <Button type="submit">
        <Typography variant="button">{t('log_in')}</Typography>
      </Button>
    </form>
  )
}

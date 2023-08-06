'use client'

import styles from './MyLoginForm.module.scss'

import { useInternationalizationContext } from '@/contexts/internationalization'
import { FocusEvent, ChangeEvent, FormEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Typography } from '@mui/material'
import MyTextField from '@/components/MyTextField/MyTextField'

interface User {
  username: string
  password: string
  [key: string]: string
}

export default function MyLoginForm() {
  const { t } = useInternationalizationContext()
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
  })

  const [userError, setUserError] = useState<User>({
    username: '',
    password: '',
  })

  const errorHandling = (name: string) => {
    if (user[name] === '') {
      setUserError((prevUserError) => ({
        ...prevUserError,
        [name]: t('required_input').replace('{input}', t(name)),
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
      [name]: ' ',
    }))
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target

    if (userError[name] != '') {
      errorHandling(name)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    Object.keys(user).map((key) => {
      errorHandling(key)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <MyTextField
          fullWidth
          id="login-username"
          name="username"
          value={user.username}
          onChange={handleChange}
          onBlur={handleBlur}
          label={t('username')}
          variant="outlined"
          error={userError.username.trim() != ''}
          helperText={userError.username}
          inputProps={{
            'data-cy': 'login-username',
          }}
        />
        <MyTextField
          className={styles.passwordWithAdornment}
          fullWidth
          id="login-password"
          name="password"
          autoComplete="off"
          value={user.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label={t('password')}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          error={userError.password.trim() != ''}
          helperText={userError.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className={styles.forgotPasswordWrapper}>
        <Typography variant="body1" className={styles.forgotPassword}>
          {t('forgot_password')}
        </Typography>
      </div>

      <Button variant="contained" type="submit">
        <Typography variant="button">{t('log_in')}</Typography>
      </Button>
    </form>
  )
}

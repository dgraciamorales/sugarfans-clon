'use client'

import styles from './MyRegisterForm.module.scss'
import MyTextField from '@/components/MyTextField/MyTextField'
import { useState, FocusEvent, ChangeEvent, FormEvent } from 'react'
import { useInternationalizationContext } from '@/contexts/internationalization'
import { Button, FormControlLabel, FormHelperText, Typography } from '@mui/material'
import { Checkbox } from '@mui/material'

interface User {
  username: string
  password: string
  email: string
  adult?: boolean | string
  [key: string]: string | boolean | undefined
}

interface UserError {
  username: boolean | string
  password: boolean | string
  [key: string]: boolean | string
}

export default function MyRegisterForm() {
  const { t } = useInternationalizationContext()
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
    email: '',
    adult: '',
  })

  const [userError, setUserError] = useState<UserError>({
    username: '',
    password: '',
    email: '',
    adult: '',
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
      <MyTextField
        id="register-username"
        name="username"
        value={user.username}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('username')}
        error={userError.username}
      />

      <MyTextField
        id="register-password"
        name="password"
        autoComplete="off"
        value={user.password}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('password')}
        type="password"
        error={userError.password}
      />

      <MyTextField
        id="register-email"
        name="email"
        value={user.email}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('email')}
        error={userError.email}
      />

      <FormControlLabel
        label={t('18_years')}
        control={
          <Checkbox
            checked={!!user.adult}
            onChange={() => {
              setUser((prevUser) => ({
                ...prevUser,
                adult: !user.adult,
              }))
              
              setUserError((prevUserError) => ({
                ...prevUserError,
                'adult': ''
              }))
            }}
          />
        }
      />

      <FormHelperText error={!!userError.adult}>{userError.adult}</FormHelperText>

      <Button type="submit">
        <Typography variant="button">{t('create_account')}</Typography>
      </Button>
    </form>
  )
}

'use client'

import styles from './MyRegisterForm.module.scss'
import MyTextField from '@/components/MyTextField/MyTextField'
import { useState, FocusEvent, ChangeEvent, FormEvent } from 'react'
import { useInternationalizationContext } from '@/contexts/internationalization'
import { Button, FormControlLabel, Typography } from '@mui/material'
import { Checkbox } from '@mui/material'

interface User {
  username: string
  password: string
  email: string
  adult?: boolean | string
  [key: string]: string | boolean | undefined
}

export default function MyRegisterForm() {
  const { t } = useInternationalizationContext()
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
    email: '',
    adult: false,
  })

  const [userError, setUserError] = useState<User>({
    username: '',
    password: '',
    email: '',
    adult: '',
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

  return (
    <form>
      <MyTextField
        id="register-username"
        name="username"
        value={user.username}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('username')}
        error={userError.username.trim() != ''}
        helperText={userError.username}
        inputProps={{
          'data-cy': 'login-username',
        }}
      />

      <MyTextField
        id="register-password"
        name="password"
        value={user.password}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('password')}
        type="password"
        error={userError.username.trim() != ''}
        helperText={userError.username}
        inputProps={{
          'data-cy': 'login-username',
        }}
      />

      <MyTextField
        id="register-email"
        name="email"
        value={user.email}
        onChange={handleChange}
        onBlur={handleBlur}
        label={t('email')}
        error={userError.username.trim() != ''}
        helperText={userError.username}
        inputProps={{
          'data-cy': 'login-username',
        }}
      />

      <div>
        <FormControlLabel
          label={t('18_years')}
          control={
            <Checkbox
              checked={!!user.adult}
              onChange={() =>
                setUser((prevUser) => ({
                  ...prevUser,
                  adult: !user.adult,
                }))
              }
            />
          }
        />
      </div>

      <Button>
        <Typography variant="button">Create a free account</Typography>
      </Button>
    </form>
  )
}

'use client'

import styles from './LoginForm.module.scss'
import SugarfansLogo from '@/public/sugarfans-logo'
import { useInternationalizationContext } from '@/contexts/internationalization'
import { FocusEvent, ChangeEvent, FormEvent, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Typography } from '@mui/material'
import Collapse from '@mui/material/Collapse'

interface User {
  username: string,
  password: string,
  [key: string]: string
}

export default function LoginForm() {
  const { t } = useInternationalizationContext()
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
  })

  const [userError, setUserError] = useState({
    username: '',
    password: '',
  })

  const errorHandling = (name: string) => {
  
    if (user[name] === '') {
      setUserError(prevUserError => ({
        ...prevUserError,
        [name]: t('required_input').replace('{input}', t(name)),
      }))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }))

    setUserError(prevUserError => ({
      ...prevUserError,
      [name]: ' '
    }))
    
  }
  
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    
    errorHandling(name)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    Object.keys(user).map(key => {
      errorHandling(key)
    })
  }

  return (
    <div className={styles.loginForm}>
      <SugarfansLogo className={styles.sugarfansLogo} />
      <Typography className={styles.welcomeYou} variant="body1">
        {t('we_welcome_you')}
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <div>
            <TextField
              fullWidth
              id="login-username"
              name="username"
              value={user.username}
              onChange={handleChange}
              onBlur={handleBlur}
              label={t('username')} 
              variant="outlined"
              error={userError.username.trim() != ''}
              inputProps={{
                'data-cy': 'login-username',
              }}
            />
              <Collapse in={userError.username.trim() != ''}>
                <FormHelperText data-cy="login-username-helper-text" error={true}>
                  {userError.username}
                </FormHelperText>
              </Collapse>
          </div>
          <div>
            <TextField
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
            <Collapse in={userError.password.trim() != ''}>
              <FormHelperText data-cy="login-password-helper-text" error={true}>
                {userError.password}
              </FormHelperText>
            </Collapse>
          </div>
        </div>

        <div className={styles.forgotPasswordWrapper}>
          <Typography variant="body1" className={styles.forgotPassword}>
            {t('forgot_password')}
          </Typography>
        </div>

        <Button variant="contained" type="submit">
          <Typography variant="button">{t('log_in')}</Typography>
        </Button>

        <hr className={styles.divider} />

        <div className={styles.signUpWrapper}>
          <Typography>{t('dont_have_account')}</Typography>
          <Button variant="contained" color="secondary">
            <Typography variant="button">{t('sign_up_free')}</Typography>
          </Button>
        </div>
      </form>
    </div>
  )
}

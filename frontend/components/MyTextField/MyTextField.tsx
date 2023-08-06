import { ChangeEvent, useState } from 'react'
import styles from './MyTextField.module.scss'
import { Collapse, Fade, FormHelperText, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

interface props extends Omit<TextFieldProps, 'helperText'> {
  helperText?: string,
  type?: 'text' | 'password'
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  'data-cy'?: string
}

export default function MyTextField({ helperText, type, ...rest }: props) {
  const { error, onChange } = rest
  const [showPassword, setShowPassword] = useState(false)
  const [helperTextMessage, setHelperTextMessage] = useState<string | undefined>(' ')
  const [showMessage, setShowMessage] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }
  
  const enterHelperText = () => {
    setShowMessage(true)
    setHelperTextMessage(helperText)
  }

  const exitingHelperText = () => {
    setShowMessage(false)
  }

  const exitedHelperText = () => {
    setHelperTextMessage(helperText)
  }

  const swapTypeTextField = () => {
    if (type === 'password') {
      if (showPassword) {
        return 'text'
      } else {
        return 'password'
      }
    } else {
      return type
    }
  }

  return (
    <div className={styles.myTextField}>
      <TextField {...rest} onChange={handleChange} type={swapTypeTextField()} InputProps={{
          endAdornment: (
            type == 'password' ?
            <InputAdornment position="end">
              <IconButton size="small" onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
              </IconButton>
            </InputAdornment>
            : null
          ),
        }}/>

      <Collapse in={error} onEnter={enterHelperText} onExiting={exitingHelperText} onExited={exitedHelperText} timeout={150}>
        <Fade in={showMessage} style={{ transitionTimingFunction: 'linear' }} timeout={150}> 
          <FormHelperText error={error} data-cy={rest['data-cy']}>{helperTextMessage}</FormHelperText>
        </Fade>
      </Collapse>
    </div>
  )
}

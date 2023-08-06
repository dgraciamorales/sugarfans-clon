import { ChangeEvent, useState } from 'react'
import styles from './MyTextField.module.scss'
import { Collapse, Fade, FormHelperText, TextField, TextFieldProps } from '@mui/material'

interface props extends Omit<TextFieldProps, 'helperText'> {
  helperText?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function MyTextField({ helperText, ...rest }: props) {
  const { error, onChange } = rest
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

  return (
    <div className={styles.myTextField}>
      <TextField {...rest} onChange={handleChange}/>

      <Collapse in={error} onEnter={enterHelperText} onExiting={exitingHelperText} onExited={exitedHelperText}>
        <Fade in={showMessage} style={{ transitionTimingFunction: 'linear' }}> 
          <FormHelperText error={error}>{helperTextMessage}</FormHelperText>
        </Fade>
      </Collapse>
    </div>
  )
}

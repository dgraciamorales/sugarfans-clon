import { ChangeEvent, useState } from 'react'
import { FormHelperText, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { makeStyles } from 'tss-react/mui'

interface props extends Omit<TextFieldProps, 'helperText' | 'error' | 'type'> {
  helperText?: string
  type?: 'text' | 'password'
  error?: boolean | string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  'data-cy'?: string
}

const useStyles = makeStyles()(() => ({
  myTextField: {
    marginTop: '5px',
    marginBottom: '7px'
  }
}))

export default function MyTextField({ helperText, type, error, ...rest }: props) {
  const { classes } = useStyles()
  const { id, onChange } = rest
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
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
    <div className={classes.myTextField}>
      <TextField
        {...rest}
        onChange={handleChange}
        type={swapTypeTextField()}
        error={!!error}
        InputProps={{
          endAdornment:
            type == 'password' ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
        inputProps={{
          'data-cy': `${id}-input`,
        }}
      />

      {error ? (
        <FormHelperText data-cy={`${id}-helperText`} error={!!error}>
          {error}
        </FormHelperText>
      ) : null}
    </div>
  )
}

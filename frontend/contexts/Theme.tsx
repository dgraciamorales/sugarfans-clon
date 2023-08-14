import { createContext, useContext, useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

/*
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles'
*/

interface contextProps {}

interface props {
  children?: React.ReactNode
}

const CustomThemeContext = createContext<contextProps>({})

const theme = createTheme({
  typography: {
    fontFamily: 'unset',
    
    body1: {
      fontSize: '15px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },

    body2: {
      fontSize: '13px',
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },

    button: {
      fontSize: '14px',
      fontWeight: '800',
      textTransform: 'none'
    }
  },

  palette: {
    primary: {
      main: '#2BC6C4'
    },
    secondary: {
      main: '#B1AEB7'
    },
    background: {
      default: '#FFF'
    }
  },

  /*
  cssVarPrefix: '',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2BC6C4',
        },
        secondary: {
          main: '#B1AEB7',
        },
        common: {
          background: '#FFF',
        },
      },
    },

    dark: {
      palette: {
        primary: {
          main: '#2BC6C4',
        },
        secondary: {
          main: '#16908F',
        },
        common: {
          background: '#23272D',
        },
        text: {
          
        }
      },
    },
  },
  */

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'unset'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant:'outlined',
        type: 'text'
      },
      styleOverrides: {
        root: {
          borderWidth: '1px',
          input: {
            padding: '8.5px 14px',
          },
          label: {
            textTransform: 'capitalize',
            transform: 'translate(14px, 9px)',
            opacity: '0.6'
          },
          'label.Mui-focused': {
            transform: 'translate(15px, -9px) scale(0.75)',
          },
          'label.MuiFormLabel-filled': {
            transform: 'translate(15px, -9px) scale(0.75)',
          },
          fieldset: {
            borderRadius: '6px',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginTop: '4px',
          fontSize: '13px',
          lineHeight: '15px',
          '&::first-letter': {
            textTransform: 'capitalize'
          }
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          '&': {
            textTransform: 'unset',
            fontWeight: 800,
            boxShadow: 'unset',
            fontSize: '16px',
            borderRadius: '8px',
            marginTop: '7.5px',
            marginBottom: '7.5px'
          },
          '&:hover': {
            boxShadow: 'unset',
          },
        },
      },
    },
  },
})

export const CustomThemeContextProvider = ({ children }: props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  /*return (
    <CssVarsProvider theme={cssTheme}>
      <CustomThemeContext.Provider value={{}}>{children}</CustomThemeContext.Provider>
    </CssVarsProvider>
  )*/

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={{}}>{children}</CustomThemeContext.Provider>
    </ThemeProvider>
  )
}

export const useCustomThemeContext = () => useContext(CustomThemeContext)

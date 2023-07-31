'use client'

// import './MuiClassNameSetup' <- This will remove all "Mui" from classNames. example: MuiButton -> Button.
import { InternationalizationContextProvider } from '@/contexts/internationalization'
import { CustomThemeContextProvider } from '@/contexts/Theme'

interface props {
  children: React.ReactNode
}

export default function Providers({ children }: props) {
  return (
    <CustomThemeContextProvider>
      <InternationalizationContextProvider>{children}</InternationalizationContextProvider>
    </CustomThemeContextProvider>
  )
}

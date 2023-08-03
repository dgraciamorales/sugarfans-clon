'use client'

import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material'
import { InternationalizationContextProvider } from '@/contexts/internationalization'
import { CustomThemeContextProvider } from '@/contexts/Theme'

interface props {
  children: React.ReactNode
}

// ClassNameGenerator.configure((componentName) => componentName.replace('Mui', '')) // <- Unstable, not recommended

export default function Providers({ children }: props) {
  return (
    <CustomThemeContextProvider>
      <InternationalizationContextProvider>{children}</InternationalizationContextProvider>
    </CustomThemeContextProvider>
  )
}

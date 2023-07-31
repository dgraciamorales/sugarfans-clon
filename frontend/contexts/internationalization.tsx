import { Dispatch, SetStateAction, createContext, useContext, useState, useEffect } from 'react'

interface contextProps {
  lang: string
  setLang: Dispatch<SetStateAction<string>>
  t: (translation: string) => string
}

interface props {
  children?: React.ReactNode
}

const InternationalizationContext = createContext<contextProps>({
  lang: '',
  setLang: (): string => '',
  t: (): string => '',
})

const selectedLang = (defaultLang: string) => {
  const availableLangs = ['es-ES', 'us-US']
  const storedLang = localStorage.getItem('lang') as string

  // If lang preference is stored and valid
  if (availableLangs.includes(storedLang)) {
    return storedLang
  } else {
    return defaultLang
  }
}

export const InternationalizationContextProvider = ({ children }: props) => {
  const [lang, setLang] = useState('us-US') // Default locale

  useEffect(() => {
    setLang(selectedLang(lang))
  }, [])

  const t = (translation: string) => {
    const localPath = require(`@/public/locales/${lang}.json`)
    return localPath[translation]
  }

  return (
    <InternationalizationContext.Provider value={{ lang, setLang, t }}>{children}</InternationalizationContext.Provider>
  )
}

export const useInternationalizationContext = () => useContext(InternationalizationContext)

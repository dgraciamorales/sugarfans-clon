'use client'

import MyLoginForm from '@/components/MyLoginForm/MyLoginForm'
import styles from './page.module.scss'
import { Typography } from '@mui/material'
import { useInternationalizationContext } from '@/contexts/internationalization'

export default function Home() {
  const { t } = useInternationalizationContext()

  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={`${styles.wrapper} container`}>
          <div className={styles.headerText}>
            <div className={styles.headerTextWrapper}>
              <Typography variant="h1" className={styles.headerText1}>
                {t('header_text1')}
              </Typography>
              <Typography variant="h2" className={styles.headerText2}>
                {t('header_text2')}
              </Typography>
            </div>
          </div>
          <MyLoginForm />
        </div>
      </div>
    </main>
  )
}

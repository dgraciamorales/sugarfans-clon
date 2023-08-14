'use client'

import { makeStyles } from 'tss-react/mui'
import { Typography } from '@mui/material'
import { useInternationalizationContext } from '@/contexts/internationalization'
import MyAuthentication from '@/components/MyAuthentication/MyAuthentication'

const useStyles = makeStyles()(() => ({
  background: {
    width: '100%',
    height: '675px',
    backgroundColor: '#a1ccd1'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  headerText: {
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  headerTextWrapper: {
    marginBottom: '50px',
    marginRight: '70px',
    textAlign: 'center',
    textShadow: '0 0 20px black',
    color: 'white',
    position: 'absolute',
    left: '0',
    bottom: '0'
  },
  headerText1: {
    fontSize: '49px',
    lineHeight: '47px',
    fontWeight: '900'
  },
  headerText2: {
    marginTop: '30px',
    fontWeight: '800',
    fontSize: '30px'
  }
}))

export default function Home() {
  const { t } = useInternationalizationContext()
  const { classes } = useStyles()

  return (
    <main>
      <div className={classes.background}>
        <div className={`${classes.wrapper} container`}>
          <div className={classes.headerText}>
            <div className={classes.headerTextWrapper}>
              <Typography variant="h1" className={classes.headerText1}>
                {t('header_text1')}
              </Typography>
              <Typography variant="h2" className={classes.headerText2}>
                {t('header_text2')}
              </Typography>
            </div>
          </div>
          <MyAuthentication/>
        </div>
      </div>
    </main>
  )
}

'use client'

import Image from 'next/image'
import { useInternationalizationContext } from '@/contexts/internationalization'
import { Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import FormsWrapper from './FormsWrapper'
import SecurityIcon from '@mui/icons-material/Security'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useEffect, useState } from 'react'

const useStyles = makeStyles<void, "contentProtectionVideoButton">()((theme, _params, classes) => ({
  background: {
    [theme.breakpoints.down('lg')]: {
      backgroundColor: 'inherit',
      height: '100%',
    },
    width: '100%',
    height: '675px',
    backgroundColor: '#a1ccd1',
  },
  wrapper: {
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column-reverse',
      justifyContent: 'space-between',
    },
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  headerText: {
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  headerTextWrapper: {
    [theme.breakpoints.down('lg')]: {
      width: '100vw',
      position: 'static',
      backgroundColor: '#a1ccd1',
      padding: '40px 10px',
      margin: '0 -20px',
      transform: 'translateX(10px)',
    },
    marginBottom: '50px',
    marginRight: '70px',
    textAlign: 'center',
    textShadow: '0 0 20px black',
    color: 'white',
    position: 'absolute',
    left: '0',
    bottom: '0',
  },
  headerText1: {
    [theme.breakpoints.down('lg')]: {
      fontSize: '32px',
      lineHeight: '34px',
    },
    fontSize: '49px',
    lineHeight: '47px',
    fontWeight: '900',

  },
  headerText2: {
    [theme.breakpoints.down('lg')]: {
      fontSize: '24px',
      lineHeight: '26px',
    },
    marginTop: '30px',
    fontWeight: '800',
    fontSize: '30px',
  },
  contentProtection: {
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column'
    },
    marginTop: '80px',
    backgroundColor: 'rgb(67, 74, 84)',
    width: '100%',
    borderRadius: '20px',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',

    svg: {
      fill: 'white'
    }
  },
  contentProtectionText: {
    [theme.breakpoints.down('lg')]: {
      maxWidth: '450px'
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    color: 'white',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '30px',
    fontWeight: '800'
  },
  contentProtectionText1: {
    fontSize: '20px'
  },
  contentProtectionText2: {
    fontSize: '20px',
    fontWeight: 'bold'
  },
  contentProtectionVideo: {
    position: 'relative',
    width: '100%',
    maxWidth: '512px',
    borderRadius: '10px',
    cursor: 'pointer',

    [`&:hover .${classes.contentProtectionVideoButton}`]: {
      boxShadow: '0 0 10px 0px rgba(0,0,0,0.5)'
    }
  },
  contentProtectionVideoButton: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '22px',
    color: 'white',
    fontWeight: '800',
    position: 'absolute',
    zIndex: '999',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '4px 10px',
    background: 'rgba(0,0,0,0.1)',
    border: '1px solid white',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    textShadow: '0 0 4px rgba(0,0,0,0.5)',
    transition: 'box-shadow 200ms',
    cursor: 'pointer'
  },
  contentProtectionVideoWrapper: {
    width: '100%',
    paddingBottom: '56.25%',
    position: 'relative',
    overflow: 'hidden',

    img: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      borderRadius: '10px',
      objectFit: 'contain',
      top: 0
    }
  },
  footer: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  social: {
    display: 'flex',
    gap: '10px'
  }
}))

export default function Landing() {
  const { t } = useInternationalizationContext()
  const { classes } = useStyles()
  const [creator, setForm] = useState(false)

  useEffect(() => {

    if (creator) {
      setForm(false)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

  }, [creator])

  return (
    <>
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

            <FormsWrapper creatorForm={creator} />

          </div>
        </div>

        <div className={`container`}>
          <div className={classes.contentProtection}>
            <SecurityIcon style={{ fontSize: '99px' }} />
            <div className={classes.contentProtectionText}>
              <Typography variant='h2' className={classes.title}>
                {t('content_protection_title')}
              </Typography>
              <Typography variant='body1' className={classes.contentProtectionText1}>
                {t('content_protection_text1')}
              </Typography>
              <Typography variant='body1' className={classes.contentProtectionText2}>
                {t('content_protection_text2')}
              </Typography>

            </div>
            <div className={classes.contentProtectionVideo}>
              <button className={classes.contentProtectionVideoButton}><PlayCircleIcon />{t('try_it')}</button>
              <div className={classes.contentProtectionVideoWrapper}>
                <Image src='/images/drm-video-poster.webp' fill={true} alt='DRM Video' priority quality={100} sizes='(max-width: 512px) 100vw' />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={`${classes.footer} container`}>
        <Typography variant='body1'>{t('footer_text')}</Typography>
        <div className={classes.social}>
          <a><InstagramIcon fontSize='small'/></a>
          <a><TwitterIcon fontSize='small'/></a>
        </div>
      </footer>
    </>
  )
}

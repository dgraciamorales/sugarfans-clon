import styles from './LoginForm.module.scss'
import Image from 'next/image'

export default function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <Image src='sugarfans-logo.svg' width={200} height={48} alt='Sugarfans logo'/>
    </div>
  )
}

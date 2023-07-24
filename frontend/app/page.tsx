import LoginForm from '@/components/LoginForm/LoginForm'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <div className={`${styles.wrapper} container`}>
          <LoginForm />
        </div>
      </div>
    </main>
  )
}

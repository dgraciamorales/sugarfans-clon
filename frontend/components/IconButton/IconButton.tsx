import styles from './IconButton.module.scss'

interface props {
  children: React.ReactNode
}

export default function IconButton({ children }: props) {
  return (
    <div className={styles.iconButton}>
      <button>{children}</button>
    </div>
  )
}

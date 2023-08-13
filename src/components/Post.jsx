
import styles from './Post.module.css'
export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/im-medina.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Medina</strong>
            <span>Web Dev</span>
          </div>
        </div>
        <time title="13 de maio às 08:13 "dateTime="2022-05-11 08:13:30">Publicado à 1h</time>

      </header>
    </article>
  )
}
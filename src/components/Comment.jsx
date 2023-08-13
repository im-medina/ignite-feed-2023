import { HandsClapping, ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/im-medina.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="13 de maio às 08:13 "dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar mensagem">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Medina!!</p>
        </div>
        <footer>
          <button>
            <HandsClapping />            
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

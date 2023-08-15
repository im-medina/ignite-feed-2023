import { HandsClapping, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import { useState } from 'react'

export default function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteContent(){
  onDeleteComment(content)
}

function handleLikeComment(){
  setLikeCount(state=>{return state +1})
}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/im-medina.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dante Medina</strong>
              <time title="13 de maio às 08:13 "dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteContent} title="Deletar mensagem">
              <Trash size={20}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping />            
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

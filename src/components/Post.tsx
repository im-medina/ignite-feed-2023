import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

// 1
interface Author{ 
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content{
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps{ //2. corresponde as propriedades do componente Post, logo abaixo
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps){ //3. a tipagem em objetos tem que ser global e não por propriedade
  const [comments, setComments] = useState(['Post bacana']) 
  const [newCommentText, setNewCommentText] = useState('')

  console.log(newCommentText)

  const publishedDateFormatted = format(publishedAt,"d 'de' MMM 'às' HH:mm'h'", {
      locale:ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale:ptBR,
    addSuffix:true,
  })

  function handleCreateNewComment(event: FormEvent){ //4.
    event.preventDefault()                            
  
    setComments([...comments,newCommentText])         
    setNewCommentText('')                             
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value) 
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string){  
    const commentsWithoutDeletedOne = comments.filter(comment=>{
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
 
      <div className={styles.content}>
          {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>
      
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
       
        <textarea 
          name="comment" 
          placeholder="Deixe um comentário" 
          value={newCommentText} 
          onChange={handleNewCommentChange} 
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer> 
      </form>

      <div className={styles.commentList}>
        {comments.map(comment=>{
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}/> 
          )
        })}
      </div>
    </article>
  )
}
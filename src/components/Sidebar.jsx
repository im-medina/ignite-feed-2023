import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css';


export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50" alt="" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/im-medina.png"/>
        <strong>Dante Medina</strong>
        <span>Front-End Developer</span>
      </div>
      
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
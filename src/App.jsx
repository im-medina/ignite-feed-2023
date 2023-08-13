import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css';


export function App() {

     /* para ter multiplos elementos, é necessário uma div ou algo similar */
  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
      <Sidebar />
        <main>
          <Post
              author="Medina" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non hic eos, iste excepturi perferendis debitis quasi! Tempore totam culpa maiores aliquam excepturi fuga voluptatum id dolore laboriosam."
            />
            <Post 
              author="Dante"
              content="Este aqui é o texto nº2"
            />
        </main>
     </div>
    </div>
  )
}



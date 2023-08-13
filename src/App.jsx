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
          <Post/>
          <Post/>
        </main>
     </div>
    </div>
  )
}



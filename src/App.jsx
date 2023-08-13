import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css';


const posts =[
  {
    id:1,
    author:{
      avatarUrl:"https://github.com/im-medina.png/",
      name:"Dante Medina",
      role:"Dev Front-end"
    },
    content:[
      {type: 'pharagraph', content: 'Fala galeraa 👋'},
      {type: 'pharagraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare' },     
    ],
    publishedAt: new Date('2023-08-20 16:04')
  },
  {
    id:2,
    author:{
      avatarUrl:"https://github.com/maykbrito.png/",
      name:"Mayk Brito",
      role:"Educator"
    },
    content:[
      {type: 'pharagraph', content: 'Fala galeraa 👋'},
      {type: 'pharagraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content:'jane.design/doctorcare' },      
    ],
    publishedAt: new Date('2023-08-10 16:04')
  },
]

export function App() {

     /* para ter multiplos elementos, é necessário uma div ou algo similar */
  return (
    <div>
      <Header/>
     <div className={styles.wrapper}>
      <Sidebar />
        <main>
          {posts.map(post=>{
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}  
              />);
          })}
        </main>
     </div>
    </div>
  )
}



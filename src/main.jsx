import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

/*2 - Aqui temos as importações que fazem o código ser renderizado no index.html
import React from 'react' - responsável pelo core do projeto
import ReactDOM from 'react-dom/client' - integração do core do React com a DOC (document Object Model), que é a representação do html pelo javascript.
*/

/* 3 - chamamos um metódo createRoot para identificar qual é o elemento Raiz do html, então o React vai criar todo o javascript da nossa aplicação dentro do "root" no HTML. */

/* 4 - Dentro do método createRoot, é chamado o método .render, onde utilizamos COMPONENTES do react */
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App /> {/* renderizando a aplicação, dentro da função App em App.jsx */}
  </React.StrictMode>,
)

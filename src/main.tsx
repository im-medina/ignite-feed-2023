import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// ReactDOM.createRoot(document.getElementById('root')!).render(
  
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App /> {/* renderizando a aplicação, dentro da função App em App.jsx */}
    </React.StrictMode>
  );
}

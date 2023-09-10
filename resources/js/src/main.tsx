import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './plugins/bootstrap/bootstrap.min.css'
import './plugins/slick/slick.css'
import './plugins/themify-icons/themify-icons.css'
import './plugins/style.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

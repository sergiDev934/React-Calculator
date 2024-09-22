import React from 'react'
import ReactDom from 'react-dom/client'
import { App } from './src/App.jsx'
import './style.css'

ReactDom.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

)

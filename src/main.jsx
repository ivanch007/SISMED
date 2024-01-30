import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterApp} from './RouterApp'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  < BrowserRouter>
    <React.StrictMode>
      <RouterApp></RouterApp>
    </React.StrictMode>
  </BrowserRouter>
)

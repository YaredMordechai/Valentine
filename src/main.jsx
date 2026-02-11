import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './valentine.css'
import App from './valentine.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

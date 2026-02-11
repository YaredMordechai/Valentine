import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './valentine.css'
import Valentine from './valentine.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Valentine />
  </StrictMode>,
)

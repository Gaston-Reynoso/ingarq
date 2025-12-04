import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './IngArq.css'
import IngArq from './IngArq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <IngArq />
  </StrictMode>,
)

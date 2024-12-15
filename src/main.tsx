import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/cloudscape.css'
import '@/styles/tailwind.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

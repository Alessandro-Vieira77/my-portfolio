import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'sonner'
import { ContextProvider } from './context/context-proivder'

import './i18n'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <Toaster position="top-right" richColors />
      <App />
    </ContextProvider>
  </StrictMode>,
)

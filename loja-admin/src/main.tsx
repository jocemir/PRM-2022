import { initializeIcons } from '@fluentui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

initializeIcons();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

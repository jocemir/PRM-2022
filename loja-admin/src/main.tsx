import { initializeIcons } from '@fluentui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/AuthContext';

initializeIcons();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
)

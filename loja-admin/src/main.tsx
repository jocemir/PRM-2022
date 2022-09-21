import { initializeIcons } from '@fluentui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { AuthContextProvider } from './context/AuthContext';

//Se não fizer isso, os ícones não ficam visiveis
initializeIcons();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>

)
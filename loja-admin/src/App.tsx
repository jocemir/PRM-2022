import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hook/useAuth';
import { HomePage } from './pages/Home'
import { LoginPage } from './pages/Login'


function App() {

  const { user } = useAuth();

  return (
    <div id="App">

      { user ? (
        <HomePage />
      ) : (
        <Routes>
            <Route path='*' element={<LoginPage/>} />
        </Routes>
      )}
      
    </div>
  )
}

export default App
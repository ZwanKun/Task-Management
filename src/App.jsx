import { useState } from 'react'
import Login from './component/Login/login'
import Register from './component/Register/register'
import BackgroundAnimation from './component/BackgroundAnimation/BackgroundAnimation'
import './App.css'


function App() {

  return (
    <div>
    <BackgroundAnimation />
      <div className='Connection-container'>
        <Login />
        <Register />
      </div>
    </div>
  )
}

export default App

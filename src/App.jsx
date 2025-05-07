import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './component/Login/login';
import Register from './component/Register/register';
import AuthLayout from './component/Authlayout';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div className='connection-container'>
        <Routes>
            <Route path='/register' element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }>
            </Route>
            <Route path='/'  element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

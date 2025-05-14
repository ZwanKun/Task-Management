import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './component/Login/login';
import Register from './component/Register/register';
import Dashboard from './Dashboard/Dashboard';
import AuthLayout from './component/Layoutauth/Authlayout';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Route,Link,RouterProvider } from 'react-router-dom'
import { motion } from 'framer-motion';
import './register.css'
import Logo from '../../assets/logo.png'

const Register = () => {
  return (
    <form className='form-container'>
        <div className="logo-container">
            <motion.img src={Logo}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
            />
            <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        TaskFlow
      </motion.h1>
        </div>
        <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        REGISTER
      </motion.h3>
        <div className="input-container">
        <div className='username-input'>
                <input type='text' placeholder='Username' required/>
             </div>
             <div className='mail-input'>
                <input type='mail' placeholder='Email' required/>
             </div>
            <div className='password-input'>
                <input type='password' placeholder='Password' required/>
            </div>
            <div className="button-container">
                <button>
                    Login
                </button>
                <p className=''>Don't have account?<span> Sign Up</span></p>        
            </div>
        </div>
    </form>
  )
}

export default Register
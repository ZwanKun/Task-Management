import { useState } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import './login.css'
import Logo from '../../assets/logo.png'

const Login = () => {

  const[mail, setMail] = useState("")


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
        LOGIN
      </motion.h3>
        <div className="input-container">
             <div className='mail-input'>
                <input type='mail' placeholder='Email' required/>
             </div>
            <div className='password-input'>
                <input type='password' placeholder='Password' required/>
            </div>
            <Link className="login-button">
                        Login
            </Link>
             <Link to='/register' className='link-display'>Don't have account? Sign up</Link>        
        </div>
    </form>
  )
}

export default Login;
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { motion } from 'framer-motion';
import './register.css'
import Logo from '../../assets/logo1.png'

const Register = () => {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate()

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        // Assuming the backend sends a message
        if (result.data.success) {
          setMessage(result.data.message); // Successful registration message
          setName('');
          setEmail('');
          setPassword('');
          navigate('/'); // Redirect to login page
        } else {
          setError(result.data.message); // Display any error messages from the backend
        }
      })
      .catch(err => {
        console.error("Error during registration:", err);
        setError("Something went wrong. Please try again later."); // Handle unexpected errors
      });
};


  return (
    <form className='form-container' onSubmit={handleSubmit}>
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
                <input 
                type='text'
                placeholder='Username' 
                name='username'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
             </div>
             <div className='mail-input'>
                <input
                 type='email'
                 placeholder='Email'
                 name='email'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required/>
             </div>
            <div className='password-input'>
                <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>
             <button type="submit" className='register-button'>
                Sign Up
            </button>
              {error && <p className="text-red-500">{error}</p>}
              {message && <p className="text-green-500">{message}</p>}  
                <Link to='/' className='link-display'>Go back to Login</Link>        
        </div>
    </form>
  )
}

export default Register
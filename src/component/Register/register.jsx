import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { motion } from 'framer-motion';
import './register.css'
import Logo from '../../assets/logo.png'
import SuccessModal from '../Modal/successModal';

const Register = () => {

  const[name, setName] = useState();
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); 
    axios.post('http://localhost:3001/register', {name, email, password})
    .then(result => { console.log(result)
    setEmail('');
    setName('');
    setPassword('');
    setIsModalOpen(true)
  })
    .catch(err => console.log(err))
  }
const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
  <>
  <SuccessModal isOpen={isModalOpen} closeModal={closeModal}
   initial={{ opacity: 0, y: -20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 1, ease: 'easeOut' }}
    />
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
                 type='mail'
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
                <Link to='/' className='link-display'>Go back to Login</Link>        
        </div>
    </form>
</>
  )
}

export default Register
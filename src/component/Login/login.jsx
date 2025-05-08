import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import './login.css';
import Logo from '../../assets/logo.png';

const Login = () => {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/', { name, password })
      .then(result => {
        console.log(result.data);
        if (result.data === "You are connected") {
          setName('');
          setPassword('');
          navigate('/dashboard');
        } else {
          alert(result.data); // show message for incorrect password/user
        }
      })
      .catch(err => console.log(err));
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
        LOGIN
      </motion.h3>
      <div className="input-container">
        <div className='mail-input'>
          <input
            type='text'
            placeholder='Username'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className='password-input'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="login-button" type='submit'>
          Login
        </button>
        <Link to='/register' className='link-display'>
          Don't have an account? Sign up
        </Link>
      </div>
    </form>
  );
};

export default Login;

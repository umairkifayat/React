import { Button, TextField, Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useRef } from 'react';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

//      use navigate
const navigate = useNavigate()

  //  use state
  const [loading, setLoading] = useState(false);
  const email = useRef();
  const password = useRef();

  const loginfunc = async (event) => {
    event.preventDefault();
    console.log('login clicked');
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
        try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center mt-5 item-center'>
      <form onSubmit={loginfunc} className='d-flex justify-content-center flex-column w-25 gap-5'>
        <TextField id='outlined-basic' label='Email' variant='outlined' type='email' required inputRef={email} />
        <TextField id='outlined-basic' label='Password' variant='outlined' type='password' required inputRef={password} />
        <Button type='submit' variant='contained'>
          {loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 'Login'}
        </Button>
      </form>
    </Box>
  );
};

export default Login;

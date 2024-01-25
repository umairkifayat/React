import { Button, TextField, Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useRef } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {  createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../config/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

const Register = () => {

// use  navigate

const navigate = useNavigate()


  //  use states
  const [loading, setLoading] = useState(false);
  // const [Photo, setphoto] = useState();

  const email = useRef();
  const password = useRef();
  const name = useRef();




  //  register function
  const registerfunc = async (event) => {
   event.preventDefault();
    console.log('register clicked');
    const emails = email.current.value
    const passwords = password.current.value
  

    createUserWithEmailAndPassword(auth, emails, passwords)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log(user);
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

  

    
    email.current.value = '';
    password.current.value = '';
    name.current.value = '';

    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    } catch (error) {
      console.error('Registration failed:', error);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center mt-5 item-center'>
      <form onSubmit={registerfunc} className='d-flex justify-content-center flex-column w-25 gap-4'>
        <TextField id='outlined-basic' label='Full Name' variant='outlined' type='text' required inputRef={name} />
        <TextField id='outlined-basic' label='Email' variant='outlined' type='email' required inputRef={email} />
        <TextField id='outlined-basic' label='Password' variant='outlined' type='password' required inputRef={password} />
        {/* <Button component="label" className='Photo' variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
          <input type="file" style={{ display: 'none' }} />
        </Button> */}
        <Button type='submit' variant='contained'>
          {loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 'Register'}
        </Button>
      </form>
    </Box>
  );
};

export default Register;

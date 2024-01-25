import { Button, TextField, Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useRef } from 'react';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const email = useRef();
  const password = useRef();

  const loginfunc = async (event) => {
    event.preventDefault();
    console.log('login clicked');
    console.log(email.current.value);
    console.log(password.current.value);
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

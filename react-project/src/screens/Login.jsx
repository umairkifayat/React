import { TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
   <>


   <h1>Log In</h1>
   <form >
   <TextField id="outlined-basic" label="Email" variant="outlined"  type= 'email'  />
   <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
   <button type="submit">Log in</button>
   </form>
   </>
  )
}

export default Login

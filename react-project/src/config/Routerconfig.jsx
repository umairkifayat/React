import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import Register from '../screens/Register'
import Login from '../screens/Login'
import ResponsiveAppBar from '../components/Navbar'
import Protectedroutes from './protectedroutes'


const Routerconfig = () => {
  return (
   <BrowserRouter>
   <ResponsiveAppBar />
   <Routes>
    <Route path='/' element = {<Protectedroutes  component={<Home />} />} />
    <Route path='login' element = {<Login />} />
    <Route path='register' element = {<Register />} />

   </Routes>
   </BrowserRouter>
  )
}

export default Routerconfig

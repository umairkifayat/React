import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../../screens/home/home'
import About from '../../screens/about/About'
import Contact from '../../screens/contact/Contact'


const Rout = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='about' element = {<About/>} />
    <Route path='contact' element = {<Contact/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default Rout

// import React from 'react'
import  Navbar  from "./components/navbar/Navbar";
import Header from './components/Hero/Hero';
import Categories from './components/categories/Categories';
import Shop from './components/shop/shop';
import Testimaoral from './components/testimoral/Testimaoral';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

const App = () => {
  return (
   <main className='app'>
    <Navbar />
    <Header />
    <Categories />
    <Shop />
    <Testimaoral />
    <Blog />
    <Footer />
   </main>
  )
}

export default App

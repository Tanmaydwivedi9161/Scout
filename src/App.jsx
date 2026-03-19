import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <Courses/>
      <Features/>
      <Contact/>
      <Footer/>
      </>
  )
}

export default App

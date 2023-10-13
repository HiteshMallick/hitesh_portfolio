import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Contact'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Footer></Footer>
    </>
  )
}

export default App
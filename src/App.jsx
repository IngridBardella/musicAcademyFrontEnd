import { useState } from 'react'
import './App.css'

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Instruments from "./components/Instruments/Instruments"
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Job from './components/Job/Job';

function App() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title title='Instruments'/>
        <Instruments/>
        <Title title='About Music Academy'/>
        <About/>
        <Title title='Testimonials'/>
        <Testimonials />
        <Title title='Contact us'/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App

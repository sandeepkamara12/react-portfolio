import { useState } from 'react'
import './App.css';
import Header from './components/common/Header';
import Banner from './components/banner/Banner';
import Service from './components/service/Service';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Certification from './components/certification/Certification';
import Technology from './components/technology/Technology';
import Contact from './components/contact/Contact';
import Footer from './components/common/Footer';

function App() {

  return (
    <>
    {/* <button className="btn-primary">Explore Portfolio</button> */}
     <Header />
     {/* <Banner />
     <Service />
     <Portfolio />
     <About />
     <Certification />
     <Technology />
     <Contact /> */}
     <Footer />
    </>
  )
}

export default App

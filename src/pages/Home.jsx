import React from 'react'
import Navbar from '../components/Navbar1'
import Header from '../components/Header'
import AboutMe from '../components/Education'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import GIthub from '../components/GIthub'
import Music from '../components/Music'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <GIthub />
      <Music />
      <Footer />
      <ScrollTop />
    </div>
  )
}
import React from 'react'
import Navbar from '../components/Navbar1'
import Footer from '../components/Footer'
import NamePage from '../components/NamePage'
import ScrollTop from '../components/ScrollTop'
import Testimonials from '../components/Testimonials'

export default function Testimonial() {
  return (
    <div>
      <Navbar />
      <div className="pages">
        <div className="pages-blok">
          <NamePage />
          <Testimonials />
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  )
}

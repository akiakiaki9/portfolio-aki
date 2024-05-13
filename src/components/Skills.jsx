import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdInformationCircle } from "react-icons/io";

export default function Skills() {
  return (
    <div id="services" className="services">
      <div className="services-sar">
        <h1>SKILLS
          <div className="sar-animate"></div>
        </h1>
      </div>
      <div className="services-blok">
        <Link to='/skills' className="services-blok__section">
          <div className="services-blok__icon">
          </div>
          <b>SMM</b>
          <p>Social Media Marketing, or SMM, is the process of promoting a product or service through social media
            platforms such as Facebook, Instagram, Twitter, and LinkedIn.</p>
          <button><Link>Info <IoMdInformationCircle className='services-blok__section-icon' /></Link></button>
        </Link>
        <Link to='/skills' className="services-blok__section">
          <div className="services-blok__icon">
          </div>
          <b>Frontend Development </b>
          <p>Frontend development is the process of creating the user interface (UI) for web applications or
            websites. It involves working with HTML, CSS, and JavaScript to build interactive and visually
            appealing user interfaces.
          </p>
          <button><Link>Info <IoMdInformationCircle className='services-blok__section-icon' /></Link></button>
        </Link>
        <Link to='/skills' className="services-blok__section">
          <div className="services-blok__icon">
          </div>
          <b>Backend Development</b>
          <p>Backend development involves building and maintaining the server-side of web applications or
            websites. Unlike frontend development, which focuses on the user interface and client-side
            functionality.</p>
          <button><Link>Info <IoMdInformationCircle className='services-blok__section-icon' /></Link></button>
        </Link>
        <Link to='/skills' className="services-blok__section">
          <div className="services-blok__icon">
          </div>
          <b>Testing and Optimization</b>
          <p>Overall, testing and optimization are essential for delivering high-quality software that meets user
            expectations and performs well in various environments. By continuously testing and optimizing
            software throughout the development process.</p>
          <button><Link>Info <IoMdInformationCircle className='services-blok__section-icon' /></Link></button>
        </Link>
      </div>
    </div>
  )
}

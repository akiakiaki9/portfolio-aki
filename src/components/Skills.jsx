import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdInformationCircle } from "react-icons/io";

//npm install react-intersection-observer react-spring (close)

export default function Skills() {

  const skills = [
    {
      id: 1,
      title: 'SMM',
      body: 'Social Media Marketing, or SMM, is the process of promoting a product or service through social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.',
      link: 'https://en.wikipedia.org/wiki/Social_media_marketing'
    },
    {
      id: 2,
      title: 'Frontend Development',
      body: 'Frontend development is the process of creating the user interface (UI) for web applications or websites. It involves working with HTML, CSS, and JavaScript to build interactive and visually appealing user interfaces.',
      link: 'https://en.wikipedia.org/wiki/Front-end_web_development'
    },
    {
      id: 3,
      title: 'Backend Development',
      body: 'Backend development involves building and maintaining the server-side of web applications or websites. Unlike frontend development, which focuses on the user interface and client-side functionality.',
      link: 'https://en.wikipedia.org/wiki/Frontend_and_backend'
    },
    {
      id: 4,
      title: 'Testing and Optimization',
      body: 'Overall, testing and optimization are essential for delivering high-quality software that meets user expectations and performs well in various environments. By continuously testing and optimizing software throughout the development process.',
      link: 'https://en.wikipedia.org/wiki/Web_testing'
    }
  ]

  return (
    <div className="services">
      <div className="services-sar">
        <h1>SKILLS
          <div className="sar-animate"></div>
        </h1>
      </div>
      <div className="services-blok">
        {skills.map(skill => (
          <Link key={skill.id} to='/skills' className="services-blok__section">
            <div className="services-blok__icon">
            </div>
            <b>{skill.title}</b>
            <p>{skill.body}</p>
            <button><a href={skill.link}>Info <IoMdInformationCircle className='services-blok__section-icon' /></a></button>
          </Link>
        ))}
      </div>
    </div>
  )
}



/* 
  const skills = [
    {
      id: 1,
      title: 'SMM',
      body: 'Social Media Marketing, or SMM, is the process of promoting a product or service through social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.',
      link: 'https://en.wikipedia.org/wiki/Social_media_marketing'
    },
    {
      id: 2,
      title: 'Frontend Development',
      body: 'Frontend development is the process of creating the user interface (UI) for web applications or websites. It involves working with HTML, CSS, and JavaScript to build interactive and visually appealing user interfaces.',
      link: 'https://en.wikipedia.org/wiki/Front-end_web_development'
    },
    {
      id: 3,
      title: 'Backend Development',
      body: 'Backend development involves building and maintaining the server-side of web applications or websites. Unlike frontend development, which focuses on the user interface and client-side functionality.',
      link: 'https://en.wikipedia.org/wiki/Frontend_and_backend'
    },
    {
      id: 4,
      title: 'Testing and Optimization',
      body: 'Overall, testing and optimization are essential for delivering high-quality software that meets user expectations and performs well in various environments. By continuously testing and optimizing software throughout the development process.',
      link: 'https://en.wikipedia.org/wiki/Web_testing'
    }
  ]

  return (
    <div className="services">
      <div className="services-sar">
        <h1>SKILLS
          <div className="sar-animate"></div>
        </h1>
      </div>
      <div className="services-blok">
        {skills.map(skill => (
          <Link key={skill.id} to='/skills' className="services-blok__section">
            <div className="services-blok__icon">
            </div>
            <b>{skill.title}</b>
            <p>{skill.body}</p>
            <button><a href={skill.link}>Info <IoMdInformationCircle className='services-blok__section-icon' /></a></button>
          </Link>
        ))}
      </div>
    </div>
  )
}
*/


/* 
import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdInformationCircle } from "react-icons/io";

export default function Skills() {

  const skills = [
    {
      id: 1,
      name: 'SMM',
      body: 'Social Media Marketing, or SMM, is the process of promoting a product or service through social media platforms such as Facebook, Instagram, Twitter, and LinkedIn.',
    },
    {
      id: 2,
      name: 'Frontend Development',
      body: 'Frontend development is the process of creating the user interface (UI) for web applications or websites. It involves working with HTML, CSS, and JavaScript to build interactive and visually appealing user interfaces.',
    },
    {
      id: 3,
      name: 'Backend Development',
      body: 'Backend development involves building and maintaining the server-side of web applications or websites. Unlike frontend development, which focuses on the user interface and client-side functionality.',
    },
    {
      id: 4,
      name: 'Testing and Optimization',
      body: 'Overall, testing and optimization are essential for delivering high-quality software that meets user expectations and performs well in various environments. By continuously testing and optimizing software throughout the development process.',
    }
  ]

  return (
    <div className="services">
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
          <b>Frontend Development</b>
          <p>Frontend development is the process of creating the user interface (UI) for web applications or
            websites. It involves working with HTML, CSS, and JavaScript to build interactive and visually
            appealing user interfaces.
          </p>
          <button><Link>Info <IoMdInformationCircle className='services-blok__section-icon' /></Link></button>
        </Link>
        <Link to='/skills' className="services-blok__section">
          <div className="services-blok__icon">
          </div>
          <b>Backend Development (Strapi)</b>
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
*/
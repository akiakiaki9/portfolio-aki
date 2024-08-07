import React from 'react'
import Navbar from '../components/Navbar1.jsx'
import Footer from '../components/Footer.jsx'
import NamePage from '../components/NamePage.jsx'
import ScrollTop from '../components/ScrollTop.jsx'
import projectvideo1 from '../images/project1vid.mp4'
import projectvideo2 from '../images/video2.mp4'

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="pages">
        <div className="pages-blok">
          <NamePage />
          <div className="project">
            <div className="project-blok">
              <div className="project-blok__section">
                <div className="project-blok__part">
                  <video src={projectvideo1} typeof='video/mp4' autoPlay muted loop playsInline></video>
                </div>
                <div className="project-blok__part">
                  <b>Portfolio Aki</b>
                  <a href="https://akiakiaki9.github.io/portfolio-aki">https://akiakiaki9.github.io/portfolio-aki</a>
                </div>
              </div>
              <div className="project-blok__section">
                <div className="project-blok__part">
                  <video src={projectvideo2} typeof='video/mp4' autoPlay muted loop playsInline></video>
                </div>
                <div className="project-blok__part">
                  <b>SYNTAX сайт услуг</b>
                  <a href="https://syntax-aki.netlify.app">https://syntax-aki.netlify.app</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  )
}
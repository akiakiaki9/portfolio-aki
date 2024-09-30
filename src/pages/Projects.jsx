import React from 'react'
import Navbar from '../components/Navbar1.jsx'
import Footer from '../components/Footer.jsx'
import NamePage from '../components/NamePage.jsx'
import ScrollTop from '../components/ScrollTop.jsx'
import PROJECTS from '../utils/projects.js'

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="pages">
        <div className="pages-blok">
          <NamePage />
          <div className="project">
            <div className="project-blok">
              {PROJECTS.map(project => (
                <div key={project.id} className="project-blok__section">
                  <div className="project-blok__part">
                    <video src={project.video} typeof='video/mp4' autoPlay muted loop playsInline></video>
                  </div>
                  <div className="project-blok__part">
                    <b>{project.title}</b>
                    <a href={project.link}>{project.link}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  )
}
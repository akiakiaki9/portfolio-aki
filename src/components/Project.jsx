import React from 'react'
import { FaGithubAlt } from "react-icons/fa";

export default function Project() {
  return (
    <div className="projects">
      <div className="services-sar">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="projects-blok">
        <h1 className="projects__title">You can find my projects on my Github page</h1>
        <a href="https://github.com/akiakiaki9"><button><FaGithubAlt className='project-icon'/> Github</button></a>
      </div>
    </div>
  )
}

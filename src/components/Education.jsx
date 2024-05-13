import React from 'react'
import { Link } from 'react-router-dom'
import video from '../images/video.mp4'

export default function Education() {
  return (
    <div id="education" className="video-bg">
        <video src={video} type="video/mp4" autoPlay muted loop playsInline></video>
        <div className="effects"></div>
        <div className="video-bg__content">
            <h1 className="video__title">About My Education</h1>
            <p className="video__body">My journey into programming started when I was in high school. I was always
                fascinated by computers and technology</p>
            <button className="video__button"><Link to='/education'>Details</Link></button>
        </div>
    </div>
  )
}
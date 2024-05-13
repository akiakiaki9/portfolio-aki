import React from 'react'
import video1 from '../images/video1.mp4'
import { FaGithubAlt } from "react-icons/fa";

export default function GIthub() {
    return (
        <div className="video-bg">
            <video src={video1} type="video/mp4" autoPlay muted loop playsInline></video>
            <div className="effects"></div>
            <div className="video-bg__content">
                <h1 className="video__title">My Github</h1>
                <p className="video__body">You can find my projects on my Github page</p><br />
                <span className="video__button">
                    <a href="https://github.com/akiakiaki9"><button className='video-button-def'><FaGithubAlt className='project-icon' /> Github</button></a>
                </span>
            </div>
        </div>
    )
}

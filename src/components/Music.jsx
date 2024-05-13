import React from 'react'
import { Link } from 'react-router-dom'
import socialNetwork from '../images/socialNetwork.mp4'

export default function Music() {
    return (
        <div className="video-bg">
            <video src={socialNetwork} type="video/mp4" autoPlay muted loop playsInline></video>
            <div className="effects"></div>
            <div className="video-bg__content">
                <h1 className="video__title">My favorite musics</h1>
                <p className="video__body">Listen my playlist for motivation</p>
                <button className="video__button">
                    <Link to='/musics'><button className='video-button-def'>Go to playlist..</button></Link>
                </button>
            </div>
        </div>
    )
}
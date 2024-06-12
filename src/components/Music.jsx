import React from 'react'
import { Link } from 'react-router-dom'
import socialNetwork from '../images/socialNetwork.mp4'
import { useTranslation } from 'react-i18next'

export default function Music() {

    const { t } = useTranslation()

    return (
        <div className="video-bg">
            <video src={socialNetwork} type="video/mp4" autoPlay muted loop playsInline></video>
            <div className="effects"></div>
            <div className="video-bg__content">
                <h1 className="video__title">{t('musics-title')}</h1>
                <p className="video__body">{t('musics-subtitle')}</p>
                <button className="video__button">
                    <Link to='/musics'><button className='video-button-def'>{t('musics-playlist')}</button></Link>
                </button>
            </div>
        </div>
    )
}
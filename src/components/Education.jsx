import React from 'react'
import { Link } from 'react-router-dom'
import video from '../images/video.mp4'
import { useTranslation } from 'react-i18next'

export default function Education() {

  const { t } = useTranslation();

  return (
    <div id="education" className="video-bg">
      <video src={video} type="video/mp4" autoPlay muted loop playsInline></video>
      <div className="effects"></div>
      <div className="video-bg__content">
        <h1 className="video__title">{t('education-title')}</h1>
        <p className="video__body">
          {t('education-subtitle')}
        </p>
        <button className="video__button"><Link to='/education'>{t('education-details')}</Link></button>
      </div>
    </div>
  )
}
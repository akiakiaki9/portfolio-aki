import React from 'react'
import { Link } from 'react-router-dom';
import { BsTelegram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import adminImage from "../images/admin.jpg"
import { useTranslation } from 'react-i18next';

export default function Header() {

  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-blok">
        <div className="header-blok__section-1">
          <h1 className="header__title">Hi, It's <span className="color-main">Akbar</span></h1>
          <h2 className="header__subtitle">I'm a <span className="header__subtitle-animate"></span></h2>
          <p className="header__body">
            {t('header-subtitle')}
          </p>
          <div className="header-blok-container">
            <a href="https://t.me/dev_aki">
              <BsTelegram className='header-icon' />
            </a>
            <a href="https://vk.com/id848724063">
              <SlSocialVkontakte className='header-icon' />
            </a>
            <a href="https://youtube.com/@akigazzz?feature=shared">
              <FaYoutube className='header-icon' />
            </a>
            <a href="https://github.com/akiakiaki9">
              <FaGithub className='header-icon' />
            </a>
          </div>
          <div className="header-blok-footer">
            <button className="header-blok-footer__btn-1"><Link className='header-blok-footer-link' to='/contacts'>{t('header-contact')}</Link></button>
          </div>
        </div>
        <div className="header-blok__section-2">
          <img src={adminImage} alt="" />
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import { BsTelegram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function Footer() {

  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-blok">
        <div className="footer-blok__container">
          <a href="https://t.me/dev_aki">
            <BsTelegram className='footer-icon' />
          </a>
          <a href="https://vk.com/id848724063">
            <SlSocialVkontakte className='footer-icon' />
          </a>
          <a href="https://youtube.com/@akigazzz?feature=shared">
            <FaYoutube className='footer-icon' />
          </a>
          <a href="https://github.com/akiakiaki9">
            <FaGithub className='footer-icon' />
          </a>
        </div>
        <div className="footer-blok__nav">
          <p>{t('footer-body')}</p>
        </div>
      </div>
      <div className="footer-blok__footer">
        <p>&copy; Akbar Dev | All Rights Reserved | 2024</p>
      </div>
    </footer>
  )
}

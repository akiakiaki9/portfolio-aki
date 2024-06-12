import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Testimonials() {

  const {t} = useTranslation()

  return (
    <div className="test">
      <div className="test-blok">
        <div className="test-blok__section">
          <p>{t('testimonials-page-title')}</p>
          <button><a href="https://t.me/dev_aki">{t('testimonials-page-go')}</a></button>
        </div>
      </div>
      <div className="test-footer">
        <p>{t('testimonials-page-no')}</p>
        <hr style={{color: 'var(--main-color'}} />
      </div>
    </div>
  )
}

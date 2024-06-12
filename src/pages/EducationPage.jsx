import React from 'react'
import Navbar from '../components/Navbar1'
import Footer from '../components/Footer'
import NamePage from '../components/NamePage'
import education1 from '../images/education1.JPG'
import education from '../images/education.JPG'
import ScrollTop from '../components/ScrollTop'
import { useTranslation } from 'react-i18next'

export default function EducationPage() {

    const { t } = useTranslation()

    return (
        <div>
            <Navbar />
            <div className="pages">
                <div className="pages-blok">
                    <NamePage />
                    <div className="education-blok__container">
                        <div className="education-blok__section-1">
                            <div className="education-blok__section-1-part">
                                <b>2023-2024</b>
                                <h2>{t('education-page-title-1')}</h2>
                                <div className='block-animate'></div>
                                <h4 className='mt-10'>{t('education-page-subtitle-1')}</h4><br />
                                <p className='education__body'>{t('education-page-body-1')}</p>
                            </div>
                            <div className="education-blok__section-1-part">
                                <img className='education__img' src={education1} alt="" />
                            </div>
                        </div>
                        <div className="education-blok__section-2">
                            <div className="education-blok__section-2-part">
                                <h2>{t('education-page-title-2')}</h2>
                                <div className='block-animate'></div>
                                <h4 className='mt-10'>{t('education-page-subtitle-2')}</h4><br />
                                <p>{t('education-page-body-2-1')}</p>
                                <p className='education-blok__section-2-p'>
                                    <div className='education__tire'></div>
                                    {t('education-page-body-2-2')}
                                </p>
                                <p className='education-blok__section-2-p'>
                                    <div className='education__tire'></div>
                                    {t('education-page-body-2-3')}
                                </p>
                                <p className='education-blok__section-2-p'>
                                    <div className='education__tire'></div>
                                    {t('education-page-body-2-4')}
                                </p>
                                <p>{t('education-page-body-2-5')}</p>
                            </div>
                            <div className="education-blok__section-2-part">
                                <img className='education__img' src={education} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollTop />
        </div>
    )
}

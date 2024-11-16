import React from 'react'
import Navbar from '../components/Navbar1'
import Footer from '../components/Footer'
import NamePage from '../components/NamePage'
import sertificat from '../images/sertificat.jpg'
import ScrollTop from '../components/ScrollTop'
import { useTranslation } from 'react-i18next'
import MOYSKLAD from '../utils/moysklad'

export default function EducationPage() {

    const { t } = useTranslation()

    return (
        <div>
            <Navbar />
            <div className="pages">
                <div className="pages-blok">
                    <NamePage />
                    <div className="spec-blok__section spec-blok__section-1">
                        <div className="spec-blok__section-part">
                            <b>2023-2024</b>
                            <h2>{t('education-page-title-1')}</h2>
                            <div className='block-animate'></div>
                            <h4 className='mt-10'>{t('education-page-subtitle-1')}</h4><br />
                            <p className='spec__body'>{t('education-page-body-1')}</p>
                        </div>
                        <div className="spec-blok__section-part">
                            <img className='spec__img' src={sertificat} alt="Sertificat" />
                        </div>
                    </div>
                    <div className="spec-blok__section">
                        <div className="spec-blok__section-part-2">
                            {MOYSKLAD.map(item => (
                                <div key={item.id}>
                                    <a href="/pdf/Doc1.pdf" target="_blank" rel="noopener noreferrer">
                                        <img className="moysklad__img" src={item.image} alt="MoySklad" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollTop />
        </div>
    )
};
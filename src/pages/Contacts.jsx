import React, { useState } from 'react'
import Navbar from '../components/Navbar1'
import Footer from '../components/Footer'
import NamePage from '../components/NamePage'
import developer from '../images/Developer.png'
import ScrollTop from '../components/ScrollTop'
import { useTranslation } from 'react-i18next'

export default function Contacts() {

    const {t} = useTranslation()
    const [formData, setFormData] = useState({
        name: "",
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, message } = formData;
        const mailtoLink = `mailto:kaironpubgm@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;

        window.location.href = mailtoLink;
    }

    return (
        <div>
            <Navbar />
            <div className="pages">
                <div className="pages-blok">
                    <NamePage />
                    <div className="contact">
                        <div className="contact-sar"><h1>{t('contacts-page-title')}</h1></div>
                        <form className="contact-blok" onSubmit={handleSubmit}>
                            <div className="contact-blok__section contact-blok__section-1">
                                <input type="text" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required />
                                <input type="email" name='email' placeholder='Enter Your Email For Feedback'
                                    value={formData.email} onChange={handleChange}
                                    required />
                            </div>
                            <div className="contact-blok__section contact-blok__section-2">
                                <textarea placeholder='Your Message' name='message' value={formData.message} onChange={handleChange} required></textarea>
                                <button type='submit'>{t('contacts-page-send')}</button>
                            </div>
                        </form>

                        <div className="contact-blok2">
                            <div className="contact-blok2__sar">
                                <h3>{t('contacts-page-or')}</h3>
                                <a href="https://t.me/aki_developer">https://t.me/aki_developer</a>
                            </div>
                            <div className="contact-blok2__section">
                                <img src={developer} alt="" />
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
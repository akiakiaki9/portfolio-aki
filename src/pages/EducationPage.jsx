import React from 'react'
import Navbar from '../components/Navbar1'
import Footer from '../components/Footer'
import NamePage from '../components/NamePage'
import education1 from '../images/education1.JPG'
import education from '../images/education.JPG'
import ScrollTop from '../components/ScrollTop'

export default function EducationPage() {
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
                                <h2>Programming Course</h2>
                                <div className='block-animate'></div>
                                <h4 className='mt-10'>Introduction to Programming</h4><br />
                                <p className='education__body'>As part of my journey into the world of programming, I completed
                                    an introductory course on programming.
                                    This course provided me with a solid understanding of fundamental programming concepts,
                                    such as variables,
                                    <span className='color-second weight-bold'> loops, conditionals, and functions.</span> Through
                                    hands-on projects and assignments, I gained
                                    practical
                                    experience in writing code and solving problems programmatically.
                                </p>
                            </div>
                            <div className="education-blok__section-1-part">
                                <img className='education__img' src={education1} alt="" />
                            </div>
                        </div>
                        <div className="education-blok__section-2">
                            <div className="education-blok__section-2-part">
                                <h2>Experience</h2>
                                <div className='block-animate'></div>
                                <h4 className='mt-10'>Online Store Development</h4><br />
                                <p>With a strong background in online store development, I have successfully completed
                                    three projects in this field. My experience includes:
                                </p>
                                <p className='education-blok__section-2-p'>
                                    <div className='education__tire'></div>
                                    Developing comprehensive e-commerce solutions for various clients.
                                </p>
                                <p className='education-blok__section-2-p'>
                                    <div className='education__tire'></div>
                                    Implementing essential features such as product catalog, user authentication, shopping cart,
                                    and secure checkout.
                                </p>
                                <p className='education-blok__section-2-p'>
                                    <div className='education__tire'></div>
                                    Utilizing technologies like React.js, Node.js, and MongoDB to create scalable and user-friendly online stores.
                                </p>
                                <p>My expertise in online store development allows me to create engaging and functional e-commerce solutions
                                    that meet the unique needs of clients and users.</p>
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

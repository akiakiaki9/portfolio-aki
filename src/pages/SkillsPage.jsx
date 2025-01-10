import React from 'react'
import Navbar from '../components/Navbar1'
import Footer from '../components/Footer'
import NamePage from '../components/NamePage'

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import ScrollTop from '../components/ScrollTop';
import { useTranslation } from 'react-i18next';

export default function SkillsPage() {

  const {t} = useTranslation()

  return (
    <div>
      <Navbar />
      <div className="pages">
        <div className="pages-blok">
          <NamePage />
          <div className='section1'>

            <div className="container1" id="skills">
              <h1 className="heading">{t('skills-page-title-1')}</h1>
              <div className="Technical-bars">
                <div className="bar">
                  <FaHtml5 className='bar-icon' />
                  <div className="bar-info">
                    <span>HTML</span> <span className='info-info'>/ 90%</span>
                  </div>
                  <div className="progress-line">
                    <div className='progress-span html'></div>
                  </div>
                </div>
                <div className="bar">
                  <IoLogoCss3 className='bar-icon' />
                  <div className="bar-info">
                    <span>CSS</span> <span className='info-info'>/ 85%</span>
                  </div>
                  <div className="progress-line">
                    <div className='progress-span css'></div>
                  </div>
                </div>
                <div className="bar">
                  <FaBootstrap className='bar-icon' />
                  <div className="bar-info">
                    <span>BOOTSTRAP</span> <span className='info-info'>/ 65%</span>
                  </div>
                  <div className="progress-line">
                    <div className='progress-span bootstrap'></div>
                  </div>
                </div>
                <div className="bar">
                  <IoLogoJavascript className='bar-icon' />
                  <div className="bar-info">
                    <span>JavaScript</span> <span className='info-info'>/ 75%</span>
                  </div>
                  <div className="progress-line">
                    <div className='progress-span javascript'></div>
                  </div>
                </div>
                <div className="bar">
                  <FaReact className='bar-icon' />
                  <div className="info">
                    <span>React</span> <span className='info-info'>/ 85%</span>
                  </div>
                  <div className="progress-line">
                    <div className='progress-span react'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container1">
              <h1 className='heading'>{t('skills-page-title-2')}</h1>
              <div className="radial-bars">
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">90%</div>
                  <div className="radial-text">{t('skills-page-1')}</div>
                </div>
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">75%</div>
                  <div className="radial-text">{t('skills-page-2')}</div>
                </div>
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">85%</div>
                  <div className="radial-text">{t('skills-page-3')}</div>
                </div>
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">95%</div>
                  <div className="radial-text">{t('skills-page-4')}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div >
  )
}


/* 
<div className='section'>

            <div className="container1" id="skills">
              <h1 className="heading">Technical skills</h1>
              <div className="Technical-bars">
                <div className="bar">
                  <FaHtml5 />
                  <div className="info">
                    <span>HTML</span>
                  </div>
                  <div className="progress-line html">
                    <span></span>
                  </div>
                </div>  
                <div className="bar">
                  <IoLogoCss3 />
                  <div className="indfo">
                    <span>CSS</span>
                  </div>
                  <div className="progress-line css">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <FaBootstrap />
                  <div className="indfo">
                    <span>BOOTSTRAP</span>
                  </div>
                  <div className="progress-line bootstrap">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <IoLogoJavascript />
                  <div className="indfo">
                    <span>JavaScript</span>
                  </div>
                  <div className="progress-line javascript">
                    <span></span>
                  </div>
                </div>
                <div className="bar">
                  <FaReact />
                  <div className="indfo">
                    <span>React</span>
                  </div>
                  <div className="progress-line react">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container1">
              <h1 className='heading1'>Professional skills</h1>
              <div className="radial-bars">
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">90%</div>
                  <div className="text">Creativity</div>
                </div>
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">65%</div>
                  <div className="text">Communication</div>
                </div>
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">75%</div>
                  <div className="text">Problem Solving</div>
                </div>
                <div className="radial-bar">
                  <svg x="0px" y="0" viewBox='0 0 200 200'>
                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                    <circle className='path path-1' cx="100" cy="100" r="80"></circle>
                  </svg>
                  <div className="percentage">85%</div>
                  <div className="text">Teamwork</div>
                </div>
              </div>
            </div>

          </div>
*/
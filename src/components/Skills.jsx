import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdInformationCircle } from "react-icons/io";
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    {
      id: 1,
      title: t('skills-frontend-title'),
      body: t('skills-frontend-body'),
      link: 'https://en.wikipedia.org/wiki/Front-end_web_development'
    },
    {
      id: 2,
      title: t('skills-testing-title'),
      body: t('skills-testing-body'),
      link: 'https://en.wikipedia.org/wiki/Web_testing'
    }
  ];

  return (
    <div className="services">
      <div className="services-sar">
        <h1>{t('skills-sar')}
          <div className="sar-animate"></div>
        </h1>
      </div>
      <div className="services-blok">
        {skills.map(skill => (
          <Link key={skill.id} to='/skills' className="services-blok__section">
            <div className="services-blok__icon"></div>
            <b>{skill.title}</b>
            <p>{skill.body}</p>
            <button>
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                Info <IoMdInformationCircle className='services-blok__section-icon' />
              </a>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

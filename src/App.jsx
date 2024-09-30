import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import Testimonial from './pages/Testimonial';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Musics from './components/Musics';
import LoadPage from './components/LoadPage';

function App() {
    return (
        <BrowserRouter>
            <LoadPage />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/education' element={<EducationPage />} />
                <Route path='/skills' element={<SkillsPage />} />
                <Route path='/testimonials' element={<Testimonial />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/musics' element={<Musics />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

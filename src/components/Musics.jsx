import React from 'react'
import { useState } from 'react'
import photo from '../images/mark.webp'
import photo1 from '../images/mr.robot.jpg'
import music1 from '../musics/02  In Motion - The Social Network - OST Soundtrack.mp3'
import music2 from '../musics/140.2vvs4__2XRI.mp3'
import music3 from '../musics/140.tTB6HmZNJ5s.mp3'
import music4 from '../musics/Hand_Covers_Bruise_HD_From_the_Soundtrack.mp3'
import music5 from '../musics/Mac Quayle - Mr.  Robot _3.0_x-one2blame.fyc_.mp3'
import music6 from '../musics/Mac Quayle - Mr. Robot _405.3 THUMB CAD_.mp3'
import music7 from '../musics/Mac Quayle - Root@Kali 0Cc - Mr. Robot Season 3 Soundtrack.mp3'
import Navbar1 from './Navbar1'
import NamePage from './NamePage'
import Footer from './Footer'
import ScrollTop from './ScrollTop'
import { useTranslation } from 'react-i18next'

export default function Musics() {

    const [activeMusic, setActiveMusic] = useState(null);

    const musicList = [
        { src: music1, photo: photo, name: 'In Motion', artist: 'Social Network' },
        { src: music2, photo: photo1, name: '140.2vvs4__2XRI', artist: 'Social Network' },
        { src: music3, photo: photo, name: '140.tTB6HmZNJ5s', artist: 'Social Network' },
        { src: music4, photo: photo, name: 'Hand Covers Bruise', artist: 'Trent Reznor & Attribute' },
        { src: music5, photo: photo1, name: 'Mr. Robot _3.0_x-one2blame', artist: 'Mac Quayle' },
        { src: music6, photo: photo, name: 'Mr. Robot _405.3 THUMB CAD', artist: 'Mac Quayle' },
        { src: music7, photo: photo1, name: 'Root@Kali 0Cc - Mr. Robot Season 3', artist: 'Mac Quayle' }
    ]; // Список всех музыкальных элементов

    const playMusic = (musicSrc) => {
        setActiveMusic(musicSrc);
        pauseOtherMusic(musicSrc);
    };

    const stopMusic = () => {
        setActiveMusic(null); // Остановка музыки
    };

    const pauseOtherMusic = (currentMusicSrc) => {
        musicList.forEach((music) => {
            if (music.src !== currentMusicSrc) {
                const audio = document.getElementById(`audio-${music.name}`);
                if (audio) {
                    audio.pause();
                }
            }
        });
    };

    return (
        <div>
            <Navbar1 />
            <div className="pages">
                <div className="pages-blok">
                    <NamePage />
                    <div className='musics'>
                        {musicList.map((music, index) => (
                            <div className="musics-blok" key={index}>
                                <div className="musics-blok__section">
                                    <img className={`musics__photo ${activeMusic === music.src ? 'active' : ''}`} src={music.photo} alt="" />
                                </div>
                                <div className="musics-blok__section">
                                    <b>{music.name}</b>
                                    <p>{music.artist}</p>
                                </div>
                                <div className="musics-blok__section">
                                    <audio id={`audio-${music.name}`} className='musics-blok__audio' controls onPlay={() => playMusic(music.src)} onPause={stopMusic}>
                                        <source src={music.src} type='audio/mpeg' />
                                    </audio>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollTop />
        </div>
    );
}

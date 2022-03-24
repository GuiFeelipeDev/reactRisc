import React from 'react';
import { Link } from 'react-router-dom';
import gui from './img/gui-avatar.jpeg';
import jobs from './img/jobs.jpeg';
import einstein from './img/einstein.png';
import ford from './img/ford.jpg';
import './About.css';

function About() {
    return (
        <>
            <main className='main-home'>
                <div className='main-container'>

                    <div className='upper-part'>

                        <p className='back--arrow'>
                            <div className='arrow--decoration'>
                                <Link to='/' className='link--arrow'>
                                    <ion-icon name="arrow-back-outline"></ion-icon>
                                </Link>
                            </div>
                        </p>
                        <h1 className='header--title'>About Us</h1>
                    </div>
                    <div className='card-part'>
                        <div className='cards'>


                            <div className='cards-ident' >


                                <a href='https://github.com/GuiFeelipeDev'>
                                    <div className='card card--avatar'>
                                        <div className='card--circle circle--avatar'>
                                            <img className='person--avatar' src={gui}></img>
                                        </div>
                                        <h3 className='card--text text--avatar'>Guilherme F. Pereira</h3>
                                        <p className='avatar--subtext'>Front End Engineer</p>
                                        <p className='avatar--learnmore'>Learn more...</p>
                                        <div className='anim--card anim--avatar'>

                                        </div>

                                    </div>
                                </a>
                                <a href='https://pt.wikipedia.org/wiki/Steve_Jobs'>
                                    <div className='card card--avatar'>
                                        <div className='card--circle circle--avatar'>
                                            <img className='person--avatar' src={jobs}></img>
                                        </div>
                                        <h3 className='card--text text--avatar'>Steve Jobs</h3>
                                        <p className='avatar--subtext'>Apple Founder</p>
                                        <p className='avatar--learnmore'>Learn more...</p>
                                        <div className='anim--card anim--avatar'>

                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className='cards-ident'>
                                <a href='https://pt.wikipedia.org/wiki/Albert_Einstein'>

                                    <div className='card card--avatar'>
                                        <div className='card--circle circle--avatar'>
                                            <img className='person--avatar' src={einstein}></img>
                                        </div>
                                        <h3 className='card--text text--avatar'>Albert Einstein</h3>
                                        <p className='avatar--subtext'>Physics Genius</p>
                                        <p className='avatar--learnmore'>Learn more...</p>
                                        <div className='anim--card anim--avatar'>

                                        </div>

                                    </div>
                                </a>
                                <a href='https://pt.wikipedia.org/wiki/Henry_Ford'>
                                <div className='card card--avatar'>
                                    <div className='card--circle circle--avatar'>
                                        <img className='person--avatar' src={ford}></img>
                                    </div>
                                    <h3 className='card--text text--avatar'>Henry Ford</h3>
                                    <p className='avatar--subtext'>Founder of the Ford Motor Company</p>
                                    <p className='avatar--learnmore'>Learn more...</p>
                                    <div className='anim--card anim--avatar'>

                                    </div>

                                </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default About
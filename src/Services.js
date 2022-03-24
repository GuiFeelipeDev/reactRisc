import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

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
                        <h1 className='header--title'>Services</h1>
                    </div>
                    <div className='card-part'>
                        <div className='cards'>


                            <div className='cards-ident' >



                                <div className='card'>
                                    <div className='card--circle'>
                                        <ion-icon name="planet-outline"></ion-icon>
                                    </div>
                                    <h3 className='card--text'>Web</h3>
                                    <div className='anim--card card--color1'>

                                    </div>

                                </div>

                                <div className='card'>
                                    <div className='card--circle'>
                                        <ion-icon name="server-outline"></ion-icon>
                                    </div>
                                    <h3 className='card--text'>Server</h3>
                                    <div className='anim--card card--color2'></div>
                                </div>
                            </div>
                            <div className='cards-ident'>

                                <div className='card'>
                                    <div className='card--circle'>
                                        <ion-icon name="brush-outline"></ion-icon>
                                    </div>
                                    <h3 className='card--text'>Design</h3>
                                    <div className='anim--card card--color3'></div>
                                </div>
                                <div className='card'>
                                    <div className='card--circle'>
                                        <ion-icon name="share-social-outline"></ion-icon>
                                    </div>
                                    <h3 className='card--text'>Social Media</h3>
                                    <div className='anim--card card--color4'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}

export default About
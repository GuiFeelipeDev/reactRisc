import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>

      <main className='main-home'>

        <div className='main-container'>
          <div className='upper-part'>
            <h1 className='header--title'>RISC</h1>
          </div>

          <div className='card-part'>


            <div className='cards'>


              <div className='cards-ident' >


                <Link to='/services'>
                  <div className='card'>
                    <div className='card--circle'>
                      <ion-icon name="briefcase-outline"></ion-icon>
                    </div>
                    <h3 className='card--text'>Services</h3>
                    <div className='anim--card card--color1'>

                    </div>

                  </div>
                </Link>
                <div className='card'>
                  <div className='card--circle'>
                    <ion-icon name="code-slash-outline"></ion-icon>
                  </div>
                  <h3 className='card--text'>Projects</h3>
                  <div className='anim--card card--color2'></div>
                </div>
              </div>
              <div className='cards-ident'>
                <Link to='/about'>
                  <div className='card'>
                    <div className='card--circle'>
                      <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <h3 className='card--text'>About Us</h3>
                    <div className='anim--card card--color3'></div>
                  </div>
                </Link>
                <div className='card'>
                  <div className='card--circle'>
                    <ion-icon name="at-outline"></ion-icon>
                  </div>
                  <h3 className='card--text'>Contact Us</h3>
                  <div className='anim--card card--color4'></div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </main >

    </>
  )
}

export default Home;
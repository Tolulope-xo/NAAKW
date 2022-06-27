import React from 'react'
import hero1 from './assets/man.jpg'
import Nav from './Nav';
import './Hero.css'
function Hero() {
    return (
        <div className="Hero-section">
            <img className="hero-image" src={hero1} alt="Logo1" />

            <Nav />

        </div>
    )
}

export default Hero

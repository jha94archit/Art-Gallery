import React from 'react'
import './Hero.css'
import Button from '../Button/Button'

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-title">
                <h3>The Event 2022</h3>
            </div>
            <div className="text-container">
                <div className="hero-text-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis accusantium nobis officiis odio quod ducimus quibusdam voluptates iusto perspiciatis inventore nihil eligendi nostrum neque, non sapiente quos maxime! Repellat?</p>
                </div>
            </div>
            <div className="hero-button">
                <Button />
            </div>
        </div>
    )
}

export default Hero

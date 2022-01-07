import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header-container">
            <div className="logo-container">
                <div className="logo">
                    <h3>Art Gallery</h3>
                </div>
            </div>
            <div className="nav-options">
                <div className="option">
                    <h4>Disclaimer</h4>
                </div>
                <div className="option">
                    <h4>About</h4>
                </div>
                <div className="option">
                    <h4>Contact Us</h4>
                </div>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import './Footer.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Footer() {
    return (
        <div className="footer-container">
            <div className="copyright-text">
                <p>&copy; 2022 Art Gallery.</p>
            </div>
            <div className="made-text">
                <p> Made with &#10084;&#65039; by Art Gallery</p>
            </div>
            <div className="to-top">
                <ArrowCircleUpIcon />
            </div>
        </div>
    )
}

export default Footer

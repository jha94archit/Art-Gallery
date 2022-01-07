import React from 'react'
import './BottomNote.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function BottomNote() {
    return (
        <div className="note-container">
            <div className="note-title">
                <h3>Join Us...</h3>
            </div>
            <div className="social-icons">
                <div className="social-icon">
                    <InstagramIcon fontSize='large'/>
                </div>
                <div className="social-icon">
                    <FacebookIcon fontSize='large'/>
                </div>
                <div className="social-icon">
                    <TwitterIcon fontSize='large'/>
                </div>
                <div className="social-icon">
                    <YouTubeIcon fontSize='large'/>
                </div>
                <div className="social-icon">
                    <PinterestIcon fontSize='large'/>
                </div>
            </div>
        </div>
    )
}

export default BottomNote

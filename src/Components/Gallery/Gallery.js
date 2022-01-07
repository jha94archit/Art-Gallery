import React from 'react'
import './Gallery.css'
import Category from '../Category/Category'

function Gallery() {
    return (
        <div className="gallery-container" id="gallery">
            <Category title="Watercolor Art" />
            <Category title="Oil Painting" />
            <Category title="Pencil Art" />
        </div>
    )
}

export default Gallery

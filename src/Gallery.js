import React from 'react'
import Header from "./Component/Header"
import Footer from './Component/Footer'
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <Header />
            <br />
            <h1 className="galleryText">Gallery</h1>
            <hr className="galleryLine"></hr>

            <div className="gallery">
                <div><img src="/images/gallery1.jpg" alt="" /></div>
                <div className="v-stretch"><img src="/images/gallery2.jpg" alt="" /></div>
                <div className="h-stretch"><img src="/images/gallery3.jpg" alt="" /></div>
                <div><img src="/images/gallery4.jpg"
                    alt="" /></div>
                <div><img src="/images/gallery5.jpg" alt="" /></div>
                <div className="v-stretch"><img src="/images/gallery6.jpg" alt="" /></div>
                <div className="big-stretch"><img src="/images/gallery7.jpg" alt="" /></div>
                <div><img src="/images/gallery8.jpg" alt="" /></div>
                <div className="h-stretch"><img src="/images/gallery9.jpg" alt="" /></div>
                <div><img src="/images/gallery10.jpg" alt="" /></div>
                <div><img src="/images/gallery11.jpg" alt="" /></div>
                <div><img src="/images/gallery12.jpg" alt="" /></div>
                <div className="v-stretch"><img src="/images/gallery13.jpg" alt="" /></div>
                <div><img src="/images/gallery14.jpg" alt="" /></div>
                <div className="big-stretch"><img src="/images/gallery15.jpg" alt="" /></div>
                <div><img src="/images/gallery16.jpg" alt="" /></div>
                <div className="h-stretch"><img src="/images/gallery17.jpg" alt="" /></div>
                <div><img src="/images/gallery18.jpg" alt="" /></div>
                <div className="big-stretch"><img src="/images/gallery19.jpg" alt="" /></div>
                <div><img src="/images/gallery20.jpg" alt="" /></div>
                <div><img src="/images/gallery21.jpg" alt="" /></div>
            </div>









            <Footer />

        </div>
    )
}

export default Gallery


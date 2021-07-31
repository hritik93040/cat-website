import React from 'react'
import Header from './Component/Header'
import Carousel from './Component/Carousel'
import Cards from './Component/Cards'
import About from './Component/About'
import Newbreeds from './Component/Newbreeds'
import Testimonial from './Component/Testimonial'
import Footer from './Component/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <About/>
            <Newbreeds/>
            <Cards/>
            <Testimonial/>
            <Footer/>
            
        </div>
    )
}

export default Home

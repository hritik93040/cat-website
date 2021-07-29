import React from 'react'
import Header from './Component/Header'
import Carousel from './Component/Carousel'
import Cards from './Component/Cards'
import About from './Component/About'
import Testimonial from './Component/Testimonial'

const Home = () => {
    return (
        <div>
            <Header/>
            <Carousel/>
            <About/>
            <Cards/>
            <Testimonial/>
            
        </div>
    )
}

export default Home

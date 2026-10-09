import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Programs from '../components/Program'
import Trainers from '../components/Trainers'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Programs/>
        <Trainers/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home
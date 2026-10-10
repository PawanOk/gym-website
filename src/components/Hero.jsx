import React from 'react'
import {useEffect,useState } from 'react'
// import gymImage from "../assets/images/Pu.jpg"
// import gymImage1 from "../assets/images/g1.jpg"
// import gymImage2 from "../assets/images/g2.jpg"
// import gymImage3 from "../assets/images/P5.jpg"
import gymImage from "../assets/images/newimg2.jpg"
import gymImage1 from "../assets/images/newimg3.jpg"
import gymImage2 from "../assets/images/GymHeroneww.jpg"
import mobileImage from "../assets/images/Pu.jpg"
import mobileImage1 from "../assets/images/g1.jpg"
import { Link } from 'react-router-dom'

const desktopImages = [gymImage, gymImage1, gymImage2]
const mobileImages = [mobileImage, mobileImage1]
const Hero = () => {
    const [current, setCurrentImage] = useState(0)
    useEffect (()=>{
        const interval = setInterval (() => {
          setCurrentImage((prev) => (prev + 1) % desktopImages.length)
        }, 5000)

         return () => clearInterval(interval)
     }, [])
  return (  

    <section className='relative overflow-hidden bg-black text-white'>
      <picture>
           <source
            media='(max-width:767px)'
           srcSet={mobileImages[current]}
            />
        <img 
         src={desktopImages[current]}
         alt=''
         className=' absolute inset-0 left-0 h-full w-full object-cover md:object-[center_center]'/>
      </picture>
      
        <div className='relative z-10 mx-auto flex min-h-[80vh] flex-col max-w-7xl items-center justify-between gap-12 px-8 py-16 lg:flex-row lg:px-8'>
            <div className='w-full lg:w-1/2'>
                <p className='font-semibold uppercase tracking-widest text-green-500'>
                  WELCOME TO FITNESS HUB
                </p>

                <h1 className='mt-4 text-3xl font-extrabold leading-tight md:text-5xl'>
                    Build Your
                    <br/>
                   < span className='text-green-500'>BEST VERSION</span> 
                </h1>
                <p className='mt-6 max-w-lg text-gray-400'>
                   Train harder, get stronger and transform your body
                    with your professional trainers and modern facilities 
                </p>
                <div className='mt-5'>
                <Link
                 to='/Contact'
                className='mt-8 rounded-md bg-green-500 px-8 py-4 font-bold uppercase tracking-wide text-black transition duration-300 hover:bg-green-400 cursor-pointer'>Join Now</Link>
                </div>
            </div>
            {/* Right Images*/}
            <div className='flex w-full lg:w-1/2 justify-center'>
               <div className='relative h-[400px] w-[320px] lg:h-[500px] lg:w-[500px] overflow-hidden rounded-2xl'>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;
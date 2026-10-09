import React from 'react'
import P5 from "../assets/images/P5.jpg"
import T2 from "../assets/images/T2.jpg"
import g1 from "../assets/images/g1.jpg"
import g2 from "../assets/images/g2.jpg"
import { FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
const Trainers = () => {
  return (
   <section className='bg-gray-900 text-white py-16 px-6'>
       <div className='max-w-6xl mx-auto text-center'>
           <h2 className='text-4xl font-bold mb-4'>Meet Our Trainers</h2>
           <p className='text-gray-300 mb-10'>Train with experienced professionals who help you reach your goals.</p>

           <div className='grid md:grid-cols-3 gap-6'>
              <div className='bg-gray-800 rounded-xl hover:translate-y-2 hover:shadow-2xl overflow-hidden border border-transparent hover:border-red-500 transition-all duration-300'>
                  <img src={g1} alt='Alex Johnsons'
                   className='mt-4 w-48 h-64 hover:scale-110 transition-transform duration-500 object-contain mx-auto'/>
                  <h3 className='text-xl font-semibold mt-4 mb-2'>Alex Johnsons</h3>
                  <p className='text-gray-400 mb-5'>Strength and Conditioning</p>
                  <div className='w-full flex justify-center items-center gap-4 mb-6'>                 
                  <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:scale-110  hover:bg-red-600 transition-colors duration-300'>
                  <FaInstagram size={20}/></a>
                   <a
                  href='#'
                  className='w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-500 hover:text-white hover:scale-110 transition-colors duration-300'>
                    <FaLinkedin size={20}/></a>
                    </div>
              </div>
              <div className=' w-full bg-gray-800 hover:translate-y-2 hover:shadow-2xl rounded-xl overflow-hidden border border-transparent hover:border-red-500 transition-all duration-300'>
                 <img src={g2} alt=''
                 className=' mt-4 w-48 h-64  hover:scale-110 transition-transform duration-500 object-contain mx-auto'/>
                 <h3 className='text-xl font-semibold mt-4 mb-2'>Mike Smith</h3>
                 <p className='text-gray-400 mb-5'>Cardio and Fitness</p>
                 <div className='w-full flex justify-center items-center gap-4 mb-4'>
                 <a
                 href='#'
                 className='text-gray-400 hover:text-red-500 transition-colors duration-300'>
                  <FaInstagram size={20}/>
                 </a>
                 <a 
                 href='#'
                 className='text-gray-400 hover:text-red-500 transition-colors duration-300'
                 >
                 <FaLinkedinIn size={20}/> 
                 </a>
                 </div>
              </div>
              <div className='bg-gray-800 rounded-xl hover:translate-y-2 hover:shadow-2xl overflow-hidden border border-transparent hover:border-red-500 transition-all duration-300'>
                <img src={P5} alt=''
                className='mt-4 w-48 h-64 hover:scale-110 transition-transform duration-500 object-contain mx-auto'/>
                <h3 className='text-xl font-semibold mt-4 mb-2'>Sarah Lee</h3>
                <p className='text-gray-400 mb-5'>Yoga & Flexibility</p>
                <div className='w-full flex justify-center items-center gap-4 mb-4'>
                <a 
                href='#'
                className='text-gray-400 hover:text-red-500 transition-colors duration-300'>
                  <FaInstagram size={20}/>
                </a>
                <a 
                href='#'
                className='text-gray-400 hover:text-red-500 transition-colors duration-300'>
                  <FaLinkedin size={20}/>
                </a>
                </div>
              </div>
           </div>
           <button className='hover:scale-110
             mt-10 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300'>View All Trainers</button>
       </div>
   </section>
  )
}

export default Trainers;

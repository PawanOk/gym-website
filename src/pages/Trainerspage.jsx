import React from 'react'
import Navbar from '../components/Navbar'
import trainer1 from '../assets/images/imgt1.jfif'
import trainer2 from '../assets/images/imgt3.jfif'
import trainer3 from '../assets/images/imgt1.jfif'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const Trainerspage = () => {
  return (
    <div>
    <Navbar/>
    <section className='bg-gray-100 py-20 px-6'>
        {/* Hero */}
        <div className='bg-gray-500 text-white text-center py-10 px-6'>
            <p className='text-red-500 font-semibold tracking-widest mb-4'>OUR EXPERT TEAM</p>

            <h1 className='text-4xl md:text-6xl font-bold mb-6'>TRAIN WITH THE BEST</h1>
            <p className='text-gray-300 max-w-2xl mx-auto text-lg'>
                 Train with experienced professionals who are dedicated
          to helping you achieve your fitness goals.
            </p>
        </div>
        {/* Trainers */}
        {/* <div className='max-w-6xl mx-auto overflow-hidden mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> */}
        <div className='max-w-6xl mx-auto overflow-hidden mt-16'>
            <div className='trainer-track flex gap-8'>
            {/* Trainer1 */}
            <div className='bg-white rounded-2xl shadow-lg p-6 trainer-card'>
                <img 
                  src={trainer1}
                  alt='Alex Johnsons'
                  className='w-full h-80 max-w-lg mx-auto rounded-xl'/>
                <h3 className='text-2xl font-bold'>Alex Johnsons</h3>
                <p className='text-red-500 font-medium mt-2'>Strength and Conditioning</p>
                <p className='text-gray-500 mt-2'>8+ Years Experience</p>

                <p className='text-gray-600 mt-4'> Helping members build strength, confidence and consistency.</p>
                <div className='flex gap-4 mt-6'>
                    {/* Social icons */}
                     <FaInstagram className="text-2xl text-gray-700 cursor-pointer hover:text-red-500" />

                     <FaLinkedin className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
                </div>
            </div>
        
        {/* Trainer2 */}
        <div className='bg-white rounded-2xl shadow-lg trainer-card  p-6 trainer-card-2'>
           <img
            src={trainer2}
            alt='Rubel'
            className='w-full h-80 max-w-sm mx-auto rounded-xl'/>  
            <h3 className='text-2xl font-bold'>John Doe</h3>
            <p className='text-red-500 font-bold '>Cardio and Fitness</p>
            <p className='text-gray-500 font-medium mt-2'>8+ Years Experience</p>
            <p className='text-gray-600 leading-relaxed mt-4'>Helping members improve fitness, stamina and overall performance.</p>
            <div className='flex gap-4 mt-4'>
            <FaInstagram className='text-2xl text-gray-700 cursor-pointer hover:text-red-500'/>
            <FaLinkedin className='text-2xl text-gray-700 cursor-pointer hover:text-blue-600'/>
            </div>
        </div>
          {/* {Trainer3} */}
          <div className='bg-white rounded-2xl shadow-2xl p-6 trainer-card trainer-card-3'>
            <img
              src={trainer3}
              
              alt='Smith'
              className='w-full h-80 max-w-sm mx-auto rounded-xl'/>
              <h3 className='text-2xl font-bold'>David</h3>
              <p className='text-red-500 font-medium '>Personal Training</p>
              <p className='text-gray-700 font-medium mt-2'>7+ years experience</p>
              <p className='text-gray-600 font-medium mt-4 '> Helping members stay motivated, active and consistent with their fitness goals.</p>
               <div className='flex gap-4 mt-4'>
                <FaInstagram className='text-2xl text-gray-700 cursor-pointer hover:text-red-500'/>
                <FaLinkedin className='text-2xl text-gray-700 cursor-pointer hover:text-blue-600'/>
               </div>
          </div>
            {/* Second Set */}
           
            <div className='trainer-group flex gap-8'>
            {/* Trainer1 */}
            <div className='bg-white rounded-2xl shadow-lg p-6 trainer-card'>
                <img 
                  src={trainer1}
                  alt='Alex Johnsons'
                  className='w-full h-80 max-w-lg mx-auto rounded-xl'/>
                <h3 className='text-2xl font-bold'>Alex Johnsons</h3>
                <p className='text-red-500 font-medium mt-2'>Strength and Conditioning</p>
                <p className='text-gray-500 mt-2'>8+ Years Experience</p>

                <p className='text-gray-600 mt-4'> Helping members build strength, confidence and consistency.</p>
                <div className='flex gap-4 mt-6'>
                    {/* Social icons */}
                     <FaInstagram className="text-2xl text-gray-700 cursor-pointer hover:text-red-500" />

                     <FaLinkedin className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
                </div>
            </div>
        
        {/* Trainer2 */}
        <div className='bg-white rounded-2xl shadow-lg trainer-card  p-6 trainer-card-2'>
           <img
            src={trainer2}
            alt='Rubel'
            className='w-full h-80 max-w-sm mx-auto rounded-xl'/>  
            <h3 className='text-2xl font-bold'>John Doe</h3>
            <p className='text-red-500 font-bold '>Cardio and Fitness</p>
            <p className='text-gray-500 font-medium mt-2'>8+ Years Experience</p>
            <p className='text-gray-600 leading-relaxed mt-4'>Helping members improve fitness, stamina and overall performance.</p>
            <div className='flex gap-4 mt-4'>
            <FaInstagram className='text-2xl text-gray-700 cursor-pointer hover:text-red-500'/>
            <FaLinkedin className='text-2xl text-gray-700 cursor-pointer hover:text-blue-600'/>
            </div>
        </div>
          {/* {Trainer3} */}
          <div className='bg-white rounded-2xl shadow-2xl p-6 trainer-card trainer-card-3'>
            <img
              src={trainer3}
              
              alt='Smith'
              className='w-full h-80 max-w-sm mx-auto rounded-xl'/>
              <h3 className='text-2xl font-bold'>David</h3>
              <p className='text-red-500 font-medium '>Personal Training</p>
              <p className='text-gray-700 font-medium mt-2'>7+ years experience</p>
              <p className='text-gray-600 font-medium mt-4 '> Helping members stay motivated, active and consistent with their fitness goals.</p>
               <div className='flex gap-4 mt-4'>
                <FaInstagram className='text-2xl text-gray-700 cursor-pointer hover:text-red-500'/>
                <FaLinkedin className='text-2xl text-gray-700 cursor-pointer hover:text-blue-600'/>
               </div>
          </div>
          </div>
          </div>
          </div>
              
        <div className='text-center mt-20'>
          <p className='text-red-500 font-semibold tracking-widest'>READY TO START</p>
            <h2 className='text-3xl md:text-4xl font-bold mt-3'>TRAIN WITH THE BEST</h2>
              <p className='text-gray-600 max-w-2xl mx-auto mt-4'>
    Our expert trainers are ready to help you build strength,
    improve your fitness and achieve your goals.
  </p>
  <button className='bg-red-500 text-white px-8 py-3 rounded-lg mt-6 cursor-pointer font-semibold hover:bg-red-600'>
    JOIN NOW
  </button>
        </div>
              
            
            
    </section>
    </div>

  )
}

export default Trainerspage;

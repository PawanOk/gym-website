import React from 'react'
import Navbar from '../components/Navbar'

const Programs = () => {
  return (
    <div>
        <Navbar/>
    <section className='bg-gray-950 text-white py-16 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Our Programs</h1>
            <p className='text-gray-400 mb-12'>Choose the right program for your fitness journey</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Programs 1 */}
                <div className='bg-gray-800 hover:translate-y-2 hover:shadow-2xl transition duration-300 p-8 rounded-2xl border border-gray-800'>
                    <h2 className='text-3xl text-white font-bold mb-6'>Weight Training</h2>
                    <p className='text-gray-400 mb-4'>Build strength and muscles with proper training</p>
                    <button className='bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition'>Learn More</button>
                </div>

                {/* Program 2 */}
                <div className='bg-gray-800 hover:translate-y-2 hover:shadow-2xl transition duration-300 p-8 rounded-2xl border border-gray-800'>
                    <h2 className='text-3xl text-white font-bold mb-6'>Cardio Training</h2>
                    <p className='text-gray-400 mb-4'>Improve your stamina and overall fitness</p>
                    <button className='bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition'>Learn More</button>
                </div>
                {/* Program 3 */}
                <div className='bg-gray-800 hover:translate-y-2 hover:shadow-2xl transition duration-300 p-8 rounded-2xl border border-gray-800'>
                    <h2 className='text-3xl text-white font-bold mb-6'>Personal Training</h2>
                    <p className='text-gray-400 mb-4'>Get one-to-one guidance from our trainers</p>
                    <button className='bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition'>Learn More</button>
                </div>
                {/* Program 4 */}

                <div className='bg-gray-800 hover:translate-y-2 hover:shadow-2xl transition duration-300 p-8 rounded-2xl border border-gray-800'>
                    <h2 className='text-3xl text-white font-bold mb-6'>Yoag and Flexibility</h2>
                    <p className='text-gray-400 mb-4'>Improve flexibility, balance and body mobility</p>
                    <button className='bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 transition'>Learn More</button>
                </div>
                {/* CTA */}
                
                <div className=' bg-gray-900 text-white py-12 px-6 rounded-2xl md:col-span-2  text-center'>
                    <h2 className='text-3xl font-bold text-white mb-6'>Ready to Start Your Fitness Journey</h2>
                    <p className='text-gray-400 mb-4'>Choose your program and start building your best version today.</p>
                    <button className='bg-white text-gray-900 px-9 py-3 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 transition'>Join Now</button>
                
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Programs;

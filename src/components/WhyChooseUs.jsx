import { Clock, Dumbbell, UserRound } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <div>
    <section className='bg-black text-white py-16 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-4'>Why Choos Us</h2>
            <p className='text-gray-400 mb-10'>Everything you need to make your fitness journey successful.</p>

            <div className='grid md:grid-cols-3 gap-6'>
                <div className='bg-gray-800 p-8 rounded-xl border border-transparent hover:border-red-500 hover:translate-y-2 hover:shadow-lg transition-all duration-300'>
                  <Dumbbell className='mx-auto mb-4 text-red-500' size={40}/>
                <h3 className='text-xl font-semibold mb-3'>Modern Equipment</h3>
                    <p className='text-gray-400'>
                        Train with quality equipment for better fitness results.
                    </p>
                </div>
                <div className='bg-gray-800 p-8 rounded-xl border border-transparent hover:border-red-500 hover:translate-y-2 hover:shadow-lg transition-all duration-300'>
                     <UserRound className='mx-auto mb-4 text-red-500' size={40}/>
                    <h3 className='text-xl font-semibold mb-3'>Personalized Training</h3>
                    <p className='text-gray-300'>
                         Get workout guidance according to your fitness goals.
                    </p>
                </div>
                <div className='bg-gray-800 p-8 rounded-xl border border-transparent hover:border-red-500 hover:transition-all hover:shadow-lg duration-300'>
                      <Clock className='mx-auto mb-4 text-red-500' size={40}/>
                    <h3 className='text-xl font-semibold mb-3'>Flexible Timings</h3>
                    <p className='text-gray-300'> Workout at convenient timings that fit your daily routine.</p>
                </div>
            </div>
        </div>
    </section>
    <section className='bg-gradient-to-red from-red-700 via-red-700 to bg-red-900 text-white py-20'>
        <div className='max-w-4xl mx-auto text-center px-6'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6'>Ready to Transform Your Body?</h2>

        <p className='text-red-100 text-lg mb-8'>Start your fitness journey today and become the best version of yourself.</p>

        <Link 
         to="/pricing"
         className=' inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-110 hover:translate-y-1 hover:shadow-lg transition-all duration-300'>
            Join Now
        </Link>
        </div>
    </section>
    </div>
  )
}

export default WhyChooseUs;

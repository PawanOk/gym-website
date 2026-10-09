import React from 'react'
import Navbar from '../components/Navbar';

const Pricing = () => {
  return (
    <div>
        <Navbar/>
    <section className='bg-gray-950 text-white py-16 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Pricing Plans</h1>
            <p >Choose your plans for your fitness goal</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Basic Plan */}
                <div className='bg-gray-900 p-8 hover:translate-y-2 hover:shadow-2xl transition duration-300 rounded-2xl border border-gray-800'>
                    <h2 className='text-2xl font-bold mb-4'>Basic</h2>
                    <p className='text-3xl font-bold mb-6'>₹999 / Month</p>
                    <p className='text-gray-300 mb-3'>Gym Access</p>
                    <p className='text-gray-300 mb-6'>Basic Equipment</p>
                    <button className='scale-105 w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition'>Choose Plans</button>
                </div>

                {/* Standard Plan */}

                <div className='bg-gray-900 p-8 hover:translate-y-2 hover:shadow-2xl transition duration-300 rounded-2xl border border-gray-800'>
                    <span className='inline-block bg-white text-gray-900 text-sm font-semibold px-4 py-1 rounded-full mb-4'>Most Popular</span>
                    <h2 className='text-2xl font-bold mb-4'>Standard</h2>
                    <p className='text-3xl font-bold mb-6'>₹1499 / Month</p>
                    <p className='text-gray-300 mb-6'>Gym Access</p>
                    <p className='text-gray-300 mb-6'>Personal Training</p>
                    <button className='border-gray-500 scale-105 w-full bg-white text-gray-900 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition'>Choose Plans</button>
                </div>

                {/* Premium Plan */}
                <div className='bg-gray-900 p-8 hover:translate-y-2 hover:shadow-2xl transition duration-300  rounded-2xl border border-gray-800'>
                    <h2 className='text-2xl font-bold mb-4'>Premium</h2>
                    <p className='text-3xl font-bold mb-2'>₹1999 / Month</p>
                    <p className='text-gray-300 mb-6'>Gym Access</p>
                    <p className='text-gray-300 mb-3'>Personal Training</p>
                    <p className='text-gray-300 mb-2'>Diet Plan</p>
                    <button className='w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition'>Choose Plans</button>
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}

export default Pricing;

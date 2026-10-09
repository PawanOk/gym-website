import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
  return (
    <div>
        <Navbar/>
    <section className='min-h-screen bg-gray-900 text-white py-16 px-6'>
        <div className='max-w-5xl mx-auto text-center'>
            <p className='text-red-500 font-semibold uppercase tracking-widest'>Get In Touch</p>
            <h1 className='text-4xl md:text-5xl font-bold mt-3 mb-4'>Let's Start Your Fitness Journey</h1>
            <p className='text-gray-400 max-w-2xl mx-auto mb-12'>Have questions about our memberships, personal training or fitness programs?
      Our team is here to help you take the next step.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='mx-auto'>
                    <h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
                    <p className='text-gray-400 leading-relaxed mb-8'>
                         Have questions about our gym, membership or training programs?
            Feel free to contact us.
                    </p>
                    <div className='mb-6'>
                        <p className='text-red-500 font-semibold mb-1'>Location</p>
                        <p className='text-gray-300'>Varanasi, Uttar Pradesh</p>
                    </div>
                    <div className='mb-6'>
                        <p className='text-red-500 font-semibold mb-1'>Phone</p>
                        <p className='text-gray-300'>+91 XXXXX XXXXX</p>
                    </div>
                    <div className='mb-6'>
                        <p className='text-red-500 font-semibold mb-1'>Email</p>
                        <p className='text-gray-300'>info@fitnesshub.com</p>
                    </div>
                    <div className='mb-6'>
                        <p className='text-red-500 font-semibold mb-1'>Opening Hours</p>
                        <p className='text-gray-300'>Mon - Sat: 6:00 AM - 10:00 PM</p>
                    </div>
                    <div className='flex ml-30 gap-4 mt-4 mx-auto'>
                        <FaInstagram className='text-2xl text-gray-300 hover:text-red-500 cursor-pointer transition'/>
                        <FaFacebookF className='text-2xl text-gray-300 hover:text-red-500 cursor-pointer transition'/>
                    
                    <a 
                    href='https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20about%20your%20gym.'
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3 text-gray-300 hover:text-green-400 transition mb-6'
                    >
                     <FaWhatsapp className='text-2xl'/>
                      <span>Chat on WhatsApp</span>

                    </a>
                    </div>
                    
            </div>
            <form
              onSubmit={(e) =>{
                e.preventDefault()
                setSubmitted(true)
                e.target.reset()

                setTimeout(() =>{
                    setSubmitted(false)
                }, 3000)
              }}
            className='bg-slate-800 p-8 rounded-xl shadow-xl space-y-5'>
                <h2 className='text-3xl font-bold mb-2'>Send Us a Message</h2>
                <p className='text-gray-400 mb-6'> Fill out the form and our team will get back to you soon.</p>
                <input 
                type='text' 
                placeholder='Your Name'
                className='w-full px-4 py-3 focus:ring- focus:border-red-500 bg-slate-700 text-white rounded-lg border border-transparent outline-lg outline-none  focus:ring-red-500'/>

                <input 
                type='email' 
                placeholder='Your Email'
                className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg outline-lg outline-none focus:ring-2 focus:ring-red-500'/>

                <input 
                type='tel'
                 placeholder='Your Phone'
                 className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg outline-lg outline-none focus:ring-2 focus:ring-red-500'/>

                <textarea 
                placeholder='Your Message'
                rows="5"
                className='w-full px-4 py-3 bg-gray-700 text-white rounded-lg outline-lg outline-none focus:ring-2 focus:ring-red-500 resize-none'
                ></textarea>
                {submitted && (
                    <p className='text-green-400 text-sm font-medium'>Message sent successfully</p>
                )}
                <button
                 type='submit'
                 className='w-full font-semibold bg-red-500 text-white px-4 py-3  hover:shadow-2xl hover:scale-110 rounded-lg hover:bg-red-700 transition-all duration-300'>Send Message</button>

            </form>
            </div>
            <div className='mt-16'>
                <h2 className='text-3xl font-bold text-center mb-6'>Find Us Here</h2>
                <iframe 
                  src='https://www.google.com/maps?q=Varanasi%20Uttar%20Pradesh&output=embed'
                  className='w-full h-80 rounded-xl border-0'
                  loading='lazy'></iframe>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact; 

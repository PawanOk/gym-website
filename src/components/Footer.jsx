import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black px-6 py-12 text-white'>
        <div className='mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4'>
        {/* Brand */}

        <div>
            <h2 className='text-2xl font-bold'>
                FITNESS <span className=' text-green-500'>Hub</span>
            </h2>

            <p className='mt-4 text-gray-400'>
            Train harder. Get stronger . Become your best version
            </p>
        </div>
          {/*Quick Links */}
            <div>
            <h3 className='text-lg font-bold'>Quick Links</h3>
                <div className='mt-4 flex flex-col gap-3 text-gray-400'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/programs">Programs</a>
                    <a href="/trainers">Trainers</a>
                </div>
            </div>
            {/* Contact */}

            <div>
                <h3 className='text-lg font-bold'>Contact</h3>
                <div className='mt-4 space-y-3 text-gray-400'>
                    <p>Varanasi, India</p>
                    <p>91 9140165040</p>
                    <p>fit@gmail.com</p>
                </div>
            </div>
            {/* Social */}

            <div>
                <h3 className='text-lg font-bold'>Follow Us</h3>

                <div className='mt-4 flex gap-4 text-gray-400'>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                </div>
            </div>

        </div>
        <div className='mx-auto mt-10 max-w-7xl border-t border-zinc-800 pt-6 text-center text-sm text-gray-500'>
            @ 2026 Fitness Hub. All Rights Reserved
        </div>
    </footer>
  );
}

export default Footer;
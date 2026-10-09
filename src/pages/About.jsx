import React from 'react'
import Navbar from '../components/Navbar'
import gymImage from "../assets/images/T1.jpg"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <Navbar/>
      <section className='bg-black px-6 py-24 text-center text-white'>
        <p className='font-semibold uppercase tracking-widest text-green-500'>
          ABOUT US
        </p>
        <h1 className='mt-4 text-4xl font-extrabold md:text-4xl'>
          We Build Stronger
        </h1>
        <p className='mx-auto mt-6 max-w-2xl text-gray-400'>
          Fitness Hub is more than just a gym. We help you build strength,
    confidence and a healthier lifestyle.
        </p>

      </section>
      <section className='bg-zinc-900 px-6 py-20 text-white'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2'>

          {/*Images*/}
           <div>
                <img
                  src={gymImage}
                  alt='Fitness Hub'
                  className='h-[450px] w-full rounded-2xl object-contain'
                />
           </div>
           <div>
            <p className='font-semibold uppercase tracking-widest text-green-500'>
              OUR STORY
            </p>
            <h2 className='mt-4 text-3xl font-bold md:text-4xl'>
              More Than Just a Gym
            </h2>
            <p className='mt-6 leading-7 text-gray-400'>
               Fitness Hub was created to help people become stronger, healthier
        and more confident. Our goal is to provide a supportive environment
        where every member can work toward their fitness goals.
            </p>
           </div>

        </div>
      </section>
      <section className='bg-black px-6 py-20 text-white'>
        <div className='mx-auto max-w-7xl text-center'>
          <p className='font-semibold uppercase text-green-500'>
            WHY CHOOSE US
          </p>
          <h2 className='mt-4 text-3xl font-bold md:text-4xl'>
              My Fitenss Hub
          </h2>

          <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
             <div className='rounded-xl bg-zinc-900 p-8'>
              <h3 className='text-xl font-bold'>Expert Trainers</h3>
              <p className='mt-4 text-gray-400'>
                Get guidance from experienced fitness professionals.
              </p>

             </div>
             <div className='rounded-xl bg-zinc-900 p-8'>
                <h3 className='text-xl font-bold'>Modern Equipment</h3>
                <p className='mt-4 text-gray-400'>
                      Train with quality equipment designed for better results.
                </p>

             </div>
             <div className='rounded-xl bg-zinc-900 p-8'>
                <h3 className='text-xl font-bold'>Personal Training</h3>
                <p className='mt-4 text-gray-400'>
                    Follow personalized workouts based on your fitness goals.
                </p>
             </div>
             <div className='rounded-xl bg-zinc-900 p-8'>
                  <h3 className='text-xl font-bold'>Friendly Community</h3>
                  <p className='mt-4 text-gray-400'>
                      Stay motivated with a supportive fitness community.
                  </p>
             </div>
          </div>
        </div>
      </section>
      <section className='bg-green-500 px-6 py-20 text-center text-black'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-3xl font-extrabold md:text-4xl'>
            Ready Transform Your Body
          </h2>
          <p className='mx-auto mt-1 max-w-2xl text-lg'>
            Start your fitness journey today with fitness Hub and become the 
            strongest version of yourself.
          </p>
            </div>
            <div className='mt-7'>
            <Link
            to='/Contact'
           className=' rounded-md bg-red-500 px-8 py-4 font-bold uppercase tracking-wide text-black transition duration-300 hover:bg-pink-400 hover:text-white cursor-pointer'>Join Now</Link>
        </div>


      </section>
    </div>
  )
}

export default About;
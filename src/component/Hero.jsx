import React , { Fragment }from 'react'
import Animated from './utils/Animated'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

export default function Hero() {
  return (
    <Fragment>
        <section id='home' className='relative min-h-screen flex items-center justify-center pt-16 pb-20'>
              <div className="absolute inset-0 bg-[url('/assets/DD.jpg')] bg-cover bg-center bg-no-repeat"></div>

                    <div className='absolute inset-0'></div>
                    <div className='relative z-10 container mx-auto px-6 flex flex-column md:flex-row items-center'>
                        <div className='flex-1 text-center md:text-left'>
                            <h3 className='text-lg font-light capitalize-wide text-teal-500'>
                                I'm Rishabh Singh...
                            </h3>
                            <Animated/>

                            <p className='mt-4 text-gray-300 max-w-xl'>
                                I create beautiful, functional website and applications with modern technologies. Let's works together your ideas to life. 
                            </p>
                            <div className='mt-6 flex flex-wrap gap-4 text-sm font-medium text-white'>
                                <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>Web Design</span>
                                <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>Frontend Developer</span>
                                <span className='px-4 py-2 bg-white/10 backdrop-blur-md rounded-full'>UI UX Design</span>
                            </div>
                            <div className='flex gap-5 mt-8 justify-center md:justify-start'>
                                    <a className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors' href="https://www.facebook.com/share/1S93YzovxU/"  rel="noopener noreferrer">
                                    <FaFacebook/>
                                    </a>
                                    <a className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors' href="https://wa.me/91902639332"  rel="noopener noreferrer">
                                    <BsWhatsapp/>
                                    </a>
                                    <a className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors' href="https://www.linkedin.com/in/rishabh-singh-50795a289/"  rel="noopener noreferrer">
                                    <LiaLinkedin/>
                                    </a>
                                    <a className='p-3 bg-white/10 rounded-full hover:bg-teal-400 transition-colors' href="https://x.com/Rishabh23312016"  rel="noopener noreferrer">
                                    <BsTwitter/>
                                    </a>
                            </div>
                                <div className='mt-8 flex flex-col  sm:flex-row gap-4'>
                                    <a className='px-6 py-2 cursor-pointer text-sm rounded-full bg-gradient-to-r from-teal-400 to-teal-700 font-light
                                    text-white hover:opacity-70 transition-opacity' href="https://github.com/Rishabh-Singh-23?tab=repositories">View My Works</a>
                                    <a className='px-6 py-2  cursor-pointer text-sm rounded-full bg-white/10 backdrop-blur-md font-light
                                    text-white hover:opacity-70 transition-opacity' href="/assets/Rishabh__Res.pdf">Download CV</a>
                                    </div>
                        </div>
                    </div>
                
        </section>
        
    </Fragment>
  )
}

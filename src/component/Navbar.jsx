import React, { Fragment , useState , useEffect} from 'react'
import { navItems } from '../data/Data'

export default function Navbar() {

    const [activeSection , setActiveSection] = useState('home')
   useEffect(()=>{
    const handlescroll =()=>{
      const sections = document.querySelectorAll('section')
      let current = 'home'

      sections.forEach((section)=>{
        const sectionTop = section.offsetTop
        if(window.pageYOffset>=sectionTop -200){
          current = section.id
        }
    })
     setActiveSection(current)
    }
   window.addEventListener('scroll', handlescroll)
   return()=> window.removeEventListener("scroll", handlescroll)
   })


  return (
    
       <Fragment>
        <nav className='fixed bg-transparent top-0 w-full py-2 z-50 backdrop-blur-sm border-b border-white/20 px-3 transition-all'>
        <div className='container mx-auto flex items-center justify-between px-6'>
            <div className='text-2xl text-outline font-bold'>Coder</div>
            <ul className='hidden md:flex space-x-8 text-white text-sm font-light uppercase'>
                {
                    navItems.map((item)=>(
                        <li className={`hover:text-teal-500 transition-colors cursor-pointer ${activeSection === item.id?"text-teal-400":""} `} >
                            {item.label}
                        </li>
                    ))
                }
            </ul>
            <button className='ml-4 px-5 py-1 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all'>Hire Me</button>
        </div>
        </nav>
    </Fragment>
   
   
  )
}


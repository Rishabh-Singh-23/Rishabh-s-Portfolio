import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2d]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
          About <span className="text-outline">ME</span>
        </h2>

        <p className="text-gray-500 text-center mb-12">
          Get to know more about my background and experience.
        </p>
        <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Who am I</h3>
            <p className="text-slate-300 mb-4">
              I'm a passionate Web Developer and UI/UX designer with over 5
              years of experience creating digital experience that user love. I
              specialize in frontend development and have worked with various
              Companies and startup.
            </p>
            <p className="text-slate-300">
              When I'm not coding, you can find me hiking, reading tech blogs,
              or experimenting with new design tools. I believe in continuous
              learning learning and staying updated with the latest industry
              trends.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p>Name:</p>
                <p className="font-medium text-white">Rishabh Singh</p>
              </div>
              <div>
                <p>Email:</p>
                <p className="font-medium text-white">ris45817@gmail.com</p>
              </div>
              <div>
                <p>Phone No:</p>
                <p className="font-medium text-white">9026039332</p>
              </div>
              <div>
                <p>Availability:</p>
                <p className="font-medium text-white">Full Time / Freelancer</p>
              </div>
            </div>     
          </div>
          <div>
            <h3 className="text-sl font-semibold mb-4 text-white">My Internship</h3>
         <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-white">
                    MERN Stack Trainer
                  </h4>
                  <p className="text-teal-400 text-sm">Ducat Training Center</p>
                </div>
              
              <span className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm">
                June 2025 - December 2025
              </span>
            </div>
          </div> 
           <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-white">
                    Web Development Intern
                  </h4>
                  <p className="text-teal-400 text-sm">Unified Mentor (Remote)</p>
                </div>
              
              <span className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm">
                July 2024- August 2024
              </span>
            </div>
          </div>
           <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-white">
                    Web Development Intern
                  </h4>
                  <p className="text-teal-400 text-sm">Internsala (Remote)</p>
                </div>
              
              <span className="px-3 py-1 bg-teal-400/10 text-teal-400 rounded-full text-[10px] sm:text-sm">
                October 2023- December 2023 
              </span>
            </div>
          </div> 
          </div> 
          </div>
          </div>
          
          </div>
          
        </div>    
      </div>
    </section>
  );
}

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dl2v355",
      "template_pwk0sck",
      e.target,
      "Vj6ygD79yy9ZAyTqc"
    )
    .then(() => {
      alert("Message sent to ris45817@gmail.com ✅");
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-r from-[#01191d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
          Get In <span className="text-outline">Touch</span>
        </h2>

        <p className="text-gray-500 text-center mb-12">
          The tools and technologies I use to bring ideas to life.
        </p>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-1 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
            <div>
                <h3 className="text-xl font-semibold mb-6 text-white">Contact Details</h3>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20">
                        <IoLocationSharp className="text-white "/>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Location</h4>
                            <p className="text-slate-300">Noida , UP</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20">
                        <MdEmail className="text-white "/>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Email</h4>
                            <p className="text-slate-300">ris45817@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full mr-4 border border-white/20">
                        <PiPhone className="text-white"/>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Phone</h4>
                            <p className="text-slate-300">9026039332</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
                    <div className="flex gap-4">
                        <a className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20"
                        href="https://www.instagram.com/___rishabh___singh_23__?igsh=NW94eDVtN2RvNTJz"  rel="noopener noreferrer">
                        <FaInstagram/>
                        </a>

                        <a className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20"
                        href="https://www.linkedin.com/in/rishabh-singh-50795a289/"  rel="noopener noreferrer">
                        <FaLinkedin/>
                        </a>

                        <a className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20"
                        href="https://x.com/Rishabh23312016"  rel="noopener noreferrer">
                        <FaTwitter/>
                        </a>

                        <a className="p-3 bg-white/10 backdrop-blur-2xl rounded-full hover:bg-teal-500 text-white border border-white/20" href="https://www.facebook.com/share/1S93YzovxU/"  rel="noopener noreferrer">
                        <FaFacebook/>
                        </a>

                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-6 text-white ">Send me a message</h3>
                <form onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label htmlFor="" className="block mb-2 text-slate-300 ">Your Name</label>
                        <input  type="text" className="w-full px-4 py-2 bg-white/10 text-white placeholder:text-slate-400 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400" name="name" />
                    </div>

                     <div>
                        <label htmlFor="" className="block mb-2 text-slate-300 ">Email</label>
                        <input type="email" className="w-full px-4 py-2 bg-white/10 text-white placeholder:text-slate-400 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400" name="email" />
                    </div>

                     <div>
                        <label htmlFor="" className="block mb-2 text-slate-300 ">Subject</label>
                        <input  type="text" className="w-full px-4 py-2 bg-white/10 text-white placeholder:text-slate-400 rounded-lg border border-white/10 focus:ring-3 focus:ring-teal-400" name="subject"/>
                    </div>

                     <div>
                        <label htmlFor="" className="block mb-2 text-slate-300 ">Message</label>
                       <textarea  className="w-full px-4 py-2 bg-white/10 rounded-lg text-white placeholder:text-slate-400 border border-white/10 focus:ring-3 focus:ring-teal-400" name="message" required></textarea>

                    </div>

                    <button type="submit" className="px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white">Send Message</button>

                </form>
            </div>
            </div>


      </div>
    </section>
  );
}

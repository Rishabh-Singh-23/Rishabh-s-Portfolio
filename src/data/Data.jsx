import React, { useState, useEffect } from "react";
// import AnimatedRoleTitles from "./AnimatedRoleTitles";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
// import { div } from "framer-motion/client";
import { IoIosStarOutline } from "react-icons/io";

export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "SASS", icon: <FaSass className="text-pink-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Next JS", icon: <RiNextjsFill className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
      {
        // name: "GSAP",
        icon: <MdOutlineSettingsApplications className="text-green-500" />,
      },
      {
        // name: "Material UI",
        icon: <GiMaterialsScience className="text-blue-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: "Spring Boot", icon: <SiSpring className="text-green-600" /> },
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "Express JS", icon: <SiExpress className="text-gray-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      // { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      // { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      // { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      { name: "Python", icon: <DiPython className="text-yellow-400" /> },
      // { name: "C#", icon: <TbBrandCSharp className="text-purple-400" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      // { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      // { name: "Vercel", icon: <SiVercel className="text-white" /> },
      // { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Rishikesh Kr. Singh",
    position: "CEO, Rishikesh Rishabh Cnstruction & Electrical",
    content:
      '"Rishabh delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."',
    image:
      "https://i.ibb.co/0pqq13bd/IMG-20240523-222822.jpg",
  },
  {
    name: "Devyansh Rai",
    position: "Product Manager, InnovateCo",
    content:
      '"Working with Rishabh was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."',
    image:
      "https://i.ibb.co/tfC6Pkv/IMG20231002210738.jpg",
  },
  {
    name: "Osh Kushwaha",
    position: "Founder, StartupHub",
    content:
      '"Rishabh\'s technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"',
    image:
      "https://i.ibb.co/9kr6nk7b/IMG20231127193346.jpg",
  },
];

// Portfolio data
export const portfolioItems = [
  {
    title: "Gemini Clone",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
  },
  {
    title: "Calculator",
    category: "UI/UX Design",
    image:
      "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg",
  },
  {
    title: "Country Info",
    category: "Web Development",
    image:
      "https://cdn.community.kodular.io/original/3X/f/b/fb047958d4615a4ee3954c9715518676d9d10bd0.png",
  },
];
export const experiences = [
  {
    id: 1,
    company: "Ducat Training Center",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "MERN Stack Trainer",
    period: "June 2025 - Present",
    description:
      "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Next JS",
    ],
  },
  {
    id: 2,
    company: "Unified Mentor (Remote)",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Web Developer Intern ",
    period: "July 2024 - August 2024",
    description:
      "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using modern technologies.",
    skills: ["HTML",
      "CSS",
      "JavaScript",],
  },
];
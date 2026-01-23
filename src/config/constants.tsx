import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { ExperienceProps, SocialLinksType } from "./types";
export const FEATURED_PROJECTS = [
  {
    title: "AI Dermatologist Web App",
    img: "/images/projects/home page.png",
    summary:
      "AI Dermatologist preict skin diseases, Give answer to related queries, Medicine Recommendation, Appointment Booking with physical Doctors, Real time chat between doctor and patient.",
    github: "https://github.com/Sheeza-Qamar/AI-Dermatologist",
    tech: ["React", "Node", "Express", "PostgreSQL", "ML"],
  },
  {
    title: "Recipie Finder Web App",
    img: "/images/projects/recipies.png",
    summary:
      "Built a responsive and mobile friendly recipe finder website with search, filter and view details of recipe features. It processes 1000+ recipes data from CSV file which include recipes from different continents. Built pagination system and responsive design using Bootstrap ensuring smooth experience. ",
    link: "https://recipie-finder-chi.vercel.app/recipes.html",
    github: "https://github.com/Sheeza-Qamar/Recipie-finder",
    tech: ["Html", "CSS", "JavaScript", "API"],
  },
  {
    title: "Quran Reading App",
    img: "/images/projects/Quran.png",
    summary:
      "Developed a fully functional and optimized Quran Reading app using React Native. Integrated API for dynamic Quran data fetching, including Surahs and Ayahs with their translation. Implemented search functionality for specific Surahs or Ayahs and used AsyncStorage to enable offline access. Added customizable settings for font size and color mode (light/dark themes).  ",
    github: "https://github.com/Sheeza-Qamar/Quran-App",
    tech: ["React Native", "AsyncStorage", "RestAPI"],
  },
  {
    title: "Doctor Appointment Booking App",
    img: "/images/projects/doc.jpeg",
    summary:
      "Developed a mobile based doctor appointment booking app using React Native. Allows patients to book appointment with registered doctors based on availability. Integrated Supabase for backend services including authentication, data storage. Secured API routes and enhanced backend performance using Express.js middleware. ",
    github: "https://github.com/Sheeza-Qamar/Doctor-Appoitment-Booking-App",
    tech: ["React Native", "Supabase", "Express.js"],
  }
];
export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "Skills", link: "#skills" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
];
export const SOCIAL_LINKS: SocialLinksType[] = [
  { href: "https://github.com/Sheeza-Qamar", Icon: <IoLogoGithub size={25} /> },
  { href: "https://www.linkedin.com/in/sheeza-qamar/", Icon: <BsLinkedin size={25} color="#0a66c2" /> },
];
export const SKILLS = [
  {
    img: "/images/skills/react.png",
    title: "React JS"
  },
  {
    img: "/images/skills/javascript.png",
    title: "Javascript"
  },
  {
    img: "/images/skills/python.png",
    title: "Python"
  },
  {
    img: "/images/skills/fastApi.png",
    title: "FastAPI"
  },
  {
    img: "/images/skills/node.png",
    title: "Node JS"
  },
  {
    img: "/images/skills/tensorflow.svg",
    title: "TensorFlow"
  },
  {
    img: "/images/skills/pandas.png",
    title: "Pandas"
  },
  {
    img: "/images/skills/numpy.svg",
    title: "Numpy"
  },
  {
    img: "/images/skills/postgresql.png",
    title: "PostgreSQL"
  },
  {
    img: "/images/skills/mongodb.png",
    title: "Mongo DB"
  },
  {
    img: "/images/skills/sql.png",
    title: "SQL"
  },
  {
    img: "/images/skills/css.png",
    title: "CSS"
  },
  {
    img: "/images/skills/html.png",
    title: "HTML"
  },
  {
    img: "/images/skills/git.png",
    title: "GitHub"
  },
  {
    img: "/images/skills/linux.png",
    title: "Linux"
  },
  {
    img: "/images/skills/cpp.png",
    title: "CPP"
  }
]
export const EDUCATION_DATA = [
  {
    title: "Bachelor of Computer Science",
    date: "Jan 2022 - Dec 2025",
    location: "Comsats University Islamabad, Lahore Campus",
    icon: React.createElement(LuGraduationCap),
    info: "CGPA: 3.52 / 4.0",
  },
]
export const EXPERIENCE_DATA: ExperienceProps[] = [
  {
    id: 'FreelanceFullStack',
    title: "Freelance Full Stack Developer",
    company: "",
    label: 'Freelance Full Stack Developer',
    period: "Nov 2023 - Jul 2024",
    details: [
      "Architected and maintained scalable RESTful APIs using Node.js and Express.js to handle core backend business logic efficiently.",
      "Implemented secure authentication workflows, role-based access control (RBAC), and protected API endpoints to ensure data integrity and user security.",
      "Worked closely with clients to gather requirements, analyze business needs, and translate them into robust, production-ready technical solutions."
    ]
  },
  {
    id: 'FrontendDeveloper',
    title: "Frontend Developer (Project-Based)",
    company: "",
    label: 'Frontend Developer (Project-Based)',
    period: "Aug 2024 - Sep 2024",
    details: [
      "Designed UI screens in Figma and implemented reusable frontend components using React.js.",
      "Integrated frontend components with backend APIs to ensure seamless data flow.",
      "Focused on usability, responsiveness, and performance optimization."
    ]
  },
];

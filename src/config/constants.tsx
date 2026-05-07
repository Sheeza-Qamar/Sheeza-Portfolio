import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { ExperienceProps, SocialLinksType, SkillType } from "./types";
export const FEATURED_PROJECTS = [
  {
    title: "Premium Beverages ERP Dashboard",
    category: "development",
    img: "/images/projects/premium-beverages-dashboard.png",
    summary:
      "Built a production-grade ERP dashboard for Premium Beverages using Next.js and TypeScript, covering clients, inventory, production, orders, billing, payments recovery, ledger, and expense management with JWT-based authentication and secure MySQL integration.",
    github: "https://github.com/Sheeza-Qamar/Premium-Beverages/tree/main/nextjs-admin-dashboard-main/nextjs-admin-dashboard-main",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "JWT"],
  },
  {
    title: "LinkedIn Post Automation using n8n",
    category: "automation",
    img: "/images/projects/linkedin-post-automation.png",
    link: "https://www.linkedin.com/posts/sheeza-qamar_linkedinautomation-workflowautomation-aicontent-activity-7425259658598211586-AFwO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwg4coBxVta-WA8LJmDpPc_xMcAKKhV3qY",
    summary:
      "Built an end-to-end LinkedIn publishing automation where new topics from Google Sheets trigger an n8n workflow that generates AI post content, publishes directly to LinkedIn, and updates publishing status automatically without manual copy-paste or scheduling overhead.",
    tech: ["n8n", "Google Sheets", "LinkedIn", "AI Content Generation", "Workflow Automation"],
  },
  {
    title: "AI-Powered Social Media Content Automation",
    category: "automation",
    img: "/images/projects/seda-social-automation-thumb.png",
    thumbFit: "contain",
    images: [
      "/images/projects/seda-social-automation-workflow.png",
      "/images/projects/seda-social-automation-thumb.png",
    ],
    summary:
      "Built an automated n8n workflow that generates 180 daily social media posts (30 per user) for 6 users across 6 categories like Technology, Health, Business, and Science. Integrated GPT-4o for viral research-question generation and GPT-5.1 for caption refinement, with outputs synced to Google Sheets and refreshed daily through scheduled triggers.",
    tech: ["n8n", "GPT-4o", "GPT-5.1", "Google Sheets", "Workflow Automation"],
  },
  {
    title: "Emily - AI Voice Receptionist for Appointment Booking",
    category: "automation",
    img: "/images/projects/emily-voice-agent-thumb.png",
    link: "https://www.linkedin.com/posts/sheeza-qamar_automation-n8n-aivoice-ugcPost-7428750180574908417-7Wr6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwg4coBxVta-WA8LJmDpPc_xMcAKKhV3qY",
    thumbFit: "contain",
    images: [
      "/images/projects/emily-voice-agent-1.png",
      "/images/projects/emily-voice-agent-2.png",
      "/images/projects/emily-voice-agent-3.png",
    ],
    summary:
      "Built a production-style AI voice receptionist for a dental clinic using Vapi and n8n that answers calls, understands intent, checks live Google Calendar availability, handles conflicts, captures patient details, and books confirmed appointments automatically with timezone-safe scheduling.",
    tech: ["Vapi", "n8n", "Google Calendar API", "LLM Tool Calling", "Webhook Automation"],
  },
  {
    title: "Automated Aviation Document Processing & Generation",
    category: "automation",
    img: "/images/projects/aviation-automation-banner.png",
    images: [
      "/images/projects/aviation-automation-1.png",
      "/images/projects/aviation-automation-2.png",
      "/images/projects/aviation-automation-3.png",
      "/images/projects/aviation-automation-4.png",
      "/images/projects/aviation-automation-5.png",
    ],
    summary:
      "Built a Zapier-powered AI automation pipeline for private jet charter requests that structures unorganized inputs, enriches request data, generates multi-template client-ready PDFs, routes files to e-sign workflows, and updates status in real time, reducing a 2-3 hour manual process to minutes.",
    tech: ["Zapier", "Google Sheets", "Google Drive", "ChatGPT", "PDFMonkey", "SignNow"],
  },
  {
    title: "AI Dermatologist Web App",
    category: "development",
    img: "/images/projects/home page.png",
    summary:
      "AI Dermatologist preict skin diseases, Give answer to related queries, Medicine Recommendation, Appointment Booking with physical Doctors, Real time chat between doctor and patient.",
    github: "https://github.com/Sheeza-Qamar/AI-Dermatologist",
    tech: ["React", "Node", "Express", "PostgreSQL", "ML"],
  },
  {
    title: "EasyGhar",
    category: "development",
    img: "/images/projects/easyghar.png",
    summary:
      "Developed a home services booking platform that connects households with labor workers, with an on-demand matching flow and a production-ready backend powered by Express and MySQL hosted on Aiven.",
    github: "https://github.com/Sheeza-Qamar/EasyGhar",
    tech: ["React", "Express", "MySQL", "Aiven", "JavaScript"],
  },
  {
    title: "Career Intelligence Platform",
    category: "development",
    img: "/images/projects/career-intelligence-platform.png",
    summary:
      "Built an AI-powered career platform with job fitness analysis, ATS score checking, ATS resume generation from templates, and automated LinkedIn/Indeed job discovery by role and location with direct apply support.",
    github: "https://github.com/Sheeza-Qamar/Career_intelligence_platform",
    tech: ["React", "Node.js", "Python", "NLP", "Web Scraping"],
  },
  {
    title: "Recipie Finder Web App",
    category: "development",
    img: "/images/projects/recipies.png",
    summary:
      "Built a responsive and mobile friendly recipe finder website with search, filter and view details of recipe features. It processes 1000+ recipes data from CSV file which include recipes from different continents. Built pagination system and responsive design using Bootstrap ensuring smooth experience. ",
    link: "https://recipie-finder-chi.vercel.app/recipes.html",
    github: "https://github.com/Sheeza-Qamar/Recipie-finder",
    tech: ["Html", "CSS", "JavaScript", "API"],
  },
  {
    title: "Quran Reading App",
    category: "development",
    img: "/images/projects/Quran.png",
    summary:
      "Developed a fully functional and optimized Quran Reading app using React Native. Integrated API for dynamic Quran data fetching, including Surahs and Ayahs with their translation. Implemented search functionality for specific Surahs or Ayahs and used AsyncStorage to enable offline access. Added customizable settings for font size and color mode (light/dark themes).  ",
    github: "https://github.com/Sheeza-Qamar/Quran-App",
    tech: ["React Native", "AsyncStorage", "RestAPI"],
  },
  {
    title: "Doctor Appointment Booking App",
    category: "development",
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
  { title: "Experience", link: "#experience" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
];
export const SOCIAL_LINKS: SocialLinksType[] = [
  { href: "https://github.com/Sheeza-Qamar", Icon: <IoLogoGithub size={25} /> },
  { href: "https://www.linkedin.com/in/sheeza-qamar/", Icon: <BsLinkedin size={25} color="#0a66c2" /> },
];
export const SKILLS: SkillType[] = [
  {
    img: "/images/skills/react.png",
    title: "React JS"
  },
  {
    img: "/images/skills/javascript.png",
    title: "Javascript"
  },
  {
    img: "/images/skills/mysql.svg",
    title: "MySQL"
  },
  {
    img: "/images/skills/fastApi.png",
    title: "FastAPI"
  },
  {
    img: "/images/skills/n8n.svg",
    title: "n8n"
  },
  {
    img: "/images/skills/zapier.svg",
    title: "Zapier"
  },
  {
    img: "/images/skills/make.svg",
    title: "Make.com"
  },
  {
    img: "/images/skills/node.png",
    title: "Node JS"
  },
  {
    img: "/images/skills/springboot.svg",
    title: "Spring Boot"
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
  },
  {
    img: "/images/skills/python.png",
    title: "Python"
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
    id: "PAFFullStackDeveloper",
    title: "Full Stack Developer",
    company: "Pakistan Air Force (PAF)",
    label: "Full Stack Developer",
    period: "Feb 2026 - Present",
    details: [
      "Working full-time on end-to-end web application development across frontend and backend systems.",
      "Built and maintained scalable frontend modules using Angular and React for internal platforms.",
      "Developed backend services and APIs using Spring Boot and .NET to support core business workflows."
    ]
  },
  {
    id: "DaimbooLabsAIAutomation",
    title: "AI Agents & Automation Engineer",
    company: "Daimboo Labs",
    label: "AI Agents & Automation",
    period: "Jan 2026 - Present",
    duration: "Remote",
    details: [
      "Built and maintained AI agent and automation workflows for business operations as a part-time contributor.",
      "Created end-to-end automations using n8n, Zapier, and Make.com to connect tools and reduce manual tasks.",
      "Implemented Vapi agent-calling flows and integrated voice agents into customer interaction pipelines."
    ]
  },
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

// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import kgceLogo from './assets/education_logo/kgec.png';
import bcvLogo from './assets/education_logo/bcv.png';
import ssvLogo from './assets/education_logo/ssv.png';

// Project Section Logo's
 import resumeImg from './assets/work_logo/resume.png';
import doctorImg  from './assets/work_logo/doctor.png';
    import socialImg from './assets/work_logo/social.png';
    import ecommerceImg from './assets/work_logo/ecommerce.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    title: "Full-Stack Development Practice",
    subtitle: "Personal & Academic Projects",
    date: "2024 — Present",
    desc: `
Built and deployed 4 full-stack web applications using the MERN stack.
Focused on authentication systems, REST API design, database management,
responsive UI development, and scalable backend architecture.
Implemented real-world features such as user authentication, CRUD operations,
and dynamic data handling.`,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "Data Structures & Algorithms Practice",
    subtitle: "Problem Solving Across Coding Platforms",
    date: "2023 — Present",
    desc: `
Solved 200+ Data Structures and Algorithms problems across multiple
coding platforms, strengthening problem-solving ability and understanding
of algorithms, time complexity optimization, and logical thinking.
Practiced topics including Graphs, Dynamic Programming, Trees,
Greedy Algorithms, and Advanced Recursion.`,
    skills: [
      "C++",
      "DSA",
      "Algorithms",
      "Problem Solving",
      "Graphs",
      "Dynamic Programming",
      "Recursion",
    ],
  },
];
  
export const education = [
  {
    id: 0,
    img: kgceLogo, // add your college logo import
    school: "Kalyani Government Engineering College, West Bengal",
    date: "2023 - 2027 (Expected)",
    grade: "Currently in 3rd Year",
    desc: "Currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE). My coursework focuses on core engineering concepts along with programming, problem solving, and software development. Alongside academics, I actively work on full-stack web development projects and Data Structures & Algorithms to strengthen my technical and analytical skills.",
    degree: "Bachelor of Technology (B.Tech) - Electronics & Communication Engineering",
  },
  {
    id: 1,
    img: bcvLogo, // barrackpore school logo
    school: "Barrackpore Cantonment Vidyapith",
    date: "2020 - 2022",
    grade: "82.4%",
    desc: "Completed Higher Secondary education with Science stream (Physics, Chemistry, Mathematics) along with optional Biology. Developed strong analytical thinking and problem-solving abilities which built the foundation for engineering studies.",
    degree: "Higher Secondary (Class XII) - PCM with Biology (Optional)",
  },
  {
    id: 2,
    img: ssvLogo, // saraswati vidyalaya logo
    school: "Shri Saraswati Vidyalaya High School",
    date: "2015 - 2020",
    grade: "83.7%",
    desc: "Completed Secondary education with a strong academic record. Built foundational knowledge in Mathematics, Science, and Computer fundamentals, which sparked my interest in technology and engineering.",
    degree: "Secondary Education (Class X)",
  },
];
  
export const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    description:
      "A full-stack MERN application that allows users to create professional resumes using AI assistance. Users can select from 15+ templates with customizable color themes. Integrated OpenAI API to enhance resume content and job descriptions automatically. Includes secure authentication and responsive UI.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JWT Authentication",
      "Tailwind CSS",
      "REST API",
    ],
    github: "https://github.com/shahbaj00786/ai_resume_builder.",
    webapp: "https://ai-resume-builder-c1f8.vercel.app",
    image: resumeImg,
  },

  {
    id: 2,
    title: "Doctor Appointment System",
    description:
      "A MERN stack doctor appointment platform enabling users to securely book and cancel appointments using time-slot scheduling. Includes admin dashboard for managing doctors and appointments with real-time availability tracking.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Admin Panel",
      "REST APIs",
      "Tailwind CSS",
    ],
    github: "https://github.com/shahbaj00786/doctors_appointment-web",
    webapp: "https://doctors-appointment-web-shs4.vercel.app/",
    image:doctorImg
  },

  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "A complete MERN stack e-commerce application with product management, order tracking, and payment integrations including Stripe, Razorpay, and Cash on Delivery. Features secure authentication and admin order management.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Razorpay",
      "JWT Auth",
      "Tailwind CSS",
      "REST APIs",
    ],
    github: "https://github.com/shahbaj00786/e_commerce_web",
    webapp: "https://e-commerce-web-3abr.vercel.app/",
    image: ecommerceImg,
  },

  {
    id: 4,
    title: "Social Media App",
    description:
      "A MERN-based social networking platform supporting real-time chat and user interaction. Uses Clerk authentication for secure login and provides responsive communication-focused UI.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk Auth",
      "Realtime Chat",
      "Tailwind CSS",
      "REST APIs",
    ],
    github: "https://github.com/shahbaj00786/social-media.app_......",
    webapp: "https://social-media-app-9bex.vercel.app/",
    image: socialImg,
  },
];
// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Education Section Logo's
import kgceLogo from "./assets/education_logo/kgec.png";
import bcvLogo from "./assets/education_logo/bcv.png";
import ssvLogo from "./assets/education_logo/ssv.png";

// Project Section Logo's
import resumeImg from "./assets/work_logo/resume.png";
import doctorImg from "./assets/work_logo/doctor.png";
import socialImg from "./assets/work_logo/social.png";
import ecommerceImg from "./assets/work_logo/ecommerce.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo, core: true },
      { name: "React JS", logo: reactjsLogo, core: true },

      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo, core: true },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo, core: true },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo, core: true },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "C++", logo: cppLogo },
      { name: "C", logo: cLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    title: "Full-Stack Development Practice",
    role: "Full-Stack Developer (MERN)",
    subtitle: "Hands-on MERN Development Projects",
    date: "2024 — Present",
    desc: [
      "Built and deployed 4+ MERN stack applications",
      "Designed REST APIs and authentication systems",
      "Implemented CRUD operations and dynamic data handling",
      "Developed responsive UI with scalable backend architecture",
    ],
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
    role: "Data Structures & Algorithms",
    subtitle: "Problem Solving Across Coding Platforms",
    date: "2023 — Present",
    desc: [
      "Solved 200+ DSA problems across coding platforms GeeksforGeeks | Coding Ninjas | Leetcode",
      "Strengthened algorithmic thinking and optimization skills",
      "Practiced Graphs, DP, Trees, and Greedy algorithms",
      "Improved time complexity analysis and logical reasoning",
    ],
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
    img: kgceLogo,
    school: "Kalyani Government Engineering College, West Bengal",
    date: "2023 – 2027 (Expected)",
    grade: "Currently in 3rd Year",
    degree:
      "Bachelor of Technology (B.Tech) — Electronics & Communication Engineering",

    desc:
      "Currently pursuing B.Tech in Electronics & Communication Engineering with focus on programming, problem solving, and software development. Actively building full-stack web applications and practicing Data Structures & Algorithms to strengthen real-world development skills.",
  },

  {
    id: 1,
    img: bcvLogo,
    school: "Barrackpore Cantonment Vidyapith",
    date: "2020 – 2022",
    grade: "82.4%",
    degree: "Higher Secondary (Class XII) — PCM with Biology (Optional)",

    desc:
      "Completed Higher Secondary education in Science stream (Physics, Chemistry, Mathematics) with optional Biology. Developed strong analytical thinking and problem-solving skills forming the foundation for engineering and software development.",
  },

  {
    id: 2,
    img: ssvLogo,
    school: "Shri Saraswati Vidyalaya High School",
    date: "2015 – 2020",
    grade: "83.7%",
    degree: "Secondary Education (Class X)",

    desc:
      "Completed Secondary education with strong academic performance. Built foundational knowledge in Mathematics, Science, and Computer fundamentals which sparked early interest in technology and engineering.",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Resume Builder",
    description:
      "AI-powered resume builder enabling users to create professional resumes using OpenAI integration with real-time preview and customizable templates.",

    features: [
      "Create and update resumes using dynamic forms",
      "15+ resume templates with 50+ color themes",
      "AI-assisted resume generation using OpenAI API",
      "JWT-based authentication system",
      "Real-time preview and PDF export",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JWT Auth",
      "Tailwind CSS",
      "ImageKit",
      "REST API",
    ],

    github: "https://github.com/shahbaj00786/ai_resume_builder",
    webapp: "https://ai-resume-builder-c1f8.vercel.app",
    image: resumeImg,
  },

  {
    id: 2,
    title: "Doctor Appointment System",
    featured: true,
    description:
      "Full-stack MERN appointment booking platform with secure authentication, admin dashboard, and time-slot scheduling.",

    features: [
      "User, Admin & Doctor dashboards",
      "Time-slot appointment booking",
      "Appointment cancellation & management",
      "Doctor filtering by specialization",
      "Razorpay payment integration",
      "Secure REST API architecture",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Razorpay",
      "Cloudinary",
      "Tailwind CSS",
      "REST APIs",
    ],

    github: "https://github.com/shahbaj00786/doctors_appointment-web",
    webapp: "https://doctors-appointment-web-shs4.vercel.app/",
    image: doctorImg,
  },

  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Complete MERN e-commerce platform featuring product management, payment integration, and order tracking.",

    features: [
      "Product search & category filtering",
      "Cart and order management",
      "Stripe & Razorpay payments",
      "Admin product dashboard",
      "Order tracking system",
      "Cash on delivery option",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Razorpay",
      "JWT Auth",
      "Cloudinary",
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
    featured: true,
    description:
      "MERN-based social networking platform supporting real-time chat, media sharing, and secure authentication.",

    features: [
      "Realtime chat system",
      "Story upload (image & video)",
      "Like & interaction system",
      "Profile management",
      "Clerk authentication",
      "Redux state management",
    ],

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk Auth",
      "Redux Toolkit",
      "Tailwind CSS",
      "ImageKit",
      "Inngest",
      "REST APIs",
    ],

    github: "https://github.com/shahbaj00786/social-media.app",
    webapp: "https://social-media-app-9bex.vercel.app/",
    image: socialImg,
  },
];
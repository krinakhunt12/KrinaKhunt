import type { Project, Skill } from './types';

export const PROJECTS: Project[] = [
    {
    id: 1,
    title: "Luxeva",
    description: "Luxeva is a premium fashion e-commerce platform built with React and Node.js, offering a seamless shopping experience with advanced features like product filtering, wishlist management, and secure payments.",
    image: "./Projects/luxeva.png",
    tech: ["React.js", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://luxeva.vercel.app",
    githubUrl: "https://github.com/krinakhunt12/Luxeva.git"
  },
  {
    id: 2,
    title: "GrandDine Restaurant",
    description: "GrandDine Restaurant Website is a modern, responsive restaurant web application showcasing menus, categories, and a premium dining experience with a clean UI and smooth user interactions.",
    image: "./Projects/granddine.png",
    tech: ["Tailwind CSS", "Framer Motion", "React"],
    category: "frontend",
    liveUrl: "https://grand-dine-restaurant.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12/GrandDine_Restaurant.git"
  },
  {
    id: 3,
    title: "Aurelia Luxe",
    description: "A modern fashion e-commerce platform with a premium UI/UX, built with React and Tailwind CSS, featuring advanced filtering and smooth user interactions.",
    image: "./Projects/aurelia-luxe.png",
    tech: ["React.js", "TypeScript", "Tailwind"],
    category: "frontend",
    liveUrl: "https://aurelia-luxe.netlify.app/",
    githubUrl: "https://github.com/krinakhunt12/Aurelia-Luxe.git"
  },
  {
    id: 4,
    title: "PDF Merge Tools",
    description: "PDF Merge Tools is a free, easy-to-use online tool that helps you merge multiple PDF files into a single PDF document with just a few clicks. It is a secure, fast, and reliable platform for merging PDFs without compromising your file quality or data privacy.",
    image: "./Projects/pdf-merge.png",
    tech: ["React.js", "TypeScript", "Tailwind", "Python"],
    category: "fullstack",
    liveUrl: "https://pdf-merge-livid.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12"
  },
    {
    id: 5,
    title: "SecureScan",
    description: "SecureScan is an AI-powered code analysis platform that evaluates comments and documentation for clarity, accuracy, and completeness. It helps developers maintain high-quality, well-documented codebases by providing intelligent suggestions, improving readability, and enforcing best documentation practices across teams.",
    image: "./Projects/secure-scan.png",
    tech: ["React.js", "TypeScript", "Tailwind", "Python"],
    category: "fullstack",
    liveUrl: "https://secure-scan-nine.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12/Secure-Scan"
  },
  {
    id: 6,
    title: "Diabetic Prediction System",
    description: "A machine learning–based system that predicts diabetic patient outcomes using advanced data analysis and predictive modeling techniques.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tech: ["Numpy", "Matplotlib", "Seaborn", "Python", "Scikit-learn", "Panda", "Jupyter Notebook"],
    category: "ml",
    liveUrl: "https://github.com/krinakhunt12/Healthcare-Prediction-on-Diabetic-Patients.git",
    githubUrl: "https://github.com/krinakhunt12/Healthcare-Prediction-on-Diabetic-Patients.git"
  },
  {
    id: 7,
    title: "Medibot Chatbot",
    description: "An AI-powered medical chatbot that provides healthcare assistance, symptom analysis, and accurate medical information through natural language processing.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tech: ["Scikit-Learn", "PyTorach", "Spacy", "Python"],
    category: "fullstack",
    liveUrl: "https://github.com/krinakhunt12/Medibot_Project.git",
    githubUrl: "https://github.com/krinakhunt12/Medibot_Project.git"
  },
  {
    id: 8,
    title: "LeafGuard",
    description: "LeafGuard is a smart plant disease detection system that uses deep learning to identify plant diseases from leaf images. It helps farmers identify issues quickly and accurately, providing them with timely insights to protect their crops.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "React.js", "TypeScript", "Tailwind CSS"],
    category: "ml",
    liveUrl: "https://github.com/krinakhunt12/LeafGuard.git",
    githubUrl: "https://github.com/krinakhunt12/LeafGuard.git"
  },

  // {
  //   id: 9,
  //   title: "HiveHR",
  //   description: "A comprehensive HR management system built with React and Supabase, streamlining employee management, attendance tracking, and organizational workflows.",
  //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  //   tech: ["React.js", "TypeScript", "Tailwind", "Supabase"],
  //   category: "fullstack",
  //   liveUrl: "https://github.com/krinakhunt12/HiveHR.git",
  //   githubUrl: "https://github.com/krinakhunt12/HiveHR.git"
  // },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, category: "Frontend", icon: "code" },
  { name: "Next.js", level: 85, category: "Frontend", icon: "code" },
  { name: "Tailwind CSS", level: 88, category: "Frontend", icon: "shield" },
  { name: "JavaScript", level: 90, category: "Frontend", icon: "file-code" },
  { name: "TypeScript", level: 80, category: "Frontend", icon: "shield" },
  { name: "HTML/CSS", level: 95, category: "Frontend", icon: "code" },

  // Backend
  { name: "Node.js", level: 85, category: "Backend", icon: "server" },
  { name: "Express.js", level: 85, category: "Backend", icon: "server" },
  { name: "Python", level: 75, category: "Backend", icon: "file-code" },
  { name: "REST APIs", level: 88, category: "Backend", icon: "cloud" },

  // Database
  { name: "MongoDB", level: 90, category: "Database", icon: "database" },
  { name: "MySQL", level: 75, category: "Database", icon: "database" },

  // Tools & DevOps
  { name: "Git & GitHub", level: 90, category: "Tools & DevOps", icon: "cloud" },
  { name: "VS Code", level: 95, category: "Tools & DevOps", icon: "code" },

  // Design
  { name: "Figma", level: 85, category: "Design", icon: "container" },
  { name: "UI/UX Design", level: 80, category: "Design", icon: "layers" }
];

export const SERVICES = [
  {
    num: '01',
    title: 'Frontend Development',
    desc: 'Crafting pixel-perfect, highly interactive UIs using React, TypeScript, and modern styling architectures.',
    iconName: 'FiLayout',
  },
  {
    num: '02',
    title: 'Backend Development',
    desc: 'Building robust, scalable server-side systems and APIs using Node.js, Python, and efficient database designs.',
    iconName: 'FiLayers',
  },
  {
    num: '03',
    title: 'AI & ML Solutions',
    desc: 'Integrating intelligent systems like computer vision and predictive models to solve complex real-world problems.',
    iconName: 'FiCpu',
  },
];

export const METHODOLOGIES = [
  { title: "Agile Development", desc: "Iterative progress and rapid feedback loops to ensure the final product aligns with project goals.", iconName: "FiZap" },
  { title: "Version Control", desc: "Expertise in Git/GitHub for seamless collaboration and codebase integrity.", iconName: "FiGithub" },
  { title: "Cloud Deployment", desc: "Experience in deploying applications on platforms like Vercel, Netlify, and AWS.", iconName: "FiCloud" },
  { title: "UI/UX Design", desc: "A strong eye for design principles, ensuring functionality is paired with aesthetic appeal.", iconName: "FiPenTool" },
  { title: "CI/CD Pipelines", desc: "Implementing automated testing and deployment to maintain high quality.", iconName: "FiActivity" },
  { title: "Clean Code", desc: "Adhering to SOLID principles and writing self-documenting code for long-term health.", iconName: "FiCode" }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Strategy", desc: "Defining goals, user personas, and technical requirements.", iconName: "FiSearch" },
  { step: "02", title: "Design", desc: "Creating wireframes and high-fidelity prototypes.", iconName: "FiLayout" },
  { step: "03", title: "Development", desc: "Writing clean, scalable code using modern tech stacks.", iconName: "FiCode" },
  { step: "04", title: "Deployment", desc: "Rigorous testing followed by seamless cloud launch.", iconName: "FiCheckCircle" }
];

export const ABOUT_STORY = [
  {
    title: "The Beginning",
    desc: "My journey into the digital realm started with a fascination for how things work behind the screen. What began as simple curiosity soon evolved into a passion for building functional and beautiful web experiences."
  },
  {
    title: "The Evolution",
    desc: "As I delved deeper into Full Stack development, I discovered the power of combining logic with aesthetics. Mastering tools like React and Node.js allowed me to bridge the gap between abstract concepts and real-world solutions."
  },
  {
    title: "Current Focus",
    desc: "Today, I focus on integrating Artificial Intelligence into modern web architectures. My work explores how computer vision and machine learning can enhance user experiences and solve complex industrial problems."
  }
];

export const VALUES = [
  { title: "Performance First", desc: "Optimizing every byte to ensure lightning-fast load times and smooth interactions." },
  { title: "Clean Architecture", desc: "Writing modular, testable code that scales with the complexity of the project." },
  { title: "User-Centric", desc: "Focusing on the end-user experience to create intuitive and accessible interfaces." }
];

export const FAQ_ITEMS = [
  { q: "What's your typical project timeline?", a: "Most projects take between 2 to 6 weeks depending on complexity and scope." },
  { q: "Do you offer post-launch support?", a: "Yes, I provide dedicated support and maintenance packages to ensure everything runs smoothly." },
  { q: "Can you work with existing teams?", a: "Absolutely. I'm experienced in integrating with existing dev teams and using collaborative tools." }
];

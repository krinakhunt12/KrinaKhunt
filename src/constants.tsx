import type { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GrandDine Restaurant",
    description: "GrandDine Restaurant Website is a modern, responsive restaurant web application showcasing menus, categories, and a premium dining experience with a clean UI and smooth user interactions.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    tech: ["Tailwind CSS", "Framer Motion", "React"],
    category: "frontend",
    liveUrl: "https://grand-dine-restaurant.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 2,
    title: "Diabetic Prediction System",
    description: "A machine learning–based system that predicts diabetic patient outcomes using advanced data analysis and predictive modeling techniques.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tech: ["Numpy", "Matplotlib", "Seaborn", "Python", "Scikit-learn", "Panda", "Jupyter Notebook"],
    category: "ml",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "A modern full-stack e-commerce platform featuring dynamic product management, shopping cart, user authentication, and secure checkout with a responsive UI.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 4,
    title: "Medibot Chatbot",
    description: "An AI-powered medical chatbot that provides healthcare assistance, symptom analysis, and accurate medical information through natural language processing.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tech: ["Scikit-Learn", "PyTorach", "Spacy", "Python"],
    category: "fullstack",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 5,
    title: "Plant Disease Detection",
    description: "An intelligent computer vision system that detects plant diseases using deep learning, helping farmers identify issues quickly and accurately.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    category: "ml",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 6,
    title: "Aurelia Luxe Jewellery",
    description: "An intelligent computer vision system that detects plant diseases using deep learning, helping farmers identify issues quickly and accurately.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "TypeScript", "Tailwind"],
    category: "frontend",
    liveUrl: "https://aurelia-luxe.netlify.app/",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 7,
    title: "PDF Merge Tools",
    description: "An intelligent computer vision system that detects plant diseases using deep learning, helping farmers identify issues quickly and accurately.",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "TypeScript", "Tailwind", "Python"],
    category: "fullstack",
    liveUrl: "https://pdf-merge-livid.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 8,
    title: "Code Comment Quality Checker",
    description: "An AI-powered tool that analyzes code comments for quality, clarity, and completeness. Helps developers maintain clean, well-documented codebases with intelligent feedback.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "TypeScript", "Tailwind", "Python"],
    category: "fullstack",
    liveUrl: "https://pdf-merge-livid.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12/CommentIQ.git"
  },
  {
    id: 9,
    title: "HiveHR",
    description: "A comprehensive HR management system built with React and Supabase, streamlining employee management, attendance tracking, and organizational workflows.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "TypeScript", "Tailwind", "Supabase"],
    category: "fullstack",
    liveUrl: "https://pdf-merge-livid.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12/HiveHR.git"
  }
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

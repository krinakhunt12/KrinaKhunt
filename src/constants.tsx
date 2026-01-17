import type { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "GrandDine Restaurant",
    description: "GrandDine Restaurant Website is a modern, responsive restaurant web application showcasing menus, categories, and a premium dining experience with a clean UI and smooth user interactions.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    category: "fullstack",
    liveUrl: "https://grand-dine-restaurant.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 2,
    title: "Diabetic Prediction System",
    description: "A machine learning–based system that predicts diabetic patient outcomes using advanced data analysis and predictive modeling techniques.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "A modern full-stack e-commerce platform featuring dynamic product management, shopping cart, user authentication, and secure checkout with a responsive UI.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 4,
    title: "Medibot Chatbot",
    description: "An AI-powered medical chatbot that provides healthcare assistance, symptom analysis, and accurate medical information through natural language processing.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    category: "fullstack",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 5,
    title: "Plant Disease Detection",
    description: "An intelligent computer vision system that detects plant diseases using deep learning, helping farmers identify issues quickly and accurately.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    category: "fullstack",
    liveUrl: "https://github.com/krinakhunt12",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 6,
    title: "Aurelia Luxe Jewellery",
    description: "An intelligent computer vision system that detects plant diseases using deep learning, helping farmers identify issues quickly and accurately.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "TypeScript", "Tailwind"],
    category: "frontend",
    liveUrl: "https://aurelia-luxe.netlify.app/",
    githubUrl: "https://github.com/krinakhunt12"
  },
  {
    id: 7,
    title: "PDF Merge Tools",
    description: "An intelligent computer vision system that detects plant diseases using deep learning, helping farmers identify issues quickly and accurately.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "TypeScript", "Tailwind", "Python"],
    category: "fullstack",
    liveUrl: "https://pdf-merge-livid.vercel.app/",
    githubUrl: "https://github.com/krinakhunt12"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend", icon: "code" },
  { name: "TypeScript", level: 92, category: "Frontend", icon: "shield" },
  { name: "Node.js / Express", level: 88, category: "Backend", icon: "server" },
  { name: "Python / Django", level: 82, category: "Backend", icon: "file-code" },
  { name: "PostgreSQL", level: 85, category: "Database", icon: "database" },
  { name: "MongoDB", level: 90, category: "Database", icon: "layers" },
  { name: "Docker / DevOps", level: 78, category: "Tools & DevOps", icon: "container" },
  { name: "Git / CI/CD", level: 90, category: "Tools & DevOps", icon: "cloud" }
];

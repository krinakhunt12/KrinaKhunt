
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'ml';
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & DevOps' | 'Design';
  icon: string;
}

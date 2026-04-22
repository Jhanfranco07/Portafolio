export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  highlights: string[];
  image?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: Technology[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface TargetAudience {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

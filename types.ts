
export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  score?: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  techStack: string[];
  features: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  education: Education[];
  projects: Project[];
  skills: SkillCategory[];
}

export interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'app' | 'tools';
  categoryLabel: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  githubUrl: string;
  gradient: string;
  highlightText: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}

export interface SourceFile {
  name: string;
  language: 'html' | 'css' | 'javascript' | 'markdown' | 'yaml';
  filename: string;
  description: string;
  code: string;
  iconName: string;
}

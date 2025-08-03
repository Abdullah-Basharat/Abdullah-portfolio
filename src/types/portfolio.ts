export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    roles: string[];
    tagline: string;
    email: string;
    phone: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      email: string;
    };
    resumeUrl: string;
  };
  about: {
    introduction: string;
    personalInfo: Record<string, string>;
    metrics: Array<{
      number: string;
      title: string;
      description: string;
      icon: string;
    }>;
    skills: Array<{
      name: string;
      percentage: number;
    }>;
    education: {
      degree: string;
      institution: string;
      gpa: string;
      year: string;
    };
    stats: {
      experience: string;
      projects: string;
      technologies: string;
    };
  };
  resume: {
    summary: string;
    contact: {
      location: string;
      phone: string;
      email: string;
    };
    certificates: Array<{
      name: string;
      issuer: string;
      date: string;
    }>;
    education: Array<{
      degree: string;
      institution: string;
      period: string;
      gpa: string;
      description: string;
    }>;
    experience: Array<{
      title: string;
      company: string;
      period: string;
      type: string;
      description: string;
      achievements: string[];
    }>;
    skills: {
      programming: string[];
      aiml: string[];
      dataEngineering: string[];
      tools: string[];
    };
    achievements: string[];
  };
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    github: string;
    demo: string;
    featured: boolean;
    category: string;
  }>;
}

export interface PortfolioProps {
  portfolioData: PortfolioData;
} 
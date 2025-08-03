// Data processing utilities

export const getTechnologyTags = (serviceTitle: string) => {
  switch (serviceTitle) {
    case 'AI/ML Solutions':
      return ['LLMs', 'RAG Systems', 'Computer Vision', 'TensorFlow', 'PyTorch'];
    case 'Web Development':
      return ['React', 'Node.js', 'Django', 'FastAPI', 'TypeScript'];
    case 'Data Engineering':
      return ['BigQuery', 'MongoDB', 'AWS', 'Azure', 'PostgreSQL'];
    case 'Mobile Development':
      return ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'];
    case 'DevOps & Cloud':
      return ['Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD'];
    case 'Consulting':
      return ['Architecture', 'Strategy', 'Optimization', 'Training', 'Support'];
    default:
      return ['Technology', 'Development', 'Solutions', 'Implementation'];
  }
};

export const getCategoryDescription = (categoryTitle: string) => {
  switch (categoryTitle) {
    case 'Programming':
      return 'Full-stack development with modern technologies and best practices using various programming languages and frameworks.';
    case 'AI/ML':
      return 'Specialized in Large Language Models, RAG systems, and deep learning applications with cutting-edge AI technologies.';
    case 'Data Engineering':
      return 'Building scalable data pipelines and infrastructure solutions with cloud platforms and database technologies.';
    case 'Tools & Technologies':
      return 'Comprehensive toolkit for development, deployment, and collaboration using industry-standard tools and platforms.';
    default:
      return 'Expertise in various technologies and frameworks for building robust and scalable solutions.';
  }
};

export const formatPhoneForWhatsApp = (phone: string) => {
  return phone.replace(/\D/g, '');
}; 
import React from 'react';
import { Brain, Code, Database, Globe, Smartphone, Zap, FileText, Award, GraduationCap, Briefcase, Phone, Mail, MapPin, Send, Github, Linkedin, MessageCircle, Share2 } from 'lucide-react';

// Icon mapping for different categories
export const getProjectIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'ai/ml':
      return <Brain className="w-12 h-12" />;
    case 'web development':
      return <Globe className="w-12 h-12" />;
    case 'data engineering':
      return <Database className="w-12 h-12" />;
    case 'mobile':
      return <Smartphone className="w-12 h-12" />;
    case 'devops':
      return <Zap className="w-12 h-12" />;
    default:
      return <Code className="w-12 h-12" />;
  }
};

export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'brain':
      return <Brain className="w-12 h-12" />;
    case 'code':
      return <Code className="w-12 h-12" />;
    case 'database':
      return <Database className="w-12 h-12" />;
    case 'globe':
      return <Globe className="w-12 h-12" />;
    case 'smartphone':
      return <Smartphone className="w-12 h-12" />;
    case 'zap':
      return <Zap className="w-12 h-12" />;
    default:
      return <Code className="w-12 h-12" />;
  }
};

export const getMetricIcon = (iconName: string) => {
  switch (iconName) {
    case 'smile':
      return <MessageCircle className="w-8 h-8" />;
    case 'bar-chart':
      return <Globe className="w-8 h-8" />;
    case 'clock':
      return <Briefcase className="w-8 h-8" />;
    case 'shield':
      return <Award className="w-8 h-8" />;
    default:
      return <MessageCircle className="w-8 h-8" />;
  }
};

// Common icons
export const Icons = {
  FileText,
  Award,
  GraduationCap,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Share2,
  Brain,
  Code,
  Database,
  Globe,
  Smartphone,
  Zap,
} as const; 
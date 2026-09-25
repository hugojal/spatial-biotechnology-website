export interface TeamMember {
  id: string;
  name: string;
  degree?: string; // e.g., "PhD"
  role: string;
  category: 'pi' | 'management' | 'postdoc' | 'phd' | 'intern' | 'alumni';
  email: string;
  phone?: string;
  linkedIn: string;
  orcid?: string;
  scholar?: string;
  twitter?: string;
  photo?: string;
  avatarPlaceholderColor?: string;
  bio: string;
  researchFocus?: string[];
  education?: string[];
}

export interface ResearchLine {
  id: string;
  number: number;
  title: string;
  shortQuestion: string;
  fullQuestion: string;
  summary: string;
  background: string;
  methodology: string[];
  impact: string;
  technologies: string[];
  imagePlaceholderTitle: string;
  accentColor: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi: string;
  abstract: string;
  keywords: string[];
  featured?: boolean;
  openAccess?: boolean;
}

export interface Grant {
  id: string;
  title: string;
  acronym?: string;
  fundingAgency: string;
  role: string;
  period: string;
  summary: string;
  partners?: string[];
  logo?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: 'Grant' | 'Publication' | 'Event' | 'Team' | 'Outreach';
  link?: string;
  featured?: boolean;
}

export interface JobPosition {
  id: string;
  title: string;
  reference: string;
  category: 'Postdoc' | 'PhD' | 'Technician' | 'Internship';
  deadline: string;
  description: string;
  requirements: string[];
  active: boolean;
}

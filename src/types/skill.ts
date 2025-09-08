export interface Skill {
  id: string;
  name: string;
  level: number; // 1-100
  category:
    | "frontend"
    | "backend"
    | "mobile"
    | "tools"
    | "soft-skills"
    | "database"
    | "devops"
    | "design";
  icon: string;
  color: string;
  experience: string; // "2+ years", "3-5 years", etc.
  description?: string;
  projects?: string[]; // Project IDs where this skill was used
  certifications?: Certification[];
  isFeatured?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyLogo: string;
  companyUrl?: string;
  location: string;
  employmentType:
    | "full-time"
    | "part-time"
    | "contract"
    | "freelance"
    | "internship";
  department?: string;
  teamSize?: number;
  salary?: {
    min?: number;
    max?: number;
    currency: string;
  };
}

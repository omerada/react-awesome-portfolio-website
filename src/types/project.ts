export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "ai" | "other";
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
  status: "completed" | "in-progress" | "planned";
  highlights?: string[];
  challenges?: string[];
  teamSize?: number;
  role?: string;
  client?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number; // 1-5
  date: string;
  featured: boolean;
  projectId?: string; // Related project
  linkedInUrl?: string;
  companyUrl?: string;
  relationship:
    | "client"
    | "colleague"
    | "manager"
    | "team-member"
    | "mentor"
    | "other";
  tags?: string[];
}

export interface TestimonialStats {
  total: number;
  averageRating: number;
  byRating: Record<number, number>;
  byRelationship: Record<string, number>;
}

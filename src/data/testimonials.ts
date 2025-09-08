import type { Testimonial } from "../types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Ahmet Yılmaz",
    position: "CTO",
    company: "TechInnovate Solutions",
    avatar: "/images/testimonials/ahmet-yilmaz.jpg",
    content: `Ömer ile çalışmak gerçekten keyifliydi. Teknik bilgisi ve problem çözme becerisi olağanüstü. 
              Microservice mimarisine geçiş projemizde liderlik etti ve başarıyla tamamladı. 
              Ekip arkadaşlarına mentorluk yapma konusunda da çok başarılı.`,
    rating: 5,
    date: "2024-03-15",
    featured: true,
    relationship: "manager",
    linkedInUrl: "https://linkedin.com/in/ahmet-yilmaz",
    companyUrl: "https://techinnovate.com",
    tags: ["Liderlik", "Microservices", "Mentorluk", "Problem Çözme"],
  },
  {
    id: "testimonial-2",
    name: "Zeynep Koç",
    position: "Frontend Developer",
    company: "TechInnovate Solutions",
    avatar: "/images/testimonials/zeynep-koc.jpg",
    content: `Ömer'den çok şey öğrendim. Code review'ları çok detaylı ve öğretici. 
              Modern React patterns ve TypeScript konularında bana rehberlik etti. 
              Hem teknik bilgisi hem de iletişim becerisi mükemmel.`,
    rating: 5,
    date: "2024-02-20",
    featured: true,
    relationship: "team-member",
    linkedInUrl: "https://linkedin.com/in/zeynep-koc",
    tags: ["Mentorluk", "React", "TypeScript", "Code Review"],
  },
  {
    id: "testimonial-3",
    name: "Can Demir",
    position: "Project Manager",
    company: "DigitalCraft Agency",
    avatar: "/images/testimonials/can-demir.jpg",
    content: `Ömer ile birlikte çalıştığımız e-ticaret projelerinde her zaman deadline'ları karşıladık. 
              Müşteri gereksinimleri analizi konusunda çok yetenekli ve teknik çözümler önerme becerisi harika. 
              Client communication konusunda da çok başarılı.`,
    rating: 5,
    date: "2022-01-10",
    featured: true,
    relationship: "colleague",
    linkedInUrl: "https://linkedin.com/in/can-demir",
    companyUrl: "https://digitalcraft.agency",
    tags: [
      "Proje Yönetimi",
      "E-ticaret",
      "Client Communication",
      "Deadline Management",
    ],
  },
  {
    id: "testimonial-4",
    name: "Dr. Ayşe Kartal",
    position: "CEO",
    company: "HealthTech Solutions",
    avatar: "/images/testimonials/ayse-kartal.jpg",
    content: `Sağlık teknolojileri alanındaki projemiz için Ömer ile çalıştık. 
              HIPAA compliance gereksinimleri konusunda çok dikkatli ve güvenlik odaklı çalıştı. 
              Delivery kalitesi ve profesyonelliği mükemmeldi.`,
    rating: 5,
    date: "2023-08-05",
    featured: true,
    relationship: "client",
    linkedInUrl: "https://linkedin.com/in/ayse-kartal",
    companyUrl: "https://healthtech.com",
    tags: ["Healthcare", "Security", "Compliance", "Quality"],
  },
  {
    id: "testimonial-5",
    name: "Murat Özkan",
    position: "Senior Backend Developer",
    company: "DigitalCraft Agency",
    avatar: "/images/testimonials/murat-ozkan.jpg",
    content: `API integration konularında Ömer ile çalışmak çok verimliydi. 
              Frontend-backend coordination konusunda deneyimli ve sistemli yaklaşımı var. 
              Code quality standartları çok yüksek.`,
    rating: 5,
    date: "2021-11-20",
    featured: false,
    relationship: "colleague",
    linkedInUrl: "https://linkedin.com/in/murat-ozkan",
    tags: ["API Integration", "Backend Coordination", "Code Quality"],
  },
  {
    id: "testimonial-6",
    name: "Elif Şahin",
    position: "UI/UX Designer",
    company: "StartupHub Tech",
    avatar: "/images/testimonials/elif-sahin.jpg",
    content: `Designer-developer collaboration açısından Ömer ile çalışmak çok keyifliydi. 
              Design system implementation konusunda çok titiz ve pixel-perfect çalışıyor. 
              User experience odaklı yaklaşımı var.`,
    rating: 5,
    date: "2020-06-15",
    featured: false,
    relationship: "colleague",
    linkedInUrl: "https://linkedin.com/in/elif-sahin",
    companyUrl: "https://startuphub.tech",
    tags: [
      "UI/UX Collaboration",
      "Design Systems",
      "Pixel Perfect",
      "User Experience",
    ],
  },
  {
    id: "testimonial-7",
    name: "Serkan Yıldız",
    position: "Startup Founder",
    company: "EcoTech Innovations",
    avatar: "/images/testimonials/serkan-yildiz.jpg",
    content: `Startup'ımızın MVP'sini geliştirmek için Ömer ile çalıştık. 
              Limited budget ve tight timeline'a rağmen harika bir ürün çıkardık. 
              Business requirements'ı teknik çözümlere dönüştürme becerisi etkileyici.`,
    rating: 5,
    date: "2023-12-08",
    featured: true,
    relationship: "client",
    linkedInUrl: "https://linkedin.com/in/serkan-yildiz",
    companyUrl: "https://ecotech.com",
    tags: [
      "MVP Development",
      "Startup",
      "Business Analysis",
      "Budget Management",
    ],
  },
  {
    id: "testimonial-8",
    name: "Deniz Kaya",
    position: "DevOps Engineer",
    company: "TechInnovate Solutions",
    avatar: "/images/testimonials/deniz-kaya.jpg",
    content: `CI/CD pipeline kurulumu ve deployment süreçlerinde Ömer ile işbirliği yaptık. 
              Infrastructure as Code konularında bilgili ve Docker/Kubernetes deployment'larında deneyimli. 
              DevOps mindset'i olan bir developer.`,
    rating: 5,
    date: "2024-01-25",
    featured: false,
    relationship: "team-member",
    linkedInUrl: "https://linkedin.com/in/deniz-kaya",
    tags: ["CI/CD", "Docker", "Kubernetes", "DevOps", "Infrastructure"],
  },
  {
    id: "testimonial-9",
    name: "Fatma Arslan",
    position: "Product Owner",
    company: "RetailTech Corp",
    avatar: "/images/testimonials/fatma-arslan.jpg",
    content: `E-ticaret platformumuzun geliştirme sürecinde Ömer'in katkıları çok değerliydi. 
              Agile süreçlere adaptasyonu hızlı ve sprint planning'lerde aktif katılım gösterdi. 
              User story'leri teknik gereksinimlere çevirme konusunda başarılı.`,
    rating: 4,
    date: "2022-09-12",
    featured: false,
    relationship: "client",
    linkedInUrl: "https://linkedin.com/in/fatma-arslan",
    companyUrl: "https://retailtech.com",
    tags: ["Agile", "Sprint Planning", "User Stories", "E-commerce"],
  },
  {
    id: "testimonial-10",
    name: "Burak Çelik",
    position: "Junior Developer",
    company: "TechInnovate Solutions",
    avatar: "/images/testimonials/burak-celik.jpg",
    content: `Ömer benim mentorumdur ve ondan çok şey öğrendim. 
              Clean code principles, best practices ve modern development workflow'ları konularında rehberlik etti. 
              Sabırlı ve öğretici yaklaşımı sayesinde hızla gelişim gösterdim.`,
    rating: 5,
    date: "2024-03-01",
    featured: false,
    relationship: "team-member",
    linkedInUrl: "https://linkedin.com/in/burak-celik",
    tags: ["Mentorluk", "Clean Code", "Best Practices", "Workflow"],
  },
];

export const featuredTestimonials = testimonials.filter(
  (testimonial) => testimonial.featured
);

export const testimonialStats = {
  total: testimonials.length,
  averageRating:
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length,
  byRating: testimonials.reduce((acc, t) => {
    acc[t.rating] = (acc[t.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>),
  byRelationship: testimonials.reduce((acc, t) => {
    acc[t.relationship] = (acc[t.relationship] || 0) + 1;
    return acc;
  }, {} as Record<string, number>),
};

export const getTestimonialsByRelationship = (relationship: string) =>
  testimonials.filter((t) => t.relationship === relationship);

export const getTestimonialsByRating = (rating: number) =>
  testimonials.filter((t) => t.rating === rating);

export const getRecentTestimonials = (count: number = 5) =>
  testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);

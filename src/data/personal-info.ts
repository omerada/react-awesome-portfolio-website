import type { PersonalInfo } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Ömer Ada",
  title: "Full Stack Developer",
  subtitle:
    "Modern web uygulamaları ve kullanıcı deneyimleri oluşturan tutkulu geliştirici",
  email: "omer@example.com",
  phone: "+90 555 123 45 67",
  location: "İstanbul, Türkiye",
  bio: `Merhaba! Ben Ömer, 5+ yıllık deneyime sahip bir Full Stack Developer'ım. 
        Modern web teknolojileri kullanarak kullanıcı odaklı, performanslı ve ölçeklenebilir 
        uygulamalar geliştiriyorum. React, Node.js, TypeScript ve cloud teknolojileri 
        konularında uzmanlaştım. Sürekli öğrenmeyi seven, problem çözme odaklı ve 
        takım çalışmasına değer veren bir geliştiriciyim.`,
  avatar: "/images/profile.jpg",
  cvUrl: "/documents/omer-ada-cv.pdf",
  socialLinks: [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/omerada",
      icon: "github",
      color: "#333",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/omerada",
      icon: "linkedin",
      color: "#0077b5",
    },
    {
      id: "twitter",
      name: "Twitter",
      url: "https://twitter.com/omerada",
      icon: "twitter",
      color: "#1da1f2",
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://instagram.com/omerada",
      icon: "instagram",
      color: "#e4405f",
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:omer@example.com",
      icon: "mail",
      color: "#ea4335",
    },
  ],
};

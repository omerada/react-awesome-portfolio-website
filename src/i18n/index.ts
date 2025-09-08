// Internationalization (i18n) support
export type Language = 'tr' | 'en';

export interface TranslationKeys {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: {
      contact: string;
      cv: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      awards: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      mobile: string;
      tools: string;
      softSkills: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      web: string;
      mobile: string;
      desktop: string;
      ai: string;
    };
    buttons: {
      liveDemo: string;
      sourceCode: string;
      details: string;
    };
    status: {
      completed: string;
      inProgress: string;
      planned: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    current: string;
    employmentTypes: {
      fullTime: string;
      partTime: string;
      contract: string;
      freelance: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    info: {
      email: string;
      phone: string;
      location: string;
    };
  };
  footer: {
    copyright: string;
    madeWith: string;
    builtWith: string;
  };
  common: {
    loading: string;
    error: string;
    retry: string;
    readMore: string;
    showLess: string;
    downloadCV: string;
    backToTop: string;
    darkMode: string;
    lightMode: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      skills: 'Yetenekler',
      projects: 'Projeler',
      experience: 'Deneyim',
      testimonials: 'Referanslar',
      contact: 'İletişim',
    },
    hero: {
      greeting: 'Merhaba, Ben',
      name: 'Ömer Ada',
      title: 'Full Stack Developer',
      subtitle:
        'Modern web uygulamaları geliştiren deneyimli bir geliştiriciyim. React, Node.js ve TypeScript ile güçlü çözümler üretiyorum.',
      cta: {
        contact: 'İletişime Geç',
        cv: 'CV İndir',
      },
    },
    about: {
      title: 'Hakkımda',
      subtitle: 'Tutkulu ve deneyimli bir full stack developer',
      description:
        'Modern web teknolojileri konusunda uzmanlaşmış, kullanıcı deneyimini ön planda tutan ve performans odaklı uygulamalar geliştiren bir yazılım geliştiricisiyim.',
      stats: {
        experience: 'Yıl Deneyim',
        projects: 'Tamamlanan Proje',
        clients: 'Mutlu Müşteri',
        awards: 'Ödül',
      },
    },
    skills: {
      title: 'Yeteneklerim',
      subtitle: 'Teknoloji yığınım ve uzmanlık alanlarım',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobil',
        tools: 'Araçlar',
        softSkills: 'Kişisel Beceriler',
      },
    },
    projects: {
      title: 'Projelerim',
      subtitle: 'Son dönemde üzerinde çalıştığım projeler',
      categories: {
        all: 'Tümü',
        web: 'Web',
        mobile: 'Mobil',
        desktop: 'Masaüstü',
        ai: 'Yapay Zeka',
      },
      buttons: {
        liveDemo: 'Canlı Demo',
        sourceCode: 'Kaynak Kod',
        details: 'Detaylar',
      },
      status: {
        completed: 'Tamamlandı',
        inProgress: 'Devam Ediyor',
        planned: 'Planlandı',
      },
    },
    experience: {
      title: 'Deneyimim',
      subtitle: 'Profesyonel kariyerim ve iş deneyimlerim',
      current: 'Mevcut',
      employmentTypes: {
        fullTime: 'Tam Zamanlı',
        partTime: 'Yarı Zamanlı',
        contract: 'Sözleşmeli',
        freelance: 'Freelance',
      },
    },
    testimonials: {
      title: 'Referanslar',
      subtitle: 'Birlikte çalıştığım kişiler hakkımda ne düşünüyor',
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Benimle iletişime geçin',
      form: {
        name: 'Adınız',
        email: 'E-posta Adresiniz',
        subject: 'Konu',
        message: 'Mesajınız',
        send: 'Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesajınız başarıyla gönderildi!',
        error: 'Mesaj gönderilirken bir hata oluştu.',
      },
      info: {
        email: 'E-posta',
        phone: 'Telefon',
        location: 'Konum',
      },
    },
    footer: {
      copyright: 'Tüm hakları saklıdır.',
      madeWith: 'ile yapıldı',
      builtWith: 'kullanılarak geliştirildi',
    },
    common: {
      loading: 'Yükleniyor...',
      error: 'Bir hata oluştu',
      retry: 'Tekrar Dene',
      readMore: 'Devamını Oku',
      showLess: 'Daha Az Göster',
      downloadCV: 'CV İndir',
      backToTop: 'Yukarı Çık',
      darkMode: 'Karanlık Mod',
      lightMode: 'Aydınlık Mod',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Ömer Ada',
      title: 'Full Stack Developer',
      subtitle:
        'An experienced developer creating modern web applications. I build powerful solutions with React, Node.js, and TypeScript.',
      cta: {
        contact: 'Get In Touch',
        cv: 'Download CV',
      },
    },
    about: {
      title: 'About Me',
      subtitle: 'Passionate and experienced full stack developer',
      description:
        'I am a software developer specialized in modern web technologies, prioritizing user experience and developing performance-focused applications.',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        clients: 'Happy Clients',
        awards: 'Awards',
      },
    },
    skills: {
      title: 'My Skills',
      subtitle: 'My technology stack and areas of expertise',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        tools: 'Tools',
        softSkills: 'Soft Skills',
      },
    },
    projects: {
      title: 'My Projects',
      subtitle: "Recent projects I've been working on",
      categories: {
        all: 'All',
        web: 'Web',
        mobile: 'Mobile',
        desktop: 'Desktop',
        ai: 'AI',
      },
      buttons: {
        liveDemo: 'Live Demo',
        sourceCode: 'Source Code',
        details: 'Details',
      },
      status: {
        completed: 'Completed',
        inProgress: 'In Progress',
        planned: 'Planned',
      },
    },
    experience: {
      title: 'My Experience',
      subtitle: 'My professional career and work experiences',
      current: 'Current',
      employmentTypes: {
        fullTime: 'Full-time',
        partTime: 'Part-time',
        contract: 'Contract',
        freelance: 'Freelance',
      },
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: "What people I've worked with think about me",
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with me',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred while sending the message.',
      },
      info: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
    },
    footer: {
      copyright: 'All rights reserved.',
      madeWith: 'made with',
      builtWith: 'built with',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Retry',
      readMore: 'Read More',
      showLess: 'Show Less',
      downloadCV: 'Download CV',
      backToTop: 'Back to Top',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
  },
};

// Get browser language or default to Turkish
export const getBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const browserLang = window.navigator.language.slice(0, 2);
    return browserLang === 'tr' || browserLang === 'en'
      ? (browserLang as Language)
      : 'tr';
  }
  return 'tr';
};

// Get translation function
export const getTranslations = (language: Language): TranslationKeys => {
  return translations[language];
};

// Simple translation hook (without React context for now)
export const useTranslation = (language: Language = 'tr') => {
  const t = getTranslations(language);

  return {
    t,
    language,
  };
};

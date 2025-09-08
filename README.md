# React Awesome Portfolio Website

Modern, responsive ve interaktif bir portfolio website'i. React 19, TypeScript, Tailwind CSS ve
Framer Motion kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- ⚡ **Modern Tech Stack**: React 19 + TypeScript + Vite
- 🎨 **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- 🌙 **Dark/Light Mode**: Otomatik tema değiştirme
- ✨ **Smooth Animations**: Framer Motion ile profesyonel animasyonlar
- 📱 **Mobile First**: Mobil odaklı tasarım yaklaşımı
- 🎯 **SEO Optimized**: Arama motorları için optimize edilmiş
- ⚡ **Fast Loading**: Optimize edilmiş performans
- 📊 **Analytics Ready**: Vercel Analytics entegrasyonu
- 🏗️ **PWA Ready**: Progressive Web App desteği
- 📧 **Contact Form**: EmailJS ile çalışan iletişim formu
- 🎵 **Typing Animation**: Dinamik başlık animasyonları

## 📦 Kurulum

1. **Repository'i klonlayın:**

```bash
git clone https://github.com/omerada/react-awesome-portfolio-website.git
cd react-awesome-portfolio-website
```

2. **Dependencies yükleyin:**

```bash
npm install
```

3. **Environment variables ayarlayın:**

```bash
cp .env.example .env
```

`.env` dosyasını düzenleyip kendi bilgilerinizi girin.

4. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

5. **Tarayıcınızda açın:**

```
http://localhost:3000
```

## 🛠️ Kullanılan Teknolojiler

### Frontend

- **React 19** - Modern React hooks ve features
- **TypeScript** - Type safety ve better DX
- **Vite** - Hızlı build tool ve dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Kütüphaneler

- **React Router DOM** - Client-side routing
- **React Hook Form** - Form yönetimi
- **EmailJS** - Email gönderimi
- **Lucide React** - Modern icon library
- **React Icons** - Geniş icon koleksiyonu
- **Clsx** - Conditional className utility
- **Tailwind Merge** - Tailwind class merging

### Tools & Analytics

- **Vercel Analytics** - Web analytics
- **ESLint + Prettier** - Code quality
- **PostCSS + Autoprefixer** - CSS preprocessing

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── common/          # Header, Footer, ThemeToggle, BackToTop
│   ├── sections/        # Hero, About, Skills, Projects, Experience, Testimonials, Contact
│   └── ui/              # Button, Card, Modal, ProgressBar, Timeline
├── data/                # personal-info, skills, projects, experience, testimonials
├── hooks/               # useTheme, useScrollspy, useLocalStorage, useIntersectionObserver
├── types/               # TypeScript interface definitions
├── utils/               # constants, helpers, animations
└── assets/              # images, icons
```

## ⚙️ Konfigürasyon

### 1. Kişisel Bilgileri Güncelleme

`src/data/personal-info.ts` dosyasını düzenleyin:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Adınız Soyadınız',
  title: 'Full Stack Developer',
  subtitle: 'Modern web uygulamaları geliştiren tutkulu geliştirici',
  email: 'email@example.com',
  phone: '+90 555 123 45 67',
  location: 'İstanbul, Türkiye',
  bio: 'Hakkımda kısa açıklama...',
  avatar: '/images/profile.jpg',
  cvUrl: '/documents/cv.pdf',
  socialLinks: [
    // Sosyal medya bağlantıları
  ],
};
```

### 2. Projeleri Güncelleme

`src/data/projects.ts` dosyasında projelerinizi tanımlayın.

### 3. Yetenekleri Güncelleme

`src/data/skills.ts` dosyasında yeteneklerinizi kategorilere ayırarak listeleyin.

### 4. Deneyimleri Güncelleme

`src/data/experience.ts` dosyasında iş deneyimlerinizi kronolojik olarak listeleyin.

### 5. EmailJS Kurulumu

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun
2. Service ve template oluşturun
3. `.env` dosyasına bilgilerinizi ekleyin:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Özelleştirme

### Tema Renkleri

`tailwind.config.js` dosyasında primary ve dark color palette'lerini düzenleyebilirsiniz:

```javascript
colors: {
  primary: {
    50: "#eff6ff",
    500: "#3b82f6",
    900: "#1e3a8a",
  },
}
```

### Animasyonlar

`src/utils/animations.ts` dosyasında Framer Motion animasyonlarını özelleştirebilirsiniz.

## 📱 PWA Özellikleri

- Offline çalışabilme
- App-like deneyim
- Install prompt
- Service worker cache
- Responsive icons

## 🚀 Production Build

```bash
# Build oluştur
npm run build

# Preview build
npm run preview

# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format
```

## 🚀 Deploy

### Vercel Deploy

1. GitHub'a push edin
2. [Vercel](https://vercel.com/) hesabınıza bağlayın
3. Repository'i import edin
4. Environment variables ekleyin
5. Deploy edin

### Netlify Deploy

1. `npm run build` çalıştırın
2. `dist` klasörünü Netlify'a yükleyin

### Manual Deploy

1. Build oluşturun: `npm run build`
2. `dist` klasörünü web sunucunuza yükleyin

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image lazy loading
- Code splitting
- Bundle optimization

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır.

## 🙏 Teşekkürler

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)

---

Made with ❤️ by [Ömer Ada](https://github.com/omerada)

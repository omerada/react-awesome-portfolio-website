# React Awesome Portfolio Website

Modern, responsive ve interaktif bir portfolio website'i. React 18, TypeScript, Tailwind CSS ve Framer Motion kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- ⚡ **Modern Tech Stack**: React 18 + TypeScript + Vite
- 🎨 **Responsive Design**: Tüm cihazlarda mükemmel görünüm
- 🌙 **Dark/Light Mode**: Otomatik tema değiştirme
- ✨ **Smooth Animations**: Framer Motion ile profesyonel animasyonlar
- 📱 **Mobile First**: Mobil odaklı tasarım yaklaşımı
- 🎯 **SEO Optimized**: Arama motorları için optimize edilmiş
- ⚡ **Fast Loading**: Optimize edilmiş performans
- 📊 **Analytics Ready**: Vercel Analytics entegrasyonu

## 📦 Kurulum

1. **Dependencies yükleyin:**

```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

3. **Tarayıcınızda açın:**

```
http://localhost:5173
```

## 🛠️ Kullanılan Teknolojiler

### Frontend

- **React 18** - Modern React hooks ve features
- **TypeScript** - Type safety ve better DX
- **Vite** - Hızlı build tool ve dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Kütüphaneler

- **React Router DOM** - Client-side routing
- **React Hook Form** - Form yönetimi
- **EmailJS** - Email gönderimi
- **Lucide React** - Modern icon library
- **Clsx** - Conditional className utility

### Tools & Analytics

- **Vercel Analytics** - Web analytics
- **ESLint + Prettier** - Code quality
- **PostCSS + Autoprefixer** - CSS preprocessing

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── common/          # Ortak componentler
│   ├── sections/        # Ana bölümler
│   └── ui/              # UI componentleri
├── data/                # Static data
├── hooks/               # Custom hooks
├── types/               # TypeScript types
├── utils/               # Utility functions
└── styles/              # Global styles
```

## ⚙️ Konfigürasyon

### Kişisel Bilgileri Güncelleme

`src/data/personal-info.ts` dosyasını düzenleyin:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Adınız Soyadınız",
  title: "Frontend Developer",
  email: "email@example.com",
  // ... diğer bilgiler
};
```

## 🚀 Deploy

### Vercel Deploy

1. GitHub'a push edin
2. [Vercel](https://vercel.com/) hesabınıza bağlayın
3. Otomatik deploy

## 📄 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır.

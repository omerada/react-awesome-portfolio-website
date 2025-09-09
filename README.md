 # React Awesome Portfolio Website

Modern, responsive, and interactive portfolio website built with React 19, TypeScript, Tailwind CSS, and
Framer Motion.

## 🚀 Features

- ⚡ **Modern Tech Stack**: React 19 + TypeScript + Vite
- 🎨 **Responsive Design**: Looks great on all devices
- 🌙 **Dark/Light Mode**: Automatic theme switching
- ✨ **Smooth Animations**: Professional animations with Framer Motion
- 📱 **Mobile First**: Mobile-first design approach
- 🎯 **SEO Optimized**: Optimized for search engines
- ⚡ **Fast Loading**: Performance optimizations
- 📊 **Analytics Ready**: Vercel Analytics integration
- 🏗️ **PWA Ready**: Progressive Web App support
- 📧 **Contact Form**: Contact form powered by EmailJS
- 🎵 **Typing Animation**: Dynamic heading animations

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/omerada/react-awesome-portfolio-website.git
cd react-awesome-portfolio-website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set environment variables:**

```bash
cp .env.example .env
```

Edit the `.env` file and fill in your own values.

4. **Start the development server:**

```bash
npm run dev
```

5. **Open in your browser:**

```
http://localhost:3000
```

## 🛠️ Technologies Used

### Frontend

- **React 19** - Modern React hooks and features
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### Libraries

- **React Router DOM** - Client-side routing
- **React Hook Form** - Form management
- **EmailJS** - Email sending
- **Lucide React** - Modern icon library
- **React Icons** - Large icon collection
- **Clsx** - Conditional className utility
- **Tailwind Merge** - Tailwind class merging

### Tools & Analytics

- **Vercel Analytics** - Web analytics
- **ESLint + Prettier** - Code quality
- **PostCSS + Autoprefixer** - CSS preprocessing

## 📁 Project Structure

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

## ⚙️ Configuration

### 1. Update Personal Info

Edit the `src/data/personal-info.ts` file:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  subtitle: 'A passionate developer building modern web applications',
  email: 'email@example.com',
  phone: '+90 555 123 45 67',
  location: 'Istanbul, Turkey',
  bio: 'Short bio about you...',
  avatar: '/images/profile.jpg',
  cvUrl: '/documents/cv.pdf',
  socialLinks: [
    // Social links
  ],
};
```

### 2. Update Projects

Define your projects in the `src/data/projects.ts` file.

### 3. Update Skills

List your skills by category in the `src/data/skills.ts` file.

### 4. Update Experience

List your work experience chronologically in the `src/data/experience.ts` file.

### 5. EmailJS Setup

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create a service and a template
3. Add your values to the `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Customization

### Theme Colors

You can adjust the primary and dark color palettes in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: "#eff6ff",
    500: "#3b82f6",
    900: "#1e3a8a",
  },
}
```

### Animations

Customize Framer Motion animations in `src/utils/animations.ts`.

## 📱 PWA Features

- Offline support
- App-like experience
- Install prompt
- Service worker cache
- Responsive icons

## 🚀 Production Build

```bash
# Build
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

1. Push to GitHub
2. Connect your GitHub account to [Vercel](https://vercel.com/)
3. Import the repository
4. Add environment variables
5. Deploy

### Netlify Deploy

1. Run `npm run build`
2. Upload the `dist` folder to Netlify

### Manual Deploy

1. Create a build: `npm run build`
2. Upload the `dist` folder to your web server

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image lazy loading
- Code splitting
- Bundle optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Thanks

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)

---

Made with ❤️ by [Ömer Ada](https://github.com/omerada)

```

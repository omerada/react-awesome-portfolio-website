# 🚀 Deployment Guide - React Awesome Portfolio Website

Bu guide, React Awesome Portfolio Website'inizi çeşitli platformlarda deploy etmeniz için gerekli
adımları içerir.

## 📋 Ön Hazırlık

### 1. Environment Variables Kurulumu

`.env` dosyasını oluşturun ve aşağıdaki değişkenleri doldurun:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics
VITE_VERCEL_ANALYTICS_ID=your_analytics_id

# Social Media Links
VITE_GITHUB_URL=https://github.com/omerada
VITE_LINKEDIN_URL=https://linkedin.com/in/omerada
VITE_TWITTER_URL=https://twitter.com/omerada
VITE_INSTAGRAM_URL=https://instagram.com/omerada

# Personal Information
VITE_CONTACT_EMAIL=your.email@domain.com
VITE_CONTACT_PHONE=+90-xxx-xxx-xx-xx
VITE_CONTACT_LOCATION=Istanbul, Turkey

# Website Configuration
VITE_SITE_URL=https://yourdomain.com
VITE_SITE_NAME=Your Name - Portfolio
VITE_SITE_DESCRIPTION=Modern web uygulamaları geliştiren experienced full stack developer
```

### 2. Build Test

Deployment öncesi local build test yapın:

```bash
npm run build
npm run preview
```

## 🔥 Vercel Deployment (Önerilen)

### Otomatik Deployment (GitHub)

1. **GitHub Repository**

   ```bash
   git add .
   git commit -m "feat: ready for deployment"
   git push origin main
   ```

2. **Vercel Dashboard**
   - [Vercel](https://vercel.com) hesabınıza giriş yapın
   - "New Project" tıklayın
   - GitHub repository'nizi seçin
   - Framework preset: "Vite" otomatik algılanacak

3. **Environment Variables**

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_VERCEL_ANALYTICS_ID=your_analytics_id
   VITE_SITE_URL=https://yourdomain.vercel.app
   ```

4. **Custom Domain (İsteğe Bağlı)**
   - Settings > Domains
   - Domain adınızı ekleyin
   - DNS kayıtlarını güncelleyin

### Manuel Deployment

```bash
# Vercel CLI kurulumu
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

## 🌐 Netlify Deployment

### Drag & Drop Deployment

1. **Build oluşturun:**

   ```bash
   npm run build
   ```

2. **Netlify Dashboard**
   - [Netlify](https://netlify.com) hesabınıza giriş yapın
   - "Sites" > "Add new site" > "Deploy manually"
   - `dist` klasörünü sürükleyip bırakın

### Git-based Deployment

1. **GitHub Repository Bağlayın**
   - "New site from Git" seçin
   - GitHub repository'nizi seçin

2. **Build Settings**

   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   - Site settings > Environment variables
   - Tüm VITE\_ environment variables'larını ekleyin

### Netlify CLI

```bash
# Netlify CLI kurulumu
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

## 📄 GitHub Pages Deployment

### GitHub Actions ile Otomatik Deploy

`.github/workflows/deploy.yml` oluşturun:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
          VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
          VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Vite Config Güncellemesi

GitHub Pages için base path ekleyin:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/repository-name/', // GitHub repo adınız
  // ... diğer config
});
```

## 🔧 Manual Hosting

### Traditional Web Hosting

1. **Build oluşturun:**

   ```bash
   npm run build
   ```

2. **Files Upload**
   - `dist` klasörünün içindekileri hosting panel'ine yükleyin
   - `index.html` dosyasının root'ta olduğundan emin olun

3. **Server Configuration**

   **Apache (.htaccess):**

   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]

   # Cache static assets
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType text/css "access plus 1 year"
     ExpiresByType application/javascript "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
   </IfModule>
   ```

   **Nginx:**

   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     root /var/www/html;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }

     # Cache static assets
     location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }
   }
   ```

## 🔐 Environment Variables Guide

### EmailJS Setup

1. **EmailJS Account**
   - [EmailJS](https://www.emailjs.com/) hesabı oluşturun
   - Email service ekleyin (Gmail, Outlook, etc.)

2. **Template Oluşturma**

   ```html
   <!-- EmailJS Template -->
   From: {{from_name}} <{{from_email}}> Subject: {{subject}} Message: {{message}} --- Sent from your
   portfolio website
   ```

3. **Environment Variables**
   ```bash
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

### Analytics Setup

#### Vercel Analytics

```bash
VITE_VERCEL_ANALYTICS_ID=your_project_id
```

#### Google Analytics (İsteğe Bağlı)

```bash
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🔍 SEO ve Performance

### Meta Tags Optimizasyonu

`index.html` dosyasındaki meta tag'leri güncelleyin:

```html
<title>Your Name - Full Stack Developer Portfolio</title>
<meta name="description" content="Your professional description" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:url" content="https://yourdomain.com" />
```

### Performance Checklist

- [ ] Bundle size analizi: `npm run analyze`
- [ ] Image optimization (WebP format önerilen)
- [ ] Lighthouse score kontrolü (95+ hedeflenen)
- [ ] Core Web Vitals optimizasyonu

## 🚦 Post-Deployment Checklist

### Temel Kontroller

- [ ] Site açılıyor mu?
- [ ] Tüm sayfalar/section'lar çalışıyor mu?
- [ ] Contact form çalışıyor mu?
- [ ] Social media linkleri doğru mu?
- [ ] CV download çalışıyor mu?

### SEO Kontroller

- [ ] Google Search Console'a site eklendi mi?
- [ ] Sitemap.xml'e erişim var mı?
- [ ] Meta tags doğru görünüyor mu?
- [ ] Open Graph tags test edildi mi?

### Performance Kontroller

- [ ] Lighthouse score kontrol edildi mi?
- [ ] Mobile responsive test yapıldı mı?
- [ ] Page load speed optimal mi?
- [ ] Analytics çalışıyor mu?

### Security Kontroller

- [ ] HTTPS aktif mi?
- [ ] Security headers var mı?
- [ ] Environment variables güvenli mi?
- [ ] API keys exposed değil mi?

## 🔧 Troubleshooting

### Common Issues

**1. Build Hatası**

```bash
# Dependencies yeniden yükle
rm -rf node_modules package-lock.json
npm install

# Cache temizle
npm run clean
```

**2. Environment Variables Çalışmıyor**

- Variable isimlerinin `VITE_` ile başladığından emin olun
- Deployment platform'unda doğru tanımlandığından emin olun
- Hard reload yapın (Ctrl+Shift+R)

**3. Contact Form Çalışmıyor**

- EmailJS credentials'ları kontrol edin
- Network tab'da API calls kontrol edin
- CORS ayarlarını kontrol edin

**4. 404 Hatası (SPA Routing)**

- Server configuration'ı kontrol edin
- History API fallback ayarlarını kontrol edin

## 📞 Support

Deployment sürecinde sorun yaşarsanız:

1. **Documentation:** Project README.md dosyasını inceleyin
2. **Issues:** GitHub repository'de issue açın
3. **Community:** Stack Overflow'da sorun arayın

---

## 🎉 Deployment Başarılı!

Deployment'ınız başarılı olduktan sonra:

1. **Social Media:** Portfolio linkinizi paylaşın
2. **CV Update:** Website linkinizi CV'nize ekleyin
3. **LinkedIn:** Portfolio projenizi LinkedIn'de showcase edin
4. **Monitoring:** Regular olarak site durumunu kontrol edin

**Tebrikler!** Portfolio website'iniz artık canlıda! 🚀

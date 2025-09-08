// SEO Configuration and utilities
export const seoConfig = {
  title: 'Ömer Ada - Full Stack Developer Portfolio',
  description:
    'Modern web uygulamaları geliştiren experienced full stack developer. React, Node.js, TypeScript uzmanı.',
  keywords:
    'web developer, react developer, full stack developer, typescript, node.js, javascript, frontend, backend, portfolio',
  author: 'Ömer Ada',
  url: import.meta.env.VITE_SITE_URL || 'https://omerada.vercel.app',
  image: '/images/og-image.jpg',
  twitterHandle: '@omerada',
  locale: 'tr_TR',
  type: 'website',
};

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const generateSEOTags = (props: SEOProps = {}) => {
  const {
    title = seoConfig.title,
    description = seoConfig.description,
    keywords = seoConfig.keywords,
    image = seoConfig.image,
    url = seoConfig.url,
    type = seoConfig.type,
  } = props;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      image,
      url,
      type,
      locale: seoConfig.locale,
      siteName: seoConfig.title,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image,
      creator: seoConfig.twitterHandle,
    },
  };
};

// Helper function to update document meta tags
export const updateMetaTags = (seoProps: SEOProps = {}) => {
  const tags = generateSEOTags(seoProps);

  // Update document title
  if (tags.title) {
    document.title = tags.title;
  }

  // Update meta tags
  const metaTags = [
    { name: 'description', content: tags.description },
    { name: 'keywords', content: tags.keywords },
    { name: 'author', content: seoConfig.author },

    // Open Graph tags
    { property: 'og:title', content: tags.openGraph.title },
    { property: 'og:description', content: tags.openGraph.description },
    { property: 'og:image', content: tags.openGraph.image },
    { property: 'og:url', content: tags.openGraph.url },
    { property: 'og:type', content: tags.openGraph.type },
    { property: 'og:locale', content: tags.openGraph.locale },
    { property: 'og:site_name', content: tags.openGraph.siteName },

    // Twitter tags
    { name: 'twitter:card', content: tags.twitter.card },
    { name: 'twitter:title', content: tags.twitter.title },
    { name: 'twitter:description', content: tags.twitter.description },
    { name: 'twitter:image', content: tags.twitter.image },
    { name: 'twitter:creator', content: tags.twitter.creator },
  ];

  metaTags.forEach((tag) => {
    const selector = tag.name
      ? `meta[name="${tag.name}"]`
      : `meta[property="${tag.property}"]`;
    let metaElement = document.querySelector(selector);

    if (!metaElement) {
      metaElement = document.createElement('meta');
      if (tag.name) {
        metaElement.setAttribute('name', tag.name);
      } else if (tag.property) {
        metaElement.setAttribute('property', tag.property);
      }
      document.head.appendChild(metaElement);
    }

    metaElement.setAttribute('content', tag.content || '');
  });
};

// Structured data for better SEO
export const generateStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ömer Ada',
    jobTitle: 'Full Stack Developer',
    description: seoConfig.description,
    url: seoConfig.url,
    image: seoConfig.image,
    sameAs: [
      import.meta.env.VITE_GITHUB_URL,
      import.meta.env.VITE_LINKEDIN_URL,
      import.meta.env.VITE_TWITTER_URL,
    ].filter(Boolean),
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Developer',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    email: import.meta.env.VITE_CONTACT_EMAIL,
    telephone: import.meta.env.VITE_CONTACT_PHONE,
  };

  return JSON.stringify(structuredData);
};

// Add structured data to document head
export const addStructuredData = () => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = generateStructuredData();
  document.head.appendChild(script);
};

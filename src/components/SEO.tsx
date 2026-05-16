import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Krina Khunt`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "Krina Khunt — Full Stack Developer and AI enthusiast. Building high-performance web applications with React, Node.js, and AI/ML.");
    }

    // Update Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || "Krina Khunt, Full Stack Developer, React, Node.js, AI, Machine Learning, Computer Vision, Web Developer, Portfolio, Freelance, India");
    }

    // Update OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | Krina Khunt`);
    }

    // Update Twitter Title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${title} | Krina Khunt`);
    }

    // Update descriptions, images and canonical URL
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || document.querySelector('meta[name="description"]')?.getAttribute('content') || '');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description || document.querySelector('meta[name="description"]')?.getAttribute('content') || '');
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', (image) || ogImage.getAttribute('content') || '');
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', (image) || twitterImage.getAttribute('content') || '');
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url || window.location.origin + window.location.pathname);
    }

    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', url || window.location.origin + window.location.pathname);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url || canonical.getAttribute('href') || window.location.origin + '/');
    } else if (url) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }

    // Inject/Update JSON-LD structured data for the page
    try {
      const ldId = 'seo-json-ld';
      let ld = document.getElementById(ldId) as HTMLScriptElement | null;
      const pageUrl = url || window.location.origin + window.location.pathname;
      const ldData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'url': pageUrl,
        'name': `${title} | Krina Khunt`,
        'description': description || document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        'author': {
          '@type': 'Person',
          'name': 'Krina Khunt',
          'url': 'https://krinakhunt.in/'
        }
      };

      if (!ld) {
        ld = document.createElement('script');
        ld.type = 'application/ld+json';
        ld.id = ldId;
        document.head.appendChild(ld);
      }
      ld.text = JSON.stringify(ldData);
    } catch (e) {
      // fail silently
    }

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;

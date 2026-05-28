import React, { useEffect } from 'react';
import { PROJECTS } from '../constants';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schemaType?: 'profile' | 'projects' | 'about' | 'contact' | 'webpage';
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, schemaType = 'webpage' }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Krina Khunt`;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "Krina Khunt — Full Stack Developer and AI specialist. Building high-performance web applications with React, Node.js, and AI/ML.");
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
      const defaultDesc = description || document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      let ldData: Record<string, any> = {};

      if (schemaType === 'profile') {
        ldData = {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          'url': pageUrl,
          'name': `Krina Khunt | Full Stack Developer & AI Specialist`,
          'description': defaultDesc,
          'mainEntity': {
            '@type': 'Person',
            'name': 'Krina Khunt',
            'alternateName': 'Krina',
            'jobTitle': 'Full Stack Developer',
            'url': 'https://krinakhunt.in',
            'image': 'https://krinakhunt.in/girl.png',
            'sameAs': [
              'https://github.com/krinakhunt12',
              'https://www.linkedin.com/in/krinakhunt'
            ],
            'knowsAbout': ['React.js', 'TypeScript', 'Node.js', 'Python', 'TensorFlow', 'Keras', 'OpenCV', 'FastAPI', 'Plant Disease Detection', 'Smart Agriculture AI'],
            'worksFor': {
              '@type': 'Organization',
              'name': 'Freelance'
            },
            'address': {
              '@type': 'PostalAddress',
              'addressCountry': 'IN'
            }
          }
        };
      } else if (schemaType === 'projects') {
        const projectItems = PROJECTS.map((proj, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'item': {
            '@type': 'CreativeWork',
            'name': proj.title,
            'description': proj.description,
            'image': proj.image.startsWith('.') ? `https://krinakhunt.in${proj.image.substring(1)}` : proj.image,
            'url': proj.liveUrl,
            'genre': proj.category,
            'creator': {
              '@type': 'Person',
              'name': 'Krina Khunt'
            }
          }
        }));

        ldData = {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': defaultDesc,
          'mainEntity': {
            '@type': 'ItemList',
            'numberOfItems': PROJECTS.length,
            'itemListElement': projectItems
          }
        };
      } else if (schemaType === 'about') {
        ldData = {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': defaultDesc,
          'mainEntity': {
            '@type': 'Person',
            'name': 'Krina Khunt',
            'description': 'Full Stack Software Engineer blending logic and high-fidelity design to build premium web applications and plant disease AI detection suites.'
          }
        };
      } else if (schemaType === 'contact') {
        ldData = {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': defaultDesc,
          'mainEntity': {
            '@type': 'Person',
            'name': 'Krina Khunt',
            'email': 'krinakhunt12@gmail.com',
            'contactPoint': {
              '@type': 'ContactPoint',
              'contactType': 'professional inquiry',
              'email': 'krinakhunt12@gmail.com',
              'url': 'https://krinakhunt.in/contact'
            }
          }
        };
      } else {
        // Default WebPage
        ldData = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': defaultDesc,
          'author': {
            '@type': 'Person',
            'name': 'Krina Khunt',
            'url': 'https://krinakhunt.in/'
          }
        };
      }

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

  }, [title, description, keywords, image, url, schemaType]);

  return null;
};

export default SEO;

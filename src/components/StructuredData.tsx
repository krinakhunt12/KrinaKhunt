import React from 'react';
import { PROJECTS } from '../constants';

interface StructuredDataProps {
  schemaType?: 'profile' | 'projects' | 'about' | 'contact' | 'webpage';
  title: string;
  description: string;
  url: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ schemaType = 'webpage', title, description, url }) => {
  const getStructuredData = () => {
    const pageUrl = url || typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://krinakhunt.in';

    switch (schemaType) {
      case 'profile':
        return {
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          'url': pageUrl,
          'name': `Krina Khunt | Full Stack Developer & AI Specialist`,
          'description': description,
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

      case 'projects':
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

        return {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': description,
          'mainEntity': {
            '@type': 'ItemList',
            'numberOfItems': PROJECTS.length,
            'itemListElement': projectItems
          }
        };

      case 'about':
        return {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': description,
          'mainEntity': {
            '@type': 'Person',
            'name': 'Krina Khunt',
            'description': 'Full Stack Software Engineer blending logic and high-fidelity design to build premium web applications and plant disease AI detection suites.'
          }
        };

      case 'contact':
        return {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': description,
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

      default:
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'url': pageUrl,
          'name': `${title} | Krina Khunt`,
          'description': description,
          'author': {
            '@type': 'Person',
            'name': 'Krina Khunt',
            'url': 'https://krinakhunt.in/'
          }
        };
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(getStructuredData())}
    </script>
  );
};

export default StructuredData;

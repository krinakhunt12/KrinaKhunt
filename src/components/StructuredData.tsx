import React from 'react';
import { PROJECTS } from '../constants';
import type { BlogPost } from '../types';

interface StructuredDataProps {
  schemaType?: 'profile' | 'projects' | 'about' | 'contact' | 'webpage' | 'blog' | 'blogpost';
  title: string;
  description: string;
  url: string;
  post?: BlogPost;
}

const StructuredData: React.FC<StructuredDataProps> = ({ schemaType = 'webpage', title, description, url, post }) => {
  const getStructuredData = () => {
    const pageUrl = url || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://krinakhunt.in');
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://krinakhunt.in';

    const getMainSchema = () => {
      switch (schemaType) {
        case 'profile':
          return {
            '@type': 'ProfilePage',
            'url': pageUrl,
            'name': `Krina Khunt | Full Stack Developer & AI Specialist`,
            'description': description,
            'mainEntity': {
              '@type': 'Person',
              'name': 'Krina Khunt',
              'alternateName': 'Krina',
              'jobTitle': 'Full Stack Developer',
              'url': origin,
              'image': `${origin}/girl.png`,
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
              'image': proj.image.startsWith('.') ? `${origin}${proj.image.substring(1)}` : proj.image,
              'url': proj.liveUrl,
              'genre': proj.category,
              'creator': {
                '@type': 'Person',
                'name': 'Krina Khunt'
              }
            }
          }));

          return {
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
                'url': `${origin}/contact`
              }
            }
          };

        case 'blog':
          return {
            '@type': 'Blog',
            'url': pageUrl,
            'name': `${title} | Krina Khunt`,
            'description': description,
            'publisher': {
              '@type': 'Person',
              'name': 'Krina Khunt',
              'url': origin
            }
          };

        case 'blogpost':
          return {
            '@type': 'BlogPosting',
            'url': pageUrl,
            'headline': title,
            'description': description,
            'image': post?.image.startsWith('.') ? `${origin}${post.image.substring(1)}` : (post?.image || `${origin}/og-image.png`),
            'datePublished': post?.date ? new Date(post.date).toISOString() : new Date().toISOString(),
            'author': {
              '@type': 'Person',
              'name': 'Krina Khunt',
              'url': origin
            },
            'publisher': {
              '@type': 'Person',
              'name': 'Krina Khunt',
              'url': origin
            }
          };

        default:
          return {
            '@type': 'WebPage',
            'url': pageUrl,
            'name': `${title} | Krina Khunt`,
            'description': description,
            'author': {
              '@type': 'Person',
              'name': 'Krina Khunt',
              'url': origin
            }
          };
      }
    };

    const getBreadcrumbSchema = () => {
      const pathSegments = pageUrl.replace(origin, '').split('/').filter(Boolean);

      const itemListElement = [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': origin
        }
      ];

      let accumulatedPath = '';
      pathSegments.forEach((segment, index) => {
        accumulatedPath += `/${segment}`;
        let name = segment.charAt(0).toUpperCase() + segment.slice(1);

        if (segment === 'blogs') name = 'Journal';
        else if (segment === 'about') name = 'About Me';
        else if (segment === 'projects') name = 'Showcase';
        else if (segment === 'skills') name = 'Skills';
        else if (segment === 'contact') name = 'Connect';

        if (index === pathSegments.length - 1 && schemaType === 'blogpost' && post) {
          name = post.title;
        }

        itemListElement.push({
          '@type': 'ListItem',
          'position': index + 2,
          'name': name,
          'item': `${origin}${accumulatedPath}`
        });
      });

      return {
        '@type': 'BreadcrumbList',
        'itemListElement': itemListElement
      };
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [
        getMainSchema(),
        getBreadcrumbSchema()
      ]
    };
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(getStructuredData())}
    </script>
  );
};

export default StructuredData;

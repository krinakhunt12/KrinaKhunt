import React from 'react';
import { Helmet } from 'react-helmet-async';
import StructuredData from './StructuredData';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schemaType?: 'profile' | 'projects' | 'about' | 'contact' | 'webpage';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Krina Khunt — Full Stack Developer and AI specialist. Building high-performance web applications with React, Node.js, and AI/ML.",
  keywords = "Krina Khunt, Full Stack Developer, React, Node.js, AI, Machine Learning, Computer Vision, Web Developer, Portfolio, Freelance, India",
  image = "https://krinakhunt.in/og-image.png",
  url,
  schemaType = 'webpage'
}) => {
  const siteTitle = `${title} | Krina Khunt`;
  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://krinakhunt.in');

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      {/* JSON-LD Structured Data Schema */}
      <StructuredData
        schemaType={schemaType}
        title={title}
        description={description}
        url={canonicalUrl}
      />
    </>
  );
};

export default SEO;

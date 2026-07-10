import React from 'react';
import { Helmet } from 'react-helmet-async';
import StructuredData from './StructuredData';
import type { BlogPost } from '../types';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  schemaType?: 'profile' | 'projects' | 'about' | 'contact' | 'webpage' | 'blog' | 'blogpost';
  robots?: string;
  post?: BlogPost;
  authorTwitter?: string;
  themeColor?: string;
  additionalMetas?: Array<{ name?: string; property?: string; content: string }>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "Krina Khunt — Full Stack Developer and AI specialist. Building high-performance web applications with React, Node.js, and AI/ML.",
  keywords = "Krina Khunt, Full Stack Developer, React, Node.js, AI, Machine Learning, Computer Vision, Web Developer, Portfolio, Freelance, India, LeafGuard, Agricultural AI, Smart Farming",
  image = "https://krinakhunt.in/og-image.png",
  url,
  schemaType = 'webpage',
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  post,
  authorTwitter = "@krinakhunt12",
  themeColor = "#000000",
  additionalMetas = []
}) => {
  const siteTitle = `${title} | Krina Khunt`;
  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://krinakhunt.in');
  const formattedImage = image.startsWith('.')
    ? `https://krinakhunt.in${image.substring(1)}`
    : image;

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content={robots} />
        <meta name="googlebot" content={robots} />
        <meta name="bingbot" content={robots} />
        <meta name="theme-color" content={themeColor} />

        {/* RSS Auto-Discovery Feed */}
        <link rel="alternate" type="application/rss+xml" title="Krina Khunt's Journal RSS Feed" href="/rss.xml" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={schemaType === 'blogpost' ? 'article' : 'website'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={formattedImage} />
        <meta property="og:site_name" content="Krina Khunt Portfolio" />
        <meta property="og:locale" content="en_US" />

        {schemaType === 'profile' && (
          <>
            <meta property="profile:first_name" content="Krina" />
            <meta property="profile:last_name" content="Khunt" />
            <meta property="profile:username" content="krinakhunt12" />
            <meta property="profile:gender" content="female" />
          </>
        )}

        {schemaType === 'blogpost' && post && (
          <>
            <meta property="article:published_time" content={post.date ? new Date(post.date).toISOString() : new Date().toISOString()} />
            <meta property="article:author" content="https://krinakhunt.in" />
            <meta property="article:section" content={post.category} />
            {post.tags.map(tag => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          </>
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={authorTwitter} />
        <meta name="twitter:creator" content={authorTwitter} />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={formattedImage} />

        {/* Custom Extensible Metas */}
        {additionalMetas.map((meta, idx) => (
          <meta
            key={idx}
            name={meta.name}
            property={meta.property}
            content={meta.content}
          />
        ))}
      </Helmet>

      {/* JSON-LD Structured Data Schema */}
      <StructuredData
        schemaType={schemaType}
        title={title}
        description={description}
        url={canonicalUrl}
        post={post}
      />
    </>
  );
};

export default SEO;
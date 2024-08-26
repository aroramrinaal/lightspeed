import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  preloadImages?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage,
  preloadImages = [],
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />

      {/* Twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Preload images */}
      {preloadImages.map((image, index) => (
        <link key={index} rel="preload" href={image} as="image" />
      ))}
    </Head>
  );
};

export default SEO;

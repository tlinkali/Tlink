import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
    ogType?: string;
    ogImage?: string;
    structuredData?: object;
  }
  
  export const SEO = ({ 
    title, 
    description, 
    canonical, 
    ogType = 'website',
    ogImage = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b1e7e534-7b32-4e3d-af17-4697e8bd551c-t-link-operateur-vercel-app/assets/images/logo-tlink-D5qTB_pD-1.png',
    structuredData
  }: SEOProps) => {
  const siteTitle = 'T-Link Network Operateur';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "T-Link Network Operateur : Votre partenaire en télécommunications d'entreprise. Fibre optique, VoIP, Standard téléphonique hébergé et solutions de communication unifiée.";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
    );
  };

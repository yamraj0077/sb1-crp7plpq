import React from 'react';
import { Helmet } from 'react-helmet';
import { getToolMeta } from '../utils/seo/toolMeta';

interface SEOHeadProps {
  toolId?: string;
}

export function SEOHead({ toolId }: SEOHeadProps) {
  const meta = getToolMeta(toolId || '');
  const baseUrl = 'https://freeonlinetools.io';
  const currentUrl = toolId ? `${baseUrl}/${toolId}` : baseUrl;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords.join(', ')} />
      
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={currentUrl} />
      
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
}
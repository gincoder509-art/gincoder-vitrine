import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', 'portfolio', 'contact'];

  const sitemapRoutes = routes.map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: new Date().toISOString(),
  }));

  return sitemapRoutes;
}

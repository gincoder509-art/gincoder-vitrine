export type SiteConfig = typeof siteConfig;

const FQDN = 'https://gincoder-vitrine.netlify.app';

export const siteConfig = {
  name: 'Gincoder Multi-Service',
  description:
    "Création de sites web vitrines professionnels et de QR Codes intelligents en Haïti. Boostez votre présence numérique avec une solution simple, moderne et efficace. Contactez-nous pour une consultation gratuite.",
  url: FQDN,
  ogImage: `${FQDN}/og-image.png`,
  links: {
    twitter: 'https://twitter.com/gincoder',
    github: 'https://github.com/gincoder509-art/gincoder-vitrine',
    portfolio: 'https://portfolio.gincoder.online',
  },
  keywords: [
    'Création de site web Haïti',
    'Site vitrine professionnel',
    'QR Code personnalisé',
    'Développeur web Haïti',
    'Agence digitale Port-au-Prince',
    'Solution numérique pour PME',
    'Marketing digital Haïti',
    'QR Code WhatsApp',
    'Gincoder Multi-Service',
  ],
};

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Laptop,
  QrCode,
  Package,
  Mail,
  Phone,
  Briefcase,
  MoveRight,
  HelpCircle,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { WebPage, Service, BreadcrumbList, FAQPage } from 'schema-dts';
import { JsonLd } from '@/components/json-ld';
import TypewriterHero from '@/components/TypewriterHero';

export const metadata: Metadata = {
  title: `Création Site Web & QR Code Haïti | ${siteConfig.name}`,
  description: `Agence de création de site web professionnel et QR code intelligent en Haïti. Boostez votre visibilité locale et touchez plus de clients. Devis gratuit.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

const heroImage = PlaceHolderImages.find((p) => p.id === 'gincoder-hero')!;
const presentationImage = PlaceHolderImages.find(
  (p) => p.id === 'gincoder-presentation'
)!;
const demoImage = PlaceHolderImages.find((p) => p.id === 'gincoder-demo')!;

const offers = [
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: 'Site Web Vitrine sur Mesure',
    description:
      'Un site web professionnel, rapide et responsive, optimisé pour le référencement (SEO) afin de garantir une visibilité maximale sur Google. Présentez votre activité de manière claire et attractive.',
  },
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: 'QR Code Personnalisé et Dynamique',
    description:
      "Un QR code au design soigné intégrant votre logo. Il redirige instantanément vers votre site, votre contact WhatsApp ou toute autre destination, facilitant la connexion avec vos clients.",
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "Stratégie d'Intégration Complète",
    description:
      'Utilisez votre QR code sur tous vos supports de communication : cartes de visite, affiches, emballages, véhicules. Nous vous conseillons pour maximiser son impact.',
  },
];

const demoSteps = [
  {
    number: '1',
    title: 'Scannez le QR Code : La Découverte Instantanée',
    description:
      'Votre client flashe le QR code avec son smartphone. En un instant, le pont entre le monde physique et votre univers digital est créé, sans friction.',
  },
  {
    number: '2',
    title: 'Explorez le Site Web : Une Expérience Immersive',
    description:
      'Il atterrit sur un site vitrine rapide et élégant. Il y découvre votre histoire, vos services et la valeur que vous apportez, le tout dans un design qui inspire confiance.',
  },
  {
    number: '3',
    title: 'Engagez la Conversation : La Conversion Simplifiée',
    description:
      "Un bouton d'action clair l'invite à vous contacter via WhatsApp. Le message est pré-rempli, il n'a plus qu'à l'envoyer. Le contact est établi, une opportunité est née.",
  },
];

const faqItems = [
  {
    question: "Un site web est-il vraiment nécessaire si j'ai une page Facebook ?",
    answer:
      "C'est une excellente question. Voyez votre page Facebook comme un stand sur un grand marché : vous y êtes visible, mais vous êtes locataire. Un site web, c'est votre propre boutique. Il vous confère une crédibilité professionnelle inégalée, un contrôle total sur votre image et, surtout, il devient un actif qui prend de la valeur. C'est votre principal outil pour être trouvé sur Google, là où 90% des recherches locales commencent. Les deux sont complémentaires, mais le site web est la fondation de votre empire numérique.",
  },
  {
    question: 'Quels sont les délais pour la création de mon site et QR code ?',
    answer:
      "Nous privilégions l'agilité. Pour un site vitrine standard et son QR code associé, nous visons une livraison sous 10 à 15 jours ouvrés après réception de tous vos contenus (textes, logos, images). La rapidité dépend aussi de notre collaboration : plus vite vous nous fournissez les éléments, plus vite nous donnons vie à votre projet.",
  },
  {
    question: 'Le QR code a-t-il une date d\'expiration ou des frais cachés ?',
    answer:
      'Transparence totale : votre QR code est permanent et n\'expire jamais. Il n\'y a aucun frais récurrent, de maintenance ou de renouvellement pour le QR code lui-même. Il fonctionnera tant que le lien de destination (votre site web) est actif. C\'est un investissement unique pour un impact durable.',
  },
  {
    question: 'Serais-je capable de modifier mon site web moi-même ?',
    answer:
      "Absolument. L'autonomie de nos clients est une priorité. Sur demande, nous pouvons intégrer un CMS (Système de Gestion de Contenu) intuitif qui vous permettra de mettre à jour textes et images sans une seule ligne de code. Nous vous fournirons une courte formation. Et si vous préférez vous concentrer sur votre cœur de métier, nos forfaits de maintenance flexibles sont là pour ça.",
  },
  {
    question: "Comment sont définis vos tarifs ? Est-ce abordable pour une PME en Haïti ?",
    answer:
      "Chaque projet est une histoire unique, et nos tarifs le reflètent. Nous ne proposons pas de solutions à l'emporte-pièce, mais des devis sur mesure, adaptés à la réalité du marché haïtien et aux ambitions de chaque entrepreneur. Le meilleur point de départ est une consultation gratuite de 30 minutes pour discuter de votre vision. Visitez notre page de services pour découvrir nos offres packagées, conçues pour offrir un maximum de valeur.",
  },
  {
    question: "Comment le SEO est-il pris en compte dans la création du site ?",
    answer:
      "Le SEO n'est pas une option, c'est l'ADN de nos créations. Dès la première ligne de code, nous pensons 'Google'. Cela inclut l'optimisation technique (vitesse, compatibilité mobile), la structure sémantique de votre contenu (balises Hn, méta-données), le maillage interne, et une recherche de mots-clés pertinents pour votre secteur en Haïti. Nous construisons une fondation solide sur laquelle vous pourrez bâtir une stratégie de référencement gagnante.",
  }
];

const whatsappLink =
  "https://wa.me/50933377934?text=Bonjour%2C%20je%20suis%20intéressé%20par%20votre%20service%20de%20site%20web%20%2B%20QR%20code.%20J%27aimerais%20avoir%20plus%20d%27informations.";
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
  whatsappLink
)}`;

const contactInfo = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email',
    content: (
      <Button asChild className="w-full">
        <a href="mailto:gincoder-ms@outlook.fr">
          <Mail className="mr-2 h-4 w-4" /> Envoyer un e-mail
        </a>
      </Button>
    ),
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Téléphone',
    content: (
      <div className="flex w-full flex-col gap-3">
        <Button
          asChild
          className="w-full bg-gradient-to-r from-yellow-300 to-green-500 font-bold text-white transition-transform hover:scale-105"
        >
          <a href="tel:+50941704583">
            <Phone />
            Appel Natcom
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full border-red-600 bg-transparent font-bold text-red-600 transition-colors hover:scale-105 hover:bg-red-600 hover:text-white"
        >
          <a href="tel:+50944539500">
            <Phone />
            Appel Digicel
          </a>
        </Button>
      </div>
    ),
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Portfolio',
    content: (
      <Button asChild variant="outline" className="w-full">
        <a
          href="https://portfolio.gincoder.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Briefcase className="mr-2 h-4 w-4" /> Voir le portfolio
        </a>
      </Button>
    ),
  },
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: 'WhatsApp Direct',
    content: (
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-lg bg-white p-2">
          <Image
            src={qrCodeUrl}
            alt="QR Code pour WhatsApp"
            width={128}
            height={128}
          />
        </div>
        <p className="text-xs text-muted-foreground">
          Scannez pour discuter sur WhatsApp
        </p>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <JsonLd<WebPage>
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `Accueil - ${siteConfig.name}`,
          url: siteConfig.url,
          description: siteConfig.description,
          isPartOf: { '@id': siteConfig.url },
        }}
      />
      <JsonLd<BreadcrumbList>
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Accueil',
              item: siteConfig.url,
            },
          ],
        }}
      />
      <JsonLd<Service>
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Création de Site Web et QR Code pour PME en Haïti',
          serviceType: 'Développement Web',
          provider: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
          areaServed: {
            '@type': 'Country',
            name: 'Haïti',
          },
          description:
            'Service complet de création de sites web vitrines professionnels et de QR codes dynamiques pour les entreprises et entrepreneurs en Haïti. Nous nous concentrons sur le SEO local, la performance et un design qui convertit.',
        }}
      />
      <JsonLd<FAQPage>
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex h-dvh min-h-[700px] w-full flex-col items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
        <div className="relative z-10 flex flex-col items-center p-4 text-center text-white">
          <Image
            src="/assets/Logo.png"
            alt="Gincoder Logo"
            width={96}
            height={96}
            className="mb-4 h-24 w-24"
          />
          <h1 className="text-5xl font-bold tracking-tighter text-white drop-shadow-lg md:text-7xl">
            Création de Site Web & QR Codes en Haïti
          </h1>
          <TypewriterHero />
          <p className="mt-2 max-w-2xl text-lg text-slate-200">
            Attirez, engagez et fidélisez plus de clients grâce à une
            stratégie digitale sur mesure, pensée pour le marché haïtien.
          </p>
          <Button size="lg" asChild className="mt-8">
            <Link href="#cta">
              Obtenir un Devis Gratuit <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
                Votre Avantage Concurrentiel sur le Marché Haïtien
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Dans un écosystème numérique où chaque clic compte, se
                démarquer n'est plus une option, mais une nécessité. Gincoder
                Multi-Service n'est pas juste une agence web ; nous sommes des
                architectes de votre succès en ligne. Nous bâtissons des
                fondations digitales solides pour les PME, artisans et
                entrepreneurs ambitieux en Haïti.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Notre philosophie repose sur une synergie puissante : l'alliance
                d'un{' '}
                <strong className="font-semibold text-foreground">
                  site web vitrine ultra-performant
                </strong>
                , optimisé pour le référencement local (SEO), et d'un{' '}
                <strong className="font-semibold text-foreground">
                  QR code dynamique et personnalisé
                </strong>
                . Cet écosystème transforme chaque interaction client en une
                opportunité de conversion. Nous ne vous livrons pas un simple
                produit, mais une machine marketing conçue pour attirer et
                captiver.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <Image
                src={presentationImage.imageUrl}
                alt={presentationImage.description}
                width={800}
                height={600}
                className="object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint={presentationImage.imageHint}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Nos Solutions Clé-en-Main
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Chaque pack est pensé pour maximiser votre retour sur
              investissement et vous fournir des outils concrets pour votre
              croissance.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {offers.map((offer, i) => (
              <Card
                key={i}
                className="flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {offer.icon}
                  </div>
                  <CardTitle className="text-xl">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{offer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link
                href="https://portfolio.gincoder.online/services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir les services et tarifs{' '}
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 sm:py-32">
        <div className="container grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg shadow-xl lg:order-last">
            <Image
              src={demoImage.imageUrl}
              alt={demoImage.description}
              width={800}
              height={600}
              className="object-cover transition-transform duration-500 hover:scale-105"
              data-ai-hint={demoImage.imageHint}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Un Parcours Client Sans Couture
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La technologie est un pont, pas une barrière. Nous avons obsédé
              sur la simplification du parcours entre votre futur client et
              vous. Voici comment nous transformons un simple curieux en un
              prospect qualifié en trois étapes fluides.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              {demoSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-muted/50 py-24 sm:py-32">
        <div className="container max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Vos Questions, Nos Réponses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La clarté est la base de la confiance. Nous anticipons vos
              interrogations pour vous apporter des réponses transparentes et
              vous aider à prendre la meilleure décision.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  <div className="flex items-center gap-4">
                    <HelpCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center py-20 text-center sm:py-24">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Prêt à Digitaliser Votre Impact ?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Le marché n'attend pas. Chaque jour, des clients potentiels
            recherchent vos services en ligne. Ne leur laissez pas trouver vos
            concurrents en premier. Contactez-nous pour une consultation
            stratégique gratuite et découvrons ensemble comment propulser votre
            entreprise.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="mt-8 bg-white text-primary hover:bg-white/90"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.236.229.018.437.014.61-.01.173-.025.371-.149.52-.298.149-.149.223-.347.297-.52.075-.174.075-.298.149-.497.074-.198.149-.371.223-.446.074-.075.149-.149.298-.223.15-.074.297-.149.446-.223.149-.074.297-.149.223-.298-.074-.149-.149-.297-.298-.446z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.549 4.126 1.507 5.867L0 24l6.314-1.507C7.961 23.64 9.95 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.946 0-3.78-.51-5.373-1.4L2.4 22.4l1.8-4.227C3.18 16.314 2.5 14.26 2.5 12 2.5 6.477 6.977 2 12 2s9.5 4.477 9.5 9.5S17.023 21 12 21z" />
              </svg>
              Discutons de votre projet
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Contactez-nous
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un projet en tête ? Une question ? Nous sommes là pour vous aider
              à concrétiser vos idées. Choisissez votre canal préféré.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, i) => (
              <Card
                key={i}
                className="flex flex-col items-center p-6 text-center"
              >
                <CardHeader className="items-center gap-4 p-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex w-full flex-grow items-center p-0 pt-4">
                  <div className="w-full text-base text-muted-foreground">
                    {item.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Laptop,
  QrCode,
  Package,
  Mail,
  Phone,
  Briefcase,
  MoveRight,
} from 'lucide-react';

const heroImage = PlaceHolderImages.find((p) => p.id === 'gincoder-hero')!;
const presentationImage = PlaceHolderImages.find(
  (p) => p.id === 'gincoder-presentation'
)!;
const demoImage = PlaceHolderImages.find((p) => p.id === 'gincoder-demo')!;

const offers = [
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: 'Site web simple et publicitaire',
    description:
      'Une vitrine numérique professionnelle qui présente votre activité de manière claire et attractive.',
  },
  {
    icon: <QrCode className="h-8 w-8 text-primary" />,
    title: 'QR code propre',
    description:
      'Un QR code élégant et personnalisé, prêt à être scanné pour accéder directement à votre site web.',
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: "QR code libre d'intégration",
    description:
      'Utilisez votre QR code partout : carte de visite, affiche, flyer, t-shirt, casquette, sticker, vitrine, et bien plus encore.',
  },
];

const demoSteps = [
  {
    number: '1',
    title: 'Scanner',
    description: 'Votre client scanne le QR code avec son smartphone.',
  },
  {
    number: '2',
    title: 'Accéder',
    description: 'Il accède instantanément à votre site web vitrine.',
  },
  {
    number: '3',
    title: 'Contacter',
    description:
      'Un simple clic sur le bouton WhatsApp et le message est pré-rempli, prêt à être envoyé.',
  },
];

const contactInfo = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email',
    content: (
      <a
        href="mailto:gincoder-ms@outlook.fr"
        className="break-all hover:text-primary hover:underline"
      >
        gincoder-ms@outlook.fr
      </a>
    ),
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Téléphone',
    content: (
      <div className="flex flex-col gap-1">
        <a href="tel:+50941704583" className="hover:text-primary hover:underline">
          Natcom (+509 4170-4583)
        </a>
        <a href="tel:+50944539500" className="hover:text-primary hover:underline">
          Digicel (+509 4453-9500)
        </a>
      </div>
    ),
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Portfolio',
    content: <span className="italic text-muted-foreground">Bientôt disponible</span>,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex h-dvh min-h-[700px] w-full flex-col items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        </div>
        <div className="relative z-10 flex flex-col items-center p-4 text-center text-white">
          <Image src="/assets/Logo.png" alt="Gincoder Logo" width={80} height={80} className="mb-4 h-20 w-20" />
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-white drop-shadow-lg md:text-7xl">
            Gincoder Multi-Service
          </h1>
          <p className="mt-4 max-w-2xl font-headline text-xl font-semibold text-primary md:text-2xl">
            Sites web simples, QR codes intelligents
          </p>
          <p className="mt-2 max-w-xl text-lg text-slate-200">
            Votre présence numérique professionnelle en un clic.
          </p>
          <Button size="lg" asChild className="mt-8">
            <Link href="#cta">
              Commander le service <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
                Un service complet pour votre visibilité digitale
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Gincoder Multi-Service vous offre une solution clé en main pour
                établir votre présence en ligne et faciliter le contact avec vos
                clients. Nous créons pour vous un{' '}
                <strong className="font-semibold text-foreground">
                  site web vitrine professionnel
                </strong>{' '}
                accompagné d'un{' '}
                <strong className="font-semibold text-foreground">
                  QR code personnalisé
                </strong>
                . Simple, efficace et moderne.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <Image
                src={presentationImage.imageUrl}
                alt={presentationImage.description}
                data-ai-hint={presentationImage.imageHint}
                width={800}
                height={600}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Ce que vous obtenez
            </h2>
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
                  <CardTitle className="font-headline text-xl">
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{offer.description}</p>
                </CardContent>
              </Card>
            ))}
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
              data-ai-hint={demoImage.imageHint}
              width={800}
              height={600}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Comment ça fonctionne ?
            </h2>
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

      {/* CTA Section */}
      <section id="cta" className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center py-20 text-center sm:py-24">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Prêt à démarrer ?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Contactez-nous dès maintenant pour obtenir votre site web et QR code
            personnalisés.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="mt-8 bg-white text-primary hover:bg-white/90"
          >
            <a
              href="https://wa.me/50933377934?text=Bonjour%2C%20je%20suis%20intéressé%20par%20votre%20service%20de%20site%20web%20%2B%20QR%20code.%20J%27aimerais%20avoir%20plus%20d%27informations."
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
              Me contacter sur WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-24 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Contactez-nous
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {contactInfo.map((item, i) => (
              <Card key={i} className="flex flex-col items-center p-6 text-center">
                <CardHeader className="items-center gap-4 p-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <div className="text-base text-muted-foreground">
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

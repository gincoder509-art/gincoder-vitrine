import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Cloud, Code, Database } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-background')!;
const featureImage = PlaceHolderImages.find((p) => p.id === 'feature-image-1')!;
const videoThumbnail = PlaceHolderImages.find(
  (p) => p.id === 'video-thumbnail'
)!;
const avatarImage = PlaceHolderImages.find((p) => p.id === 'avatar-1')!;

const features = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Modular Blocks',
    description:
      'Easily add and edit content with a variety of pre-built blocks for text, images, and more.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: 'Cloud Powered',
    description:
      'Leverage the power of the cloud for scalability, reliability, and seamless performance.',
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Integrated Database',
    description:
      'A robust and secure database solution is at the core of our platform, ready for your data.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Build Your Next Project Faster
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80 md:text-xl">
            Gincoder provides a flexible and powerful platform to bring your
            ideas to life. Start with our templates and customize everything.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <Link href="#">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Powerful Features Out of the Box
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform comes with everything you need to build and launch
            modern web applications.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Image with Text Section */}
      <section id="services" className="bg-muted/50 py-16 md:py-24">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Customizable Navigation and Structure
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide a flexible foundation. Create an intuitive navigation
              system that can be easily customized and extended to fit your
              project's needs perfectly.
            </p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" /> Easy to customize
                components.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" /> Grid-based
                responsive layouts.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" /> Line-based
                iconography set.
              </li>
            </ul>
            <Button size="lg" className="mt-8" asChild>
              <Link href="#">Explore Services</Link>
            </Button>
          </div>
          <Image
            src={featureImage.imageUrl}
            alt={featureImage.description}
            data-ai-hint={featureImage.imageHint}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Video Section */}
      <section id="about" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch a quick walkthrough of how Gincoder can revolutionize your
            development workflow.
          </p>
        </div>
        <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={videoThumbnail.imageUrl}
            alt={videoThumbnail.description}
            data-ai-hint={videoThumbnail.imageHint}
            width={1280}
            height={720}
            className="w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/80 transition-transform hover:scale-110 hover:bg-primary">
              <svg
                className="h-10 w-10 text-primary-foreground"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="contact" className="bg-muted/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-2xl font-medium text-foreground md:text-3xl">
              “Gincoder has completely changed the way we approach new
              projects. The ability to start from a solid, well-designed
              template is a game-changer.”
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Avatar>
                <AvatarImage
                  src={avatarImage.imageUrl}
                  alt="Jane Doe"
                  data-ai-hint={avatarImage.imageHint}
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">Jane Doe</p>
                <p className="text-sm text-muted-foreground">
                  CEO, Tech Innovators
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

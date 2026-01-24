import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Gincoder Multi-Service - Sites web & QR codes professionnels',
  description:
    'Gincoder Multi-Service - Sites web simples, QR codes intelligents. Service professionnel de création de sites vitrine avec QR code pour contact WhatsApp.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          poppins.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}

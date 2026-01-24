import Link from 'next/link';
import { QrCode } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:text-left">
          <Link href="/" className="flex items-center space-x-2">
            <QrCode className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Gincoder Multi-Service</span>
          </Link>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>
            &copy; 2025 Gincoder Multi-Service. Tous droits réservés.
          </p>
          <p>Service professionnel de création de sites web et QR codes personnalisés.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { QrCode } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <QrCode className="h-6 w-6 text-primary" />
            <span className="font-headline text-base font-bold text-foreground">
              Gincoder Multi-Service
            </span>
          </Link>
          <p>&copy; 2025 Gincoder Multi-Service. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

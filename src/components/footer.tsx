import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/Logo.png"
              alt="Gincoder Logo"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-headline text-base font-bold text-foreground">
              Gincoder Multi-Service
            </span>
          </Link>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p>&copy; 2025 Gincoder Multi-Service. Tous droits réservés.</p>
            <Link
              href="https://aquamarine-melomakarona-53681d.netlify.app/fr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

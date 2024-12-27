import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <Link
              href="https://www.linkedin.com/in/peyman-pedrampour-b0b0b0b0/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Dr. Peyman Pedrampour
            </Link>
            . All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/privacy" className="transition-colors hover:text-foreground/80">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground/80">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
} 
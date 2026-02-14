import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function GrandiArtistiPage() {
  return (
    <div>
      <section className="border-b-8 border-neo-ink bg-neo-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-black uppercase leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-neo-ink">
            Grandi Artisti
          </h1>
          <p className="mt-6 max-w-2xl font-bold text-xl sm:text-2xl leading-relaxed text-neo-ink">
            I talenti che rappresentiamo. Strategie di promoting su misura per
            ogni artista.
          </p>
        </div>
      </section>

      <section className="border-b-8 border-neo-ink bg-neo-canvas bg-halftone px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-lg leading-relaxed">
            Questa sezione presenterà i grandi artisti gestiti da Pool Music Agency. In
            arrivo: biografie, tour, release e contenuti esclusivi.
          </p>
          <div className="mt-12">
            <Button href="/contatti">Contattaci per collaborazioni</Button>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-neo-ink bg-neo-ink px-4 py-12 text-neo-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link
            href="/"
            className="font-black uppercase tracking-widest hover:underline"
          >
            Pool Music Agency
          </Link>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="font-bold underline underline-offset-4 hover:no-underline">
              Home
            </Link>
            <Link href="/produzioni" className="font-bold underline underline-offset-4 hover:no-underline">
              Produzioni
            </Link>
            <Link href="/contatti" className="font-bold underline underline-offset-4 hover:no-underline">
              Contatti
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

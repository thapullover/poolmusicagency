import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Neo-brutalist display */}
      <section className="relative overflow-hidden border-b-8 border-neo-ink bg-neo-canvas bg-halftone px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-black uppercase leading-none tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl [text-shadow:4px_4px_0_#000]">
            <span className="block -rotate-1">Pool</span>
            <span className="mt-2 block rotate-1 text-neo-accent">Music Agency</span>
          </h1>
          <div
            className="mt-8 max-w-2xl border-4 border-neo-ink bg-neo-muted p-6 shadow-[8px_8px_0px_0px_#000]"
          >
            <p className="font-bold text-xl sm:text-2xl leading-relaxed text-neo-ink">
              Organizziamo concerti, show ed eventi. Promuoviamo artisti.
            </p>
          </div>
        </div>

        {/* Floating decorative sticker */}
        <div
          className="absolute right-4 top-1/4 hidden -rotate-12 border-4 border-neo-ink bg-neo-secondary px-4 py-2 font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_#000] sm:block"
          aria-hidden
        >
          Promo
        </div>
      </section>

      {/* Section: Cosa facciamo */}
      <section className="border-b-8 border-neo-ink bg-neo-secondary px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-black uppercase tracking-tighter text-4xl sm:text-5xl md:text-6xl">
            Cosa facciamo
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="font-black uppercase tracking-wider text-lg">
                Grandi Artisti
              </h3>
              <p className="mt-3 font-bold leading-relaxed">
                Scopri i grandi artisti in esclusiva regionale.
              </p>
              <Link
                href="/grandi-artisti"
                className="mt-4 inline-block font-bold underline underline-offset-4"
              >
                Scopri di più →
              </Link>
            </Card>
            <Card className="p-6" variant="muted">
              <h3 className="font-black uppercase tracking-wider text-lg">
                Le Nostre Produzioni
              </h3>
              <p className="mt-3 font-bold leading-relaxed">
                I nostri show che portiamo in giro per l&apos;Italia!
              </p>
              <Link
                href="/produzioni"
                className="mt-4 inline-block font-bold underline underline-offset-4"
              >
                Scopri di più →
              </Link>
            </Card>
            <Card className="p-6" variant="accent">
              <h3 className="font-black uppercase tracking-wider text-lg">
                Contatti
              </h3>
              <p className="mt-3 font-bold leading-relaxed">
                Hai un progetto? Vuoi sapere come avere i nostri artisti per il tuo evento? Scrivici.
              </p>
              <Link
                href="/contatti"
                className="mt-4 inline-block font-bold underline underline-offset-4"
              >
                Contattaci →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Section: Chi siamo */}
      <section className="border-b-8 border-neo-ink bg-neo-muted px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-black uppercase tracking-tighter text-4xl sm:text-5xl">
            Chi siamo
          </h2>
          <p className="mt-6 font-bold text-xl leading-relaxed">
            Organizziamo eventi, spettacoli e feste di piazza per enti pubblici, Pro Loco, comitati festeggiamenti e aziende in tutto il Lazio.
          </p>
          <p className="mt-4 font-bold text-xl leading-relaxed">
            Nessun intermediario, contatti diretti con management e produzione.
          </p>
          <p className="mt-4 font-bold text-xl leading-relaxed">
            Pronti a trovare la soluzione per il vostro evento?
          </p>
          <p className="mt-4 font-bold text-xl leading-relaxed">
            Raccontaci la tua manifestazione e ti proponiamo la soluzione artistica più adatta.
          </p>
          <div className="mt-10">
            <Button href="/contatti" variant="primary">
              CONTATTACI
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-neo-ink bg-neo-ink px-4 py-12 text-neo-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="font-black uppercase tracking-widest">
            Pool Music Agency
          </span>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="font-bold underline underline-offset-4 hover:no-underline"
            >
              Home
            </Link>
            <Link
              href="/grandi-artisti"
              className="font-bold underline underline-offset-4 hover:no-underline"
            >
              Grandi Artisti
            </Link>
            <Link
              href="/produzioni"
              className="font-bold underline underline-offset-4 hover:no-underline"
            >
              Produzioni
            </Link>
            <Link
              href="/contatti"
              className="font-bold underline underline-offset-4 hover:no-underline"
            >
              Contatti
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

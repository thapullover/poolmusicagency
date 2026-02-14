import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ProduzioniPage() {
  return (
    <div>
      <section className="border-b-8 border-neo-ink bg-neo-muted px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-black uppercase leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-neo-ink">
            Le Nostre Produzioni
          </h1>
          <p className="mt-6 max-w-2xl font-bold text-xl sm:text-2xl leading-relaxed text-neo-ink">
            Eventi, concerti e produzioni originali. Dal concept alla
            realizzazione sul palco.
          </p>
        </div>
      </section>

      <section className="border-b-8 border-neo-ink bg-neo-canvas bg-halftone px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-lg leading-relaxed">
            Concerti, festival, eventi privati e produzioni in house. Pool Music Agency
            crea esperienze musicali che restano.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Card className="p-6">
              <h2 className="font-black uppercase tracking-wider">Eventi</h2>
              <p className="mt-3 font-bold">Concerti e showcase dal vivo.</p>
            </Card>
            <Card className="p-6" variant="accent">
              <h2 className="font-black uppercase tracking-wider">Produzioni</h2>
              <p className="mt-3 font-bold">Concept e realizzazione completa.</p>
            </Card>
          </div>
          <div className="mt-12">
            <Button href="/contatti">Parlaci del tuo evento</Button>
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
            <Link href="/grandi-artisti" className="font-bold underline underline-offset-4 hover:no-underline">
              Grandi Artisti
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

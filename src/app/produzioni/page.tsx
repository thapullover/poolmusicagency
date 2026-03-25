import Link from "next/link";
import { produzioni } from "@/data/produzioni";
import { ArtistCard } from "@/components/ArtistCard";

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

      <section className="border-b-8 border-neo-ink bg-neo-canvas px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produzioni.map((produzione) => (
              <ArtistCard
                key={produzione.name}
                name={produzione.name}
                image={produzione.image}
                variant="muted"
                objectPosition="top"
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-neo-ink bg-neo-ink px-4 py-12 text-neo-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <Link
              href="/"
              className="font-black uppercase tracking-widest hover:underline"
            >
              Pool Music Agency SRLS
            </Link>
            <span className="text-center text-sm font-bold text-neo-white/90 sm:text-left">
              P.IVA 03311560605
            </span>
          </div>
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

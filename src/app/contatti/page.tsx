"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ContattiPage() {
  return (
    <div>
      <section className="border-b-8 border-neo-ink bg-neo-accent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-neo-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-black uppercase leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Contatti
          </h1>
          <p className="mt-6 max-w-2xl font-bold text-xl sm:text-2xl leading-relaxed">
            Hai un progetto? Vuoi far crescere il tuo brand musicale? Scrivici.
          </p>
        </div>
      </section>

      <section className="border-b-8 border-neo-ink bg-neo-canvas bg-halftone px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <form
            className="space-y-6 border-4 border-neo-ink bg-neo-white p-6 shadow-[8px_8px_0px_0px_#000] sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block font-bold uppercase tracking-wider"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-2 block w-full border-4 border-neo-ink bg-neo-canvas px-4 py-3 font-bold outline-none transition-all focus:bg-neo-secondary focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:ring-0"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-bold uppercase tracking-wider"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 block w-full border-4 border-neo-ink bg-neo-canvas px-4 py-3 font-bold outline-none transition-all focus:bg-neo-secondary focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:ring-0"
                placeholder="email@esempio.it"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-bold uppercase tracking-wider"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="mt-2 block w-full border-4 border-neo-ink bg-neo-canvas px-4 py-3 font-bold outline-none transition-all focus:bg-neo-secondary focus:shadow-[4px_4px_0px_0px_#000] focus:outline-none focus:ring-0"
                placeholder="Raccontaci del tuo progetto..."
              />
            </div>
            <Button variant="primary">
              Invia messaggio
            </Button>
          </form>
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
            <Link href="/produzioni" className="font-bold underline underline-offset-4 hover:no-underline">
              Produzioni
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

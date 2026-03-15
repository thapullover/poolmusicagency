import Link from "next/link";

export default function ContattiPage() {
  return (
    <div>
      <section className="border-b-8 border-neo-ink bg-neo-accent px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-neo-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-black uppercase leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Contatti
          </h1>
          <p className="mt-6 max-w-2xl font-bold text-xl sm:text-2xl leading-relaxed">
            Hai un evento in progetto? Vuoi far esibire i nostri artisti? Scrivici!
          </p>
        </div>
      </section>

      <section className="border-b-8 border-neo-ink bg-neo-canvas bg-halftone px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div
            className="border-4 border-neo-ink bg-neo-white p-6 shadow-[8px_8px_0px_0px_#000] sm:p-8"
          >
            <p className="font-bold uppercase tracking-wider text-neo-ink">
              Email
            </p>
            <a
              href="mailto:amministrazione@poolmusicagency.it"
              className="mt-3 block font-black text-base sm:text-xl md:text-2xl text-neo-ink underline underline-offset-4 transition-colors hover:text-neo-accent break-words"
            >
              amministrazione@poolmusicagency.it
            </a>
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
            <Link href="/produzioni" className="font-bold underline underline-offset-4 hover:no-underline">
              Produzioni
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

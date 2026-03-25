import Image from "next/image";
import { artisti } from "@/data/grandi-artisti";
import { produzioni } from "@/data/produzioni";

export const metadata = {
  title: "Depliant | Pool Music Agency",
  description: "Brochure stampabile di Pool Music Agency",
};

export default function DepliantPage() {
  return (
    <div className="depliant-print">
      {/* Copertina */}
      <section className="relative border-b-8 border-neo-ink bg-neo-canvas px-6 py-12 print:min-h-[297mm] print:flex print:flex-col print:justify-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-black uppercase leading-none tracking-tighter text-4xl sm:text-5xl md:text-6xl [text-shadow:4px_4px_0_#000]">
            <span className="block -rotate-1">Pool</span>
            <span className="mt-2 block rotate-1 text-neo-accent">Music Agency</span>
          </h1>
          <div className="mt-6 border-4 border-neo-ink bg-neo-muted p-4 shadow-[8px_8px_0px_0px_#000]">
            <p className="font-bold text-lg sm:text-xl leading-relaxed text-neo-ink">
              Organizziamo concerti, show ed eventi. Promuoviamo artisti.
            </p>
          </div>
        </div>
        {/* Maschera per nascondere il footer sulla prima pagina in stampa */}
        <div className="depliant-footer-mask hidden h-20 w-full print:block" aria-hidden />
      </section>

      {/* Chi siamo */}
      <section className="depliant-section depliant-fullpage border-b-8 border-neo-ink bg-neo-secondary px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-black uppercase tracking-tighter text-3xl sm:text-4xl">
            Chi siamo
          </h2>
          <p className="mt-4 font-bold text-base leading-relaxed">
            Organizziamo eventi, spettacoli e feste di piazza per
          </p>
          <ul className="mt-2 list-none space-y-1 font-bold text-base leading-relaxed">
            <li>• enti locali,</li>
            <li>• Pro Loco,</li>
            <li>• comitati festeggiamenti,</li>
            <li>• aziende e associazioni.</li>
          </ul>
          <p className="mt-3 font-bold text-base leading-relaxed">
            Nessun intermediario, contatti diretti con management e produzione.
          </p>
          <p className="mt-4 font-bold text-base leading-relaxed">
            Offriamo soluzioni per ogni esigenza e budget:
          </p>
          <ul className="mt-2 list-none space-y-1 font-bold text-base leading-relaxed">
            <li>• Concerti di grandi artisti,</li>
            <li>• Comici di livello nazionale,</li>
            <li>• Show, dj set e tribute band di nostra produzione.</li>
          </ul>
          <p className="mt-3 font-bold text-base leading-relaxed">
            Raccontaci la tua manifestazione e ti proponiamo la soluzione artistica più adatta.
          </p>
        </div>
      </section>

      {/* Grandi Artisti */}
      <section className="depliant-section border-b-8 border-neo-ink bg-neo-canvas px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-black uppercase tracking-tighter text-3xl sm:text-4xl mb-6">
            Grandi Artisti
          </h2>
          <p className="font-bold text-base mb-6 max-w-2xl">
            Le nostre esclusive regionali dei grandi artisti nazionali!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 print:grid-cols-4">
            {artisti.map((artista) => (
              <div
                key={artista.name}
                className="depliant-card border-4 border-neo-ink bg-neo-white overflow-hidden print:break-inside-avoid"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={artista.image}
                    alt={artista.name}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
                <div className="border-t-2 border-neo-ink p-2">
                  <p className="font-black uppercase tracking-wider text-xs">
                    {artista.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produzioni */}
      <section className="depliant-section border-b-8 border-neo-ink bg-neo-muted px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-black uppercase tracking-tighter text-3xl sm:text-4xl mb-6">
            Le Nostre Produzioni
          </h2>
          <p className="font-bold text-base mb-6 max-w-2xl">
            Eventi, concerti e produzioni originali. Dal concept alla realizzazione sul palco.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 print:grid-cols-3">
            {produzioni.map((prod) => (
              <div
                key={prod.name}
                className="depliant-card border-4 border-neo-ink bg-neo-white overflow-hidden print:break-inside-avoid"
                style={{ boxShadow: "4px 4px 0px 0px #000" }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>
                <div className="border-t-2 border-neo-ink p-2">
                  <p className="font-black uppercase tracking-wider text-xs">
                    {prod.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section className="depliant-section depliant-fullpage border-b-8 border-neo-ink bg-neo-accent px-6 py-10 text-neo-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-black uppercase tracking-tighter text-3xl sm:text-4xl mb-6">
            Contatti
          </h2>
          <p className="font-bold text-base mb-6">
            Hai un evento in progetto? Vuoi far esibire i nostri artisti? Scrivici!
          </p>
          <div className="space-y-4">
            <div className="border-4 border-neo-ink bg-neo-white p-4 shadow-[6px_6px_0px_0px_#000]">
              <p className="font-bold uppercase tracking-wider text-neo-ink text-sm">Email</p>
              <p className="mt-2 font-black text-neo-ink text-base">amministrazione@poolmusicagency.it</p>
            </div>
            <div className="border-4 border-neo-ink bg-neo-white p-4 shadow-[6px_6px_0px_0px_#000]">
              <p className="font-bold uppercase tracking-wider text-neo-ink text-sm">Ufficio Enti Locali</p>
              <p className="mt-2 font-black text-neo-ink text-base">338 8138355</p>
            </div>
            <div className="border-4 border-neo-ink bg-neo-white p-4 shadow-[6px_6px_0px_0px_#000]">
              <p className="font-bold uppercase tracking-wider text-neo-ink text-sm">Ufficio Privati</p>
              <p className="mt-2 font-black text-neo-ink text-base">393 8859806</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer del depliant */}
      <footer className="depliant-footer border-t-4 border-neo-ink bg-neo-ink px-6 py-6 text-neo-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 text-center">
          <span className="font-black uppercase tracking-widest text-sm">Pool Music Agency SRLS</span>
          <span className="text-xs font-bold text-neo-white/90">
            P.IVA 03311560605
          </span>
        </div>
      </footer>
    </div>
  );
}

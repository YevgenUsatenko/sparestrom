import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <article className="prose-legal">
      <p className="mb-8 rounded-lg border border-yellow-500/30 bg-yellow-500/5 px-4 py-3 text-sm text-yellow-400">
        ⚠️ Entwurf — von Rechtsanwalt zu prüfen vor Go-Live
      </p>

      <h1 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.02em]">
        Impressum
      </h1>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          Angaben gemäß § 5 E-Commerce-Gesetz (ECG)
        </h2>
        <div className="space-y-1 text-sm leading-relaxed text-sp-text-muted">
          <p><strong className="text-sp-text">[Firmenname GmbH — in Gründung]</strong></p>
          <p>[Straße + Hausnummer]</p>
          <p>5020 Salzburg, Österreich</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          Kontakt
        </h2>
        <div className="space-y-1 text-sm leading-relaxed text-sp-text-muted">
          <p>E-Mail: <a href="mailto:info@sparestrom.at" className="text-sp-accent hover:underline">info@sparestrom.at</a></p>
          <p>Telefon: [Telefonnummer]</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          Unternehmensgegenstand
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Vermittlung von Stromlieferverträgen zwischen Verbrauchern und Energieversorgungsunternehmen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          Registrierungsdaten
        </h2>
        <div className="space-y-1 text-sm leading-relaxed text-sp-text-muted">
          <p>Firmenbuchnummer: [FN XXXXXX x]</p>
          <p>Firmenbuchgericht: Landesgericht Salzburg</p>
          <p>UID-Nummer: [ATU XXXXXXXX]</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          Aufsichtsbehörde
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Gewerbebehörde: Magistrat der Stadt Salzburg
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          Mitgliedschaft
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Mitglied der Wirtschaftskammer Salzburg (WKO)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          Streitschlichtung
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
          Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet,
          an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </article>
  );
}

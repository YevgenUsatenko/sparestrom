import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
};

export default function AGBPage() {
  return (
    <article className="prose-legal">

      <h1 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.02em]">
        Allgemeine Geschäftsbedingungen
      </h1>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          1. Geltungsbereich
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Diese AGB gelten für die Nutzung des Stromvergleichs- und Vermittlungsservice
          auf sparestrom.at, betrieben von Yevgen Usatenko,
          5020 Salzburg, Österreich.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          2. Leistungsbeschreibung
        </h2>
        <div className="text-sm leading-relaxed text-sp-text-muted">
          <p className="mb-2">sparestrom.at bietet:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Einen kostenlosen Stromtarif-Vergleichsrechner</li>
            <li>Persönliche Beratung zum optimalen Stromtarif</li>
            <li>Vermittlung zwischen Verbrauchern und Energieversorgungsunternehmen</li>
          </ul>
          <p className="mt-2">
            sparestrom.at ist Vermittler, nicht Energieversorger. Der Stromliefervertrag
            kommt ausschließlich zwischen dem Kunden und dem gewählten Anbieter zustande.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          3. Kosten
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Die Nutzung des Vergleichsrechners und die Beratung sind für den Kunden
          <strong className="text-sp-text"> vollständig kostenlos</strong>. sparestrom.at
          finanziert sich ausschließlich über Provisionen der Energieversorger.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          4. Unabhängigkeit
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Die Tarifvergleiche erfolgen unabhängig und E-Control-konform. Provisionen
          beeinflussen nicht die Reihenfolge der Tarif-Empfehlungen. Der günstigste
          Tarif für den Kunden wird immer zuerst angezeigt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          5. Widerrufsrecht
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Gemäß dem österreichischen Fern- und Auswärtsgeschäfte-Gesetz (FAGG) haben
          Sie das Recht, einen über sparestrom.at vermittelten Vertrag innerhalb von
          <strong className="text-sp-text"> 14 Tagen</strong> ohne Angabe von Gründen zu widerrufen.
          Der Widerruf kann per E-Mail an info@sparestrom.at erfolgen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          6. Haftung
        </h2>
        <div className="text-sm leading-relaxed text-sp-text-muted">
          <p className="mb-2">
            sparestrom.at übernimmt keine Haftung für:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Die Richtigkeit der von Drittanbietern bereitgestellten Tarifinformationen</li>
            <li>Die Leistungserbringung durch den gewählten Energieversorger</li>
            <li>Preisänderungen nach Vertragsabschluss</li>
          </ul>
          <p className="mt-2">
            Die Haftung für eigene Inhalte richtet sich nach den allgemeinen gesetzlichen
            Bestimmungen des österreichischen Rechts.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          7. Anwendbares Recht & Gerichtsstand
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen.
          Gerichtsstand ist Salzburg, soweit gesetzlich zulässig.
        </p>
      </section>
    </article>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <article className="prose-legal">
      <p className="mb-8 rounded-lg border border-yellow-500/30 bg-yellow-500/5 px-4 py-3 text-sm text-yellow-400">
        ⚠️ Entwurf — von Rechtsanwalt zu prüfen vor Go-Live
      </p>

      <h1 className="mb-8 font-[family-name:var(--font-display)] text-3xl font-medium tracking-[-0.02em]">
        Datenschutzerklärung
      </h1>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          1. Verantwortlicher
        </h2>
        <div className="text-sm leading-relaxed text-sp-text-muted">
          <p>[Firmenname GmbH — in Gründung]</p>
          <p>[Adresse], 5020 Salzburg, Österreich</p>
          <p>E-Mail: <a href="mailto:datenschutz@sparestrom.at" className="text-sp-accent hover:underline">datenschutz@sparestrom.at</a></p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          2. Welche Daten wir erheben
        </h2>
        <div className="text-sm leading-relaxed text-sp-text-muted">
          <p className="mb-2">Im Rahmen unseres Stromvergleichs-Service erheben wir folgende Daten:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li><strong className="text-sp-text">Vergleichsrechner:</strong> Postleitzahl, Jahresverbrauch (kWh), aktueller Strompreis — keine personenbezogenen Daten.</li>
            <li><strong className="text-sp-text">Kontaktanfrage:</strong> Telefonnummer und/oder E-Mail-Adresse — freiwillige Angabe zur Kontaktaufnahme.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          3. Zweck der Datenverarbeitung
        </h2>
        <div className="text-sm leading-relaxed text-sp-text-muted">
          <ul className="ml-4 list-disc space-y-1">
            <li>Berechnung und Anzeige von Stromtarif-Vergleichen</li>
            <li>Kontaktaufnahme zur persönlichen Beratung auf Ihren Wunsch</li>
            <li>Vermittlung von Stromlieferverträgen</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          4. Rechtsgrundlage
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
          sowie zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          5. Speicherdauer
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Kontaktdaten werden maximal 6 Monate nach der letzten Kontaktaufnahme gelöscht,
          sofern kein Vertragsverhältnis zustande kommt. Bei Vertragsabschluss gelten die
          gesetzlichen Aufbewahrungsfristen (7 Jahre gemäß BAO).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          6. Weitergabe an Dritte
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Ihre Daten werden nur an den von Ihnen gewählten Stromanbieter weitergegeben,
          und zwar ausschließlich zum Zweck des Vertragsabschlusses. Eine Weitergabe zu
          Werbezwecken an Dritte findet nicht statt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          7. Hosting & Auftragsverarbeiter
        </h2>
        <div className="text-sm leading-relaxed text-sp-text-muted">
          <ul className="ml-4 list-disc space-y-1">
            <li><strong className="text-sp-text">Vercel Inc.</strong> — Hosting (Serverstandort: Frankfurt, Deutschland, EU)</li>
            <li><strong className="text-sp-text">Resend</strong> — Transaktions-E-Mails (EU-Region)</li>
          </ul>
          <p className="mt-2">
            Mit allen Auftragsverarbeitern bestehen Verträge gemäß Art. 28 DSGVO.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          8. Cookies & Analyse
        </h2>
        <p className="text-sm leading-relaxed text-sp-text-muted">
          Diese Website verwendet <strong className="text-sp-text">keine Cookies</strong> und
          kein Tracking. Wir setzen keine Analyse-Tools ein, die personenbezogene Daten erheben.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-lg font-medium">
          9. Ihre Rechte
        </h2>
        <div className="text-sm leading-relaxed text-sp-text-muted">
          <p className="mb-2">Sie haben das Recht auf:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Widerruf Ihrer Einwilligung jederzeit</li>
          </ul>
          <p className="mt-2">
            Beschwerden können bei der Österreichischen Datenschutzbehörde
            (dsb.gv.at) eingebracht werden.
          </p>
        </div>
      </section>
    </article>
  );
}

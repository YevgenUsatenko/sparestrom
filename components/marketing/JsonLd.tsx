export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "sparestrom.at",
    url: "https://sparestrom.at",
    logo: "https://sparestrom.at/opengraph-image",
    description:
      "Österreichs schnellster Stromvergleich. 100% unabhängig, E-Control-konform.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salzburg",
      addressCountry: "AT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@sparestrom.at",
      availableLanguage: "German",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gibt es beim Wechsel einen Stromausfall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Unmöglich. Dein Strom kommt immer aus demselben Netz des Netzbetreibers. Der Anbieterwechsel passiert rein auf dem Papier.",
        },
      },
      {
        "@type": "Question",
        name: "Muss ich meinen alten Vertrag selbst kündigen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nein. Wir erledigen das komplett. Du unterschreibst einmal digital die Vollmacht, wir kündigen fristgerecht und wickeln den Wechsel mit dem neuen Anbieter ab.",
        },
      },
      {
        "@type": "Question",
        name: "Was wenn ich es mir anders überlege?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "14 Tage Widerrufsrecht. Gesetzlich garantiert nach dem österreichischen Fern- und Auswärtsgeschäfte-Gesetz. Ein Klick, eine E-Mail – und der Wechsel ist ohne Kosten rückgängig.",
        },
      },
      {
        "@type": "Question",
        name: "Was kostet mich euer Service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für dich: 0 €. Immer. Wir bekommen eine Provision vom neuen Anbieter – aber nur, wenn der Tarif für dich wirklich besser ist.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

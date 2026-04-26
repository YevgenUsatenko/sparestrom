import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "sparestrom.at — Einmal wechseln. Immer sparen.",
    template: "%s | sparestrom.at",
  },
  description:
    "Österreichs schnellster Stromvergleich. Einmal 10 Minuten. Dann ein Leben lang sparen. E-Control-verifiziert. 100% unabhängig.",
  metadataBase: new URL("https://sparestrom.at"),
  openGraph: {
    title: "sparestrom.at — Einmal wechseln. Immer sparen.",
    description:
      "Österreichs schnellster Stromvergleich. Ø 487 € Ersparnis pro Haushalt und Jahr.",
    url: "https://sparestrom.at",
    siteName: "sparestrom.at",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sparestrom.at — Einmal wechseln. Immer sparen.",
    description:
      "Österreichs schnellster Stromvergleich. Ø 487 € Ersparnis pro Haushalt und Jahr.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sparestrom.at",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-AT"
      className={`${bricolage.variable} ${geist.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="dot-grid" />
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}

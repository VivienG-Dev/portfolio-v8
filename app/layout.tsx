import type { Metadata } from "next";
import Script from 'next/script'
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Spacing } from "@/components/spacing";

const anekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "VivienG | Développeur Front-end & Full Stack JavaScript",
  description:
    "Développeur spécialisé en Vue.js/Nuxt avec expertise en développement d'applications web modernes. \
    Création d'interfaces performantes et solutions full stack sur mesure.",
  keywords: [
    "développeur front-end",
    "Vue.js",
    "Nuxt",
    "JavaScript",
    "TypeScript",
    "développement web",
    "full stack",
    "applications web",
    "interfaces utilisateur",
    "développeur web France"
  ],
  authors: [{ name: "Vivien Grenier" }],
  openGraph: {
    title: "VivienG | Développeur Front-end & Full Stack JavaScript",
    description:
      "Développeur spécialisé en Vue.js/Nuxt avec expertise en développement d'applications web modernes. \
      Création d'interfaces performantes et solutions full stack sur mesure.",
    url: "https://www.vivieng.com",
    siteName: "Portfolio VivienG - Développeur Web",
    images: [
      {
        url: "https://www.vivieng.com/vivieng-meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio VivienG - Développeur Front-end & Full Stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VivienG | Développeur Front-end & Full Stack JavaScript",
    description:
      "Développeur spécialisé en Vue.js/Nuxt avec expertise en développement d'applications web modernes. \
      Création d'interfaces performantes et solutions full stack sur mesure.",
    images: ["https://www.vivieng.com/vivieng-meta-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <Script
        defer
        src="https://umami-e0gc00g8ooks40g40o800cws.jap-idols.com/script.js"
        data-website-id="c25f64c2-cb07-4858-a8e3-a60943f1ef14"
      />
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${anekTelugu.variable} font-sans antialiased h-full bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Spacing />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";

const anekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Développeur web | VivienG",
  description:
    "Développeur web freelance pouvant créer votre site internet et vous apporter de la visibilité sur internet.",
  keywords: ["web development", "portfolio", "projects", "frontend", "backend", "fullstack"],
  authors: [{ name: "VivienG" }],
  openGraph: {
    title: "Développeur web | VivienG",
    description:
      "Développeur web freelance pouvant créer votre site internet et vous apporter de la visibilité sur internet.",
    url: "https://www.vivieng.com",
    siteName: "Développeur web | VivienG",
    images: [
      {
        url: "https://www.vivieng.com/images/vivieng-meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "VivienG Portfolio Preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur web | VivienG",
    description:
      "Développeur web freelance pouvant créer votre site internet et vous apporter de la visibilité sur internet.",
    images: ["https://www.vivieng.com/images/vivieng-meta-image.jpg"],
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
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${anekTelugu.variable} font-sans antialiased h-full bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

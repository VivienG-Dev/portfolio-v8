import type { Metadata } from "next";
import { createPageMetadata, HOME_TITLE, HOME_DESCRIPTION, SITE_URL } from "@/lib/seo";
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
  ...createPageMetadata({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }),
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Vivien Grenier", url: SITE_URL }],
  creator: "Vivien Grenier",
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

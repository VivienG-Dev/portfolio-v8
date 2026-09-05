import type { Locale } from "@/lib/i18n";
import Script from 'next/script'
import { Anek_Telugu } from "next/font/google";
import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Spacing } from "@/components/spacing";

const anekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export function SiteLayout({
  children, locale,
}: Readonly<{
  children: React.ReactNode;
  locale: Locale;
}>) {
  return (
    <html lang={locale} className="h-full" suppressHydrationWarning>
      <Script
        defer
        src="https://umami-e0gc00g8ooks40g40o800cws.jap-idols.com/script.js"
        data-website-id="c25f64c2-cb07-4858-a8e3-a60943f1ef14"
      />
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${anekTelugu.variable} font-sans antialiased h-full bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header locale={locale} />
          {children}
          <Spacing />
          <Footer locale={locale} />
        </ThemeProvider>
      </body>
    </html>
  );
}

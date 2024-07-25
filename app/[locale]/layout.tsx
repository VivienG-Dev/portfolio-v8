import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

const anekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption" });

export const metadata: Metadata = {
  title: "VivienG | Portfolio",
  description: "Créateur de projet web et développeur web.",
};

const locales = ["en", "fr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${anekTelugu.variable} font-sans antialiased h-full bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

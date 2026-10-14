import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navigation/NavBar";
import LoadingScreen from "./components/ui/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ankafa MT - Portfolio",
    template: "%s | Ankafa MT",
  },
  description:
    "Portfolio professionnel d'Ankafa MT. Développeur web spécialisé en Next.js, React et technologies modernes.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  keywords: [
    "portfolio",
    "développeur web",
    "Next.js",
    "React",
    "TypeScript",
    "Ankafa MT",
  ],
  authors: [{ name: "Ankafa MT" }],
  creator: "Ankafa MT",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ankafa-mt.dev",
    siteName: "Ankafa MT Portfolio",
    title: "Ankafa MT - Portfolio",
    description:
      "Portfolio professionnel d'Ankafa MT. Développeur web spécialisé en Next.js, React et technologies modernes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankafa MT - Portfolio",
    description:
      "Portfolio professionnel d'Ankafa MT. Développeur web spécialisé en Next.js, React et technologies modernes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#F5F0E6" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LoadingScreen />
        <NavBar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

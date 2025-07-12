import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casinha Mineira - Restaurante",
  description: "Restaurante tradicional mineiro com pratos típicos da culinária brasileira. Feijoada, picanha, torresmo e muito mais!",
  keywords: "restaurante, mineiro, feijoada, picanha, torresmo, culinária brasileira, comida típica",
  authors: [{ name: "Casinha Mineira" }],
  creator: "Casinha Mineira",
  publisher: "Casinha Mineira",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://casinhamineira.com.br'),
  openGraph: {
    title: "Casinha Mineira - Restaurante",
    description: "Restaurante tradicional mineiro com pratos típicos da culinária brasileira",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casinha Mineira - Restaurante",
    description: "Restaurante tradicional mineiro com pratos típicos da culinária brasileira",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

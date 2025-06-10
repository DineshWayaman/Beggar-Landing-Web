import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://playbeggar.online"),
  title: {
    default: "Beggar Online - Multiplayer Card Game",
    template: "%s | Beggar Online",
  },
  description:
    "Play Beggar Online, a strategic multiplayer card game with friends. Features voice chat, multiple roles, and exciting gameplay.",
  keywords: [
    "beggar card game",
    "online card games",
    "multiplayer games",
    "strategic card games",
    "voice chat games",
  ],
  authors: [{ name: "Beggar Online Team" }],
  creator: "Beggar Online",
  publisher: "Beggar Online",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/img/icon.png",
    apple: "/img/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playbeggar.online",
    siteName: "Beggar Online",
    title: "Beggar Online - Strategic Multiplayer Card Game",
    description:
      "Play Beggar Online with friends worldwide! Strategic gameplay, voice chat, and unique roles.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beggar Online Game Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beggar Online - Strategic Multiplayer Card Game",
    description:
      "Play Beggar Online with friends worldwide! Strategic gameplay, voice chat, and unique roles.",
    images: ["/img/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

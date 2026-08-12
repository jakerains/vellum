import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tryvellum.vercel.app"),
  title: "Vellum — Visual feedback for AI-edited video",
  description:
    "You see the problem. Your agent can't. Vellum is a visual feedback interface for AI-edited video — pin time-coded notes onto any HyperFrames frame, and your coding agent reads them back and makes the edits.",
  icons: {
    icon: "/favicon-64.png",
    shortcut: "/favicon-64.png",
    apple: "/favicon-64.png",
  },
  openGraph: {
    type: "website",
    url: "https://tryvellum.vercel.app",
    siteName: "Vellum",
    title: "Vellum — Visual feedback for AI-edited video",
    description:
      "Pin time-coded notes onto any HyperFrames frame. Your coding agent reads them back and makes the edits.",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Vellum — visual feedback for AI-edited video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vellum — Visual feedback for AI-edited video",
    description:
      "Pin time-coded notes onto any HyperFrames frame. Your coding agent reads them back and makes the edits.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-text">
        {children}
      </body>
    </html>
  );
}

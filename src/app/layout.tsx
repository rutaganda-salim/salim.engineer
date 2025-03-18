import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaid Mukaddam",
  description:
    "Indie developer passionate about user interfaces and generative AI. Exploring design and crafting thoughtful interactions.",
  generator: "Next.js",
  applicationName: "Zaid Mukaddam's Portfolio",
  keywords: [
    "zaid mukaddam",
    "developer",
    "user interfaces",
    "generative AI",
    "web development",
    "design",
  ],
  authors: [{ name: "Zaid Mukaddam", url: "https://zaidmukaddam.com" }],
  icons: {
    icon: "/icons/icon.svg",
    shortcut: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.className}>
      <body className="flex min-h-screen flex-col text-neutral-950 text-sm">
        <main className="flex-1 pt-24">{children}</main>
        <footer className="relative">
          <span className="block p-6 text-center text-xs text-neutral-500">
            salim rutaganda
          </span>
          <div className="h-screen w-full fixed top-0 left-0 -z-10  bg-[url('/grain.jpg')] opacity-5" />
        </footer>
      </body>
    </html>
  );
}

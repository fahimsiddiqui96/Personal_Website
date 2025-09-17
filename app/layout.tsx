import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahim Siddiqui — DevOps Engineer (QA → DevOps)",
  description:
    "DevOps engineer focused on CI/CD, containers, AWS, Kubernetes, and Terraform.",
  metadataBase: new URL("https://localhost"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <a href="#content" className="skip-link">Skip to content</a>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main id="content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

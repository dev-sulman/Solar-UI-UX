import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Skipping Google Fonts to ensure build stability in network-restricted environments
const geistSans = { variable: "--font-sans" };
const geistMono = { variable: "--font-mono" };

export const metadata: Metadata = {
  title: "Solar Energy & Power Consulting | Dr. Mahmoud Aboudakka",
  description: "Edmonton-based firm specializing in electrical engineering, power systems design, and renewable energy consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent/30 selection:text-accent-foreground`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

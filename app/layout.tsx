import type { Metadata } from "next";
import { Rubik, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/feature/Header";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Kicks Store",
  description: "The biggest sneaker store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${openSans.variable} antialiased bg-white text-dark font-sans`}
      >
        <main className="min-h-screen flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

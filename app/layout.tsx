import "./globals.css";
import type { Metadata } from "next";
import { Rubik, Open_Sans, Inter } from "next/font/google";
import Header from "@/components/feature/Header";
import ReduxProvider from "@/components/ReduxProvider";
import Footer from "@/components/feature/Footer";

// font setup
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// metadata
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
        className={`${rubik.variable} ${openSans.variable} ${inter.variable} antialiased bg-white text-dark font-sans`}
      >
        <ReduxProvider>
          <main className="layout_container">
            <Header />
            {children}
            <Footer />
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}

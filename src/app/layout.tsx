import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevQuora - A Q&A App for Devs",
  description: "DevQuora - A Q&A App for Developers, Inspired by Curious Tech Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-black dark:text-white`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

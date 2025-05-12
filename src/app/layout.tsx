import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const nunito = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Countries App",
  description: "Countries App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" id="root">
      <body
        className={`${nunito.variable} antialiased min-h-screen bg-background dark:bg-foreground dark:text-white relative`}
      >
        <Header />
        <main className="py-6 px-4 md:py-12 md:px-20">{children}</main>
      </body>
    </html>
  );
}

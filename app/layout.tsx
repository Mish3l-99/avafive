import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "My Ava Five Assignment",
  description:
    "I am building this site for an evaluation test for a front end role at ava five.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

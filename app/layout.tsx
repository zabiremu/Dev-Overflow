import React from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});
const Layout = ({ children }: { children: React.ReactNode }) => {
  /// 
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary: "primary-gradient",
        footerActionLink:"primary-text-color hover:text-primary-500"
      },
    }}>
      <html lang="en" >
        <body className={`${inter.variable} ${grotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;

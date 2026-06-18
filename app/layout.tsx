import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import GeneralSans from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import ClarityTracker from "@/components/shared/clarity-tracker";
import Script from "next/script";
const generalSans = GeneralSans({
  src: "../public/fonts/GeneralSans-Bold.otf",
  weight: "700",
  display: "swap",
  variable: "--font-generalSans",
});
const ethnocentric = GeneralSans({
  src: "../public/fonts/Ethnocentric-Regular.otf",
  weight: "400",
  display: "swap",
  variable: "--font-ethnocentric",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Kult Games",
  description:`
  The Gateway to Intelligent Gaming \n\n
  One Identity • Autonomous Agents • Prediction AI • Infinite Experiences
  `
    // "Kult Games is leading a revolution in the gaming industry by introducing a visionary Play & Earn & Engage ecosystem that integrates Socialfi and multichain interoperability.",
};

import SmoothScroll from "@/components/shared/smooth-scroll";
import ScrollProgress from "@/components/shared/scroll-progress";
import AmbientBackground from "@/components/shared/ambient-background";

// ... (skipping metadata)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${generalSans.variable} ${quicksand.variable} ${ethnocentric.variable} antialiased`}
      >
        <ClarityTracker />
        <ScrollProgress />
        <AmbientBackground />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        {/* <GamePopup /> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5976995PZE"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5976995PZE');
          `}
        </Script>
      </body>
    </html>
  );
}

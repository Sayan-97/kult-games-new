import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import GeneralSans from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
// import GamePopup from "@/components/shared/game-popup";

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
  description:
    "Kult Games is leading a revolution in the gaming industry by introducing a visionary Play & Earn & Engage ecosystem that integrates Socialfi and multichain interoperability.",
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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5976995PZE"
        ></script>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5976995PZE');
        `,
          }}
        />
      </head>
      <body
        className={`${generalSans.variable} ${quicksand.variable} ${ethnocentric.variable} antialiased`}
      >
        <ScrollProgress />
        <AmbientBackground />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        {/* <GamePopup /> */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import GeneralSans from "next/font/local";
import "./globals.css";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

const generalSans = GeneralSans({
  src: "../public/fonts/GeneralSans-Bold.otf",
  weight: "700",
  display: "swap",
  variable: "--font-generalSans",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} ${quicksand.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

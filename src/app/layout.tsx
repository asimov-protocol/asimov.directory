import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@near-wallet-selector/modal-ui/styles.css';
import Nav from "@/components/Nav";
import { WalletSelectorProvider } from "@/context/WalletSelectorContext";
import { BreadcrumbProvider } from "@/context/BreadcrumbContext";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asimov Directory",
  description: "",
};

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WalletSelectorProvider>
          <Nav />
          <main className="relative">
            <div className="absolute inset-0 bg-linear-170 from-oOrange-500/45 to-transparent to-50% -z-1 w-full h-80 pointer-events-none" />
            <BreadcrumbProvider>
              <div className="container-default">
                {children}
              </div>
            </BreadcrumbProvider>
          </main>
          <Footer />
        </WalletSelectorProvider>
      </body>
    </html>
  );
}

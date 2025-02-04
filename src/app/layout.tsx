import type { Metadata } from "next";
import "./globals.css";
import "@near-wallet-selector/modal-ui/styles.css";
import Nav from "@/components/Nav";
import { WalletSelectorProvider } from "@/context/WalletSelectorContext";
import { BreadcrumbProvider } from "@/context/BreadcrumbContext";
import Footer from "@/components/Footer";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Asimov Directory",
  description: "",
};

const suisseIntl = localFont({
  src: [
    {
      path: '../assets/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SuisseIntl-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-suisse-intl', // optional
});

// Arges configuration
const arges = localFont({
  src: [
    {
      path: '../assets/fonts/Arges-NormalMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Arges-NormalBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-arges',
});

type Props = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${suisseIntl.variable} ${arges.variable} antialiased`}>
        <WalletSelectorProvider>
          <Nav />
          <main className="relative ">
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

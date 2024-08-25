import { roboto, lexendDeca } from "@styles/fonts";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StoryblokProvider from "@components/StoryblokProvider";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${lexendDeca.variable}`}>
      <GoogleTagManager gtmId="GTM-MNX3ZLNL" />

      <body>
        <Navbar />
        <StoryblokProvider>{children}</StoryblokProvider>
        <Footer />

        <Script
          src="https://cdn.cookie-script.com/s/6c2223e53fac6d85d6af2ca3548ef994.js"
          strategy="lazyOnload"
        />
      </body>

      <GoogleAnalytics gaId="G-RLLSRZWV4D" />
    </html>
  );
}

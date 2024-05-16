import type { Metadata } from "next";
import { roboto, lexendDeca } from "@styles/fonts";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

export const metadata: Metadata = {
  title: "Upwood",
  description: "Upwood is built with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${lexendDeca.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}

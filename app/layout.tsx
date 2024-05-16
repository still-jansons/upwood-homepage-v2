import type { Metadata } from "next";
import { roboto, lexendDeca } from "@styles/fonts";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import StoryblokProvider from "@components/StoryblokProvider";

export const metadata: Metadata = {
  title: "Green stocks",
  description:
    "Socially responsible investment in highly profitable nature preservation project digital shares.",
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
        <StoryblokProvider>{children}</StoryblokProvider>
        <Footer />
      </body>
    </html>
  );
}

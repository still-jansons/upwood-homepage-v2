import type { Metadata } from "next";
import { roboto, lexendDeca } from "@styles/fonts";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import HeroSection from "@components/HeroSection";
import Page from "@components/Page";
import Section from "@components/Section";
import TextListBlock from "@components/TextListBlock";
import TextElement from "@components/TextElement";
import QuoteElement from "@components/QuoteElement";
import VideoBlock from "@components/VideoBlock";
import LogoListBlock from "@components/LogoListBlock";
import LogoElement from "@components/LogoElement";
import FooterFormSection from "@components/FooterFormSection";
import ProfileListBlock from "@components/ProfileListBlock";
import ProfileElement from "@components/ProfileElement";
import NewsletterForm from "@components/form/NewsletterForm";
import LearnSection from "@components/LearnSection";

export const metadata: Metadata = {
  title: "Upwood",
  description: "Upwood is built with love",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    heroSection: HeroSection,
    section: Section,
    textListBlock: TextListBlock,
    textElement: TextElement,
    quoteElement: QuoteElement,
    videoBlock: VideoBlock,
    logoListBlock: LogoListBlock,
    logoListElement: LogoElement,
    footerFormSection: FooterFormSection,
    profileListBlock: ProfileListBlock,
    profileListElement: ProfileElement,
    newsletterForm: NewsletterForm,
    learnSection: LearnSection,
  },
});

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

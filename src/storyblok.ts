import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "@components/Page";
import HeroSection from "@components/HeroSection";
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
import FAQSection from "@components/FaqSection";

export const initStoryblok = () => {
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
      faqSection: FAQSection,
    },
  });
};

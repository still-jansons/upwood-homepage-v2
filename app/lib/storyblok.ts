import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "@/app/components/pages/Page";
import HeroSection from "@/app/components/sections/HeroSection";
import Section from "@/app/components/sections/Section";
import TextListBlock from "@/app/components/blocks/TextListBlock";
import TextElement from "@/app/components/elements/TextElement";
import QuoteElement from "@/app/components/elements/QuoteElement";
import VideoBlock from "@/app/components/blocks/VideoBlock";
import LogoListBlock from "@/app/components/blocks/LogoListBlock";
import LogoElement from "@/app/components/elements/LogoElement";
import FooterFormSection from "@/app/components/sections/FooterFormSection";
import ProfileListBlock from "@/app/components/blocks/ProfileListBlock";
import ProfileElement from "@/app/components/elements/ProfileElement";
import NewsletterForm from "@components/form/NewsletterForm";
import FAQSection from "@/app/components/sections/FaqSection";
import PrivacyPage from "@/app/components/pages/PrivacyPage";
import LearnSection from "@/app/components/sections/LearnSection";
import ArticlePage from "@components/pages/ArticlePage";

export const initStoryblok = async (options = {}) => {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: { https: true },
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
      privacyPage: PrivacyPage,
      learnSection: LearnSection,
      articlePage: ArticlePage,
    },
  });
};

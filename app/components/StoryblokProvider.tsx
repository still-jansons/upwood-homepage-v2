"use client";

/** 2. Import your components */
import { initStoryblok } from "@/src/storyblok";
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

/** 3. Initialize it as usual */
initStoryblok({
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

export default function StoryblokProvider({ children }: any) {
  return children;
}

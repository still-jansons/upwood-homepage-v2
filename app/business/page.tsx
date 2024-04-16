import HeroSection from "@components/HeroSection";
import TextListBlock from "@components/TextListBlock";
import Section from "@components/Section";
import TextElement from "@components/TextElement";
import VideoBlock from "@components/VideoBlock";
import NewsletterForm from "@components/form/NewsletterForm";
import FooterFormSection from "@components/FooterFormSection";
import {
  getStoryblokApi,
  ISbStoriesParams,
  ISbStory,
  StoryblokComponent,
} from "@storyblok/react";

async function getData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblok = getStoryblokApi();
  return storyblok.get("cdn/stories/business", sbParams, { cache: "no-store" });
}

export default async function Business() {
  const { data } = (await getData()) as ISbStory;

  return <StoryblokComponent blok={data.story.content} />;
}

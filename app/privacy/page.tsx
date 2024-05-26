import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";
import StoryblokStory from "@storyblok/react/story";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upwood | Privacy policy and responsible use of your personal data",
  description:
    "Review Upwood's privacy policy to understand how we collect, use, and protect your personal information. Transparency and responsible use of data are our priorities.",
};

export default async function Privacy() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/privacy", sbParams);
}

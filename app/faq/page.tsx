import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokStory,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upwood | Frequently Asked Questions FAQ about forest investments",
  description:
    "Find answers to common questions about Upwood's investment platform, process,legal compliance. Learn how you can participate in our mission to save the planet.",
};

export default async function FAQ() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/faq", sbParams);
}

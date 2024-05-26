import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokStory,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Upwood | Socially responsible investment in forest and carbon credits",
  description:
    "Upwood offers stable, low-risk, ESG investment opportunities in forest, land and carbon offset credits. Join our exclusive community of eco-conscious investors.",
};

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/home", sbParams);
}

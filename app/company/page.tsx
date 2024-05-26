import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upwood | Our mission and vision towards sustainable future",
  description:
    "Learn about Upwood's story and commitment to planting more forests while empowering humanity with accessible investments in forest plantations and carbon credits",
};

export default async function Company() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/company", sbParams);
}

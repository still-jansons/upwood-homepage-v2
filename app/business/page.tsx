import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokStory,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/app/lib/storyblok";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upwood | ESG investment in forests and carbon credits for companies",
  description:
    "Upwood offers sustainable investments eliminating green-washing with innovative technologies. Offset your CO2 emissions, reach carbon neutrality and improve ESG marketing",
};

export default async function Business() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/business", sbParams);
}

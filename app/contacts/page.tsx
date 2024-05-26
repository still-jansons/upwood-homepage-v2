import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";
import StoryblokStory from "@storyblok/react/story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upwood | Contact us to enquire more about our investment offerings",
  description:
    "Get in touch with Upwood for more information on sustainable ESG investment opportunities in forests, carbon removal and offset credits. Invest in forest with us",
};

export default async function Contacts() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/contacts", sbParams);
}

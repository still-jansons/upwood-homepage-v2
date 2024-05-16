import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";

export default async function Home() {
  const { data } = await fetchData();

  return <StoryblokComponent blok={data.story.content} />;
}

export async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/home", sbParams, {
    cache: "no-store",
  });
}

import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokComponent,
} from "@storyblok/react";

export default async function Learn() {
  const { data } = await fetchData();

  return <StoryblokComponent blok={data.story.content} />;
}

async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/learn", sbParams, { cache: "no-store" });
}

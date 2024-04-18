import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokComponent,
} from "@storyblok/react";

export default async function Contacts() {
  const { data } = await fetchData();

  return <StoryblokComponent blok={data.story.content} />;
}

async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/contacts", sbParams, {
    cache: "no-store",
  });
}

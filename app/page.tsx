import {
  getStoryblokApi,
  ISbStoriesParams,
  ISbStory,
  StoryblokComponent,
} from "@storyblok/react";

async function getData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblok = getStoryblokApi();
  return storyblok.get("cdn/stories/home", sbParams, { cache: "no-store" });
}

export default async function Home() {
  const { data } = (await getData()) as ISbStory;

  return <StoryblokComponent blok={data.story.content} />;
}

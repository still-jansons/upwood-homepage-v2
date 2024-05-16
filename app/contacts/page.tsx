import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";

export default async function Contacts() {
  const { data } = await getData();

  return <StoryblokComponent blok={data.story.content} />;
}

async function getData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/contacts", sbParams, {
    cache: "no-store",
  });
}

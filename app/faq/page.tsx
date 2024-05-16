import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokComponent,
  StoryblokStory,
} from "@storyblok/react/rsc";
import { initStoryblok } from "@/src/storyblok";

export default async function FAQ() {
  const { data } = await getData();

  return <StoryblokStory story={data.story} />;
}

export async function getData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/faq", sbParams, {
    cache: "no-store",
  });
}

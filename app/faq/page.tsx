import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  StoryblokComponent,
} from "@storyblok/react/rsc";

export default async function FAQ() {
  const { data } = await fetchData();

  return <StoryblokComponent blok={data.story.content} />;
}

async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  return storyblokApi.get("cdn/stories/faq", sbParams, {
    cache: "no-store",
  });
}

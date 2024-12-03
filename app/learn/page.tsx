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

export default async function Learn() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  initStoryblok();
  let sbParams: ISbStoriesParams = { version: "draft" };
  let articleParams: ISbStoriesParams = {
    version: process.env.ENVIRONMENT === "prod" ? "published" : "draft",
    starts_with: "learn",
    is_startpage: false,
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();

  const [learnResponse, articlesResponse] = await Promise.all([
    storyblokApi.get("cdn/stories/learn", sbParams),
    storyblokApi.get("cdn/stories", articleParams),
  ]);

  if (learnResponse.data.story.content) {
    learnResponse.data.story.content.blocks.map((block: any) => {
      if (block.component === "learnSection") {
        block.articles = articlesResponse.data.stories;
      }
      return block;
    });
  }

  return learnResponse;
}

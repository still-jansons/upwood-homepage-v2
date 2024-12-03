import { initStoryblok } from "@/app/lib/storyblok";
import {
  getStoryblokApi,
  ISbStoryData,
  StoryblokClient,
  StoryblokStory,
} from "@storyblok/react/rsc";

export async function generateStaticParams() {
  initStoryblok();

  const storyblokApi: StoryblokClient = getStoryblokApi();

  const articles = await storyblokApi.get("cdn/stories", {
    version: process.env.ENVIRONMENT === "prod" ? "published" : "draft",
    starts_with: "learn",
    is_startpage: false,
  });

  return articles.data.stories.map((article: ISbStoryData) => ({
    slug: article.slug,
  }));
}

export default async function Article({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;

  const data = await fetchData(slug);

  return <StoryblokStory story={data.story} />;
}

async function fetchData(slug: string) {
  initStoryblok();

  const storyblokApi: StoryblokClient = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/learn/${slug}`, {
    version: process.env.ENVIRONMENT === "prod" ? "published" : "draft",
  });

  return data;
}

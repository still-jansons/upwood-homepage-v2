import {
  getStoryblokApi,
  ISbStoriesParams,
  ISbStory,
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
  ISbStoryData,
} from "@storyblok/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

async function getData() {
  let sbParams: ISbStoriesParams = {
    version: "draft",
    starts_with: "learn",
    is_startpage: false,
  };

  const storyblok = getStoryblokApi();
  const response = await storyblok.get("cdn/stories", sbParams, {
    cache: "no-store",
  });

  const categories = response.data.stories.flatMap((story: ISbStoryData) => {
    return story.content.category;
  });

  const uniqueCategories: string[] = Array.from(new Set(categories));

  return {
    articles: response.data.stories,
    categories: uniqueCategories,
  };
}

export default async function LearnSection({
  blok,
}: {
  blok: { title: string };
}) {
  const { articles, categories } = (await getData()) as {
    articles: ISbStoryData[];
    categories: string[];
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex min-h-screen flex-col gap-10 pt-24 md:gap-0 md:pt-0"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="h-full w-full object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center gap-12 px-4 md:px-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-h-lg font-lexend font-bold text-white">
            {blok.title}
          </h1>
        </div>
        <div>
          {categories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

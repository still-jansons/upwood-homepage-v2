import Image from "next/image";
import { useEffect, useState } from "react";
import {
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokClient,
  storyblokEditable,
} from "@storyblok/react/rsc";
import FAQListBlock from "@components/FaqListBlock";

export default async function FAQSection({
  blok,
}: {
  blok: {
    title: string;
    categories: {
      title: string;
      faqs: { question: string; answer: string }[];
    }[];
  };
}) {
  const categories = blok.categories.map((category) => ({
    ...category,
    expanded: false,
  }));

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative min-h-screen bg-[#06350B]"
    >
      <div className="absolute inset-0 max-h-screen">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="h-full w-full object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center gap-12 px-4 pt-24 md:px-10 md:pt-52">
        <h1 className="text-h-lg font-lexend text-center font-bold text-white">
          {blok.title}
        </h1>
        <FAQListBlock categoriesList={categories} />
      </div>
    </section>
  );
}

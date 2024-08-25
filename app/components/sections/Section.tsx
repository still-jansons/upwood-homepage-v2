import React from "react";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

type ExtendedSbBlokData = SbBlokData & {
  scrollTarget?: boolean;
  title: string;
  blocks: SbBlokData[];
};

export default function Section({ blok }: { blok: ExtendedSbBlokData }) {
  return (
    <section
      id={blok.scrollTarget ? "section-2" : ""}
      {...storyblokEditable(blok)}
    >
      <div className="flex flex-col px-4 py-16 mx-auto max-w-screen-xl gap-12 md:gap-14 md:px-10 md:py-28">
        {blok.title && (
          <h2 className="font-bold text-center text-white text-h-md">
            {blok.title}
          </h2>
        )}
        {blok.blocks.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </section>
  );
}

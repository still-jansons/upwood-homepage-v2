import React from "react";
import {
  SbBlokData,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";

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
      <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4 py-16 md:gap-14 md:px-10 md:py-28">
        {blok.title && (
          <h2 className="text-h-md text-center font-bold text-white">
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

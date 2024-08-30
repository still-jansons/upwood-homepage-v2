import React from "react";
import { SbBlokData, StoryblokComponent } from "@storyblok/react";

type ExtendedSbBlokData = SbBlokData & {
  blocks: SbBlokData[];
};

export default function TextListBlock({ blok }: { blok: ExtendedSbBlokData }) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto gap-16">
      {blok.blocks.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}

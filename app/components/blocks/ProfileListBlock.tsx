import React from "react";
import { SbBlokData, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function ProfileListBlock({
  blok,
}: {
  blok: {
    blocks: SbBlokData[];
  };
}) {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full max-w-6xl mx-auto gap-x-24 gap-y-12 sm:flex-row">
      {blok.blocks.map((nestedBlok, index) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}

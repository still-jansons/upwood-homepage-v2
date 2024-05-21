import React from "react";
import { SbBlokData, StoryblokComponent } from "@storyblok/react/rsc";

export default function ProfileListBlock({
  blok,
}: {
  blok: {
    blocks: SbBlokData[];
  };
}) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col flex-wrap items-center justify-center gap-x-24 gap-y-12 sm:flex-row">
      {blok.blocks.map((nestedBlok, index) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}

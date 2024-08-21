import { storyblokEditable } from "@storyblok/react";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function VideoBlock({
  blok,
}: {
  blok: {
    videoEmbed: string;
  };
}) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8"
    >
      <div className={"w-full"}>
        <YouTubeEmbed
          videoid={blok.videoEmbed}
          style={
            "max-width: 100%; border-radius: 1.5rem; height:100%; filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));"
          }
        />
      </div>
    </div>
  );
}

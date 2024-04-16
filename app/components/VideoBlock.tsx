import { storyblokEditable } from "@storyblok/react";

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
      <iframe
        className="mx-auto aspect-video w-full overflow-hidden rounded-3xl drop-shadow-xl"
        width="560"
        height="auto"
        src={blok.videoEmbed}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

import { Article } from "@/app/types/Article";
import {
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";
import Image from "next/image";
import ArticleSection from "@components/sections/ArticleSection";

export default function ArticlePage({ blok }: { blok: SbBlokData & Article }) {
  return (
    <main {...storyblokEditable(blok)}>
      <div className="relative flex flex-col min-h-screen gap-10 md:gap-0">
        <div className="absolute inset-0 h-screen -z-10">
          <Image
            src="/images/forest-full.webp"
            alt="Hero"
            className="object-cover object-top w-full h-full"
            width={1920}
            height={1080}
            quality={100}
          />
        </div>

        <ArticleSection article={blok} />
      </div>

      {(blok.blocks ?? []).map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}

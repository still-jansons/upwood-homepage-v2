import {
  StoryblokComponent,
  storyblokEditable,
  SbBlokData,
} from "@storyblok/react/rsc";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import VideoBlock from "@/app/components/blocks/VideoBlock";
import FooterFormSection from "@/app/components/sections/FooterFormSection";

const PrivacyPage = ({
  blok,
}: {
  blok: {
    title: string;
    content: SbBlokData[];
  };
}) => (
  <main {...storyblokEditable(blok)}>
    <section className="relative min-h-screen bg-[#06350B]">
      <div className="absolute inset-0 max-h-screen">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="object-cover object-top w-full h-full"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl px-4 py-24 mx-auto gap-24 md:px-10 md:py-52">
        <h1 className="font-bold text-center text-white text-h-lg font-lexend">
          {blok.title}
        </h1>
        <div className="prose prose-stone dark:prose-invert">
          {render(blok.content)}
        </div>
      </div>
    </section>
    <FooterFormSection blok={{ title: "Subscribe to our newsletter" }} />
  </main>
);

export default PrivacyPage;

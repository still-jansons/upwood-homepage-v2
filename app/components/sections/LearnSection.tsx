import { storyblokEditable, ISbStoryData } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { StoryblokRichtextContent } from "storyblok-rich-text-react-renderer";

export default function LearnSection({
  blok,
}: {
  blok: {
    title: string;
    articles?: ISbStoryData[] & {
      content: {
        title: string;
        categories: string[];
        image: ISbStoryData;
        content: StoryblokRichtextContent;
      };
    };
  };
}) {
  console.log(blok.articles);
  const [categories, setCategories] = useState<
    {
      dimension_value: null | string;
      id: number;
      name: string;
      value: string;
    }[]
  >([]);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const api =
        "https://api.storyblok.com/v2/cdn/datasource_entries?datasource=article-categories&token=TzMQUQIWpJmocPA3X4Ohpgtt";
      const response = await fetch(api);
      const data = await response.json();
      console.log(data.datasource_entries);
      setCategories(data.datasource_entries);
    }

    fetchData();
  }, []);

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex min-h-screen flex-col gap-10 pt-24 md:gap-0 md:pt-0"
    >
      <div className="absolute inset-0 -z-10 h-screen">
        <Image
          src="/images/forest-full.webp"
          alt="Hero"
          className="h-full w-full object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
      </div>
      <div className="mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center gap-16 px-4 py-[25vh] md:px-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-h-lg font-lexend font-bold text-white">
            {blok.title}
          </h1>
          <div className="flex h-11 justify-center gap-8 border-y border-white px-16">
            {categories.map((category, index) => (
              <button
                key={category.value}
                className={`cursor-pointer text-base font-bold transition-all duration-150 ease-in ${selectedCategoryIndex === index ? "text-[var(--color-primary)]" : "text-white"}`}
                onClick={() => setSelectedCategoryIndex(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blok.articles?.map((article) => (
              <Link key={article.id} href={article.full_slug}>
                <div className="flex h-[350px] flex-col gap-4 rounded-xl bg-[var(--color-secondary)] p-4 drop-shadow-lg">
                  <Image
                    src={article.content.image.filename}
                    alt={article.content.title}
                    width={300}
                    height={200}
                    quality={100}
                    className="aspect-video h-40 rounded-xl object-cover"
                  />
                  <h2 className="text-lg leading-6 text-white">
                    {article.content.title}
                  </h2>
                  <div className="mt-auto text-right text-xs font-bold text-[var(--color-primary)]">
                    Read more
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

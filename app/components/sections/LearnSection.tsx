import { ISbStoryData, storyblokEditable } from "@storyblok/react/rsc";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useState } from "react";
import ArticlePreviewElement from "@/app/components/elements/ArticlePreviewElement";
import { Article, ArticleCategory } from "@/app/types/Article";
import ArticleCategoryFilter from "@components/elements/ArticleCategoryFilterElement";

export default function LearnSection({
  blok,
}: {
  blok: {
    title: string;
    articles?: Array<ISbStoryData & {
      content: Article;
    }>
  };
}) {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory["value"]>(null);
  const [categories, setCategories] = useState<
    ArticleCategory[]
  >([
    {
      id: 0,
      name: "All",
      value: null,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const api =
        "https://api.storyblok.com/v2/cdn/datasource_entries?datasource=article-categories&token=TzMQUQIWpJmocPA3X4Ohpgtt";
      const response = await fetch(api);
      const data = await response.json();

      setCategories((prev) => [
        ...prev,
        ...data.datasource_entries.filter(
          (entry: ArticleCategory) =>
            !prev.some((prevEntry) => prevEntry.value === entry.value)
        ),
      ]);
    }

    fetchData();
  }, []);

  const filteredArticles = blok.articles?.filter((article) =>
    selectedCategory
      ? article.content.categories.includes(selectedCategory)
      : true
  ) ?? []

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex flex-col min-h-screen gap-10 md:gap-0"
    >
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
      <div className="flex flex-col items-center justify-center flex-1 max-w-5xl gap-16 px-4 py-32 mx-auto md:pt-44 md:px-10">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-bold text-white text-h-lg font-lexend">
            {blok.title}
          </h1>
          <ArticleCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredArticles.map((article) => (
              <ArticlePreviewElement
                key={article.id}
                slug={article.full_slug}
                article={article.content}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

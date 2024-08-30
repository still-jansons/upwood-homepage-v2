import { Article } from "@/app/types/Article";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';


export default function ArticleSection({ article }: { article: Article }) {

  return (
    <motion.section
      className="w-full max-w-screen-md px-5 py-32 mx-auto md:pt-44"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <Link
          href="/learn"
          className="flex gap-2 mb-2 font-bold text-white group"
        >
          <Image
            src={"/icons/arrow-left.svg"}
            alt="Menu"
            width="24"
            height="24"
            quality={100}
            className="transform group-hover:translate-x-[-4px] transition-transform"
          />
          Back
        </Link>
        <Image
          src={article.image.filename}
          alt={article.title}
          width={1920}
          height={1080}
          quality={100}
          className="object-cover w-full shadow-md rounded-2xl aspect-video" />
      </div>
      <div>
        <h1 className="mb-4 font-bold text-white text-h-md">{article.title}</h1>
        <article className="prose text-white prose-img:rounded-lg max-w-none">
          {render(article.content)}
        </article>
      </div>
    </motion.section>
  )
}
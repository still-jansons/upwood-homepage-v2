import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/app/types/Article';

const ArticlePreviewElement = (
  {
    slug,
    article
  }: {
    slug: string,
    article: Article
  }
) => {
  return (
    <Link href={slug}>
      <motion.div
        className="flex h-[350px] flex-col gap-4 rounded-xl bg-[var(--color-secondary)] p-4 drop-shadow-xl max-w-[300px]"
        initial={{ opacity: 0.25, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src={article.image.filename}
          alt={article.title}
          width={300}
          height={200}
          quality={100}
          className="object-cover w-full aspect-video rounded-xl"
        />
        <h2 className="overflow-hidden text-white text-b-lg text-ellipsis">
          {article.title}
        </h2>
        <div className="mt-auto text-right text-xs font-bold text-[var(--color-primary)]">
          Read more
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticlePreviewElement;
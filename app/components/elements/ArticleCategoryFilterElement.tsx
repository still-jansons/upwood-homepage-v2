import { ArticleCategory } from '@/app/types/Article';
import React from 'react';
import Image from 'next/image';

const ArticleCategoryFilter = (
  { categories, selectedCategory, setSelectedCategory }:
    {
      categories: ArticleCategory[],
      selectedCategory: string | null,
      setSelectedCategory: (value: string | null) => void
    }
) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <div className="justify-center hidden gap-8 border-white md:flex h-11 border-y md:px-8 lg:px-16">
        {categories.map((category) => (
          <button
            key={category.value}
            className={`cursor-pointer text-b-md font-bold whitespace-nowrap transition-all duration-150 ease-in ${selectedCategory === category.value ? "text-[var(--color-primary)]" : "text-white"}`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={`fixed md:hidden flex flex-col top-[15vh] right-0 rounded-l-lg overflow-hidden bg-white transition-all z-10 max-h-full shadow-md ${isOpen ? 'w-56 duration-300 ease-in-out' : 'w-28 delay-500'}`}>
        <button className='font-medium flex gap-2 items-center justify-between bg-[var(--color-primary)] px-4 min-h-11' onClick={() => setOpen(!isOpen)}>
          Topics
          <Image
            src={isOpen ? "/icons/close.svg" : "/icons/menu-2.svg"}
            alt="Menu"
            width="24"
            height="24"
            quality={100}
          />
        </button>
        <ul className={`divide-y divide-black/20 h-auto overflow-auto transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[100vh] delay-300' : 'max-h-0'}`}>
          {categories.map((category) => (
            <li key={category.value}>
              <button
                className={`w-full px-4 cursor-pointer h-10 text-base text-left font-medium whitespace-nowrap transition-all duration-150 ease-in ${selectedCategory === category.value ? "text-[var(--color-primary)]" : "text-black"}`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ArticleCategoryFilter;
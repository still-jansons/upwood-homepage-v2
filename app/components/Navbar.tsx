"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Button,
  Key,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/business", label: "Business" },
  { href: "/learn", label: "Learn" },
  { href: "/contacts", label: "Contacts" },
];

const languages = [
  { href: "/", label: "LV", id: "lv" },
  { href: "/en", label: "ENG", id: "eng" },
];

export default function Navbar() {
  const pathname = usePathname();

  let [lang, setLang] = useState<Key>("lv");

  let [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black to-transparent transition-all duration-300 ${isOpen ? "open" : "max-h-20 overflow-hidden"}`}
    >
      <div className="wrapper mx-auto flex h-screen max-w-screen-xl flex-col gap-20 px-4 md:h-20 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10">
        <div className="flex h-20 w-full items-center md:w-auto">
          <Link href="/">
            <Image
              src="/upwood.svg"
              alt="Upwood"
              width="165"
              height="37"
              className="h-8 w-auto"
              quality={100}
            />
          </Link>
          <button
            className="ml-auto flex aspect-square h-12 items-center justify-center bg-transparent md:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            <Image
              src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"}
              alt="Menu"
              width="40"
              height="40"
              quality={100}
            />
          </button>
        </div>
        <div className="relative flex w-full items-center gap-8 md:w-auto">
          <ul className="flex w-full flex-col items-center gap-8 md:flex-row">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`link md:opacity-100 ${pathname === href ? "active" : undefined} ${isOpen ? "opacity-100 delay-100" : "opacity-0"}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/*<Select selectedKey={lang} onSelectionChange={setLang}>*/}
          {/*    <Button className="flex items-center justify-between gap-2 rounded border border-white/50 !bg-black/25 p-2 text-base leading-4 text-white transition-all duration-300 ease-in-out min-w-[70px] hover:border-white/75 hover:!bg-black/50">*/}
          {/*        <SelectValue />*/}
          {/*        <span aria-hidden="true">*/}
          {/*            <Image src="/icons/angle-down.svg" alt="" width="10" height="5" />*/}
          {/*        </span>*/}
          {/*    </Button>*/}
          {/*    <Popover>*/}
          {/*        <ListBox*/}
          {/*            items={languages}*/}
          {/*            className="bg-black/75 border border-white/50 rounded z-50 overflow-hidden"*/}
          {/*        >*/}
          {/*            {(item) => (*/}
          {/*                <ListBoxItem*/}
          {/*                    id={item.id}*/}
          {/*                    className={({ isSelected }) => `*/}
          {/*                        ${isSelected ? "bg-[#FF9900] text-black" : "text-white hover:bg-white/10"}*/}
          {/*                        px-2 py-2 text-base leading-4 cursor-pointer text-white font-medium transition-all duration-300 ease-in-out !ring-0 !border-none ring-offset-transparent hover:!border-none hover:!ring-0*/}
          {/*                    `}*/}
          {/*                >{item.label}</ListBoxItem>*/}
          {/*            )}*/}
          {/*        </ListBox>*/}
          {/*    </Popover>*/}
          {/*</Select>*/}
        </div>
      </div>
    </nav>
  );
}

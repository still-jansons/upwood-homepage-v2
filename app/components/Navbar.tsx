"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {Button, Key, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';
import {useState} from "react";

const links = [
    { href: "/", label: "Home" },
    { href: "/company", label: "Company" },
    { href: "/business", label: "Business" },
    { href: "/learn", label: "Learn" },
    { href: "/contacts", label: "Contacts" },
];

const languages = [
    { href: "/", label: "LV", id: "lv" },
    { href: "/en", label: "ENG", id: "eng"},
];

export default function Navbar() {
    const pathname = usePathname();
    
    let [lang, setLang] = useState<Key>('lv')
    
    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-gradient-to-b from-black to-transparent">
            <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between gap-8 px-4 md:px-10">
                <div>
                    <Link href="/">
                        <Image
                            src="/upwood.svg"
                            alt="Upwood"
                            width="165"
                            height="37"
                        />
                    </Link>
                </div>
                <div className="relative flex items-center gap-8">
                    <ul className="flex gap-8">
                        {links.map(({ href, label }) => (
                            <li key={href} >
                                <Link
                                    href      = {href}
                                    className = {`
                                        link text-base leading-normal font-bold
                                        ${ pathname === href ? "active" : undefined }
                                    `}
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
                    {/*            <Image src="/images/angle-down.svg" alt="" width="10" height="5" />*/}
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

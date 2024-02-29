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
    { href: "/", label: "LV" },
    { href: "/en", label: "ENG" },
];

export default function Navbar() {
    const pathname = usePathname();
    let [lang, setLang] = useState<Key>('LV');
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-10 h-20 gap-8">
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
                <div className="flex gap-8 relative">
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
                    <Select selectedKey={lang}>
                        <Button>
                            <SelectValue />
                            <span aria-hidden="true"></span>
                        </Button>
                        <Popover>
                            <ListBox items={languages} >
                                {(item) => (
                                    <ListBoxItem textValue={item.label} id={item.label}>{item.label}</ListBoxItem>
                                )}
                            </ListBox>
                        </Popover>
                    </Select>
                
                </div>
            </div>
        </nav>
    );
}

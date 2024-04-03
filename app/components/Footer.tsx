import Link from "next/link";
import Image from "next/image";

const routes = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Company',
        href: '/company'
    },
    {
        title: 'Business',
        href: '/business'
    },
    {
        title: 'Learn',
        href: '/learn'
    },
    {
        title: 'Contacts',
        href: '/contacts'
    },
    {
        title: 'FAQ',
        href: '/faq'
    }
]

const socialLinks = [
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/upwood.io',
        logo: '/icons/ig-logo.svg'
    },
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/upwood.io',
        logo: '/icons/fb-logo.svg'
    },
    {
        title: 'Youtube',
        href: 'https://www.youtube.com/upwood.io',
        logo: '/icons/yt-logo.svg'
    },
    {
        title: 'TikTok',
        href: 'https://www.tiktok.com/upwood.io',
        logo: '/icons/tt-logo.svg'
    }
]

export default function Footer() {
    return (
        <footer className={'bg-[#021A05]'}>
            <div className={'flex flex-col items-center gap-10'}>
                <div className={'py-8 flex flex-col md:flex-row items-start gap-12 md:gap-20 justify-between w-full max-w-screen-xl mx-auto px-4 md:px-10'}>
                    <div className={'flex flex-col gap-2 text-b-md text-white font-normal'}>
                        <p>SIA “Upwood”</p>
                        <p>Reg. No. 4445554465</p>
                        <a href="mailto:info@upwood.io" className={'link w-fit'}>info@upwood.io</a>
                        <p><b>Offce:</b> “Philosophers residence”, <br/> Raņķa Dambis 34, <br/> Riga, Latvia, <br/> LV-1048</p>
                    </div>
                    <ul className={'flex gap-y-4 gap-x-12 flex-col flex-wrap font-bold h-36 md:h-36'}>
                        {routes.map((route, index) => (
                            <li key={index}>
                                <Link
                                    key       = {index}
                                    href      = {route.href}
                                    className = {'link'}
                                >{route.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className={'flex flex-wrap gap-y-4'}>
                        {socialLinks.map((link, index) => (
                            <li key={index} className={'w-[50%]'}>
                                <a
                                    href      = {link.href}
                                    className = {'link font-bold flex gap-2 items-center'}
                                >
                                    <span className={'flex items-center justify-center h-6 w-6 p-1 rounded-full bg-white px-1'}>
                                        <Image
                                            src       = {link.logo}
                                            alt       = {link.title}
                                            width     = {20}
                                            height    = {20}
                                            quality   = {100}
                                            className = "object-contain w-full h-full"
                                        />
                                    </span>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className={'max-w-2xl text-center text-b-sm text-white'}>The content of this webpage is not an investment advice and does not constitute any offer or solicitation to offer or recommendation of any investment product. Investment involves risk. Past performance is not indicative of future performance. Investors should refer to the offering documentation of the projects for detailed information (including risk factors) prior to investing. </p>
                </div>
                <div className={'bg-black h-12 w-full flex items-center justify-center'}>
                    <p className={'text-white text-b-sm'}>© All Rights Reserved 2024</p>
                </div>
            </div>
        </footer>
    )
}

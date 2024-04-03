import Image from "next/image";

export default function LogoElement({
    image,
    alt
}: {
    image: string,
    alt  : string,
}) {
    return (
        <div className={'h-36 w-36 rounded-full overflow-hidden bg-white flex items-center justify-center p-2.5 logo-shadow'}>
            <Image
                src       = {image}
                alt       = {alt}
                width     = {200}
                height    = {200}
                quality   = {100}
                className = "h-full w-full object-contain"
            />
        </div>
    );
}

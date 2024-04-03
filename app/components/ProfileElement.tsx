import Image from "next/image";

export default function ProfileElement({
    image,
    title,
    body,
}: {
    image: string,
    title: string,
    body : string,
}) {
    return (
        <div className="flex flex-col items-center gap-4 w-[200px] group">
            <Image
                src       = {image}
                alt       = {title}
                width     = {200}
                height    = {200}
                quality   = {100}
                className = "h-full w-full rounded-xl object-contain shadow-sm transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl"
            />
            <div className="flex flex-col items-center gap-2.5">
                <p className="font-bold text-white text-h-xs">{ title }</p>
                <p className="font-normal text-white text-b-lg">{ body }</p>
            </div>
        </div>
    );
}

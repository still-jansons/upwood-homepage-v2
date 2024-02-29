import Image from 'next/image'
import InvitationFormSection from "@components/InvitationFormSection";

export default function HeroBlock({
    hasForm  = false,
    title    = '',
    subtitle = ''
}: {
    hasForm? : boolean,
    title?   : string,
    subtitle?: string
    
}) {
    return (
        <section className="min-h-screen relative flex flex-col">
            <div className="absolute inset-0 -z-10">
                <Image
                    src       = "/images/forest-full.webp"
                    alt       = "Hero"
                    className = "object-cover object-top w-full h-full"
                    width     = {1920}
                    height    = {1080}
                    quality   = {100}
                />
            </div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-10 flex flex-col justify-center items-center gap-12 flex-1">
                <div className="text-center flex flex-col gap-4">
                    <h1 className="text-h-lg font-bold text-white font-lexend">
                        {title}
                    </h1>
                    <p className="text-h-md font-bold text-white font-lexend">
                        {subtitle}
                    </p>
                </div>
                { hasForm && (
                    <InvitationFormSection title={'Enquire more information'} />
                )}
            </div>
            <a
                href      = "#section-2"
                className = {'justify-self-end flex flex-col items-center gap-5 mb-10'}>
                <p
                    className = {'text-b-md text-white font-bold'}
                >See more</p>
                <Image
                    src       = "/images/arrow-down.svg"
                    alt       = "Arrow"
                    width     = {40}
                    height    = {40}
                    className = {'animate-bounce'}
                />
            </a>
        </section>
    );
}

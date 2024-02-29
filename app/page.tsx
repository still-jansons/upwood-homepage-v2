import HeroBlock from "@/app/components/HeroBlock";
import Image from "next/image";
import InvitationFormSection from "@components/InvitationFormSection";
import TextElement from "@components/TextElement";
import QuoteElement from "@components/QuoteElement";
import Section from "@components/Section";

export default function Home() {
    return (
        <main>
            <HeroBlock
                title    = {'Socially responsible investment'}
                subtitle = {'Invest in European land and forest plantations'}
                hasForm
            />
            
            {/*  Text section  */}
            <Section id={'section-2'}>
                <div className={'max-w-2xl mx-auto flex flex-col gap-16'}>
                    <TextElement
                        title = "Humanity needs to act now"
                        body  = "The urgency of addressing climate change has led humanity to seek for more sustainable and ethical investment opportunities. Forests, known as Earth's lungs, offer a compelling solution. They not only generate high returns with low risk, sequester vast amounts of carbon dioxide but also preserve rich biodiversity, stabilize ecosystems, and provide countless ecosystem services."
                    />
                    
                    <TextElement
                        title = "We want to save the planet"
                        body  = "We plant the trees and take care of the land! It isn't merely a financial venture; it's a commitment to ecological regeneration. Our mission is to increase and maintain healthy forest and agricultural land areas. As the land and forests under our care thrive, they increase in a value, benefiting investors through the appreciation of their assets and income from profit generating activities. We are passionate about planting, maintaining, managing and offering environmentally friendly investments."
                    />
                    
                    <QuoteElement
                        quote = "Our vision is to change the way we think about our finances, by prioritising sustainable capital growth."
                    />
                </div>
            </Section>
            
            {/*  Video section  */}
            <Section>
                <div className={'mx-auto max-w-5xl flex flex-col items-center gap-8'}>
                    <h2 className={'text-h-md text-white font-bold'}>And how we do it matters</h2>
                    <iframe
                        className   = "mx-auto w-full aspect-video rounded-3xl overflow-hidden drop-shadow-xl"
                        width       = "560"
                        height      = "auto"
                        src         = "https://www.youtube.com/embed/JNCiZqtdOxY?si=x_zLhCF7enfypjtq&amp;controls=0"
                        title       = "YouTube video player"
                        allow       = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        frameBorder = "0"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>
            
            {/*  Partners section  */}
            <Section>
                <div className={'flex flex-col items-center gap-20'}>
                    <h2 className={'text-h-md font-bold text-white'}>Upwood partners</h2>
                    <div className={'flex gap-20 flex-wrap justify-center'}>
                        { [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div
                                key       = {index}
                                className = {'h-36 w-36 rounded-full overflow-hidden bg-white flex items-center justify-center p-2 logo-shadow'}
                            >
                                <Image
                                    src       = {`/upwood.svg`}
                                    alt       = "Partner"
                                    width     = {200}
                                    height    = {200}
                                    quality   = {100}
                                    className = "object-contain w-full h-full"
                                />
                            </div>
                        )) }
                    </div>
                </div>
            </Section>
            
            {/*  Press section  */}
            <section>
                <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-16 md:py-24">
                    <div className={'flex flex-col items-center gap-20'}>
                        <h2 className={'text-h-md font-bold text-white'}>Read about Upwood in press</h2>
                        <div className={'flex gap-20 flex-wrap justify-center'}>
                            { [1, 2, 3].map((item, index) => (
                                <div
                                    key       = {index}
                                    className = {'h-36 w-36 rounded-full overflow-hidden bg-white flex items-center justify-center p-2 logo-shadow'}
                                >
                                    <Image
                                        src       = {`/upwood.svg`}
                                        alt       = "Partner"
                                        width     = {200}
                                        height    = {200}
                                        quality   = {100}
                                        className = "object-contain w-full h-full"
                                    />
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </section>
            
            {/*  Footer form section  */}
            <section className={'relative'}>
                <div className="absolute inset-0 -z-10">
                    <Image
                        src       = "/images/forest.webp"
                        alt       = "Hero"
                        className = "object-cover object-top w-full h-full"
                        width     = {1920}
                        height    = {1080}
                        quality   = {100}
                    />
                </div>
                <div className="max-w-screen-xl mx-auto px-4 md:px-10 py-16 md:py-24">
                    <div className={'flex flex-col items-center gap-12'}>
                        <div className={'text-center flex flex-col items-center gap-4'}>
                            <h2 className={'text-h-lg font-bold text-white'}>Exclusive investment community</h2>
                            <p className={'max-w-2xl text-b-lg text-white'}>As UN stated “there is no future without addressing climate change”. We created like-minded investor community to address climate change by planting more forests and preserving environmentally friendly assets. Our investor community enjoy early access to attractive investment offerings, ability to pool resources together to crowdfund through fractional ownership and have access to personal investment management cabinet.</p>
                        </div>
                        <InvitationFormSection />
                    </div>
                </div>
            </section>
        </main>
    );
}

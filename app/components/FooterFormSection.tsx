import Image from "next/image";
import InvitationFormSection from "@components/InvitationFormSection";

export default function FooterFormSection() {
    return (
        <section className="relative">
            <div className="absolute inset-0 -z-10">
                <Image
                    src       = "/images/forest.webp"
                    alt       = "Hero"
                    className = "h-full w-full object-cover object-top"
                    width     = {1920}
                    height    = {1080}
                    quality   = {100}
                />
            </div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-10 md:py-24">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="font-bold text-white text-h-lg">Exclusive investment community</h2>
                        <p className="max-w-2xl text-white text-b-lg">As UN stated “there is no future without
                                                                      addressing climate change”. We created like-minded
                                                                      investor community to address climate change by
                                                                      planting more forests and preserving
                                                                      environmentally friendly assets. Our investor
                                                                      community enjoy early access to attractive
                                                                      investment offerings, ability to pool resources
                                                                      together to crowdfund through fractional ownership
                                                                      and have access to personal investment management
                                                                      cabinet.</p>
                    </div>
                    <InvitationFormSection section='footer' />
                </div>
            </div>
        </section>
    );
}

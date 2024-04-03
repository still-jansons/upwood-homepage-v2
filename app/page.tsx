import HeroBlock from "@/app/components/HeroBlock";
import Image from "next/image";
import InvitationFormSection from "@components/InvitationFormSection";
import TextElement from "@components/TextElement";
import QuoteElement from "@components/QuoteElement";
import Section from "@components/Section";
import TextListBlock from "@components/TextListBlock";
import LogoElement from "@components/LogoElement";
import LogoListBlock from "@components/LogoListBlock";
import VideoBlock from "@components/VideoBlock";
import FooterFormSection from "@components/FooterFormSection";

export default function Home() {
    return (
        <main>
            <HeroBlock
                title    = "Socially responsible investment"
                subtitle = "Invest in European land and forest plantations"
                hasForm
            />
            
            {/*  Text section  */}
            <Section scrollTarget>
                <TextListBlock>
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
                </TextListBlock>
            </Section>
            
            {/*  Video section  */}
            <Section title="And how we do it matters">
                <VideoBlock video="https://www.youtube.com/embed/JNCiZqtdOxY?si=x_zLhCF7enfypjtq&amp;controls=0" />
            </Section>
            
            <Section title="Upwood partners">
                <LogoListBlock>
                    { [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <LogoElement
                            key   = {index}
                            image = "/upwood.svg"
                            alt   = "Partner"
                        />
                    )) }
                </LogoListBlock>
            </Section>
            
            {/*  Press section  */}
            <Section title="Read about Upwood in press">
                <LogoListBlock>
                    { [1, 2, 3].map((item, index) => (
                        <LogoElement
                            key   = {index}
                            image = "/upwood.svg"
                            alt   = "Partner"
                        />
                    )) }
                </LogoListBlock>
            </Section>
            
            <FooterFormSection />
        </main>
    );
}

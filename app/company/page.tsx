import HeroBlock from "@/app/components/HeroBlock";
import Section from "@components/Section";
import TextElement from "@components/TextElement";
import TextListBlock from "@components/TextListBlock";
import ProfileListBlock from "@components/ProfileListBlock";
import ProfileElement from "@components/ProfileElement";
import LogoElement from "@components/LogoElement";
import LogoListBlock from "@components/LogoListBlock";
import FooterFormSection from "@components/FooterFormSection";

export default function Company() {
    const team     = [
        {
            image : "/images/profile.jpeg",
            title : "John Doe",
            body  : "Co-founder & CEO"
        },
        {
            image : "/images/profile.jpeg",
            title : "Jane Doe",
            body  : "Co-founder & CFO"
        },
        {
            image : "/images/profile.jpeg",
            title : "John Doe",
            body  : "Co-founder & CLO"
        },
        {
            image : "/images/profile.jpeg",
            title : "Jane Doe",
            body  : "Co-founder & CEO"
        },
        {
            image : "/images/profile.jpeg",
            title : "Jane Doe",
            body  : "Co-founder & CEO"
        },
        {
            image : "/images/profile.jpeg",
            title : "Jane Doe",
            body  : "Co-founder & CEO"
        }
    ]
    const advisors = [
        {
            image : "/images/profile.jpeg",
            title : "John Doe",
            body  : "Co-founder & CEO"
        },
        {
            image : "/images/profile.jpeg",
            title : "Jane Doe",
            body  : "Co-founder & CFO"
        },
        {
            image : "/images/profile.jpeg",
            title : "John Doe",
            body  : "Co-founder & CLO"
        },
        {
            image : "/images/profile.jpeg",
            title : "Jane Doe",
            body  : "Co-founder & CEO"
        }
    ]
    const partners = [
        {
            image : "/upwood.svg",
            alt   : "Upwood"
        }         , {
            image : "/upwood.svg",
            alt   : "Upwood"
        }         , {
            image : "/upwood.svg",
            alt   : "Upwood"
        }         , {
            image : "/upwood.svg",
            alt   : "Upwood"
        },
    ]
    
    
    return (
        <main>
            <HeroBlock
                title    = "Company"
                subtitle = "We call it “the Upwood story”"
            />
            <Section scrollTarget>
                <TextListBlock>
                    <TextElement
                        title = "We plant trees for living"
                        body  = "Upwood team consists of diverse team of professionals who came together to combine knowledge and experience for simple reason - plant the trees and revolutionize the way we plant the trees and finance forest plantations."
                    ></TextElement>
                    <TextElement
                        title = "When you plant the tree, you do it for the next generation"
                        body  = "We understand that the forest we plant today will take long time until it’s maturity, however, as foresters say “when you plant the tree, you do it for the next generation”. Forestry is lifestyle, it’s your choice to be part of something that will remain long after your life and it is in our hands to build the future we want to see. "
                    ></TextElement>
                    <TextElement
                        title = "Founded in the heart of Northern European forests"
                        body  = "Our story starts at 2023 when Upwood founders came together to build green venture with purpose to empower humanity with accessible forest and land investments. Upwood is located in European Union country Latvia. More than half of Latvian area is covered in forests being one of the greenest EU states. Forestry industry in Latvia is highly advanced with skilled workforce, clear regulations and  growing prices of forest and agricultural land."
                    ></TextElement>
                    <TextElement
                        title = "New generation forest company"
                        body  = "We are revolutionizing forest industry with latest technologies and practical applications of Blockchain, Big Data, IoT and digital twins. We see that intelligent software and hardware applications can be implemented in forest management cycle to improve results and achieve maximum environmental and financial results. We are building technologically advanced forest management future, for the humanity, for the planet."
                    ></TextElement>
                </TextListBlock>
            </Section>
            
            <Section title="Upwood team">
                <ProfileListBlock>
                    { team.map((profile, index) => (
                        <ProfileElement
                            key   = {index}
                            image = {profile.image}
                            title = {profile.title}
                            body  = {profile.body}
                        />
                    )) }
                </ProfileListBlock>
            </Section>
            
            <Section title="Upwoods advisors">
                <ProfileListBlock>
                    { advisors.map((profile, index) => (
                        <ProfileElement
                            key   = {index}
                            image = {profile.image}
                            title = {profile.title}
                            body  = {profile.body}
                        />
                    )) }
                </ProfileListBlock>
            </Section>
            
            <Section title="Upwood partners">
                <LogoListBlock>
                    { partners.map((profile, index) => (
                        <LogoElement
                            key   = {index}
                            image = {profile.image}
                            alt   = {profile.alt}
                        />
                    )) }
                </LogoListBlock>
            </Section>
            
            <Section title="Read about Upwood in press">
                <LogoListBlock>
                    { partners.map((profile, index) => (
                        <LogoElement
                            key   = {index}
                            image = {profile.image}
                            alt   = {profile.alt}
                        />
                    )) }
                </LogoListBlock>
            </Section>
            
            <FooterFormSection />
        </main>
    )
}

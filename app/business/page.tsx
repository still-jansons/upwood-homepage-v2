import HeroBlock from "@components/HeroBlock";
import TextListBlock from "@components/TextListBlock";
import Section from "@components/Section";
import TextElement from "@components/TextElement";
import VideoBlock from "@components/VideoBlock";
import NewsletterForm from "@components/form/NewsletterForm";
import FooterFormSection from "@components/FooterFormSection";

export default function Business() {
  return (
    <main>
      <HeroBlock
        title="For business"
        subtitle="Offset your carbon emissions by investing in stable, sustainable and appreciating asset."
      />

      <Section scrollTarget>
        <TextListBlock>
          <TextElement
            title="We plant forests for your business"
            body="Our business service consists of planting forest for entity that wants to use carbon credits generated by forest to offset firms emissions. We offer businesses to make strategic ESG investment that holds its value stable and appreciates over time, same time generating carbon credits that also appreciate in value. We evaluate different offers to match firms goals, prepare in-depth assessment and recommend firm investment offering. Once company has invested money in land purchase, planting expenses and maintenance reserve, we facilitate administrative process, plant forests and maintain them while under management. "
          />
          <TextElement
            title="Offset carbon emissions cheap"
            body="We expect that by 2030 many firms and institutions will not be able meet carbon neutrality goals, therefore the price of carbon credits is expected to rise by 500%. Therefore, we recommend to be ahead of others and secure yourself carbon credits cheaper by investing in forest plantations now."
          />
          <TextElement
            title="Flexible investment offers"
            body="We offer flexible investment terms for firms, funds and institutions. Forest is not a one day venture and it may take 25-50 years for forest to reach it’s maturity and most economic potential, however, we do understand that not for all those are attractive terms. We offer different options for businesses to invest for 5, 10, 15, 20 or 40 year period. At the end of the investment period Upwood helps to sell firms forest, thereby, facilitating end-to-end service."
          />
        </TextListBlock>
      </Section>

      <Section title="See the video how our service works">
        <VideoBlock
          video={
            "https://www.youtube.com/embed/JNCiZqtdOxY?si=x_zLhCF7enfypjtq&amp;controls=0"
          }
        />
      </Section>

      <Section title="Enquire more information">
        <NewsletterForm />
      </Section>

      <FooterFormSection />
    </main>
  );
}

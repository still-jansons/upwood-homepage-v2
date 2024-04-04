import HeroBlock from "@components/HeroBlock";
import FooterFormSection from "@components/FooterFormSection";

export default function Contacts() {
  return (
    <main>
      <HeroBlock formType="contact" title="Contact us" seeMore={false} />
      <FooterFormSection />
    </main>
  );
}

import HeroBlock from "@/app/components/HeroBlock";
import Image from "next/image";
import InvitationFormSection from "@components/InvitationFormSection";

export default function Company() {
    return (
        <main>
            <HeroBlock
                title    = {'Company'}
                subtitle = {'We call it “the Upwood story”'}
            />
        </main>
    );
}

import HeroSection from "@/components/home-sections/HeroSection";
import SectionOne from "@/components/home-sections/SectionOne";
import SectionTwo from "@/components/home-sections/SectionTwo";
import SectionThree from "@/components/home-sections/SectionThree";
import SectionFour from "@/components/home-sections/SectionFour";
import SectionFive from "@/components/home-sections/SectionFive";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeroSection />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
    </main>
  );
}

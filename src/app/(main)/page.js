import Banner from "@/components/actions/Banner";
import FeaturedPets from "@/components/actions/FeaturedPets";
import FindPerfectCompanion from "@/components/actions/FindPerfectCompanion";
import HowAdoptionWorks from "@/components/actions/HowAdoptionWorks";
import PetCareTips from "@/components/actions/PetCareTips";
import SuccessStories from "@/components/actions/SuccessStories";
import WhyAdopt from "@/components/actions/WhyAdopt";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedPets/>
      <WhyAdopt />
      <SuccessStories />
      <PetCareTips/>
      <HowAdoptionWorks/>
      <FindPerfectCompanion/>
    </>
  );
}

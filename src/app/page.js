import Banner from "@/components/actions/Banner";
import PetCareTips from "@/components/actions/PetCareTips";
import SuccessStories from "@/components/actions/SuccessStories";
import WhyAdopt from "@/components/actions/WhyAdopt";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyAdopt />
      <SuccessStories />
      <PetCareTips/>
    </>
  );
}

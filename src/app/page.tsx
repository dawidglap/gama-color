import { FeaturesSectionDemo } from "@/components/FeatureSectionDemo";
import Hero from "@/components/Hero";
import  { AppleCardsCarouselDemo }  from "@/components/AppleCardsCarouselDemo";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import { LayoutGridDemo }from "@/components/LayoutGridDemo";



export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturesSectionDemo />
      <AppleCardsCarouselDemo />
      <LayoutGridDemo />
      <Reviews />
      <Faq />
      <CallToAction />
      
    </main>
  )
}

import { FeaturesSectionDemo } from "@/components/FeatureSectionDemo";
import Hero from "@/components/Hero";
import  { AppleCardsCarouselDemo }  from "@/components/AppleCardsCarouselDemo";
import Reviews from "@/components/Reviews";



export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturesSectionDemo />
      <AppleCardsCarouselDemo />
      <Reviews />
    </main>
  )
}

import Navbar from "@/components/navBar";
import Hero from "@/components/hero";
import FeaturedProperties from "@/components/featured_properties";
import SmartSolutions from "@/components/smart_solutions";
import CTA from "@/components/CTA";
import Reviews from "@/components/reviews";
import LatestInsights from "@/components/latest_insights";
import ReadyToStart from "@/components/ready_to_get_started";
import Footer from "@/components/footer";


export default function Home(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <FeaturedProperties/>
    <SmartSolutions/>
    <CTA/>
    <Reviews/>
    <LatestInsights/>
    <ReadyToStart/>
    <Footer/>
    </>
  )
}
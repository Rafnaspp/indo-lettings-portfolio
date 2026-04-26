import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import PropertyFilter from "@/components/properties/propperty_filter";
import PropertyListingPage from "@/components/properties/property_listing_page";

export default function Properties(){
    return (
        <>
        <Navbar/>
        <PropertyListingPage/>
        <Footer/>
        </>
    )
}
"use client";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import PropertyFilter from "@/components/properties/propperty_filter";
import PropertyListingPage from "@/components/properties/property_listing_page";
import { Suspense } from "react";

export default function Properties(){
    return (
        <>
        <Suspense fallback={null}>
      <PropertyListingPage />
    </Suspense>
        <Footer/>
        </>
    )
}
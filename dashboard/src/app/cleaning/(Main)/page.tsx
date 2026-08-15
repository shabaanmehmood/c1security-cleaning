import React from 'react'
import Home from './_components/Home'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services",
  description:
    "Professional commercial cleaning services for businesses across Brisbane, Gold Coast and surrounding areas. Reliable cleaning solutions tailored to your workplace.",
  alternates: {
    canonical: "https://c1services.com.au/cleaning/",
  },
};
function page() {
  return (
    <Home/>
  )
}

export default page
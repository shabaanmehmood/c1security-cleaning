import React from 'react'
import Home from './_component/home'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Night Audit Services",
  description:
    "Professional night audit services for hotels and hospitality businesses. C1 Services provides reliable overnight operational and auditing support.",
  alternates: {
    canonical: "https://c1services.com.au/night-audit",
  },
};
function page() {
  return (
    <Home/>
  )
}

export default page
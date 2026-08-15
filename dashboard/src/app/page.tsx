import React from 'react'
import HomePage from './_components/home'
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "C1 Services",
  url: "https://c1services.com.au",
  description:
    "Professional commercial cleaning, security and facility maintenance services.",
};

function page() {
  
  return (
    <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    <HomePage/>
    </>
  )
}

export default page
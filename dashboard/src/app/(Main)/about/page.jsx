import React from 'react'
import AboutHero from "./_components/aboutHero";
import Breadcrumb from "./_components/breadCurmb";
import CompanyOverview from "./_components/companyOverview";
import CompanyStory from "./_components/companyStorie";
import MissionVision from "./_components/missionVission";
import CoreValues from "./_components/CoreValue"
function page() {
  return (
    <div>
        <AboutHero/>
        <Breadcrumb/>
        <CompanyOverview/>
        <CompanyStory/>
        <MissionVision/>
        <CoreValues/>
    </div>
  )
}

export default page
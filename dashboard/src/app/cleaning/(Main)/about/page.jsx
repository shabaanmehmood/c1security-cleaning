import React from 'react'
import AboutHero from "./_components/aboutHero";
import Breadcrumb from "./_components/breadCurmb";
import CompanyOverview from "./_components/companyOverview";
import CompanyStory from "./_components/companyStorie";
import MissionVision from "./_components/missionVission";
import CoreValues from "./_components/CoreValue";
import CompanyStats from "./_components/cmopanyStats";
import WhyChooseUs from "./_components/whyChooseUs";
import CleaningProcess from "./_components/cleaningProcess";
import TeamCard from "./_components/teamCard"
import { teamMembers } from "./_filler/teamCardFiller";
function page() {
    return (
        <div>
            <AboutHero />
            <Breadcrumb />
            <CompanyOverview />
            <CompanyStory />
            <MissionVision />
            <CoreValues />
            <CompanyStats />
            <WhyChooseUs />
            <CleaningProcess />
            {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>*/}
        </div>
    )
}

export default page
import { notFound } from "next/navigation";
import JobHero from "./HeroComponent";
import JobSidebar from "./SideBar";
import JobSection from "./JobSection";
import AnimatedChecklist from "./AnimationCheckList";

import {
    ClipboardList,
    FileText,
    Gift,
    ShieldCheck,
} from "lucide-react";

import { getJobBySlug } from "@/lib/JobDetailBySlug";
interface JobPageProps {
    titleSlug: string;
}

export default async function JobPage({
    titleSlug,
}: JobPageProps) {
    const job = await getJobBySlug(titleSlug);

    if (!job) {
        notFound();
    }

    return (
        <>
            {/* Hero */}
            <JobHero
                title={job.title}
                city={job.city}
                state={job.state}
                country={job.country}
                employmentType={job.employmentType}
                workplace={job.workplace}
                salary={job.salary}
                company={job.company}
                slug={job.slug}
            />

            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
                    {/* Left */}
                    <div className="space-y-10">
                        <JobSection
                            title="About this Role"
                            subtitle="Learn more about this opportunity."
                            icon={<FileText size={28} />}
                        >
                            <p className="leading-8 text-slate-600">
                                {job.overview}
                            </p>
                        </JobSection>

                        <JobSection
                            title="Responsibilities"
                            subtitle="Your day-to-day responsibilities."
                            icon={<ClipboardList size={28} />}
                        >
                            <AnimatedChecklist
                                items={job.responsibilities}
                            />
                        </JobSection>

                        <JobSection
                            title="Requirements"
                            subtitle="Skills and qualifications."
                            icon={<ShieldCheck size={28} />}
                        >
                            <AnimatedChecklist
                                items={job.requirements}
                                iconColor="text-green-600"
                            />
                        </JobSection>

                        <JobSection
                            title="Benefits"
                            subtitle="What you'll enjoy working with us."
                            icon={<Gift size={28} />}
                        >
                            <AnimatedChecklist
                                items={job.benefits}
                                iconColor="text-cyan-600"
                            />
                        </JobSection>
                    </div>

                    {/* Right Sidebar */}
                    <JobSidebar
                        slug={job.slug}
                        title={job.title}
                        company={job.company}
                        city={job.city}
                        state={job.state}
                        country={job.country}
                        employmentType={job.employmentType}
                        workplace={job.workplace}
                        salary={job.salary}
                        postedDate={job.postedDate}
                        expiresAt={job.expiresAt}
                        vacancies={job.vacancies}
                    />
                </div>
            </main>
        </>
    );
}
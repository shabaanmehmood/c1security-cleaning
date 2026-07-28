import { getApplicationByid } from "@/lib/jobApplicationByJobId";
import Application from "./_components/SpecificApplicationDescription";


interface Props {
    params: Promise<{
        slug: string;
    }>;
}
async function page({ params }: Props) {
    const { slug } = await params;

       console.log("Slug:", slug);
    const data = await getApplicationByid(slug);
    if (!data) {
        throw new Error("JobId not found");
    }
    return (
        <Application application={data}  
/>
    )
}

export default page
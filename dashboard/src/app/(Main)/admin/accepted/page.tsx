import { allAcceptedApplications } from "@/lib/getAcceptedApplications";
import AcceptedApplication from "../_components/AcceptedApplication";

async function page() {

    const data = await allAcceptedApplications();
    if (!data) {
        throw new Error("JobId not found");
    }
    return (
        <AcceptedApplication   applications={data}/>
    )
}

export default page
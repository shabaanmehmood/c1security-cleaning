export const dynamic = "force-dynamic";
import { allJob } from '@/lib/allJob';
import Jobs from './_components/availibleJobs'

export default async function Page() {
  const jobs = await allJob();

  return (
    <div>
      <Jobs jobs={jobs} />
    </div>
  );
}
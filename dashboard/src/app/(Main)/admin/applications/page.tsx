import React from 'react'
import ApplicationsPage from '../_components/allApplicationpage'
import { allApplications } from '@/lib/getApplications';

async function page() {
    const applicatis = await allApplications();
  console.log(applicatis)
  return (
    <ApplicationsPage applications={applicatis}/>
  )
}

export default page
import { auth } from "./fireBase"; 
import { JobFormValues } from "@/validators/addJob"; 
import getBaseUrl from "./getBaseUrl";


export async function createJob(formData: JobFormValues) {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("You must be logged in to post a job.");
  }

  const token = await currentUser.getIdToken();

  const response = await fetch(`${getBaseUrl()}/api/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to create job posting.");
  }

  return result; 
}
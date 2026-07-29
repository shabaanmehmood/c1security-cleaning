
import getBaseUrl from "./getBaseUrl";

export async function updateApplicationStatus(
  jobId: string,
  status: "pending" | "accepted" | "rejected" | "reviewed"
) {
  const response = await fetch(
    `${getBaseUrl()}/api/applications/${jobId}`,
    {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }
  );
  

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to update application status");
  }

  return await response.json();
}
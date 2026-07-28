import getBaseUrl from "./getBaseUrl";

export async function deleteApplication(jobId: string) {
  const response = await fetch(
    `${getBaseUrl()}/api/applications/${jobId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to delete application");
  }

  return await response.json();
}
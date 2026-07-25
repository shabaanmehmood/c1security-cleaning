import { ApplicationPayload } from "@/validators/ApplicationForm";
import getBaseUrl from "./getBaseUrl";

export default async function applicationFormPost(
  data: ApplicationPayload
) {
  const response = await fetch(`${getBaseUrl()}/api/applications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message ?? "Failed to submit application");
  }

  return result;
}
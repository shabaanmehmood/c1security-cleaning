import getBaseUrl from "./getBaseUrl";

export async function uploadFile(uploadFormData: FormData) {
  try {
    const uploadResponse = await fetch(`${getBaseUrl()}/api/uploads`, {
      method: "POST",
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.json().catch(() => ({}));
      throw new Error(errorData.error || `Upload failed with status ${uploadResponse.status}`);
    }

    const uploadResult = await uploadResponse.json();
    return uploadResult;
  } catch (error: any) {
    console.error("Error in uploadFile helper:", error);
    throw new Error(error.message || "An unexpected error occurred during file upload.");
  }
}
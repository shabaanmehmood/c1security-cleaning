export default function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // Client side can use relative URLs
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT || 3000}`; // Development fallback
}
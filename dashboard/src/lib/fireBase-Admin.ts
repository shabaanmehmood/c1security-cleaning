import "server-only";
import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import { getAuth, Auth } from "firebase-admin/auth";

function initAdmin(): App {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    console.error("❌ Firebase Admin Initialization Failed: Missing process.env variables!", {
      projectId: !!projectId,
      clientEmail: !!clientEmail,
      privateKey: !!privateKey,
    });
  }

  // Handle both double-escaped strings and quotes properly
  if (privateKey) {
    privateKey = privateKey.replace(/^"(.*)"$/, "$1").replace(/\\n/g, "\n");
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

const adminApp = initAdmin();

export const adminDb: Firestore = getFirestore(adminApp);
export const adminAuth: Auth = getAuth(adminApp);
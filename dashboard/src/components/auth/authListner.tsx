"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/fireBase";
import { useAuthStore } from "@/store/useAuthStore";

export function AuthListener() {
  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      // Access Zustand methods non-reactively inside the callback
      const { fetchUserProfile, setUser } = useAuthStore.getState();

      if (firebaseUser) {
        // User is signed in -> Sync profile from Firestore
        await fetchUserProfile(firebaseUser);
      } else {
        // User is signed out -> Reset Zustand store
        setUser(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array ensures the listener only attaches ONCE on mount

  return null;
}
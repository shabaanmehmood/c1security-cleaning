import { create } from "zustand";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { AuthService } from "@/lib/auth.service";
import { db } from "@/lib/fireBase";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: "admin" | "customer";
}

interface AuthState {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
  setUser: (user: UserProfile | null) => void;
  clearError: () => void;
  fetchUserProfile: (firebaseUser: User) => Promise<UserProfile>;
  signInWithEmail: (email: string, pass: string) => Promise<UserProfile>;
  signUpWithEmail: (name: string, email: string, pass: string) => Promise<UserProfile>;
  signUpWithGoogle: () => Promise<UserProfile>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),
  clearError: () => set({ error: null }),

  // Fetch or initialize Firestore user profile along with role
  fetchUserProfile: async (firebaseUser: User) => {
    try {
      const userRef = doc(db, "users", firebaseUser.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const profile = docSnap.data() as UserProfile;
        set({ user: profile });
        return profile;
      } else {
        // Fallback default profile if document doesn't exist yet
        const newProfile: UserProfile = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || "User",
          email: firebaseUser.email || "",
          role: "customer",
        };
        await setDoc(userRef, { ...newProfile, createdAt: serverTimestamp() });
        set({ user: newProfile });
        return newProfile;
      }
    } catch (err: any) {
      set({ error: err.message });
      throw err;
    }
  },

  // Sign In with Email
  signInWithEmail: async (email, pass) => {
    set({ loading: true, error: null });
    try {
      const firebaseUser = await AuthService.signInWithEmail(email, pass);
      const profile = await get().fetchUserProfile(firebaseUser);
      set({ loading: false });
      return profile;
    } catch (err: any) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // Sign Up with Email
  signUpWithEmail: async (name, email, pass) => {
    set({ loading: true, error: null });
    try {
      const user = await AuthService.signUpWithEmail(email, pass);

      const userProfile: UserProfile = {
        uid: user.uid,
        name,
        email,
        role: "customer", // Default role
      };

      await setDoc(doc(db, "users", user.uid), {
        ...userProfile,
        createdAt: serverTimestamp(),
      });

      set({ user: userProfile, loading: false });
      return userProfile;
    } catch (err: any) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },

  // Sign Up / Sign In with Google
  signUpWithGoogle: async () => {
    set({ loading: true, error: null });
    try {
      const user = await AuthService.signInWithGoogle();
      const profile = await get().fetchUserProfile(user);
      set({ loading: false });
      return profile;
    } catch (err: any) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },
}));
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User,
  AuthError
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, googleProvider, db } from "@/lib/fireBase"; 

/**
 * Creates or updates the user's document in Firestore.
 * Pass additional optional fields (like extra profile details) when available.
 */
async function saveUserToFirestore(
  user: User, 
  additionalData: Record<string, any> = {}
) {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // New user document creation
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email ?? "",
      displayName: user.displayName || additionalData.displayName || "",
      photoURL: user.photoURL || "",
      role: "customer", // Default role for all new signups
      createdAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
      ...additionalData,
    });
  } else {
    // Existing user login: update last login timestamp and optional fields
    await setDoc(
      userRef, 
      { 
        lastLoginAt: serverTimestamp(),
        ...additionalData 
      }, 
      { merge: true }
    );
  }
}

export const AuthService = {
  /**
   * Listen to real-time authentication state changes.
   */
  onAuthChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  },

  /**
   * Get the currently logged-in user instance.
   */
  getCurrentUser(): User | null {
    return auth.currentUser;
  },

  /**
   * Register a new user with Email and Password and save their document in Firestore.
   */
  async signUpWithEmail(
    email: string, 
    pass: string, 
    extraParams: { displayName?: string } = {}
  ): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      // Save complete user document to Firestore
      await saveUserToFirestore(user, extraParams);

      return user;
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  /**
   * Log in an existing user with Email and Password and update their last login time.
   */
  async signInWithEmail(email: string, pass: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      // Update last login timestamp in Firestore
      await saveUserToFirestore(user);

      return user;
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  /**
   * Log in / Sign up with Google Popup and save/update their document in Firestore.
   */
  async signInWithGoogle(): Promise<User> {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Save user profile details from Google to Firestore
      await saveUserToFirestore(user);

      return user;
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  /**
   * Send a password reset email to the user.
   */
  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  /**
   * Sign out the active user.
   */
  async logout(): Promise<void> {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      throw this.handleAuthError(error as AuthError);
    }
  },

  /**
   * Convert Firebase auth error codes into readable messages.
   */
  handleAuthError(error: AuthError): Error {
    let message = "An unexpected error occurred.";

    switch (error.code) {
      case "auth/email-already-in-use":
        message = "This email is already registered.";
        break;
      case "auth/invalid-email":
        message = "Invalid email address formatting.";
        break;
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        message = "Invalid email or password.";
        break;
      case "auth/weak-password":
        message = "Password should be at least 6 characters long.";
        break;
      case "auth/popup-closed-by-user":
        message = "Google login popup was closed before finishing.";
        break;
    }

    return new Error(message);
  }
};
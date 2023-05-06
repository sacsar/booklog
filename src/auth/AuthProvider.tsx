import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase";
import { FirebaseAuth } from "./firebaseauth";
import * as firebaseui from "firebaseui"; // NOTE: VSCode thinks we can use the default import, but we can't

export function AuthProvider({ children }: { children: ReactNode }) {
  const [firebaseAuth, setFirebaseAuth] = useState<FirebaseAuth>({
    user: null,
    widget:
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth),
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      const updatedFbAuth: FirebaseAuth = { ...firebaseAuth, user: user };
      setFirebaseAuth(updatedFbAuth);
    });

    return unsubscribe;
  });

  return (
    <AuthContext.Provider value={firebaseAuth}>{children}</AuthContext.Provider>
  );
}

import { ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { User as FirebaseUser } from "firebase/auth";
import React from "react";

export interface Auth {
  user?: FirebaseUser;
  loggedIn: boolean;
}

export const AuthContext = React.createContext<Auth | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser && loggedIn) {
        console.log("User signed out");
        // this means the user has signed out
        setUser(firebaseUser);
        setLoggedIn(false);
      }
      if (firebaseUser) {
        console.log(`${user?.displayName} signed in`);
        setUser(firebaseUser);
        setLoggedIn(true);
      }
    });

    return unsubscribe;
  });

  return (
    <AuthContext.Provider
      value={{ user: user || undefined, loggedIn: loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

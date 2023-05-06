import { PropsWithChildren, createContext } from "react";
import { FirebaseApp } from "firebase/app";
import { app } from "../firebase";

const FirebaseContext = createContext<FirebaseApp>(app);

export function FirebaseProvider({ children }: PropsWithChildren) {
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
}

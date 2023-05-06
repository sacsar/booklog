import { User as FirebaseUser } from "firebase/auth";
import firebaseui from "firebaseui";

export interface FirebaseAuth {
  user: FirebaseUser | null;
  widget: firebaseui.auth.AuthUI;
}

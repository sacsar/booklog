import React from "react";
import { FirebaseAuth } from "./firebaseauth";

export const AuthContext = React.createContext<FirebaseAuth | null>(null);

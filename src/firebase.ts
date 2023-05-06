import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhhezjtSAvdUNaNcI_9lREoHndNozgmaE",
  authDomain: "booklog-be7e3.firebaseapp.com",
  databaseURL: "https://booklog-be7e3.firebaseio.com",
  projectId: "booklog-be7e3",
  storageBucket: "booklog-be7e3.appspot.com",
  messagingSenderId: "934707874374",
  appId: "1:934707874374:web:a8de45de1c977123e0d847",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

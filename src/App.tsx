import { useState } from "react";
import "./App.css";
import { Header } from "./stories/Header";
import { Login } from "./components/Login";
import { GoogleAuthProvider } from "firebase/auth";

function App() {
  const loginConfig: firebaseui.auth.Config = {
    signInFlow: "popup",
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  };

  const [count, setCount] = useState(0);
  return (
    <>
      <Header
        onLogin={function (): void {
          throw new Error("Function not implemented.");
        }}
        onLogout={function (): void {
          throw new Error("Function not implemented.");
        }}
        onCreateAccount={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></Header>
      <Login uiConfig={loginConfig}></Login>
    </>
  );
}

export default App;

import "./App.css";
import { Header } from "./stories/Header";
import { Login } from "./components/Login";
import { auth as fbAuth } from "./firebase";
import { useAuth } from "./auth/AuthProvider";

function App() {
  const auth = useAuth();

  return (
    <>
      <Header
        onLogin={function (): void {
          throw new Error("Function not implemented.");
        }}
        onLogout={function (): void {
          fbAuth.signOut();
          // throw new Error("Function not implemented.");
        }}
      ></Header>
      {auth?.loggedIn ? <>Hello</> : <Login />}
    </>
  );
}

export default App;

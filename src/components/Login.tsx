// See https://github.com/firebase/firebaseui-web-react/pull/173#issuecomment-1151532176

import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useEffect, useRef } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const loginConfig: firebaseui.auth.Config = {
  signInFlow: "popup",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    // since we're handling this via the context, there's nothing to do here for now
    signInSuccessWithAuthResult() {
      return false;
    },
  },
};

export function Login() {
  const elementRef = useRef(null);

  useEffect(() => {
    const widget =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    if (loginConfig.signInFlow == "popup") {
      widget.reset();
    }

    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      if (!user) {
        widget.reset();
      }
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    widget.start(elementRef.current, loginConfig);

    return () => {
      unregisterAuthObserver();
      widget.reset();
    };
  }, []);

  return <div ref={elementRef} />;
}

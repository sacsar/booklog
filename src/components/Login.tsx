// See https://github.com/firebase/firebaseui-web-react/pull/173#issuecomment-1151532176

import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../auth/AuthContext";

interface Props {
  uiConfig: firebaseui.auth.Config;
  uiCallback?(ui: firebaseui.auth.AuthUI): void;
  className?: string;
}

export function Login({ uiConfig }: Props) {
  const firebaseAuth = useContext(AuthContext);
  const elementRef = useRef(null);

  useEffect(() => {
    if (uiConfig.signInFlow === "popup") {
      firebaseAuth?.widget.reset();
    }

    console.log("in the effect");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    firebaseAuth?.widget.start(elementRef.current, uiConfig);
  }, [uiConfig, firebaseAuth?.widget]);

  return <div ref={elementRef} />;
}

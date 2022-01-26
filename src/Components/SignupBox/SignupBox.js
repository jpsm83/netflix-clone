import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignupBox.css";

export default function SignupBox() {

const emailRef = useRef(null);
const passwordRef = useRef(null);

const register = (e) => {
  e.preventDefault();
  // createUserWithEmailAndPassword is a method from firebase auth that we import from firebase file
  auth.createUserWithEmailAndPassword (
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser) => {
  }).cath(error => console.log(error))
}

const signIn = (e) => {
  e.preventDefault()
  // signInWithEmailAndPassword is a method from firebase auth that we import from firebase file
  auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  ).then((authUser) => {
  }).cath(error => console.log(error))
}

  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign in</button>
        <h4>
          <span className="signupGray">New to Netflix? </span>
          <span className="signupLink" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

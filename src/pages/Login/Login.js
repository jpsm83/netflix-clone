import React, { useState } from "react";
import "./Login.css";
import Signup from "../Signup/Signup";

export default function Login() {

const [signin, setSignin] = useState(false);
const [getStarted, setGetStarted] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreeBackground">
        <img
        className="loginScreenLogo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />
        <button className="logginScreenButton" onClick={() => setSignin(true)}>Sign In</button>
      <div className="loginScreenGradient" />
      </div>
      <div className="logingScreenBody">
      {signin ? (
        <Signup />
      ) : (
        <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart our membership.</h3>
              <div className="loginScreenInput">
                <form>
                    <input type="email" placeholder="Email Address" />
                    <button className="loginScreenGetStarted" onClick={() => setGetStarted(true)}>GET STARTED</button>
                </form>
              </div>
          </>
      )}
      </div>
    </div>
  );
}

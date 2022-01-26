import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    // onAuthStateChanged is a method from firebase auth that we import from firebase file
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      //logged in
      if(userAuth){
        console.log(userAuth)
      } else {
        //logged out
      }
      // always use a cleanup function when using useEffect()
      // return a function will cleanup and then execute this function
      return unsubscribe
    })
  }, [])

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

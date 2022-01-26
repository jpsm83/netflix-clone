import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { auth } from "./firebase";
// methods from react redux to select a state to be show or dispatch an action
import { useDispatch, useSelector } from "react-redux";
// action and states import from userSlice to be show or dispatched
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  // useSelector show the state parameter from global store
  const user = useSelector(selectUser);
  // useDispatch execute and action to be store in the global store
  const dispatch = useDispatch();

  useEffect(() => {
    // onAuthStateChanged is a method from firebase auth that we import from firebase file
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // always use a cleanup function when using useEffect()
      // return a function will cleanup and then execute this function
      return unsubscribe;
    });
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

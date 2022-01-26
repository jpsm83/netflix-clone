import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../Components/Nav/Nav";
import { selectUser } from "../../features/userSlice";
import "./Profile.css";
import { auth } from "../../firebase";
import Plans from "../../Components/Plans/Plans";

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profileBody">
        <h1>Edit Profile</h1>
        <div className="profileInfo">
          <img
            className="profileAvatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar User"
          />
          <div className="profileDetails">
            <h2>{user.email}</h2>
            <div className="profilePlans">
            <h3>Plans</h3>
            <Plans />
            {/* signOut comes from the firebase auth */}
              <button onClick={() => auth.signOut()} className="profileSignOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../Components/Nav/Nav";
import { selectUser } from "../../features/userSlice";
import "./Profile.css";

export default function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profileBody">
        <h1>Edit Profile</h1>
        <div className="profileInfo">
          <img
            className="profile_avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar User"
          />
          <div className="profileDetails">
            <h2>{user.email}</h2>
            <div className="profilePlans"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

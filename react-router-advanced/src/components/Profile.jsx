// src/components/Profile.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom"; // Import Routes and Route
import ProfileDetails from "./ProfileDetails"; // Import ProfileDetails
import ProfileSettings from "./ProfileSettings"; // Import ProfileSettings

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Details</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Define nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;

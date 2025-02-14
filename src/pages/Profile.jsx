import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    userid: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      console.log(user);

      setUserDetails({
        userid: user.uid,
        name: user.displayName || "Not Available",
        email: user.email,
        phoneNumber: user.phoneNumber || "Not Available", // You might need to fetch this from Firestore
      });
    }
  }, []);

  // Handler for the button click
  const handleRedirect = () => {
    navigate("/completeform"); // Redirect to /completeform
  };

  return (
    <div className="profile-container w-4/5 mx-auto p-5 bg-white shadow-lg rounded-lg mt-10">
      {/* Add a button at the top */}
      <button
        onClick={handleRedirect}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-600 transition-all"
      >
        Complete Profile
      </button>

      <h1 className="text-3xl text-center font-semibold mb-6">
        Profile Details
      </h1>

      <div className="profile-details space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold">User ID:</span>
          <span>{userDetails.userid}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Name:</span>
          <span>{userDetails.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Email:</span>
          <span>{userDetails.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Phone Number:</span>
          <span>{userDetails.phoneNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

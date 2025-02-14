import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../firebase/FirebaseConfig"; // assuming you exported 'db' from FirebaseConfig
import { doc, updateDoc, getDoc } from "firebase/firestore";

const CompleteForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // To handle the loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check for 11-digit phone number
    const phonePattern = /^[0-9]{11}$/;
    if (!phonePattern.test(phoneNumber)) {
      setError("Please enter a valid 11-digit mobile number.");
      return;
    }

    setError(""); // Clear error if valid phone number

    // Get the current user
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setLoading(true); // Show loading indicator
      try {
        // Get the reference to the user's document in Firestore
        const docRef = doc(db, "users", user.uid);

        // Fetch the current document to check if the mobile field is an empty string
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();

          // Check if the mobile field is an empty string
          if (userData.mobile === "") {
            // If mobile is empty, update it with the new number
            await updateDoc(docRef, {
              mobile: phoneNumber,
            });
            alert("Mobile number updated successfully!");
          } else {
            alert("Mobile number is already set.");
          }
        } else {
          alert("User document not found.");
        }
      } catch (error) {
        console.error("Error updating document: ", error);
        setError("There was an error updating your phone number. Please try again.");
      } finally {
        setLoading(false); // Hide loading indicator
      }
    } else {
      setError("No authenticated user found. Please log in.");
    }
  };

  return (
    <div className="complete-form-container w-4/5 mx-auto p-5 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl text-center font-semibold mb-6">Complete Your Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="font-semibold mb-2">
            Mobile Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your mobile number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Updating..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompleteForm;

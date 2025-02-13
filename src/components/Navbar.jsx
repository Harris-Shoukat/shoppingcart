import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import app from "../firebase/FirebaseConfig";

const auth = getAuth(app);

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.allCart);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("user is present");
      } else {
        setUser(null);
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <div className="px-20 h-20 bg-teal-800 shadow-md flex items-center justify-between sticky top-0 z-10">
      <Link to={"/"} className="no-underline">
        <h1 className="text-4xl py-2 text-white font-semibold cursor-pointer">
          Shopping App
        </h1>
      </Link>
      <div className="flex gap-4">
        <Link
          to="/cartpage"
          className="flex items-center bg-slate-100 justify-center text-3xl no-underline gap-2 py-2 px-3 rounded-lg"
        >
          <LuShoppingCart className="text-green-700" />
          <span className=" text-green-700">{totalQuantity} </span>
        </Link>
        {user ? (
          <Link to={"/"} className="no-underline">
            <p onClick={()=> signOut(auth)} className="text-white text-2xl h-full flex justify-center items-center">
              Logout
            </p>
          </Link>
        ) : (
          <Link to={"/login"} className="no-underline">
            <p className="text-white text-2xl h-full flex justify-center items-center">
              Login
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

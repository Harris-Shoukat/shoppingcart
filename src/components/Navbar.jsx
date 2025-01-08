import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import Product from "../pages/Product";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-20 h-20 bg-teal-800 shadow-md flex items-center justify-between">
      {/* <Link to="/">
      </Link> */}
        <h1 className="text-4xl py-2 text-white font-semibold cursor-pointer">
          Shopping App
        </h1>
      <LuShoppingCart className="w-16 h-8 text-white" />
    </div>
  );
};

export default Navbar;

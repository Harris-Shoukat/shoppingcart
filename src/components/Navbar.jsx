import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
   const {totalQuantity } = useSelector(
      (state) => state.allCart
    );
      
  return (
    <div className="px-20 h-20 bg-teal-800 shadow-md flex items-center justify-between sticky top-0 z-10">
      <Link  to={'/'} className="no-underline">
        <h1 className="text-4xl py-2 text-white font-semibold cursor-pointer">
          Shopping App
        </h1>
      </Link>
      <Link to="/cartpage" className="flex items-center bg-slate-100 justify-center text-3xl no-underline gap-2 py-2 px-3 rounded-lg">
        <LuShoppingCart className="text-green-700" />
        <span className=" text-green-700">{totalQuantity} </span>
      </Link>
    </div>
  );
};

export default Navbar;

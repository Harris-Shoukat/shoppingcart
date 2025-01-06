import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className='px-20 h-20 bg-teal-800 shadow-md flex items-center justify-between'>
        <h1 className='text-4xl py-2 text-white font-semibold'>Shopping App</h1>
        <LuShoppingCart className='w-16 h-8 text-white'/>
    </div>
  )
}

export default Navbar
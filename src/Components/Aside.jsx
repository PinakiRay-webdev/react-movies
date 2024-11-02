import React from "react";
import { CiUser, CiSearch, CiVideoOn, CiBasketball } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <div className="bg-black h-screen fixed top-0 w-[10vw]">
      <h1 className="text-center text-2xl font-bold text-amber-500">Brand</h1>
      <nav className="h-[70vh] flex flex-col items-center justify-around mt-12">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-amber-500" : "text-white"}`
          }
          to="/login"
        >
          <i className={`text-2xl cursor-pointer`}>
            <CiUser />
          </i>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-amber-500" : "text-white"}`
          }
          to="/"
        >
          <i className="text-2xl cursor-pointer ">
            <FaHome />
          </i>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-amber-500" : "text-white"}`
          }
          to="/television"
        >
          <i className="text-2xl cursor-pointer">
            <PiTelevisionSimple />
          </i>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-amber-500" : "text-white"}`
          }
          to="/radio"
        >
          <i className="text-2xl cursor-pointer">
            <CiVideoOn />
          </i>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-amber-500" : "text-white"}`
          }
          to="/sports"
        >
          <i className="text-2xl cursor-pointer">
            <CiBasketball />
          </i>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-amber-500" : "text-white"}`
          }
          to="/category"
        >
          <i className="text-2xl cursor-pointer">
            <BiCategory />
          </i>
        </NavLink>
      </nav>
    </div>
  );
};

export default Aside;

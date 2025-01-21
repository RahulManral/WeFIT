import React from "react"
import { NavLink } from "react-router-dom"

const MobileOverlayMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeMenu}
    >
      <div
        className={`mt-24 fixed right-0 top-0 bottom-0 w-full h-72 border-4 border-black rounded-xl bg-white shadow-xl transform transition-transform duration-300 ease-in-out${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-4 font-customFont text-center font-medium mt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-black hover:bg-black hover:text-white p-2 rounded border-2 transition duration-300 ${isActive ? "bg-black text-white" : ""}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-black hover:bg-black hover:text-white p-2 rounded border-2 transition duration-300 ${isActive ? "bg-black text-white" : ""}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/fitnesscalculator"
            className={({ isActive }) =>
              `block text-black hover:bg-black hover:text-white p-2 rounded border-2 transition duration-300 ${isActive ? "bg-black text-white" : ""}`
            }
            onClick={closeMenu}
          >
            Calculator
          </NavLink>
          <NavLink
            to="/fitnesscalculator"
            className={({ isActive }) =>
              `block bg-white text-black hover:bg-black hover:text-white p-2 rounded border-2 border-black transition duration-300 ${isActive ? "bg-white text-black" : ""}`
            }
            onClick={closeMenu}
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default MobileOverlayMenu


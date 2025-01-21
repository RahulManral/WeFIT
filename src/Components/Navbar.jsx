import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import MobileOverlayMenu from "./MobileOverlayMenu"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-white p-3 m-6 rounded-2xl shadow-xl border-2 border-grey font-custom">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-3xl font-bold">WeFIT</div>
        <div className="hidden md:flex space-x-8 text-xl font-extrabold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black hover:bg-black hover:text-white px-9 py-2 border-2 rounded-xl transition duration-300 ease-in-out ${isActive ? "bg-black text-white " : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-black hover:bg-black hover:text-white px-9 py-2 border-2 rounded-xl transition duration-300 ease-in-out ${isActive ? "bg-black text-white" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/fitnesscalculator"
            className={({ isActive }) =>
              `text-black hover:bg-black hover:text-white px-5 py-2 border-2 rounded-xl transition duration-300 ease-in-out ${isActive ? "bg-black text-white" : ""}`
            }
          >
            Calculator
            </NavLink>
        </div>
        <div className="hidden md:flex">
          <NavLink
            to="/fitnesscalculator"
            className={({ isActive }) =>
              `bg-white text-black text-xl hover:bg-black hover:text-white px-4 py-2 -ml-14 rounded-xl transition duration-300 font-customFont font-bold border-4 border-black ${isActive ? "bg-white text-black" : ""}`
            }
          >
            Get Started
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none z-50 relative mt-2 ">
            {isOpen ? <X className="w-8 h-8 transition-transform" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>
      <MobileOverlayMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  )
}

export default Navbar


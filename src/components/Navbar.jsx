import { useState } from "react";
import logo from "../assets/wow.png";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed md:mx-18 top-4 left-0 right-0 mx-3 lg:mx-16  z-50">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-2 flex justify-between items-center rounded-xl border border-neutral-900/60">
        <img src={logo} alt="" width={100} height={24} />
        <div className="hidden md:flex space-x-6">
          <a href="#works" className="hover:text-neutral-200">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#testimonial" className="hover:text-neutral-200">
            Testimonials
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white py-1 px-4 rounded-md hover:bg-neutral-700 transition"
          >
            Get a Demo
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-400 transition"
          >
            Start Free Trial
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-4 rounded-xl mt-2">
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-neutral-200">
              Product
            </a>
            <a href="#" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#" className="hover:text-neutral-200">
              Resources
            </a>
            <a href="#" className="hover:text-neutral-200">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-1 px-4 rounded-md hover:bg-neutral-700 transition"
            >
              Get a Demo
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-400 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

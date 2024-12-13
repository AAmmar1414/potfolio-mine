"use client";

import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full pt-8">
      {/* Top Navbar */}
      <div
        className="flex justify-between items-center p-4 w-full"
        style={{ backgroundColor: "rgb(255, 127, 62)" }} // RGB color
      >
        <div className="text-white text-xl font-medium font-serif">Ammar Iqbal</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex text-white font-sans">
          <li className="menulink cursor-pointer-black"><a href="#hero">Home</a></li>
          <li className="menulink cursor-pointer-black"><a href="about">About</a></li>
          <li className="menulink cursor-pointer-black"><a href="Projects">Projects</a></li>
          <li className="menulink cursor-pointer-black"><a href="skills">Skills</a></li>
          <li className="menulink cursor-pointer-black"><a href="contacts">Contacts</a></li>
        </ul>
        <AiOutlineMenuUnfold
          className="text-white md:hidden cursor-pointer-black"
          size={30}
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-gray-800 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <AiOutlineClose
            className="text-white cursor-pointer-black"
            size={30}
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar Links */}
        <ul className="bg-orange-500 flex flex-col items-center mt-10 gap-6 text-lg font-serif">
          <li className="menulink cursor-pointer-black"><a href="#hero" onClick={toggleSidebar}>Home</a></li>
          <li className="menulink cursor-pointer-black"><a href="about" onClick={toggleSidebar}>About</a></li>
          <li className="menulink cursor-pointer-black"><a href="Projects" onClick={toggleSidebar}>Projects</a></li>
          <li className="menulink cursor-pointer-black"><a href="skills" onClick={toggleSidebar}>Skills</a></li>
          <li className="menulink cursor-pointer-black"><a href="contacts" onClick={toggleSidebar}>Contacts</a></li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Navbar;

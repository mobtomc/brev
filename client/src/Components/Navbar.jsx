import React, { useState } from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/images/logo.png"

function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#072ccf] relative z-10">
      <div className="max-w-[1240px] flex justify-between items-center">
        <div className="">
            <img src={Logo} alt="" className="w-[50%] sm:w-[80%]" />
        </div>
        {Toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!Toggle)}
            className="block md:hidden xl:hidden text-white text-2xl"
          />
        ) : (
          <AiOutlineAlignRight
            onClick={() => setToggle(!Toggle)}
            className="block md:hidden xl:hidden text-white text-2xl"
          />
        )}

        <ul className="hidden md:flex text-lg font-semibold text-white gap-20">
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>

        <ul
          className={`duration-300 md:hidden fixed bg-black/95 h-screen top-[50px] sm:top-[85px] w-full text-white gap-12 ${
            Toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">About Us</li>
          <li className="p-5">Features</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

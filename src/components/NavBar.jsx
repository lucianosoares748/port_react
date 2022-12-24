import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  // creating the hook to add effect to the icon
  const [nav, setNav] = useState(false);

  // creating a variable to store the objects presented in the header
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  // mapping the variable with the objects, to render through the id l:38 => l47
  // inside onclick defining the setNave variable and creating the logic of the function that will toggle open and closed icons l:50 => l:55
  // creating the way links will be presented on mobile, defining the difference in style from mobile to web with open and closed menu l:58 => l:69
  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
      <div>
        <h1 className="font-signature ml-2 text-5xl">Luciano</h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={link.id}
              className="cursor-pointer px-4 capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

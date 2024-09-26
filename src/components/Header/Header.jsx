import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navLists = [
    {
      id: 1,
      text: "Home",
      route: "/",
    },
    {
      id: 2,
      text: "Project",
      route: "/projects",
    },
    {
      id: 3,
      text: "About",
      route: "/about",
    },
    {
      id: 4,
      text: "Contact",
      route: "/contact",
    },
  ];
  return (
    <>
      <header className="border-gray-200 bg-gray-700 h-16 text-white">
        <div className="logo flex items-center justify-between mx-auto pl-4 pr-4 h-16">
          <Link to="/" className="text-xl font-semibold">
            Karan Gautam
          </Link>
          <button
            onClick={() => setMenu(!menu)}
            className="rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <IoMdMenu size={25} />
          </button>
          <div className=" w-full md:block md:w-auto hidden">
            <nav className="">
              <ul className=" font-medium flex flex-row md:p-0   rounded-2xl ">
                {navLists.map(({ id, text, route }) => (
                  <NavLink
                    key={id}
                    to={route}
                    onClick={() => setMenu(!menu)}
                    className={({ isActive }) =>
                      `${isActive ? "text-blue-300 bg-gray-800 " : "text-white"}
                 hover:dark:bg-gray-600 px-5 py-3 `
                    }
                  >
                    {text}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {menu && (
        <nav>
          <ul className="flex flex-col justify-center items-center absolute right-0 bg-gray-600 font-semibold md:hidden rounded-b">
            {navLists.map(({ id, text, route }) => (
              <NavLink
                key={id}
                to={route}
                onClick={() => setMenu(!menu)}
                className={({ isActive }) =>
                  `${isActive ? "text-blue-300 bg-gray-700 border border-black" : "text-white"}
                 hover:dark:bg-gray-800 px-5 py-3 w-full rounded `
                }
              >
                {text}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;

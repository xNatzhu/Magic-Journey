import "./css/Navbar.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const toggleOpen = () => {
    setOpen(!open);
  };

  const outToken = ()=>{
    setToken(sessionStorage.clear());
    console.log(token);
  }
  
  return (
    <div className={!open ? "menu-conteiner" : "menu-conteiner-open"}>
      <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg font-bold tracking-tighter text-[#9DC08B] transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            href="/groups/header/"
          >
            xNatzhu
          </a>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={toggleOpen}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-8 h-8 text-[#fff]"
            >
              <path
                style={{ display: !open ? "block" : "none" }}
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011 1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                style={{ display: open ? "block" : "none" }}
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          className={`flex-col items-center flex-grow ${
            open ? "flex" : "hidden"
          } pb-4 border-[#9DC08B] md:pb-0 md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2`}
        >
          <NavLink
            className="px-4 py-2 mt-2 text-sm text-gray-300 md:mt-0 hover:text-[#9DC08B] focus:outline-none focus:shadow-outline"
            activeClassName="active"
            to="/"
          >
            Inicio
          </NavLink>

          <NavLink
            className="px-4 py-2 mt-2 text-sm text-gray-300 md:mt-0 hover:text-[#9DC08B] focus:outline-none focus:shadow-outline"
            activeClassName="active"
            to="/cities"
          >
            Ciudades
          </NavLink>
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            {token ? (
              <NavLink
                className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#9DC08B] rounded-xl hover:bg-[#9DC08B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9DC08B]"
                to="/login"
                onClick={outToken}
              >
                Cerrar Seccion
              </NavLink>
            ) : (
              <NavLink
                className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#9DC08B] rounded-xl hover:bg-[#9DC08B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9DC08B]"
                onClick={outToken}
                to="/login"

              >
                Ingresar
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

function Profile({ outToken }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [token, setToken] = useState();
  const dataToken = sessionStorage.getItem("token");
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    setToken(dataToken);
  }, [dataToken]);

  useEffect(() => {
    setToken(user?.token?.token || "");
  }, [user]);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="">
      {token ? (
        <div className="relative inline-block text-left">
          <button
            id="avatarButton"
            type="button"
            onClick={toggleDropdown}
            className="flex items-center space-x-2 rounded-full cursor-pointer"
          >
            <img
              src={user.user.img}
              alt="User dropdown"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-900 dark:text-white hidden md:flex">
            {user.user.name}
            </span>
          </button>
          {isDropdownOpen && (
            <div
              id="userDropdown"
              className="z-10 absolute top-30 right-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-[#202020] dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="avatarButton"
              >
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </NavLink>
                </li>
              </ul>
              <div className="py-1">
                <NavLink
                  to="/login"
                  onClick={outToken}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Cerrar Sesión
                </NavLink>
              </div>
            </div>
          )}
        </div>
      ) : (
        <NavLink
          to="/login"
          className="items-center block px-5 py-2 text-sm font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#9DC08B] rounded-xl hover:bg-[#9DC08B] focus:outline-none"
        >
          <p className="hidden md:flex">Ingresar</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-lock md:hidden flex" viewBox="0 0 16 16">
  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
</svg>
          
          
        </NavLink>
      )}
    </div>
  );
}
export default Profile;

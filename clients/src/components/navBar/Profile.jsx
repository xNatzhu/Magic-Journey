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
    <div>
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
            <span className="text-gray-900 dark:text-white">
            {user.user.name}
            </span>
          </button>
          {isDropdownOpen && (
            <div
              id="userDropdown"
              className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#202020] dark:divide-gray-600"
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
                  to="/"
                  onClick={outToken}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </NavLink>
              </div>
            </div>
          )}
        </div>
      ) : (
        <NavLink
          to="/login"
          className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#9DC08B] rounded-xl hover:bg-[#9DC08B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9DC08B]"
        >
          Iniciar Sesión
        </NavLink>
      )}
    </div>
  );
}
export default Profile;

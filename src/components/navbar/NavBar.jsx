import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import APIService from "../../service/APIService";
const NavBar = () => {
  const isAuthenticated = APIService.isAuthenticated();
  const isAdmin = APIService.isAdmin();
  const isUser = APIService.isUser();

  const navigate = useNavigate();
  const handleLogout = () => {
    const isLogout = window.confirm(
      "Are you sure you want to logout this user?"
    );
    if (!isLogout) {
      APIService.logout();
      navigate("/login");
    }
  };
  return (
    <div className="navbar bg-blue-900">
      <div className="flex-1">
        <a className="text-xl font-bold text-white">Brixton</a>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 text-white px-4 py-2 rounded"
                  : "text-white px-4 py-2"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 text-white px-4 py-2 rounded"
                  : "text-white px-4 py-2"
              }
            >
              Rooms
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-700 text-white px-4 py-2 rounded"
                  : "text-white px-4 py-2"
              }
            >
              Find My Bookings
            </NavLink>{" "}
          </li>
          <li>
            {!isAuthenticated && (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-4 py-2 rounded"
                    : "text-white px-4 py-2"
                }
              >
                Login
              </NavLink>
            )}
          </li>
          <li>
            {!isAuthenticated && (
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-700 text-white px-4 py-2 rounded"
                    : "text-white px-4 py-2"
                }
              >
                Register
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

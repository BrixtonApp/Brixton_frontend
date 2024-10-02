import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import APIService from "../../service/APIService";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = APIService.isAuthenticated();
  const isAdmin = APIService.isAdmin();
  const isUser = APIService.isUser();
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook

  const handleLogout = () => {
    const isLogout = window.confirm(
      "Are you sure you want to logout this user?"
    );
    if (isLogout) {
      APIService.logout();
      navigate("/login");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavItem = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <ul>
        <li className="active:bg-none">
          <NavLink
            to={to}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-customOrange text-white"
                : "text-white hover:bg-orange-200 hover:text-black"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {children}
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <nav className="bg-[#050a30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">
                Brixton Hotel
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem to="/home">Home</NavItem>
              <NavItem to="/rooms">Rooms</NavItem>
              <NavItem to="/find-my-bookings">Find My Bookings</NavItem>
              {isUser && <NavItem to="/profile">Profile</NavItem>}
              {isAdmin && <NavItem to="/admin">Admin</NavItem>}
              {!isAuthenticated && (
                <>
                  <NavItem to="/auth/login">Login</NavItem>
                  <NavItem to="/auth/register">Register</NavItem>
                </>
              )}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-red-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <MdOutlineCancel className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <TiThMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/rooms">Rooms</NavItem>
            <NavItem to="/find-my-bookings">Find My Bookings</NavItem>
            {isUser && <NavItem to="/profile">Profile</NavItem>}
            {isAdmin && <NavItem to="/admin">Admin</NavItem>}
            {!isAuthenticated && (
              <>
                <NavItem to="/auth/login">Login</NavItem>
                <NavItem to="/auth/register">Register</NavItem>
              </>
            )}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="block w-full text-left text-white hover:bg-red-800 px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

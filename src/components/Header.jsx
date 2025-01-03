import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="navbar bg-[#080221] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allVisa">All Visas</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/addVisa">Add Visa</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/myAddedVisa">My Added Visa</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="myVisaApplication">My Visa Applications</NavLink>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">VISA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allVisa"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              All Visas
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/addVisa"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Add Visa
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                to="/myAddedVisa"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                My Added Visa
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                to="myVisaApplication"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                My Visa Applications
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end flex gap-8">
        {user ? (
          <div className="flex items-center gap-4">
            {user.photoURL && (
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={user.displayName || "User"}
                />
                <Tooltip id="user-tooltip" place="left" />
              </div>
            )}
            <button onClick={handleLogout} className="btn mr-24">
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
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
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/allVisas'>All Visas</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">VISA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/allVisas'>All Visas</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-8">
        {user ? (
          <>
            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
            <span>{user.displayName}</span>
            <button onClick={handleLogout} className="btn">Logout</button>
          </>
        ) : (
          <>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

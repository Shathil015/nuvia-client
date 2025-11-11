import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import Users from "../assets/user.png";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/artworks">Explore Artworks</NavLink>
      </li>
      <li>
        <NavLink to="/addArtwork">Add Artwork</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">My Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/favorites">My Favorites</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start mx-5">
        <img className="h-[50px] max-auto" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mx-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={Users} />
        <Link to="/auth/login" className="btn ml-5">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;

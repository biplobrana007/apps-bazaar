import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import Container from "./Container";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const links = [
    { linkTitle: "Home", linkPath: "/" },
    { linkTitle: "Apps", linkPath: "apps" },
    { linkTitle: "Installation", linkPath: "installation" },
  ];
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar  px-4 ">
          <div className="navbar-start gap-5">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-transparent border-none  hover:text-white hover:bg-gradient-to-r from-[#632ee3] to-[#9f62f2] lg:hidden"
              >
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links.map((link, idx) => (
                  <li key={idx}>
                    <NavLink to={link.linkPath}>{link.linkTitle}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" flex gap-2 items-center">
              <Link to="/">
                <img className="w-8" src={logoImg} alt="" />
              </Link>
              <p className=" max-sm:hidden text-xl font-bold  bg-gradient-to-r text-transparent bg-clip-text from-[#632ee3] via-[#029bba] to-[#f45337]">
                {" "}
                <span>apps</span>
                <span>bazaar</span>
              </p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    className=" hover:text-transparent bg-clip-text hover:underline  bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
                    to={link.linkPath}
                  >
                    {link.linkTitle}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="https://github.com/biplobrana007"
              className="py-2 px-3 rounded gap-2 font-semibold flex items-center text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
            >
              <FaGithub className="text-xl"></FaGithub>
              <span>Contribution</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

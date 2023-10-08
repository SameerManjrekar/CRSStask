import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle Navbar on small screen sizes
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-blue-400 p-4 md:flex md:items-center w-full md:justify-center flex-wrap">
        <div className="container mx-auto flex justify-between">
          <NavLink
            className="text-white text-2xl font-bold cursor-pointer"
            style={({ isActive }) => ({ color: isActive ? "green" : "white" })}
            to={"/"}
          >
            SAMEER
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/todo"
              className="text-white font-semibold text-xl"
              style={({ isActive }) => ({
                color: isActive ? "green" : "white",
              })}
            >
              Todos
            </NavLink>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="space-y-4 mt-4">
          <NavLink
            to="/"
            className="flex flex-col items-center basis-full text-white font-semibold text-xl"
            style={({ isActive }) => ({ color: isActive ? "green" : "white" })}
          >
            SAMEER
          </NavLink>
          <NavLink
            to="/todo"
            className="flex flex-col items-center basis-full text-white font-semibold text-xl"
            style={({ isActive }) => ({ color: isActive ? "green" : "white" })}
          >
            Todos
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;

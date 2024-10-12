import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger and close menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <nav className="bg-green-900 p-4 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="flex justify-between items-center px-4 lg:px-10">
        <div className="text-white font-bold text-2xl">
          <a href="#">TradeSavvy</a>
        </div>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Full Navigation for Large Screens */}
        <ul className="hidden lg:flex space-x-6">
          {NAVIGATION_LINKS.map((link, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={link.submenu ? handleMouseEnter : undefined}
              onMouseLeave={link.submenu ? handleMouseLeave : undefined}
            >
              <a
                href={link.href}
                className="text-white px-4 py-2 hover:bg-green-500 rounded"
              >
                {link.label}
              </a>

              {/* Dropdown Menu for Submenu */}
              {link.submenu && (
                <ul
                  className={`absolute left-0 top-full mt-2 bg-gray-800 py-2 w-48 rounded shadow-lg 
                ${dropdownOpen ? "block" : "hidden"} group-hover:block`}
                >
                  {link.submenu.map((submenuLink, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-green-500">
                      <a href={submenuLink.href} className="text-white block">
                        {submenuLink.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 text-white space-y-4 py-6 px-4 shadow-lg">
            {NAVIGATION_LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block text-white px-4 py-2 hover:bg-green-500 rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

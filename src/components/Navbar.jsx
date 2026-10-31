import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiHotelFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "../stylesheet/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <div className="nav-bar">
        <Link
          className="brand"
          to="/"
          aria-label="Hotel home"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <RiHotelFill />
          </span>
          <span className="brand-copy">
            <span className="brand-name">Hotel</span>
            <span className="brand-tagline">A PLACE TO PAUSE</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </button>

        <button
          className={`nav-backdrop${menuOpen ? " is-visible" : ""}`}
          type="button"
          aria-label="Close navigation menu"
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />

        <nav
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={closeMenu}
          >
            Rooms
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-contact${isActive ? " is-active" : ""}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

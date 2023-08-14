import React, { useState } from "react";
import { routesList } from "../../routes/routesList";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="nav">
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            {routesList.map((link) => (
              <li key={link.id} className="nav__item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active-nav" : "nav__link"
                  }
                  onClick={() =>
                    setShowMenu(false)
                  } /* закрытие меню после клика на секцию */
                >
                  <div className="nav__icon">{link.icon}</div>
                  <h3 className="nav__name">{link.name}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}
        onClick={() => setShowMenu(!showMenu)}
      >
        {/* Бургер */}
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Navbar;

import { NavLink, useLocation } from "react-router-dom";

// internal
import menu_data from "../../data/menu-data";

const Navbar = ({ logo_white = false }: { logo_white?: boolean }) => {
  const { pathname } = useLocation();
  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <NavLink to="/" className="d-block">
            <img
              src={
                logo_white
                  ? "/assets/images/logo/c-financia.svg"
                  : "/assets/images/logo/c-financia.svg"
              }
              alt="logo"
            />
          </NavLink>
        </div>
      </li>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
            menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
          }`}
        >
          {menu.dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_menus?.map((dm, i) => (
                  <li key={i}>
                    <NavLink
                      to={dm.link}
                      className={`dropdown-item ${pathname === dm.link ? "active" : ""}`}
                    >
                      <span>{dm.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )}
          {menu.mega_menu && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                <li className="row gx-1">
                  {menu.mega_menus?.map((mm) => (
                    <div key={mm.id} className="col-lg-4">
                      <div className="menu-column">
                        <ul className="style-none mega-dropdown-list">
                          {mm.menus.map((sm, i) => (
                            <li key={i}>
                              <NavLink
                                to={sm.link}
                                className={`dropdown-item ${pathname === sm.link ? "active" : ""}`}
                              >
                                <span>{sm.title}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </>
          )}
          {!menu.dropdown && !menu.mega_menu && (
            <NavLink className="nav-link" to={menu.link} role="button">
              {menu.title}
            </NavLink>
          )}
        </li>
      ))}
      <li className="d-md-none ps-2 pe-2">
        <a
          href="https://app.cesionbnk.com/cfinancia/vinculaciones"
          className="signup-btn-one icon-link w-100 mt-20"
        >
          <span className="flex-fill text-black text-center" style={{background: "#CFFF45"}}>Regístrate</span>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;

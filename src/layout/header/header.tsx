import { NavLink } from "react-router-dom";

// internal
import Navbar from "./navbar";

const HeaderTwo = () => {
  return (
    <header className="theme-main-menu menu-overlay menu-style-one white-vr sticky-menu fixed">
      <div className="inner-content position-relative">
        <div className="top-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <NavLink to="/" className="d-flex align-items-center">
                <img src="https://public.cesionbnk.com/static/logo/LogoCFinanciaBlanco.png" alt="logo" width={200} />
              </NavLink>
            </div>

            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li className="d-flex align-items-center login-btn-one dropdown">
                  <span className="bi bi-lock text-white me-2"></span>
                  <a
                    className="text-light fw-500 dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    Mi Cuenta
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        href="https://app.cesionbnk.com/cfinancia"
                        className="dropdown-item d-flex align-items-center"
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        <span className="bi bi-person me-2"></span>
                        <span>Clientes</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.cesionbnk.com/cfinancia/admin"
                        className="dropdown-item d-flex align-items-center"
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        <span className="bi bi-shield-lock me-2"></span>
                        <span>Administradores</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="d-none d-md-inline-block ms-3 ms-xl-5">
                  <a
                    href="https://app.cesionbnk.com/cfinancia/vinculaciones"
                    className="btn-one tran3s"
                  >
                    Regístrate
                  </a>
                </li>
              </ul>
            </div>
            <nav className="navbar navbar-expand-lg p0 order-lg-2">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {/* header navbar start */}
                <Navbar logo_white={true} />
                {/* header navbar end */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;

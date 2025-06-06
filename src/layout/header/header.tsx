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
                <img src="/assets/images/logo/c-financia.svg" alt="logo" />
              </NavLink>
            </div>

            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li className="d-flex align-items-center login-btn-one">
                  <span className="bi bi-lock text-white me-2"></span>
                  <a
                    href="https://cfinancia.cesionbnk.com/"
                    className="text-light fw-500"
                  >
                    Mi Cuenta
                  </a>
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

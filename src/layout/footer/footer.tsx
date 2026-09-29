import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "react-bootstrap";
// internal
import FooterSocial from "./footer-social";
import PqrForm from "@/components/forms/pqr-form";

const Footer = () => {
  const [showPqr, setShowPqr] = useState(false);
  return (
    <div className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-md-3 footer-intro mb-30">
              <div className="logo mb-15">
                <NavLink to="/" className="d-inline-block d-lg-none">
                  <img
                    src="https://public.cesionbnk.com/static/logo/LogoCFinanciaBlanco.png"
                    alt="logo"
                  />
                </NavLink>
              </div>
              <p className="text-white lh-sm mb-35">
                C-Financia{" "}
                <span className="opacity-50">
                  obtén <br /> liquidez con tus facturas
                </span>
              </p>
              {/* social link */}
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial />
              </ul>
              {/* social link */}
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios-factoring">Factoring</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Nuestra Empresa</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <NavLink to="/blog-factoring/1">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contacto">Contáctanos</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Servicio al Cliente</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <NavLink to="/contacto">Contáctanos</NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPqr(true);
                    }}
                  >
                    PQR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last mb-15">
              <div className="footer-newsletter float-xl-end">
                <h5 className="footer-title">Suscríbete a nuestro boletín</h5>
                <form action="#">
                  <input
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                  />
                  <button>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-7 order-lg-first mb-15">
              <NavLink to="/" className="d-none d-lg-inline-block mb-25">
                <img src="https://public.cesionbnk.com/static/logo/LogoCFinanciaBlanco.png" alt="logo" width={200} />
              </NavLink>
              <div className="d-xl-flex align-items-center">
                <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                  Financiamiento para todos - C-Financia by Cesionbnk.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PQR modal */}
      <Modal
        show={showPqr}
        onHide={() => setShowPqr(false)}
        centered
        size="lg"
        contentClassName="pqr-modal"
      >
        <div className="pqr-modal-header">
          <button
            type="button"
            className="pqr-close"
            aria-label="Cerrar"
            onClick={() => setShowPqr(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <span className="pqr-badge">Servicio al Cliente</span>
          <h3>Peticiones, Quejas, Reclamos y Sugerencias</h3>
          <p>Cuéntanos qué necesitas y te responderemos lo antes posible.</p>
        </div>
        <Modal.Body className="pqr-modal-body">
          <PqrForm onSuccess={() => setShowPqr(false)} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Footer;

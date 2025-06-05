import { NavLink } from "react-router-dom";
import PartnersSliderOne from "../partners/partners-slider-one";

const FancyBannerTwo = () => {
  return (
    <div className="fancy-banner-two mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-one">
                <h2>
                  Verifica si tu cliente cuenta con cupo aprobado en nuestro
                  Programa de Financiamiento con aliados.
                </h2>
              </div>
              <p className="text-lg mt-40 lg-mt-30 mb-30">
                En caso afirmativo, aprovecha las ventajas del factoring online
                de manera sencilla.
              </p>
              <div className="d-inline-flex flex-wrap justify-content-center">
                <NavLink to="https://cfinancia-prod-clientes.cesionbnk.com" className="btn-four mt-10 me-2">
                  Regístrate
                </NavLink>
                <NavLink to="/contacto" className="btn-six mt-10 ms-2">
                  Contáctanos
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="partner-logo-one pt-60 md-pt-50">
              <p className="fw-500 text-dark mb-40">
                <span className="text-decoration-underline">Nuestros aliados</span>{" "}
                estratégicos{" "}
              </p>
              <PartnersSliderOne />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerTwo;

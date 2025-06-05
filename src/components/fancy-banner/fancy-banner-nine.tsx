import { NavLink } from "react-router-dom";

const FancyBannerNine = () => {
  return (
    <div className="fancy-banner-two mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-one">
                <h2>
                  ¿Listo para transformar tu flujo de efectivo? Hablemos.
                </h2>
              </div>
              <p className="text-lg mt-40 lg-mt-30 mb-30">
                Descubre cómo nuestro servicio de factoring puede ayudar a tu empresa a alcanzar sus objetivos de crecimiento.
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
      </div>
    </div>
  );
};

export default FancyBannerNine;

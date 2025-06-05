import { NavLink } from "react-router-dom";


const FancyBannerSix = () => {
  return (
    <div className="fancy-banner-six text-center position-relative pt-110 lg-pt-60 pb-110 lg-pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-9 m-auto">
            <h2 className="text-white fw-bold">
              Comienza anticipar el pago de tus facturas
            </h2>
            <p className="text-white text-xl pt-10 pb-20">
              Activa tu cuenta y comienza en minutos
            </p>
            <NavLink to="https://cfinancia-prod-clientes.cesionbnk.com/"
              className="btn-seventeen d-inline-flex align-items-center tran3s"
            >
              <span className="text">Regístrate Gratis</span>
              <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerSix;

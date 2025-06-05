import { NavLink } from "react-router-dom";

const TextFeatureOne = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <div className="text-feature-one mt-150 lg-mt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 wow fadeInLeft">
            <div className="title-one">
              <div className="upper-title">Factoring Electrónico</div>
              <h2>Financiamiento Online con Facturas Electrónicas</h2>
            </div>
            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
              Facilitamos el acceso instantáneo a capital para tu empresa a
              través de facturas electrónicas, simplificando y agilizando el
              proceso de financiamiento empresarial.
            </p>
            <div className="d-inline-flex flex-wrap align-items-center">
              <NavLink to="/contacto" className="btn-four mt-15 me-4">
                Más sobre nosotros
              </NavLink>
              <NavLink to="/contacto" className="btn-three icon-link mt-15">
                <span>Regístrate</span>
                <img
                  src="/assets/images/icon/icon_09.svg"
                  alt="icon"
                  className="lazy-img icon ms-1"
                />
              </NavLink>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 wow fadeInRight">
            <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
              <ul className="style-none">
                <li>Registra tu empresa y cargue sus facturas</li>
                <li>Selecciona y acepta una oferta</li>
                <li>Recibe el financiamiento</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureOne;

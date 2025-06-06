import { useState } from "react";
import { NavLink } from "react-router-dom";
import VideoPopup from "../common/video-popup";

const TextFeatureFive = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <div className="text-feature-five position-relative mt-150 lg-mt-80 pb-50">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-6 ms-auto d-flex flex-column order-lg-last">
              <div className="text-wrapper pt-50 pb-60 lg-pb-40 ps-3 ps-xxl-5 pe-3 pe-xxl-5">
                <div className="title-one">
                  <h2 className="text-dark">
                    Acceder a financiamiento rápido y seguro.
                  </h2>
                </div>
                <p className="text-lg text-dark mt-25 mb-35 lg-mb-30">
                  Acelera el crecimiento de tu empresa al recibir financiamiento
                  a través del factoring.
                </p>
                <ul className="style-none">
                  <li>Facturas desde 30 hasta 180 días</li>
                  <li>Negocia facturas desde 10 millones</li>
                  <li>Tasas flexibles y competitivas</li>
                  <li>100% digital</li>
                </ul>
                <NavLink
                  to="https://app.cesionbnk.com/cfinancia/vinculaciones"
                  className="btn-eleven d-inline-flex align-items-center mt-40"
                >
                  <span className="text">Comenzar ahora gratis</span>
                  <div className="icon tran3s rounded-circle d-flex align-items-center">
                    <img
                      src="/assets/images/icon/icon_27.svg"
                      alt="icon"
                      className="lazy-img"
                    />
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 d-flex order-lg-first">
              <div className="media-wrapper w-100 d-flex align-items-center justify-content-center position-relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureFive;

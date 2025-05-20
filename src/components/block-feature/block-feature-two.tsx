const BlockFeatureTwo = () => {
  return (
    <div className="block-feature-two mt-80">
      <div className="container">
        <div className="wrapper">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                <img
                  src="/assets/images/icon/icon_10.svg"
                  alt="icon"
                  className="lazy-img icon"
                />
                <h4 className="fw-bold mt-40 sm-mt-20 mb-20">Nuestra Misión</h4>
                <p>
                  Facilitar el acceso al capital y potenciar el crecimiento de
                  empresas en Colombia a través de soluciones de factoring
                  electrónico eficientes y ágiles.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="border-line h-100 ps-lg-5 pe-lg-5 ps-md-3 pe-md-3">
                <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                  <img
                    src="/assets/images/icon/icon_11.svg"
                    alt="icon"
                    className="lazy-img icon"
                  />
                  <h4 className="fw-bold mt-40 sm-mt-20 mb-20">
                    Nuestra visión de la empresa
                  </h4>
                  <p>
                    Convertirnos en la principal opción de empresas en busca de
                    soluciones financieras innovadoras en Colombia, liderando la
                    transformación fintech en la industria del factoring
                    electrónico.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ps-lg-5 sm-pb-30 sm-pt-30">
                <div className="numb fw-500">
                  <span className="counter">5</span>+
                </div>
                <p className="m0">
                  Años de experiencia
                  <br /> con orgullo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureTwo;

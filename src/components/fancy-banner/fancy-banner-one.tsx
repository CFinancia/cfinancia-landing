const FancyBannerOne = () => {
  return (
    <div className="fancy-banner-one position-relative pt-30 md-pt-20 pb-40 md-pb-20 bg-white">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="ps-xl-5 ps-md-4 pe-xxl-5 d-flex align-items-center justify-content-between">
            <div>
              <h3 className="fw-bold">Factoring</h3>
              <p className="text-md m0">Anticipo de facturas de tus clientes</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ps-xl-5 ps-md-4 pe-xxl-5 d-flex align-items-center justify-content-between">
            <div>
              <h3 className="fw-bold">Confirming</h3>
              <p className="text-md m0">
                Gestionar los pagos de tu empresa a sus proveedores
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerOne;

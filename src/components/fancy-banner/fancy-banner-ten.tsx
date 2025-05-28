import PartnersSliderOne from "../partners/partners-slider-one";

const FancyBannerTen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="partner-logo-one pt-60 md-pt-50">
            <p className="fw-500 text-dark mb-40">
              <span className="text-decoration-underline">
                Nuestros aliados
              </span>{" "}
              estratégicos{" "}
            </p>
            <PartnersSliderOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerTen;

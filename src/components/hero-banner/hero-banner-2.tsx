import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Calculator } from "../calculator";
import Slider from "react-slick";

// slider bg
const slider_bg = ["/assets/images/media/background.png"];
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 7000,
};

const HeroBannerTwo = () => {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    if (calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" });
      calculatorRef.current.classList.add("highlight-calculator");
      setTimeout(() => {
        calculatorRef.current?.classList.remove("highlight-calculator");
      }, 2000);
    }
  };

  return (
    <div className="hero-banner-one pt-160 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          </div>
        ))}
      </Slider>
      <section className="pt-5 pb-5 overflow-hidden">
        <div className="container">
          <div className="row align-items-center gy-5">
            <motion.div
              className="col-lg-5 z-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <div className="badge bg-lime-500 bg-opacity-10 fw-medium mb-3">
                  Financiamiento empresarial
                </div>
                <h1 className="display-5 fw-bold mb-3">
                  <div>Convierte tus</div>
                  <div>
                    facturas en <span className="text-lime-500">liquidez</span>
                  </div>
                  <div>inmediata</div>
                </h1>
                <p className="fs-5 text-muted mb-4">
                  Adelantamos hasta el{" "}
                  <span className="fw-semibold text-lime-500">90%</span> del
                  valor de tu factura en 24h. Sin deuda, sin garantías y con
                  tasas competitivas.
                </p>
              </motion.div>

              <motion.div
                className="d-flex flex-column flex-sm-row gap-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <button
                  className="btn btn-success bg-lime-500 d-flex align-items-center gap-2 px-4 py-2 animate__animated animate__pulse animate__infinite"
                  onClick={scrollToCalculator}
                  aria-label="Solicita tu anticipo y comienza a calcular tu financiamiento"
                >
                  Solicita tu anticipo
                  <ArrowRight size={16} />
                </button>
              </motion.div>

              <motion.div
                className="d-flex align-items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <p className="text-muted small mb-0">
                  <span className="text-lime-500 fw-semibold">+100</span>{" "}
                  empresas confían en nosotros
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-lg-7 position-relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              ref={calculatorRef}
              id="calculator-section"
            >
              <div className="position-relative bg-white rounded-4 shadow p-4">
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "0.8rem",
                    background: "linear-gradient(to right, #a3e635, #10b981)",
                    borderRadius: "0px 0px 15px 15px",
                  }}
                ></div>
                <div className="pt-4">
                  <Calculator />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBannerTwo;

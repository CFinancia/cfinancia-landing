import { motion } from "framer-motion";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import DispapelesForm from "./dispapeles-form";

const slider_bg = ["/assets/images/media/background.png"];

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

const AllianceHeader = () => (
  <header style={{ background: "#ffffff", borderBottom: "1px solid #e5e7eb", padding: "14px 0", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
    <div className="container d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/assets/images/logo/logo-dispapeles-light.jpeg"
          alt="Dispapeles"
          style={{ height: "40px", objectFit: "contain" }}
        />
        <span style={{ color: "#9ca3af", fontSize: "1.2rem", fontWeight: 300 }}></span>
        <img
          src="https://public.cesionbnk.com/static/logo/LogoCFinancia.png"
          alt="C-Financia"
          style={{ height: "30px", objectFit: "contain" }}
        />
      </div>
      <a
        href="#dispapeles-form"
        className="btn btn-sm fw-bold px-3 py-2 rounded-3 d-none d-md-inline-block"
        style={{ backgroundColor: "#a3e635", color: "#020617", border: "none" }}
      >
        Solicitar contacto
      </a>
    </div>
  </header>
);

const AllianceFooter = () => (
  <footer style={{ background: "#020617", padding: "32px 0" }}>
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/assets/images/logo/logo-dispapeles-dark.png"
            alt="Dispapeles"
            style={{ height: "26px", objectFit: "contain" }}
          />
          <img
            src="https://public.cesionbnk.com/static/logo/LogoCFinanciaBlanco.png"
            alt="C-Financia"
            style={{ height: "18px", objectFit: "contain" }}
          />
        </div>
        <p className="mb-0 small" style={{ color: "#6b7280" }}>
          © {new Date().getFullYear()} C-Financia. Alianza Estratégica con Dispapeles.
        </p>
      </div>
    </div>
  </footer>
);

export default function DispapelesPage() {
  return (
    <>
      <Helmet>
        <title>Alianza Dispapeles & C-Financia | Liquidez Inmediata</title>
        <meta name="description" content="Como proveedor de Dispapeles accede a liquidez inmediata anticipando el cobro de tus facturas con C-Financia." />
      </Helmet>

      <div className="main-page-wrapper">
        <AllianceHeader />

        <main style={{ paddingTop: "72px" }}>
          {/* Hero Banner */}
          <div className="hero-banner-one pt-60 pb-100 lg-pb-100 position-relative" style={{ backgroundColor: "#ffffff" }}>
            <Slider {...slider_setting} className="hero-slider-one m0">
              {slider_bg.map((bg, i) => (
                <div className="item m0" key={i}>
                  <div className="hero-img" style={{ backgroundImage: `url(${bg})` }}></div>
                </div>
              ))}
            </Slider>

            <section className="pt-5 pb-5 overflow-hidden w-100 position-relative" style={{ zIndex: 2 }}>
              <div className="container">
                <div className="row gy-5 align-items-center">
                  <motion.div
                    className="col-lg-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                    >
                      <div className="badge fw-medium mb-3 text-dark px-3 py-2 rounded-pill" style={{ backgroundColor: "#a3e635" }}>
                        Alianza Estratégica
                      </div>

                      <h1 className="display-4 fw-bold mb-4 text-dark">
                        Convierte tus <span style={{ color: "#a3e635" }}>Facturas de Venta</span> en liquidez inmediata.
                      </h1>

                      <p className="fs-5 mb-5 text-muted" style={{ opacity: 0.9, lineHeight: "1.6" }}>
                        Como usuario de <strong className="text-dark">Dispapeles</strong>, ahora puedes acceder a liquidez sin endeudarte, sin afectar tu capacidad crediticia y con un proceso 100% digital integrado a tu facturación electrónica.
                      </p>

                      <ul className="list-unstyled mb-4 d-flex flex-column gap-3 text-dark">
                        {[
                          <>Adelanta hasta el <strong className="text-dark">90% en 24h</strong></>,
                          "Sin afectar tus cupos bancarios (no es un crédito)",
                          "Aprobación inmediata",
                        ].map((item, i) => (
                          <li key={i} className="d-flex align-items-center gap-3">
                            <span className="d-flex justify-content-center align-items-center rounded-circle" style={{ width: "32px", height: "32px", backgroundColor: "#a3e635", color: "#000", flexShrink: 0 }}>
                              <i className="bi bi-check-lg fw-bold"></i>
                            </span>
                            <span className="fs-5 text-muted">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="d-flex flex-wrap gap-3 mb-5">
                        <a
                          className="btn fw-bold px-4 py-3 rounded-3"
                          href="#dispapeles-form"
                          style={{ backgroundColor: "#a3e635", color: "#020617", boxShadow: "0 4px 15px rgba(163,230,53,0.3)" }}
                        >
                          Quiero anticipar mis facturas
                        </a>
                        <a className="btn btn-outline-dark fw-bold px-4 py-3 rounded-3" href="#requisitos-dispapeles">
                          Ver requisitos
                        </a>
                      </div>

                      <div className="d-flex flex-wrap gap-3 align-items-center">
                        {["100% digital", "Sin costos ocultos", "Respuesta en 24h"].map((item) => (
                          <span key={item} className="px-3 py-2 rounded-pill text-dark small fw-medium" style={{ backgroundColor: "#f1f5f9", border: "1px solid #e2e8f0" }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="col-lg-5 offset-lg-1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <DispapelesForm />
                  </motion.div>
                </div>
              </div>
            </section>
          </div>

          {/* How it works */}
          <section className="pt-80 pb-120" style={{ backgroundColor: "#f8fafc" }}>
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-7 text-center">
                  <span className="badge rounded-pill px-3 py-2 text-dark" style={{ backgroundColor: "#a3e635" }}>
                    Proceso simple
                  </span>
                  <h2 className="mt-3 mb-3 fw-bold text-dark">Cómo funciona la alianza con Dispapeles</h2>
                  <p className="text-muted mb-0">
                    En menos de un día puedes convertir tus facturas en liquidez y seguir operando sin fricciones.
                  </p>
                </div>
              </div>

              <div className="row gy-4">
                {[
                  { title: "Envía tu factura", text: "Selecciona las facturas emitidas en Dispapeles y compártenos los datos básicos.", icon: "bi-file-earmark-check" },
                  { title: "Evaluación rápida", text: "Validamos la factura y aprobamos el anticipo en horas, no en días.", icon: "bi-lightning-charge" },
                  { title: "Recibe el anticipo", text: "Te transferimos hasta el 90% y sigues operando sin endeudarte.", icon: "bi-cash-coin" },
                ].map((step, idx) => (
                  <div className="col-md-4" key={step.title}>
                    <div className="h-100 p-4 rounded-4 bg-white shadow-sm">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: "44px", height: "44px", backgroundColor: "#a3e635", color: "#111" }}>
                          <i className={`bi ${step.icon} fs-5`}></i>
                        </span>
                        <span className="text-muted fw-medium">Paso {idx + 1}</span>
                      </div>
                      <h5 className="fw-bold text-dark">{step.title}</h5>
                      <p className="text-muted mb-0">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div id="requisitos-dispapeles" className="row align-items-center mt-5 gy-4">
                <div className="col-lg-6">
                  <h3 className="fw-bold text-dark mb-3">Requisitos básicos</h3>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {[
                      "Ser usuario activo de Dispapeles con facturación electrónica.",
                      "Facturas emitidas a clientes con buen historial de pago.",
                      "Cuenta bancaria empresarial para el desembolso.",
                    ].map((item) => (
                      <li key={item} className="d-flex align-items-start gap-3">
                        <span className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "28px", height: "28px", backgroundColor: "#a3e635", color: "#111", flexShrink: 0 }}>
                          <i className="bi bi-check"></i>
                        </span>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="p-4 rounded-4 h-100" style={{ backgroundColor: "#0f172a" }}>
                    <h4 className="fw-bold text-white mb-2">Acompañamiento real</h4>
                    <p className="text-white-50 mb-4">
                      Un asesor te guía en todo el proceso y te explica las condiciones antes de aceptar.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                      {["Sin letras pequeñas", "Sin cobros sorpresa", "Atención personalizada"].map((item) => (
                        <span key={item} className="px-3 py-2 rounded-pill small fw-medium" style={{ backgroundColor: "rgba(163,230,53,0.15)", color: "#e2e8f0", border: "1px solid rgba(163,230,53,0.35)" }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <AllianceFooter />
      </div>
    </>
  );
}

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { Calculator } from "../calculator"

const HeroBannerTwo = () => {
  const calculatorRef = useRef<HTMLDivElement>(null)

  const scrollToCalculator = () => {
    if (calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" })
      calculatorRef.current.classList.add("highlight-calculator")
      setTimeout(() => {
        calculatorRef.current?.classList.remove("highlight-calculator")
      }, 2000)
    }
  }

  return (
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
              <div className="badge text-bg-success bg-opacity-10 text-success fw-medium mb-3">
                Financiamiento empresarial
              </div>
              <h1 className="display-5 fw-bold mb-3">
                <div>Convierte tus</div>
                <div>
                  facturas en <span className="text-success">liquidez</span>
                </div>
                <div>inmediata</div>
              </h1>
              <p className="fs-5 text-muted mb-4">
                Adelantamos hasta el{" "}
                <span className="fw-semibold text-success">90%</span> del valor de tu factura en 24h. Sin deuda, sin
                garantías y con tasas competitivas.
              </p>
            </motion.div>

            <motion.div
              className="d-flex flex-column flex-sm-row gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button
                className="btn btn-success d-flex align-items-center gap-2 px-4 py-2 animate__animated animate__pulse animate__infinite"
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
              <div className="d-flex">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="rounded-circle bg-white border border-success-subtle text-success d-flex align-items-center justify-content-center me-n2"
                    style={{
                      width: "40px",
                      height: "40px",
                      fontSize: "12px",
                      boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.075)",
                    }}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-muted small mb-0">
                <span className="text-success fw-semibold">+1,500</span> empresas confían en nosotros
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
            <div className="position-relative">
              <div
                className="position-absolute rounded-circle bg-success bg-opacity-25"
                style={{
                  width: "10rem",
                  height: "10rem",
                  top: "-2.5rem",
                  left: "-2.5rem",
                  filter: "blur(60px)",
                }}
              ></div>
              <div
                className="position-absolute rounded-circle bg-info bg-opacity-25"
                style={{
                  width: "10rem",
                  height: "10rem",
                  bottom: "-2.5rem",
                  right: "-2.5rem",
                  filter: "blur(60px)",
                }}
              ></div>

              <div className="position-relative bg-white rounded-4 shadow p-4 border border-light">
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{ height: "0.5rem", background: "linear-gradient(to right, #a3e635, #10b981)" }}
                ></div>
                <div className="pt-4">
                  <Calculator />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroBannerTwo
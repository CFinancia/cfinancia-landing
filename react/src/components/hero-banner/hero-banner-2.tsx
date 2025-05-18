import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { Calculator } from "../calculator"

const HeroBannerTwo = () => {
  const calculatorRef = useRef<HTMLDivElement>(null)

  const scrollToCalculator = () => {
    if (calculatorRef.current) {
      calculatorRef.current.scrollIntoView({ behavior: "smooth" })

      // Add highlight effect
      calculatorRef.current.classList.add("highlight-calculator")
      setTimeout(() => {
        calculatorRef.current?.classList.remove("highlight-calculator")
      }, 2000)
    }
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-5/12 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div className="inline-block px-4 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium mb-6">
                Financiamiento empresarial
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">Convierte tus</span>
                <span className="block">
                  facturas en <span className="text-lime-500">liquidez</span>
                </span>
                <span className="block">inmediata</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Adelantamos hasta el <span className="font-semibold text-lime-600">90%</span> del valor de tu factura en
                24h. Sin deuda, sin garantías y con tasas competitivas.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <button
                className="group bg-lime-500 hover:bg-lime-600 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-lg shadow-lime-200/50 flex items-center gap-2 animate-pulse-subtle"
                onClick={scrollToCalculator}
                aria-label="Solicita tu anticipo y comienza a calcular tu financiamiento"
              >
                Solicita tu anticipo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white border-2 border-lime-100 flex items-center justify-center text-xs font-medium text-lime-600 shadow-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                <span className="text-lime-600 font-semibold">+1,500</span> empresas confían en nosotros
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-7/12 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            ref={calculatorRef}
            id="calculator-section"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl shadow-lime-100/50 overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-lime-400 to-emerald-500"></div>
                <div className="p-8">
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

export default HeroBannerTwo;


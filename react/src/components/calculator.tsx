"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalculatorIcon, Clock, DollarSign, Percent, ArrowLeft, ArrowRight, Mail, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const TASA_ANUAL = 0.022 // 2.2% efectivo anual
const PORCENTAJE_FINANCIAMIENTO = 0.9 // 90%

export function Calculator() {
  const [valorFactura, setValorFactura] = useState<number>(0)
  const [valorFacturaFormatted, setValorFacturaFormatted] = useState<string>("")
  const [plazoPago, setPlazoPago] = useState<number>(30)
  const [pagador, setPagador] = useState<string>("")
  const [valorAnticipo, setValorAnticipo] = useState<number>(0)
  const [descuentoEstimado, setDescuentoEstimado] = useState<number>(0)
  const [tasaMensual, setTasaMensual] = useState<number>(0)
  const [showResults, setShowResults] = useState<boolean>(false)
  const [activeStep, setActiveStep] = useState<number>(1)
  const [email, setEmail] = useState<string>("")
  const [emailError, setEmailError] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)

  const calculatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (valorFactura > 0) {
      calcularValores()
    }
  }, [valorFactura, plazoPago, pagador])

  const calcularValores = () => {
    // Convertir tasa anual a tasa para el período específico
    const tasaPeriodo = TASA_ANUAL * (plazoPago / 365)

    // Calcular descuento
    const descuento = valorFactura * tasaPeriodo
    setDescuentoEstimado(descuento)

    // Calcular anticipo (90% del valor de la factura)
    const anticipo = valorFactura * PORCENTAJE_FINANCIAMIENTO
    setValorAnticipo(anticipo - descuento)

    // Calcular tasa mensual equivalente
    const tasaMensualEquivalente = Math.pow(1 + TASA_ANUAL, 30 / 365) - 1
    setTasaMensual(tasaMensualEquivalente)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: string) => {
    // Eliminar caracteres no numéricos
    const numericValue = value.replace(/\D/g, "")

    // Convertir a número para almacenar en el estado
    const numValue = numericValue ? Number.parseInt(numericValue, 10) : 0
    setValorFactura(numValue)

    // Formatear con separadores de miles
    if (numericValue) {
      return new Intl.NumberFormat("es-CO", {
        style: "decimal",
        maximumFractionDigits: 0,
      }).format(numValue)
    }
    return ""
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value)
    setValorFacturaFormatted(formatted)
  }

  const handleCalculate = () => {
    if (valorFactura > 0) {
      setShowResults(true)
    }
  }

  const nextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1)
    } else {
      handleCalculate()
    }
  }

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1)
    }
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmitFinanciamiento = () => {
    setShowModal(true)
  }

  const handleContinueOnboarding = () => {
    setShowModal(false)
    // Aquí iría la lógica para continuar con el proceso de onboarding
    alert("Redirigiendo al proceso de onboarding...")
  }

  // Stepper de la versión 6
  const renderStepper = () => {
    return (
      <div className="flex justify-between mb-8 px-2">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                activeStep === step
                  ? "bg-lime-500 text-white"
                  : activeStep > step
                    ? "bg-lime-100 text-lime-700"
                    : "bg-gray-100 text-gray-400"
              }`}
            >
              {step}
            </div>
            <div
              className={`text-xs mt-1 ${
                activeStep === step
                  ? "text-lime-600 font-medium"
                  : activeStep > step
                    ? "text-gray-600"
                    : "text-gray-400"
              }`}
            >
              {step === 1 ? "Monto" : step === 2 ? "Plazo" : step === 3 ? "Pagador" : "Contacto"}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto" ref={calculatorRef}>
      <div className="p-8 bg-white rounded-3xl shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lime-500 rounded-xl flex items-center justify-center text-white shadow-md">
              <CalculatorIcon className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Calculadora de liquidez</h2>
          </div>
        </div>

        {!showResults ? (
          <div>
            {renderStepper()}

            <AnimatePresence mode="wait">
              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <Label htmlFor="valorFactura" className="text-gray-700 mb-2 block text-lg font-medium">
                      ¿Cuál es el valor de tu factura?
                    </Label>
                    <div className="relative mt-2">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lime-500 w-5 h-5" />
                      <Input
                        id="valorFactura"
                        type="text"
                        placeholder="Ingresa el monto total"
                        value={valorFacturaFormatted}
                        onChange={handleInputChange}
                        className="bg-white border-gray-200 text-gray-900 pl-12 placeholder:text-gray-400 focus-visible:ring-lime-500 rounded-xl h-14 shadow-sm text-lg"
                        aria-label="Valor de la factura"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <Label className="text-gray-700 mb-4 block text-lg font-medium">
                      ¿Cuál es el plazo promedio de pago?
                    </Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {[30, 60, 90, 120].map((dias) => (
                        <Button
                          key={dias}
                          type="button"
                          variant={plazoPago === dias ? "default" : "outline"}
                          className={
                            plazoPago === dias
                              ? "bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white rounded-xl h-20"
                              : "border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl h-20 shadow-sm"
                          }
                          onClick={() => setPlazoPago(dias)}
                          aria-label={`${dias} días`}
                        >
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold">{dias === 120 ? `≥${dias}` : dias}</span>
                            <span className="text-sm">Días</span>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <Label htmlFor="pagador" className="text-gray-700 mb-2 block text-lg font-medium">
                      ¿Quién es el pagador de la factura?
                    </Label>
                    <select
                      id="pagador"
                      className="flex h-14 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-lg text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-sm mt-2"
                      value={pagador}
                      onChange={(e) => setPagador(e.target.value)}
                      aria-label="Pagador de la factura"
                    >
                      <option value="">Selecciona un cliente</option>
                      {[
                        { id: "ecopetrol", nombre: "Ecopetrol" },
                        { id: "d1", nombre: "D1" },
                        { id: "tecnoquimicas", nombre: "Tecnoquímicas" },
                        { id: "colsubsidio", nombre: "Colsubsidio" },
                      ].map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.nombre}
                        </option>
                      ))}
                    </select>

                    <div className="mt-6">
                      <Label className="text-gray-700 mb-2 block font-medium">Clientes populares:</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[
                          { id: "ecopetrol", nombre: "Ecopetrol" },
                          { id: "d1", nombre: "D1" },
                          { id: "tecnoquimicas", nombre: "Tecnoquímicas" },
                          { id: "colsubsidio", nombre: "Colsubsidio" },
                        ].map((p) => (
                          <Button
                            key={p.id}
                            type="button"
                            variant="outline"
                            className={`
                              ${
                                pagador === p.id
                                  ? "bg-lime-50 border-lime-300 text-lime-700"
                                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                              } 
                              rounded-xl shadow-sm
                            `}
                            onClick={() => setPagador(p.id)}
                            aria-label={p.nombre}
                          >
                            {p.nombre}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8">
                    <Label htmlFor="email" className="text-gray-700 mb-2 block text-lg font-medium">
                      ¿A qué correo enviamos tu cotización?
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lime-500 w-5 h-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="nombre@empresa.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setEmailError("")
                        }}
                        className="bg-white border-gray-200 text-gray-900 pl-12 placeholder:text-gray-400 focus-visible:ring-lime-500 rounded-xl h-14 shadow-sm"
                        aria-label="Correo electrónico"
                      />
                    </div>
                    {emailError && <p className="mt-2 text-sm text-red-600">{emailError}</p>}
                    <p className="mt-3 text-sm text-gray-500">
                      Tus datos están seguros. No compartiremos tu información con terceros.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {activeStep > 1 ? (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl shadow-sm flex items-center gap-2"
                  aria-label="Anterior"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Anterior
                </Button>
              ) : (
                <div></div>
              )}
              <Button
                onClick={nextStep}
                className="bg-lime-500 hover:bg-lime-600 text-white rounded-xl shadow-md shadow-lime-200/50 flex items-center gap-2"
                aria-label={activeStep === 4 ? "Calcular" : "Siguiente"}
                disabled={activeStep === 4 && !validateEmail(email)}
              >
                {activeStep === 4 ? "Calcular" : "Siguiente"}
                {activeStep !== 4 && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="bg-lime-500 px-6 py-4 text-white rounded-t-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Resultados</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-lime-600/20 text-xs"
                  onClick={() => setShowResults(false)}
                  aria-label="Editar"
                >
                  Editar
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-6 border border-gray-100 border-t-0 rounded-b-xl">
              <div className="bg-lime-50 rounded-xl p-5 border border-lime-100">
                <div className="text-sm text-lime-700 mb-1 font-medium">
                  Te anticipamos el 90% del valor de tu factura
                </div>
                <div className="text-3xl font-bold text-lime-600">{formatCurrency(valorAnticipo)}</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-lime-500 rounded-xl flex items-center justify-center text-white shadow-sm">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1 font-medium">Descuento</div>
                  <div className="text-xl font-bold text-gray-900">{formatCurrency(descuentoEstimado)}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-sm">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Tasa de descuento</div>
                  <div className="text-gray-900 font-bold">{(tasaMensual * 100).toFixed(1)}% mensual</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="w-10 h-10 bg-lime-500 rounded-xl flex items-center justify-center text-white shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Tiempo de desembolso</div>
                  <div className="text-gray-900 font-bold">24 horas</div>
                </div>
              </div>

              <div className="text-gray-500 text-sm bg-lime-50 p-4 rounded-lg border border-lime-100">
                Cuando recibamos el pago de tu factura, descontamos los intereses de los días y te devolvemos el
                remanente.
              </div>

              <Button
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-xl h-12 shadow-md shadow-lime-200/50"
                onClick={handleSubmitFinanciamiento}
                aria-label="Solicitar financiamiento"
              >
                Solicitar financiamiento
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Modal de confirmación */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Solicitud Recibida</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-6">
            <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-lime-600" />
            </div>
            <p className="text-center text-gray-700">
              Alguien del equipo comercial se estará contactando con usted próximamente.
            </p>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button
              type="button"
              className="bg-lime-500 hover:bg-lime-600 text-white"
              onClick={handleContinueOnboarding}
            >
              Continuar con el proceso de onboarding
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalculatorIcon,
  Clock,
  DollarSign,
  Percent,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { Modal } from "react-bootstrap";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const TASA_ANUAL = 0.022; // 2.2% efectivo anual
const PORCENTAJE_FINANCIAMIENTO = 0.9; // 90%

export function Calculator() {
  const [valorFactura, setValorFactura] = useState<number>(0);
  const [valorFacturaFormatted, setValorFacturaFormatted] =
    useState<string>("");
  const [plazoPago, setPlazoPago] = useState<number>(30);
  const [pagador, setPagador] = useState<string>("");
  const [valorAnticipo, setValorAnticipo] = useState<number>(0);
  const [descuentoEstimado, setDescuentoEstimado] = useState<number>(0);
  const [tasaMensual, setTasaMensual] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const calculatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (valorFactura > 0) {
      calcularValores();
    }
  }, [valorFactura, plazoPago, pagador]);

  const calcularValores = () => {
    const tasaPeriodo = TASA_ANUAL * (plazoPago / 365);
    const descuento = valorFactura * tasaPeriodo;
    setDescuentoEstimado(descuento);
    const anticipo = valorFactura * PORCENTAJE_FINANCIAMIENTO;
    setValorAnticipo(anticipo - descuento);
    const tasaMensualEquivalente = Math.pow(1 + TASA_ANUAL, 30 / 365) - 1;
    setTasaMensual(tasaMensualEquivalente);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    const numValue = numericValue ? Number.parseInt(numericValue, 10) : 0;
    setValorFactura(numValue);
    if (numericValue) {
      return new Intl.NumberFormat("es-CO", {
        style: "decimal",
        maximumFractionDigits: 0,
      }).format(numValue);
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setValorFacturaFormatted(formatted);
  };

  const handleCalculate = () => {
    if (valorFactura > 0) {
      setShowResults(true);
    }
  };

  const nextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      handleCalculate();
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleContinueOnboarding = () => {
    setShowModal(false);
    alert("Redirigiendo al proceso de onboarding...");
  };

  const renderStepper = () => {
    return (
      <div className="d-flex justify-content-between mb-4 px-2">
        {[1, 2, 3].map((step) => (
          <>
            <div key={step} className="d-flex flex-column align-items-center">
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center fw-medium text-white ${
                  activeStep === step
                    ? "bg-lime-500"
                    : activeStep > step
                    ? "bg-light text-lime-500"
                    : "bg-secondary text-light"
                }`}
                style={{ width: "2rem", height: "2rem", fontSize: "0.875rem" }}
              >
                {step}
              </div>
              <div
                className={`mt-1 small ${
                  activeStep === step
                    ? "text-lime-500 fw-bold"
                    : activeStep > step
                    ? "text-secondary"
                    : "text-muted"
                }`}
              >
                {step === 1 ? "Monto" : step === 2 ? "Plazo" : "Pagador"}
              </div>
            </div>
            <div className="bs-stepper-line"></div>
          </>
        ))}
      </div>
    );
  };

  return (
    <div className="container" ref={calculatorRef}>
      <div className="p-4 bg-white rounded shadow">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2">
            <div
              className="d-flex align-items-center justify-content-center bg-lime-500 text-white rounded"
              style={{ width: "2.5rem", height: "2.5rem" }}
            >
              <CalculatorIcon size={20} />
            </div>
            <h2 className="h5 text-dark mb-0">Calculadora de liquidez</h2>
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
                  <div className="mb-4">
                    <Label
                      htmlFor="valorFactura"
                      className="form-label text-dark"
                    >
                      ¿Cuál es el valor de tu factura?
                    </Label>
                    <div className="position-relative mt-2">
                      <DollarSign
                        className="position-absolute start-0 top-50 translate-middle-y text-lime-500"
                        style={{ left: "1rem" }}
                        size={20}
                      />
                      <Input
                        id="valorFactura"
                        type="text"
                        placeholder="Ingresa el monto total"
                        value={valorFacturaFormatted}
                        onChange={handleInputChange}
                        className="form-control ps-5"
                        aria-label="Valor de la factura"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Otros pasos van aquí... */}
              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <label className="form-label text-dark fw-medium fs-5 mb-3">
                      ¿Cuál es el plazo promedio de pago?
                    </label>
                    <div className="row g-3">
                      {[30, 60, 90, 120].map((dias) => (
                        <div className="col-3" key={dias}>
                          <button
                            type="button"
                            className={`btn w-100 py-2 ${
                              plazoPago === dias
                                ? "btn-success bg-lime-500 text-white"
                                : "btn-outline-secondary"
                            }`}
                            onClick={() => setPlazoPago(dias)}
                            aria-label={`${dias} días`}
                          >
                            <div className="d-flex flex-column align-items-center">
                              <span className="fs-4 fw-bold">
                                {dias === 120 ? `≥${dias}` : dias}
                              </span>
                              <span className="fs-6">Días</span>
                            </div>
                          </button>
                        </div>
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
                  <div className="mb-4">
                    <label
                      htmlFor="pagador"
                      className="form-label text-dark fw-medium fs-5 mb-2"
                    >
                      ¿Quién es el pagador de la factura?
                    </label>
                    <select
                      id="pagador"
                      className="form-select form-select-lg"
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

                    <div className="mt-4">
                      <label className="form-label text-dark fw-medium">
                        Clientes populares:
                      </label>
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {[
                          { id: "ecopetrol", nombre: "Ecopetrol" },
                          { id: "d1", nombre: "D1" },
                          { id: "tecnoquimicas", nombre: "Tecnoquímicas" },
                          { id: "colsubsidio", nombre: "Colsubsidio" },
                        ].map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            className={`btn btn-outline-secondary ${
                              pagador === p.id
                                ? "active bg-light border-success text-lime-500"
                                : ""
                            }`}
                            onClick={() => setPagador(p.id)}
                            aria-label={p.nombre}
                          >
                            {p.nombre}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* {activeStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="form-label text-dark fw-medium fs-5 mb-2"
                    >
                      ¿A qué correo enviamos tu cotización?
                    </label>
                    <div className="position-relative mt-2">
                      <i className="bi bi-envelope-fill position-absolute top-50 start-0 translate-middle-y text-lime-500 ps-3"></i>
                      <input
                        id="email"
                        type="email"
                        className="form-control form-control-lg ps-5"
                        placeholder="nombre@empresa.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError("");
                        }}
                        aria-label="Correo electrónico"
                      />
                    </div>
                    {emailError && (
                      <p className="mt-2 text-danger small">{emailError}</p>
                    )}
                    <p className="mt-3 text-muted small">
                      Tus datos están seguros. No compartiremos tu información
                      con terceros.
                    </p>
                  </div>
                </motion.div>
              )} */}
            </AnimatePresence>

            <div className="d-flex justify-content-between mt-4">
              {activeStep > 1 ? (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="btn btn-success bg-background text-gray-700 d-flex align-items-center gap-2"
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
                variant={"outline"}
                className="btn btn-success bg-lime-500 d-flex align-items-center "
                aria-label={activeStep === 3 ? "Calcular" : "Siguiente"}
                disabled={activeStep === 3 && pagador == ""}
              >
                {activeStep === 3 ? "Ver cotización" : "Siguiente"}
                {activeStep !== 3 && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-lime-500 px-4 py-3 text-white rounded-top">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="h6 fw-bold mb-0 text-white">Cotización</h3>
                <button
                  type="button"
                  className="btn btn-sm btn-link text-white text-decoration-none"
                  onClick={() => setShowResults(false)}
                  aria-label="Editar"
                >
                  Editar
                </button>
              </div>
            </div>

            <div className="p-4 border border-light border-top-0 rounded-bottom">
              <div className="bg-lime-50 rounded-xl p-3 gap-3 border border-lime-1003 mb-3">
                <div className="text-lime-500 fw-medium small mb-1">
                  De tu factura de ${valorFacturaFormatted} te anticipamos el
                  90%:
                </div>
                <div className="h2 fw-bold text-lime-500 mb-0">
                  {formatCurrency(valorAnticipo)}
                </div>
              </div>

              <div className="bg-light rounded p-3 border border-light d-flex align-items-center gap-3 mb-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-lime-500 text-white rounded shadow-sm"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <div className="small text-muted fw-medium mb-1">
                    Tasa de descuento estimada *
                  </div>
                  <div className="fw-bold text-dark">
                    {(tasaMensual * 100).toFixed(1)}% mensual
                  </div>
                </div>
              </div>

              <div className="bg-light rounded p-3 border border-light d-flex align-items-center gap-3 mb-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-success text-white rounded shadow-sm"
                  style={{ width: "40px", height: "40px" }}
                >
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <div className="small text-muted mb-1 fw-medium">
                    Descuento estimado ({plazoPago} días)
                  </div>
                  <div className="h5 fw-bold text-dark">
                    {formatCurrency(descuentoEstimado)}
                  </div>
                </div>
              </div>

              <div className="bg-light rounded p-3 border border-light d-flex align-items-center gap-3 mb-3">
                <div
                  className="d-flex align-items-center justify-content-center bg-lime-500 text-white rounded shadow-sm"
                  style={{ width: "40px", height: "40px" }}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="small text-muted fw-medium mb-1">
                    Tiempo de desembolso
                  </div>
                  <div className="fw-bold text-dark">24 horas</div>
                </div>
              </div>

              <div className="text-muted small bg-success bg-opacity-10 p-3 rounded border border-success border-opacity-25 mb-4">
                Cuando recibamos el pago de tu factura, descontamos los
                intereses de los días y te devolvemos el remanente.
                <p className="pt-2 mb-0">*La tasa puede variar.</p>
              </div>

              <div className="d-flex justify-content-between">
                <div className="position-relative me-2">
                  <i className="bi bi-envelope-fill position-absolute top-50 start-0 translate-middle-y text-lime-500 ps-3"></i>
                  <input
                    id="email"
                    type="email"
                    className="form-control form-control-lg ps-5"
                    placeholder="Tu correo corporativo"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    aria-label="Correo electrónico"
                  />
                </div>
                {emailError && (
                  <p className="mt-2 text-danger small">{emailError}</p>
                )}

                <button
                  className="btn btn-success bg-lime-500 shadow"
                  onClick={() => {
                    window.location.href =
                      "https://cfinancia-prod-clientes.cesionbnk.com";
                  }}
                  aria-label="Solicitar financiamiento"
                >
                  Solicitar financiamiento
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* Modal de confirmación */}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            Solicitud Recibida
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex flex-column align-items-center py-4">
            <div
              className="d-flex align-items-center justify-content-center bg-lime-50 bg-opacity-25 rounded-circle mb-3"
              style={{ width: "64px", height: "64px" }}
            >
              <CheckCircle
                className="text-lime-500"
                style={{ width: "32px", height: "32px" }}
              />
            </div>
            <p className="text-center text-muted mb-0">
              Alguien del equipo comercial se estará contactando con usted
              próximamente.
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          <button
            className="btn bg-lime-500 w-100 text-white shadow"
            style={{ height: "48px" }}
            onClick={handleContinueOnboarding}
          >
            Continuar con el proceso de onboarding
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

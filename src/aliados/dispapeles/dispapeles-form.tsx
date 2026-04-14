import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from './err-msg';

type FormData = {
  name: string;
  company: string;
  nit: string;
  email: string;
  phone: string;
};

const schema = yup.object().shape({
  name: yup.string().required("El nombre es requerido").label("Name"),
  company: yup.string().required("La empresa es requerida").label("Company"),
  nit: yup.string().required("El NIT es requerido").label("NIT"),
  email: yup.string().required("El email es requerido").email("Email inválido").label("Email"),
  phone: yup.string().required("El teléfono es requerido").label("Phone"),
});

const DispapelesForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await fetch(
        "https://hwwqudd0fa.execute-api.us-east-1.amazonaws.com/Prod/sistema/envieCorreoLanding",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tenantId: "265a0493-740a-11ee-a243-12a5defed043",
            nombre: data.name,
            empresa: data.company,
            nit: data.nit,
            correo: data.email,
            telefono: data.phone,
            origen: "alianza-dispapeles",
          }),
        }
      );
    } catch (err) {
      console.error("Error al enviar el correo:", err);
    }
    setSubmitted(true);
    reset();
  });

  if (submitted) {
    return (
      <div className="form-wrapper bg-white shadow-lg rounded-4 p-4 p-md-5 position-relative">
        <div className="position-absolute top-0 start-0 w-100" style={{ height: '5px', background: 'linear-gradient(90deg, #a3e635, #10b981)', borderRadius: '15px 15px 0 0' }}></div>
        <div className="d-flex flex-column align-items-center justify-content-center text-center py-5">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle mb-4"
            style={{ width: '72px', height: '72px', backgroundColor: '#a3e635' }}
          >
            <i className="bi bi-check-lg" style={{ fontSize: '2rem', color: '#020617' }}></i>
          </div>
          <h3 className="fw-bold text-dark mb-3">¡Solicitud enviada!</h3>
          <p className="text-muted mb-4" style={{ maxWidth: '340px', lineHeight: '1.6' }}>
            Pronto uno de nuestros comerciales se contactará contigo para ayudarte a anticipar tus facturas.
          </p>
          <button
            type="button"
            className="btn fw-bold px-4 py-2 rounded-3"
            style={{
              backgroundColor: '#a3e635',
              color: '#020617',
              border: 'none',
              boxShadow: '0 4px 15px rgba(163,230,53,0.3)',
            }}
            onClick={() => setSubmitted(false)}
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrapper bg-white shadow-lg rounded-4 p-4 p-md-5 position-relative">
      <div className="position-absolute top-0 start-0 w-100" style={{ height: '5px', background: 'linear-gradient(90deg, #a3e635, #10b981)', borderRadius: '15px 15px 0 0' }}></div>
      <h3 className="mb-4 text-center fw-bold text-dark">
        Anticipa el Pago de tus Facturas
      </h3>
      <p className="text-center text-muted mb-4">
        Completa este breve formulario y un asesor se comunicará contigo.
      </p>
      <form id="dispapeles-form" onSubmit={onSubmit}>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-4">
              <label className="fw-medium mb-1 text-dark" htmlFor="name" style={{ fontSize: '0.9rem' }}>Nombre Completo*</label>
              <input
                type="text"
                className="form-control shadow-none transition-all py-3 bg-light border-0"
                style={{ borderRadius: '10px' }}
                placeholder="Ingresa tu nombre"
                autoComplete="name"
                {...register("name")} id='name'
              />
              <div className="help-block with-errors mt-1 text-danger">
                {errors.name && <ErrorMsg msg={errors.name.message as string} />}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group-meta form-group mb-4">
              <label className="fw-medium mb-1 text-dark" htmlFor="company" style={{ fontSize: '0.9rem' }}>Empresa*</label>
              <input
                type="text"
                className="form-control shadow-none transition-all py-3 bg-light border-0"
                style={{ borderRadius: '10px' }}
                placeholder="Nombre de la empresa"
                autoComplete="organization"
                {...register("company")} id='company'
              />
              <div className="help-block with-errors mt-1 text-danger">
                {errors.company && <ErrorMsg msg={errors.company.message as string} />}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group-meta form-group mb-4">
              <label className="fw-medium mb-1 text-dark" htmlFor="nit" style={{ fontSize: '0.9rem' }}>NIT*</label>
              <input
                type="text"
                className="form-control shadow-none transition-all py-3 bg-light border-0"
                style={{ borderRadius: '10px' }}
                placeholder="NIT de la empresa"
                inputMode="numeric"
                pattern="[0-9\- ]+"
                {...register("nit")} id='nit'
              />
              <div className="help-block with-errors mt-1 text-danger">
                {errors.nit && <ErrorMsg msg={errors.nit.message as string} />}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group-meta form-group mb-4">
              <label className="fw-medium mb-1 text-dark" htmlFor="email" style={{ fontSize: '0.9rem' }}>Email Corporativo*</label>
              <input
                type="email"
                className="form-control shadow-none transition-all py-3 bg-light border-0"
                style={{ borderRadius: '10px' }}
                placeholder="correo@empresa.com"
                autoComplete="email"
                {...register("email")} id='email'
              />
              <div className="help-block with-errors mt-1 text-danger">
                {errors.email && <ErrorMsg msg={errors.email.message as string} />}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group-meta form-group mb-4">
              <label className="fw-medium mb-1 text-dark" htmlFor="phone" style={{ fontSize: '0.9rem' }}>Teléfono / Celular*</label>
              <input
                type="tel"
                className="form-control shadow-none transition-all py-3 bg-light border-0"
                style={{ borderRadius: '10px' }}
                placeholder="Número de contacto"
                autoComplete="tel"
                inputMode="tel"
                {...register("phone")} id='phone'
              />
              <div className="help-block with-errors mt-1 text-danger">
                {errors.phone && <ErrorMsg msg={errors.phone.message as string} />}
              </div>
            </div>
          </div>

          <div className="col-12 mt-3">
            <button type='submit' className="btn w-100 py-3 fw-bold rounded-3"
              style={{
                backgroundColor: '#a3e635',
                color: '#020617',
                border: 'none',
                boxShadow: '0 4px 15px rgba(163,230,53,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              disabled={isSubmitting}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(163,230,53,0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(163,230,53,0.3)'; }}
            >
              {isSubmitting ? "Enviando..." : "Solicitar Contacto"}
            </button>
            <p className="text-muted text-center mt-3 small">
              Al enviar este formulario aceptas nuestra política de privacidad. No compartimos tus datos.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DispapelesForm;

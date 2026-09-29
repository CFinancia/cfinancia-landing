import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { destinatariosLandingPorOrigen } from "@/lib/getLandingCorreos";
import { notifyError, notifySuccess } from "@/utils/toast";

const TIPOS_PQR = [
  { value: "Petición", icon: "bi-question-circle" },
  { value: "Queja", icon: "bi-emoji-frown" },
  { value: "Reclamo", icon: "bi-exclamation-triangle" },
  { value: "Sugerencia", icon: "bi-lightbulb" },
] as const;

// TODO: cambiar a "landing-pqr" cuando el backend (cesione) con ese origen esté desplegado.
const ORIGEN_API = "landing-contacto";

type FormData = {
  tipo: string;
  name: string;
  document?: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
};

const schema = yup.object().shape({
  tipo: yup
    .string()
    .required("Selecciona un tipo de solicitud")
    .test("tipo-valido", "Selecciona un tipo de solicitud", (v) =>
      TIPOS_PQR.some((t) => t.value === v)
    ),
  name: yup.string().required("El nombre es obligatorio"),
  document: yup.string().optional(),
  email: yup
    .string()
    .required("El email es obligatorio")
    .email("Ingresa un email válido"),
  phone: yup.string().required("El teléfono es obligatorio"),
  message: yup
    .string()
    .required("La descripción es obligatoria")
    .min(10, "La descripción debe tener al menos 10 caracteres"),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "Debes autorizar el tratamiento de datos")
    .required(),
});

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <span className="pqr-error">{msg}</span> : null;

type Props = {
  onSuccess?: () => void;
};

const PqrForm = ({ onSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { tipo: "", acceptTerms: false },
  });

  const onSubmit = handleSubmit(async (data) => {
    const documento = data.document?.trim();
    try {
      const res = await fetch(
        "https://hwwqudd0fa.execute-api.us-east-1.amazonaws.com/Prod/sistema/envieCorreoLanding",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tenantId: "265a0493-740a-11ee-a243-12a5defed043",
            ...destinatariosLandingPorOrigen("landing-pqr"),
            nombre: data.name,
            empresa: documento ? `Documento: ${documento}` : "No informado",
            correo: data.email,
            telefono: data.phone,
            mensaje: `[PQR - ${data.tipo}] ${data.message}`,
            origen: ORIGEN_API,
          }),
        }
      );
      const body = await res.json().catch(() => null);
      if (!res.ok || body?.succeeded === false) {
        throw new Error(body?.messages?.join(" ") || `HTTP ${res.status}`);
      }
      notifySuccess("Tu solicitud fue enviada. Te contactaremos pronto.");
      reset();
      onSuccess?.();
    } catch (err) {
      console.error("Error al enviar la PQR:", err);
      notifyError("No pudimos enviar tu solicitud. Intenta de nuevo.");
    }
  });

  return (
    <form className="pqr-form" onSubmit={onSubmit} noValidate>
      <div className="pqr-field">
        <span className="pqr-label">¿Qué tipo de solicitud deseas radicar?*</span>
        <div className="pqr-types">
          {TIPOS_PQR.map((t) => (
            <label key={t.value} className="pqr-type">
              <input type="radio" value={t.value} {...register("tipo")} />
              <span className="pqr-type-box">
                <i className={`bi ${t.icon}`}></i>
                {t.value}
              </span>
            </label>
          ))}
        </div>
        <FieldError msg={errors.tipo?.message} />
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="pqr-field">
            <label htmlFor="pqr-name" className="pqr-label">
              Nombre completo*
            </label>
            <input
              id="pqr-name"
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("name")}
            />
            <FieldError msg={errors.name?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="pqr-field">
            <label htmlFor="pqr-document" className="pqr-label">
              Cédula / NIT <span className="pqr-optional">(opcional)</span>
            </label>
            <input
              id="pqr-document"
              type="text"
              placeholder="Número de documento"
              {...register("document")}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="pqr-field">
            <label htmlFor="pqr-email" className="pqr-label">
              Email*
            </label>
            <input
              id="pqr-email"
              type="email"
              placeholder="correo@empresa.com"
              {...register("email")}
            />
            <FieldError msg={errors.email?.message} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="pqr-field">
            <label htmlFor="pqr-phone" className="pqr-label">
              Teléfono*
            </label>
            <input
              id="pqr-phone"
              type="tel"
              placeholder="Ingresa tu teléfono"
              {...register("phone")}
            />
            <FieldError msg={errors.phone?.message} />
          </div>
        </div>
      </div>

      <div className="pqr-field">
        <label htmlFor="pqr-message" className="pqr-label">
          Descripción*
        </label>
        <textarea
          id="pqr-message"
          placeholder="Cuéntanos con detalle tu solicitud"
          {...register("message")}
        ></textarea>
        <FieldError msg={errors.message?.message} />
      </div>

      <div className="pqr-field">
        <label className="pqr-check">
          <input type="checkbox" {...register("acceptTerms")} />
          <span>
            Autorizo el tratamiento de mis datos personales para gestionar esta
            solicitud.
          </span>
        </label>
        <FieldError msg={errors.acceptTerms?.message} />
      </div>

      <button
        type="submit"
        className="btn-four tran3s w-100 d-block"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
};

export default PqrForm;

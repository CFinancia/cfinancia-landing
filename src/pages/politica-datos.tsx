import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import company_data from "@/data/company-data";

type Estado = "cargando" | "listo" | "error";
type Seccion = { id: string; titulo: string; nivel: 2 | 3; padre: string };

const textoDe = (children: ReactNode): string => {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(textoDe).join("");
  if (children && typeof children === "object" && "props" in children) {
    return textoDe((children as { props: { children?: ReactNode } }).props.children);
  }
  return "";
};

// En el documento los títulos vienen como párrafos en negrita: "I. …" es sección, "1. …" subsección y "1.1 …" apartado.
const nivelTitulo = (texto: string): 2 | 3 | 4 | null => {
  if (/^[IVX]+\./.test(texto)) return 2;
  if (/^\d+\.\s/.test(texto)) return 3;
  if (/^\d+\.\d/.test(texto)) return 4;
  return null;
};

const tituloLegible = (texto: string) => texto.replace(/^([IVX]+\.)\s*/, "$1 ");

// The document's titles are all caps; the index reads better in sentence case, keeping brand names intact.
const SIGLAS = ["C-FINANCIA", "CESIONBNK", "DIAN", "ERP"];
const tituloIndice = (texto: string) => {
  const [, numeracion = "", resto = texto] = texto.match(/^((?:[IVX]+|\d+(?:\.\d+)*)\.?\s*)(.*)$/) ?? [];
  const frase = resto.charAt(0).toUpperCase() + resto.slice(1).toLowerCase();
  return numeracion + SIGLAS.reduce((t, sigla) => t.replace(new RegExp(sigla.toLowerCase(), "g"), sigla), frase);
};

const componentes: Components = {
  p: ({ children }) => {
    const hijos = Array.isArray(children) ? children : [children];
    const soloNegrita =
      hijos.length === 1 && hijos[0] && typeof hijos[0] === "object" && "type" in hijos[0] && hijos[0].type === "strong";
    if (soloNegrita) {
      const texto = textoDe(children).trim();
      const nivel = nivelTitulo(texto);
      if (nivel === 2) return <h2>{tituloLegible(texto)}</h2>;
      if (nivel === 3) return <h3>{texto}</h3>;
      if (nivel === 4) return <h4>{texto}</h4>;
      return <p className="politica-datos-subtitulo">{texto}</p>;
    }
    return <p>{children}</p>;
  },
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

const formatearFecha = (valor: string | null) => {
  if (!valor) return null;
  const fecha = new Date(valor);
  if (Number.isNaN(fecha.getTime())) return null;
  return new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long", year: "numeric" }).format(fecha);
};

export default function PoliticaDatosPage() {
  const [contenido, setContenido] = useState("");
  const [actualizacion, setActualizacion] = useState<string | null>(null);
  const [estado, setEstado] = useState<Estado>("cargando");
  const [secciones, setSecciones] = useState<Seccion[]>([]);
  const [activa, setActiva] = useState<string>("");
  const contenedorRef = useRef<HTMLDivElement>(null);

  // El documento vive en S3: al actualizarlo allá, esta página lo refleja sin desplegar la landing.
  useEffect(() => {
    let vigente = true;
    fetch(company_data.politicaDatosUrl, { cache: "no-cache" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const texto = await res.text();
        if (!vigente) return;
        setActualizacion(formatearFecha(res.headers.get("last-modified")));
        setContenido(texto);
        setEstado("listo");
      })
      .catch((err) => {
        console.error("Error al cargar la política de tratamiento de datos:", err);
        if (vigente) setEstado("error");
      });
    return () => {
      vigente = false;
    };
  }, []);

  // The index is read from the rendered headings so ids and order always match the document.
  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (estado !== "listo" || !contenedor) return;
    const titulos = Array.from(contenedor.querySelectorAll<HTMLHeadingElement>("h2, h3"));
    titulos.forEach((t, i) => (t.id = `seccion-${i}`));
    let padre = "";
    setSecciones(
      titulos.map((t) => {
        const nivel = t.tagName === "H2" ? 2 : 3;
        if (nivel === 2) padre = t.id;
        return { id: t.id, titulo: tituloIndice(t.textContent ?? ""), nivel, padre: nivel === 2 ? t.id : padre };
      })
    );
    setActiva(titulos[0]?.id ?? "");
  }, [estado, contenido]);

  const alHacerScroll = useCallback(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;
    const tope = contenedor.getBoundingClientRect().top + 120;
    let actual = secciones[0]?.id ?? "";
    for (const s of secciones) {
      const el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top <= tope) actual = s.id;
    }
    setActiva(actual);
  }, [secciones]);

  const irA = (id: string) => {
    const contenedor = contenedorRef.current;
    const el = document.getElementById(id);
    if (!contenedor || !el) return;
    const destino =
      el.getBoundingClientRect().top - contenedor.getBoundingClientRect().top + contenedor.scrollTop - 16;
    contenedor.scrollTo({ top: destino, behavior: "smooth" });
    setActiva(id);
  };

  const seccionActiva = secciones.find((s) => s.id === activa)?.padre ?? "";

  return (
    <Wrapper>
      <SEOCom
        title="Política de Tratamiento de Datos"
        url="https://cfinancia.com/politica-tratamiento-datos"
      />

      <div className="main-page-wrapper">
        <Header />
        <main>
          <section className="politica-datos">
            <div className="container">
              <div className="politica-datos-encabezado">
                <nav className="politica-datos-migas" aria-label="Ruta">
                  <NavLink to="/">Home</NavLink> / <span>Política de Tratamiento de Datos</span>
                </nav>
                <h1>Política de Tratamiento de Datos</h1>
                <p>Política de seguridad y privacidad, tratamiento de datos personales y otros.</p>
              </div>

              {estado === "cargando" && (
                <div className="politica-datos-tarjeta politica-datos-estado">Cargando la política…</div>
              )}

              {estado === "error" && (
                <div className="politica-datos-tarjeta politica-datos-estado">
                  No pudimos cargar la política en este momento.{" "}
                  <a href={company_data.politicaDatosUrl} target="_blank" rel="noopener noreferrer">
                    Ábrela directamente aquí
                  </a>
                  .
                </div>
              )}

              {estado === "listo" && (
                <div className="row g-4">
                  <aside className="col-lg-4 col-xl-3 d-none d-lg-block">
                    <nav className="politica-datos-indice" aria-label="Contenido">
                      <span className="politica-datos-indice-titulo">Contenido</span>
                      <ul className="style-none">
                        {secciones
                          .filter((s) => s.nivel === 2 || s.padre === seccionActiva)
                          .map((s) => (
                          <li
                            key={s.id}
                            className={`nivel-${s.nivel}${activa === s.id ? " activa" : ""}${
                              s.nivel === 2 && s.id === seccionActiva ? " abierta" : ""
                            }`}
                          >
                            <button type="button" onClick={() => irA(s.id)}>
                              {s.titulo}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </aside>

                  <div className="col-lg-8 col-xl-9">
                    <select
                      className="form-select d-lg-none mb-3"
                      aria-label="Ir a sección"
                      value={activa}
                      onChange={(e) => irA(e.target.value)}
                    >
                      {secciones.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.nivel === 3 ? `— ${s.titulo}` : s.titulo}
                        </option>
                      ))}
                    </select>

                    <div className="politica-datos-tarjeta">
                      <div className="politica-datos-tarjeta-barra">
                        <span>
                          <i className="bi bi-shield-check"></i> {company_data.razonSocial} · C-Financia
                        </span>
                        {actualizacion && <span>Última actualización: {actualizacion}</span>}
                      </div>
                      <div
                        ref={contenedorRef}
                        className="politica-datos-contenido"
                        onScroll={alHacerScroll}
                        tabIndex={0}
                      >
                        <ReactMarkdown components={componentes}>{contenido}</ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
}

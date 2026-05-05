import landingCorreos from "@/data/landing-cfinancia-correos.json";

type OrigenCfg = {
  para?: string[];
  copia?: string[];
};

type ConfigShape = {
  origenes: Record<string, OrigenCfg>;
};

const config = landingCorreos as ConfigShape;

function normalizarLista(correos: string[] | undefined): string[] {
  if (!correos?.length) return [];
  return [...new Set(correos.map((c) => c.trim()).filter(Boolean))];
}

/** Destinatarios tomados del JSON por clave `origen` (enviar al API como correosPara / correosCopia). */
export function destinatariosLandingPorOrigen(origen: string): {
  correosPara: string[];
  correosCopia: string[];
} {
  const entry = config.origenes[origen];
  if (!entry) {
    return { correosPara: [], correosCopia: [] };
  }

  return {
    correosPara: normalizarLista(entry.para),
    correosCopia: normalizarLista(entry.copia),
  };
}

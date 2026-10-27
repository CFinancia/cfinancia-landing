import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// El script de Cloudflare se carga en index.html y crea `window.turnstile`.
declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: object) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

// Clave pública (no es secreta). En desarrollo se usa la de prueba de Cloudflare (siempre pasa),
// salvo que se defina VITE_TURNSTILE_SITE_KEY en .env.local para probar la real.
const SITE_KEY =
  import.meta.env.VITE_TURNSTILE_SITE_KEY ||
  (import.meta.env.DEV ? "1x00000000000000000000AA" : "0x4AAAAAAFouCfsGoYE7YLKj");

export type TurnstileHandle = { reset: () => void };

type Props = {
  /** Recibe el token cuando el usuario es validado, o "" si expira / falla / se reinicia. */
  onChange: (token: string) => void;
};

/** Casilla "No soy un robot" de Cloudflare. El token sirve una sola vez: llama a `reset()` tras cada envío. */
const Turnstile = forwardRef<TurnstileHandle, Props>(({ onChange }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
      onChange("");
    },
  }));

  useEffect(() => {
    if (!SITE_KEY) {
      console.error("Turnstile: falta VITE_TURNSTILE_SITE_KEY");
      return;
    }
    if (!window.turnstile || !containerRef.current) return;

    // Si Cloudflare falla, se registra el error pero no se rompe la página.
    try {
      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        language: "es",
        callback: (token: string) => onChange(token),
        "expired-callback": () => onChange(""),
        "error-callback": () => onChange(""),
      });
    } catch (err) {
      console.error("Turnstile:", err);
    }

    return () => {
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
    };
    // Se dibuja una sola vez al montar; `onChange` siempre es un setState (estable).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} />;
});

Turnstile.displayName = "Turnstile";

export default Turnstile;

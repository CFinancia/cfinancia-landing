<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Alianza Dispapeles & C-Financia | Convierte tus facturas en liquidez inmediata. Anticipa hasta el 90% en 24h sin endeudarte." />
  <meta property="og:title" content="Alianza Dispapeles & C-Financia | Liquidez Inmediata" />
  <meta property="og:description" content="Convierte tus Facturas de Dispapeles en liquidez inmediata. 100% digital, sin costos ocultos, respuesta en 24h." />
  <title>Alianza Dispapeles & C-Financia | Liquidez Inmediata</title>

  <!-- Bootstrap 5 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" />
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css" />
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

  <style>
    :root {
      --green: #a3e635;
      --dark: #020617;
      --slate-dark: #0f172a;
      --slate-light: #f8fafc;
      --muted: #64748b;
      --border: #e2e8f0;
    }

    * { box-sizing: border-box; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      color: var(--dark);
      background: #fff;
      margin: 0;
    }

    /* ── HEADER ── */
    .site-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border);
      padding: 14px 0;
      transition: box-shadow .3s;
    }
    .site-header.scrolled { box-shadow: 0 4px 20px rgba(0,0,0,.08); }
    .header-logo { height: 40px; object-fit: contain; }
    .header-brand { font-weight: 800; font-size: 1.2rem; letter-spacing: -.5px; color: var(--dark); text-decoration: none; }

    /* ── HERO ── */
    .hero {
      padding: 140px 0 80px;
      background: #fff;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(163,230,53,.08) 0%, transparent 70%);
      pointer-events: none;
    }

    /* ── ANIMATIONS ── */
    .fade-in-left {
      opacity: 0;
      transform: translateX(-40px);
      transition: opacity .7s ease, transform .7s ease;
    }
    .fade-in-right {
      opacity: 0;
      transform: translateX(40px);
      transition: opacity .8s ease .3s, transform .8s ease .3s;
    }
    .fade-in-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity .6s ease, transform .6s ease;
    }
    .visible { opacity: 1 !important; transform: none !important; }

    /* ── BADGE ── */
    .badge-green {
      background: var(--green);
      color: #111;
      font-weight: 600;
      padding: 6px 14px;
      border-radius: 50px;
      font-size: .85rem;
      display: inline-block;
    }

    /* ── CHECK ICON ── */
    .check-icon {
      width: 32px; height: 32px;
      background: var(--green);
      color: #000;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    /* ── FEATURE PILLS ── */
    .feature-pill {
      background: #f1f5f9;
      border: 1px solid var(--border);
      color: var(--dark);
      padding: 6px 14px;
      border-radius: 50px;
      font-size: .85rem;
      font-weight: 500;
    }

    /* ── BUTTONS ── */
    .btn-primary-green {
      background: var(--green);
      color: var(--dark);
      font-weight: 700;
      border: none;
      padding: 14px 28px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(163,230,53,.3);
      transition: transform .2s, box-shadow .2s;
      text-decoration: none;
      display: inline-block;
    }
    .btn-primary-green:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(163,230,53,.45);
      color: var(--dark);
    }
    .btn-outline-dark-custom {
      border: 2px solid var(--dark);
      color: var(--dark);
      font-weight: 700;
      padding: 12px 28px;
      border-radius: 10px;
      background: transparent;
      text-decoration: none;
      display: inline-block;
      transition: background .2s, color .2s;
    }
    .btn-outline-dark-custom:hover { background: var(--dark); color: #fff; }

    /* ── FORM CARD ── */
    .form-card {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,.1);
      padding: 40px;
      position: relative;
      overflow: hidden;
    }
    .form-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 5px;
      background: linear-gradient(90deg, var(--green), #10b981);
      border-radius: 20px 20px 0 0;
    }
    .form-control-custom {
      width: 100%;
      padding: 14px 16px;
      border: none;
      border-radius: 10px;
      background: #f1f5f9;
      font-size: .95rem;
      color: var(--dark);
      outline: none;
      transition: box-shadow .2s;
    }
    .form-control-custom:focus {
      box-shadow: 0 0 0 3px rgba(163,230,53,.35);
      background: #f8fafc;
    }
    .form-control-custom.error { box-shadow: 0 0 0 3px rgba(239,68,68,.35); }
    .form-label-custom { font-size: .88rem; font-weight: 500; color: var(--dark); display: block; margin-bottom: 6px; }
    .error-msg { color: #ef4444; font-size: .82rem; margin-top: 4px; display: none; }
    .error-msg.visible { display: block; }
    .btn-submit {
      width: 100%;
      padding: 15px;
      background: var(--green);
      color: var(--dark);
      font-weight: 700;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(163,230,53,.3);
      transition: transform .2s, box-shadow .2s;
    }
    .btn-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(163,230,53,.4); }
    .btn-submit:disabled { opacity: .7; cursor: not-allowed; }

    /* ── SUCCESS STATE ── */
    .success-icon {
      width: 72px; height: 72px;
      background: var(--green);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 20px;
    }

    /* ── HOW IT WORKS ── */
    .how-section { background: var(--slate-light); padding: 80px 0 100px; }
    .step-card {
      background: #fff;
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 2px 12px rgba(0,0,0,.06);
      height: 100%;
      transition: transform .3s, box-shadow .3s;
    }
    .step-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,.1); }
    .step-icon {
      width: 44px; height: 44px;
      background: var(--green);
      color: #111;
      border-radius: 50%;
      display: inline-flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
    }

    /* ── REQUIREMENTS ── */
    .req-dark-card {
      background: var(--slate-dark);
      border-radius: 16px;
      padding: 32px;
    }
    .tag-green-muted {
      background: rgba(163,230,53,.15);
      color: #e2e8f0;
      border: 1px solid rgba(163,230,53,.35);
      padding: 6px 14px;
      border-radius: 50px;
      font-size: .85rem;
      font-weight: 500;
      display: inline-block;
    }

    /* ── FOOTER ── */
    .site-footer {
      background: var(--slate-dark);
      color: #94a3b8;
      padding: 40px 0;
      font-size: .9rem;
    }
    .site-footer a { color: #94a3b8; text-decoration: none; }
    .site-footer a:hover { color: var(--green); }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      .hero { padding: 110px 0 60px; }
      .form-card { padding: 28px 20px; }
      .display-4 { font-size: 2rem; }
    }
  </style>
</head>
<body>

  <!-- ═══════════════════ HEADER ═══════════════════ -->
  <header class="site-header" id="siteHeader">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <a href="#" class="header-brand d-flex align-items-center gap-3">
          <img src="/dispapeles/logo-cfinancia.png" alt="C-Financia" class="header-logo" />
          <img src="/dispapeles/logo-dispapeles-light.webp" alt="Dispapeles" class="header-logo" />
        </a>
        <a href="#dispapeles-form" class="btn-primary-green py-2 px-4" style="font-size:.9rem">
          Solicitar contacto
        </a>
      </div>
    </div>
  </header>

  <!-- ═══════════════════ HERO ═══════════════════ -->
  <section class="hero">
    <div class="container">
      <div class="row gy-5 align-items-center">

        <!-- LEFT COLUMN -->
        <div class="col-lg-6 fade-in-left">

          <!-- Logos alliance -->
          <div class="d-flex align-items-center gap-3 mb-4 flex-wrap">
            <img src="/images/logo/c-financia.svg" alt="C-Financia" style="height:48px;object-fit:contain;" />
            <span class="text-dark fs-3 fw-light">×</span>
            <img src="/dispapeles/logo-dispapeles-light.webp" alt="Dispapeles" style="height:48px;object-fit:contain;" />
          </div>

          <span class="badge-green mb-3">Alianza Estratégica</span>

          <h1 class="display-4 fw-bold mb-4 text-dark" style="line-height:1.15">
            Convierte tus <span style="color:var(--green)">Facturas de Dispapeles</span> en liquidez inmediata.
          </h1>

          <p class="fs-5 mb-4 text-muted" style="line-height:1.7">
            Como usuario de <strong class="text-dark">Dispapeles</strong>, ahora puedes acceder a liquidez sin endeudarte, sin afectar tu capacidad crediticia y con un proceso 100% digital integrado a tu facturación electrónica.
          </p>

          <ul class="list-unstyled mb-4 d-flex flex-column gap-3">
            <li class="d-flex align-items-center gap-3">
              <span class="check-icon"><i class="bi bi-check-lg fw-bold"></i></span>
              <span class="fs-5 text-muted">Adelanta hasta el <strong class="text-dark">90% en 24h</strong></span>
            </li>
            <li class="d-flex align-items-center gap-3">
              <span class="check-icon"><i class="bi bi-check-lg fw-bold"></i></span>
              <span class="fs-5 text-muted">Sin afectar tus cupos bancarios (no es un crédito)</span>
            </li>
            <li class="d-flex align-items-center gap-3">
              <span class="check-icon"><i class="bi bi-check-lg fw-bold"></i></span>
              <span class="fs-5 text-muted">Aprobación inmediata</span>
            </li>
          </ul>

          <div class="d-flex flex-wrap gap-3 mb-4">
            <a href="#dispapeles-form" class="btn-primary-green">Quiero anticipar mis facturas</a>
            <a href="#requisitos-dispapeles" class="btn-outline-dark-custom">Ver requisitos</a>
          </div>

          <div class="d-flex flex-wrap gap-2">
            <span class="feature-pill">100% digital</span>
            <span class="feature-pill">Sin costos ocultos</span>
            <span class="feature-pill">Respuesta en 24h</span>
          </div>
        </div>

        <!-- RIGHT COLUMN: FORM -->
        <div class="col-lg-5 offset-lg-1 fade-in-right">
          <div class="form-card" id="formContainer">

            <!-- SUCCESS STATE (hidden initially) -->
            <div id="successState" style="display:none">
              <div class="text-center py-4">
                <div class="success-icon">
                  <i class="bi bi-check-lg" style="font-size:2rem;color:var(--dark)"></i>
                </div>
                <h3 class="fw-bold text-dark mb-3">¡Solicitud enviada!</h3>
                <p class="text-muted mb-4" style="max-width:340px;margin:0 auto;line-height:1.6">
                  Pronto uno de nuestros comerciales se contactará contigo para ayudarte a anticipar tus facturas.
                </p>
                <button class="btn-primary-green" onclick="resetForm()">Enviar otra solicitud</button>
              </div>
            </div>

            <!-- FORM STATE -->
            <div id="formState">
              <h3 class="mb-2 text-center fw-bold text-dark">Anticipa el Pago de tus Facturas</h3>
              <p class="text-center text-muted mb-4" style="font-size:.93rem">
                Completa este breve formulario y un asesor se comunicará contigo.
              </p>

              <form id="dispapeles-form" novalidate>
                <!-- Nombre -->
                <div class="mb-3">
                  <label class="form-label-custom" for="name">Nombre Completo *</label>
                  <input type="text" id="name" name="name" class="form-control-custom" placeholder="Ingresa tu nombre" autocomplete="name" />
                  <div class="error-msg" id="err-name">El nombre es requerido</div>
                </div>

                <div class="row g-3 mb-3">
                  <!-- Empresa -->
                  <div class="col-md-6">
                    <label class="form-label-custom" for="company">Empresa *</label>
                    <input type="text" id="company" name="company" class="form-control-custom" placeholder="Nombre de la empresa" autocomplete="organization" />
                    <div class="error-msg" id="err-company">La empresa es requerida</div>
                  </div>
                  <!-- NIT -->
                  <div class="col-md-6">
                    <label class="form-label-custom" for="nit">NIT *</label>
                    <input type="text" id="nit" name="nit" class="form-control-custom" placeholder="NIT de la empresa" inputmode="numeric" />
                    <div class="error-msg" id="err-nit">El NIT es requerido</div>
                  </div>
                </div>

                <div class="row g-3 mb-4">
                  <!-- Email -->
                  <div class="col-md-6">
                    <label class="form-label-custom" for="email">Email Corporativo *</label>
                    <input type="email" id="email" name="email" class="form-control-custom" placeholder="correo@empresa.com" autocomplete="email" />
                    <div class="error-msg" id="err-email">Email inválido</div>
                  </div>
                  <!-- Phone -->
                  <div class="col-md-6">
                    <label class="form-label-custom" for="phone">Teléfono / Celular *</label>
                    <input type="tel" id="phone" name="phone" class="form-control-custom" placeholder="Número de contacto" autocomplete="tel" />
                    <div class="error-msg" id="err-phone">El teléfono es requerido</div>
                  </div>
                </div>

                <button type="submit" class="btn-submit" id="submitBtn">Solicitar Contacto</button>

                <p class="text-muted text-center mt-3" style="font-size:.8rem">
                  Al enviar este formulario aceptas nuestra política de privacidad. No compartimos tus datos.
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══════════════════ HOW IT WORKS ═══════════════════ -->
  <section class="how-section">
    <div class="container">

      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 text-center fade-in-up">
          <span class="badge-green">Proceso simple</span>
          <h2 class="mt-3 mb-3 fw-bold text-dark">Cómo funciona la alianza con Dispapeles</h2>
          <p class="text-muted mb-0">
            En menos de un día puedes convertir tus facturas en liquidez y seguir operando sin fricciones.
          </p>
        </div>
      </div>

      <div class="row gy-4 mb-5">
        <div class="col-md-4 fade-in-up" style="transition-delay:.05s">
          <div class="step-card">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="step-icon"><i class="bi bi-file-earmark-check"></i></span>
              <span class="text-muted fw-medium">Paso 1</span>
            </div>
            <h5 class="fw-bold text-dark">Envía tu factura</h5>
            <p class="text-muted mb-0">Selecciona las facturas emitidas en Dispapeles y compártenos los datos básicos.</p>
          </div>
        </div>
        <div class="col-md-4 fade-in-up" style="transition-delay:.15s">
          <div class="step-card">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="step-icon"><i class="bi bi-lightning-charge"></i></span>
              <span class="text-muted fw-medium">Paso 2</span>
            </div>
            <h5 class="fw-bold text-dark">Evaluación rápida</h5>
            <p class="text-muted mb-0">Validamos la factura y aprobamos el anticipo en horas, no en días.</p>
          </div>
        </div>
        <div class="col-md-4 fade-in-up" style="transition-delay:.25s">
          <div class="step-card">
            <div class="d-flex align-items-center gap-3 mb-3">
              <span class="step-icon"><i class="bi bi-cash-coin"></i></span>
              <span class="text-muted fw-medium">Paso 3</span>
            </div>
            <h5 class="fw-bold text-dark">Recibe el anticipo</h5>
            <p class="text-muted mb-0">Te transferimos hasta el 90% y sigues operando sin endeudarte.</p>
          </div>
        </div>
      </div>

      <!-- ── REQUIREMENTS ── -->
      <div id="requisitos-dispapeles" class="row align-items-center gy-4">
        <div class="col-lg-6 fade-in-up">
          <h3 class="fw-bold text-dark mb-3">Requisitos básicos</h3>
          <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
            <li class="d-flex align-items-start gap-3">
              <span class="check-icon" style="width:28px;height:28px"><i class="bi bi-check"></i></span>
              <span class="text-muted">Ser usuario activo de Dispapeles con facturación electrónica.</span>
            </li>
            <li class="d-flex align-items-start gap-3">
              <span class="check-icon" style="width:28px;height:28px"><i class="bi bi-check"></i></span>
              <span class="text-muted">Facturas emitidas a clientes con buen historial de pago.</span>
            </li>
            <li class="d-flex align-items-start gap-3">
              <span class="check-icon" style="width:28px;height:28px"><i class="bi bi-check"></i></span>
              <span class="text-muted">Cuenta bancaria empresarial para el desembolso.</span>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 fade-in-up" style="transition-delay:.1s">
          <div class="req-dark-card">
            <h4 class="fw-bold text-white mb-2">Acompañamiento real</h4>
            <p class="mb-4" style="color:rgba(255,255,255,.5)">
              Un asesor te guía en todo el proceso y te explica las condiciones antes de aceptar.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <span class="tag-green-muted">Sin letras pequeñas</span>
              <span class="tag-green-muted">Sin cobros sorpresa</span>
              <span class="tag-green-muted">Atención personalizada</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══════════════════ FOOTER ═══════════════════ -->
  <footer class="site-footer">
    <div class="container">
      <div class="row gy-3 align-items-center">
        <div class="col-md-6">
          <div class="d-flex align-items-center gap-3">
            <img src="/images/logo/c-financia.svg" alt="C-Financia" style="height:32px;object-fit:contain;filter:brightness(10)" />
            <img src="/dispapeles/logo-dispapeles-dark.png" alt="Dispapeles" style="height:32px;object-fit:contain;" />
          </div>
          <p class="mt-2 mb-0" style="font-size:.82rem">
            © 2024 C-Financia. Alianza Estratégica con Dispapeles.
          </p>
        </div>
        <div class="col-md-6 text-md-end">
          <a href="mailto:info@cfinancia.com" class="me-3"><i class="bi bi-envelope me-1"></i>info@cfinancia.com</a>
          <a href="#dispapeles-form"><i class="bi bi-arrow-up-circle me-1"></i>Volver arriba</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>

  <script>
    /* ── Scroll-activated animations ── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up').forEach(el => observer.observe(el));

    /* Trigger hero elements immediately */
    window.addEventListener('load', () => {
      document.querySelectorAll('.hero .fade-in-left, .hero .fade-in-right').forEach(el => {
        setTimeout(() => el.classList.add('visible'), 80);
      });
    });

    /* ── Header shadow on scroll ── */
    window.addEventListener('scroll', () => {
      document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 20);
    });

    /* ── Smooth scroll for anchor links ── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });

    /* ── FORM VALIDATION & SUBMISSION ── */
    const API_URL = 'https://hwwqudd0fa.execute-api.us-east-1.amazonaws.com/Prod/sistema/envieCorreoLanding';

    function setError(id, show) {
      const input = document.getElementById(id);
      const err   = document.getElementById('err-' + id);
      if (!input || !err) return;
      input.classList.toggle('error', show);
      err.classList.toggle('visible', show);
    }

    function validate() {
      const fields = ['name','company','nit','phone'];
      let valid = true;
      fields.forEach(f => {
        const v = document.getElementById(f)?.value.trim();
        const empty = !v;
        setError(f, empty);
        if (empty) valid = false;
      });
      // email
      const emailVal = document.getElementById('email')?.value.trim();
      const emailBad = !emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      setError('email', emailBad);
      if (emailBad) valid = false;
      return valid;
    }

    document.getElementById('dispapeles-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) return;

      const btn = document.getElementById('submitBtn');
      btn.disabled = true;
      btn.textContent = 'Enviando…';

      const data = {
        tenantId: '265a0493-740a-11ee-a243-12a5defed043',
        nombre:   document.getElementById('name').value.trim(),
        empresa:  document.getElementById('company').value.trim(),
        nit:      document.getElementById('nit').value.trim(),
        correo:   document.getElementById('email').value.trim(),
        telefono: document.getElementById('phone').value.trim(),
        origen:   'alianza-dispapeles',
      };

      try {
        await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch (err) {
        console.error('Error al enviar:', err);
      }

      document.getElementById('formState').style.display = 'none';
      document.getElementById('successState').style.display = 'block';
      btn.disabled = false;
      btn.textContent = 'Solicitar Contacto';
    });

    function resetForm() {
      document.getElementById('dispapeles-form').reset();
      ['name','company','nit','email','phone'].forEach(f => setError(f, false));
      document.getElementById('successState').style.display = 'none';
      document.getElementById('formState').style.display = 'block';
    }
  </script>
</body>
</html>

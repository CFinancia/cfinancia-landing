# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static marketing landing site for **C-Financia**, a Colombian factoring/financiamiento company. No build pipeline, no framework — plain PHP served directly by a web server.

## Development

No build step required. Serve locally with PHP's built-in server:

```bash
php -S localhost:8000
```

There are no tests, no linter, and no package manager in this project.

## Architecture

Each page is a PHP entry point (`index.php`, `contacto.php`, `servicios-factoring.php`, etc.) that:
1. Sets SEO variables (`$m_keywords`, `$m_description`, `$title_seo`, `$m_canonical`, `$menu_css`).
2. Loads HTML partials from `templates/` using `implode("", file("./templates/xxx.html"))`.
3. Assembles the final page via `str_replace()` on placeholder tokens like `[HEADER]`, `[FOOTER]`, `[TITLE]`, `[keywords]`, etc.

### Key placeholders used in templates

| Token | Replaced with |
|---|---|
| `[HEADER]` | `templates/head.html` (full `<head>` tag + CSS links) |
| `[HEADERMENU]` | `templates/menu.html` (sticky nav) |
| `[FOOTER]` | `templates/footer.html` |
| `[PRELOADER]` | `templates/preloading.html` |
| `[TITLE]` | Page `<title>` and OG title |
| `[keywords]` | Meta keywords |
| `[meta_description]` | Meta description |
| `[canonical]` | Canonical link tag |
| `[CSS_MENU]` | Menu style variant class (e.g. `-type-5`) |

### Shared partials (`templates/`)

- `head.html` — `<head>` block with all CSS `<link>` tags and the chat widget script.
- `menu.html` — sticky navigation. "Mi Cuenta" links to `https://cfinancia.cesionbnk.com/`; "Regístrate" links to `https://cfinancia-prod-clientes.cesionbnk.com/`.
- `footer.html`, `preloading.html` — shared across all pages.
- Page-specific templates (`index-2.html`, `contact.html`, `service-v1.html`, etc.) contain the main body content with the placeholder tokens above.

### Contact form

`inc/contact.php` handles form submissions via plain `mail()`. The `$from`, `$sendTo`, `$subject`, and `$fields` config lives at the top of that file.

### Special routes

- `colsubsidio/` — 301 redirect to a Google Form (`https://forms.gle/crotyHiMrAqRpnGk7`) for the Colsubsidio partnership campaign.

### Static assets

- `css/style.css` and `css/responsive.css` — main styles (compiled from `scss/`).
- `vendor/` — bundled third-party libs (Bootstrap, etc.), committed directly.
- `images/logo/c-financia.svg` — primary logo.

## Notes

- The www-redirect in `index.php` is commented out; it is active in `contacto.php`.
- `google99339e6171a1dc0b.html` is a Google Search Console verification file — do not delete it.

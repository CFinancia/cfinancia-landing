# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start Vite dev server with HMR
pnpm build      # TypeScript check + Vite production build
pnpm lint       # ESLint (zero warnings allowed)
pnpm preview    # Preview production build locally
```

## Architecture

**Stack**: React 18 + TypeScript, Vite, Sass + Bootstrap 5, Framer Motion, React Router v6, Redux Toolkit, React Hook Form + Yup, Axios.

**Routing** (`src/navigation/app-navigation.tsx`): Five routes — `/` (Home), `/servicios-factoring` (Service details), `/blog-factoring/:id` (Blog detail), `/contacto` (Contact), `*` (404).

**Page structure**: Each page is wrapped in `<Wrapper>` (initializes WOW.js animations and toast notifications), then composed of section components from `src/components/`. Layout (Header/Footer) is applied inside the wrapper.

**Path alias**: `@` maps to `./src` (configured in `vite.config.ts`).

**Key directories**:
- `src/components/` — Feature sections, banners, forms, FAQ, blog blocks, calculator
- `src/pages/` — One file per route
- `src/layout/` — Wrapper, Header, Navbar, Footer
- `src/data/` — Static content (blog posts, FAQ, services, team, portfolio)
- `src/redux/` — Cart and wishlist slices (Redux Toolkit)
- `src/ui/` — Primitive UI components (Radix UI-based: button, dialog, input, label, pagination)
- `src/types/` — Shared TypeScript interfaces

**SEO**: Managed per-page via `react-helmet`.

**Static data**: Content lives in `src/data/` as TypeScript files — edit these to update copy, blog posts, FAQ answers, team members, etc.

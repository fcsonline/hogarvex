# Hogarvex

Landing page para **Hogarvex** — servicio profesional de instalaciones, reparaciones y mantenimiento del hogar en Barcelona y Maresme.

## Negocio

| | |
|---|---|
| **Servicios** | Fontanería, Electricidad, Reparaciones e instalaciones |
| **Zona** | Barcelona y Maresme |
| **Horario** | Lunes a Sábado, 8:00 - 20:00 |
| **Garantía** | 6 meses (mano de obra) / 2 años (material) |
| **Experiencia** | 20 años |
| **Contacto** | hogarvex@gmail.com / +34 633 45 04 17 |
| **Idiomas** | Castellano (default), Catalán, Inglés |

## Stack técnico

- **Framework**: Next.js 16 (App Router)
- **Estilos**: Tailwind CSS 4
- **i18n**: Diccionarios nativos (sin dependencias externas)
- **Analytics**: Plausible (self-hosted)
- **Deploy**: Vercel
- **SEO**: Schema.org (LocalBusiness, Service), OpenGraph, sitemap, robots.txt, llms.txt

## Setup local

```bash
# Instalar dependencias
npm install

# Arrancar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar build
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) — redirige automáticamente a `/es`.

## Estructura del proyecto

```
src/
├── app/
│   ├── [lang]/                  # Rutas i18n (/es, /ca, /en)
│   │   ├── dictionaries/       # Traducciones (es.json, ca.json, en.json)
│   │   ├── dictionaries.ts     # Helper de carga
│   │   ├── layout.tsx          # Layout con metadata, SEO, analytics
│   │   ├── page.tsx            # Landing page principal
│   │   ├── aviso-legal/        # Página legal
│   │   └── privacidad/         # Política de privacidad
│   ├── api/contact/route.ts    # API del formulario (skeleton Holded)
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Redirect / → /es
├── components/                  # Componentes de la landing
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Projects.tsx
│   ├── Reviews.tsx
│   ├── Faq.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── SchemaOrg.tsx
├── proxy.ts                     # Redirect middleware (i18n)
public/
├── images/                      # Logo, OG image
├── llms.txt                     # AI/LLM friendly description
├── robots.txt
└── sitemap.xml
```

## Deploy en Vercel

1. Conectar el repo en [vercel.com](https://vercel.com)
2. Configurar dominio: `hogarvex.es`
3. No requiere variables de entorno (de momento)

## TODOs pendientes

- [ ] Integrar formulario con Holded CRM (`src/app/api/contact/route.ts`)
- [ ] Configurar join.chat para el widget de WhatsApp
- [ ] Reemplazar imágenes stock de proyectos con fotos reales
- [ ] Reemplazar reseñas ficticias con reseñas reales de clientes
- [ ] Generar OG image profesional (1200x630px)

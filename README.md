# Rediseño Web — Grupo LAC

Propuesta de rediseño moderno para la página corporativa de [Grupo LAC](https://www.lac.com.ar/website/), una empresa cordobesa con más de 50 años en logística, combustibles, construcción y agro.

**Demo:** [webgrupolac.vercel.app](https://webgrupolac.vercel.app)

## Stack

- React 18 + Vite
- React Router DOM (SPA con 4 rutas)
- CSS moderno puro (Grid, Flexbox, Custom Properties)
- Sin frameworks CSS externos

## Estructura

```
src/
├── components/     # Header, Hero, Novedades, Banners, Clientes, Footer
├── pages/          # Inicio, Empresa, Servicios, Contacto
├── App.jsx         # Router y layout
├── index.css       # Variables globales, reset, utilidades
└── main.jsx        # Entry point
```

## Lo que incluye

- Hero slider full-screen con transiciones
- Navegación con dropdowns (Empresa, Servicios) y buscador
- Grid de novedades con tarjetas
- Banners promocionales
- Sección de acceso a clientes
- Footer con datos de contacto, redes sociales y Data Fiscal AFIP
- Responsive (mobile, tablet, desktop)

## Cómo correrlo

```bash
npm install
npm run dev
```

## Propósito

Este proyecto forma parte de mi portfolio como aspirante a una pasantía en Grupo LAC. Busca demostrar capacidad de análisis, diseño de interfaces y desarrollo frontend moderno.

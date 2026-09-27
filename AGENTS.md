# VerdeTech — decisiones técnicas

- Estructura del sitio en la raíz del proyecto: `index.html`, `assets/style.css`, `assets/main.js`, `imagenes/` (logo). Sin carpetas anidadas de assets — decisión del usuario, mantener así.
- Vite con raíz del proyecto (`vite.config.js` sin `root` personalizado, salida `dist/`). Build: `npm run build`.
- CSS en `assets/style.css` y JS en `assets/main.js`; solo rutas relativas en `index.html`.
- Mobile: todo el contenido centrado (reglas dentro del media query `max-width:680px` en `style.css`); desktop sin cambios.
- Contenido sin referencias a venta/precios/modelo de negocio: es solo prototipo para EXPO ITES 2026.

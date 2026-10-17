# Mímara — piel, cuerpo y pausa

Web multipágina de demostración para centros de estética. Vite y JavaScript, identidad ciruela, coral y rosa. Catálogo y precios ilustrativos; sin servidor propio.

## Desarrollo

- `npm run dev`: servidor local.
- `npm run build`: compila y genera 12 páginas HTML, dos redirecciones y 404.
- `npm run preview`: vista del build.
- `node scripts/check-whatsapp.mjs`: comprueba las consultas por tratamiento.
- `node scripts/check-pages.mjs`: comprueba rutas, contenido, enlaces y HTML generado (después del build).

## Páginas

Inicio con selección de tratamientos y accesos al resto del sitio; `/tratamientos` con catálogo y filtros; cinco fichas individuales; `/el-centro` con la experiencia; `/bonos-y-regalos` con configurador y propuestas de sesiones; `/contacto` con WhatsApp, solicitud y FAQ; `/para-centros` con el alcance comercial y `/privacidad`.

Las antiguas rutas `/nosotros`, `/galeria` y enlaces de secciones principales se redirigen a sus páginas nuevas. Cada página tiene título, descripción y contenido HTML propios. La demo sigue marcada `noindex`.

## Funcionalidades

- Filtros por interés, duración y categoría, incluso desde enlaces de la portada.
- Comparador de dos tratamientos, favoritos locales y selección con totales ilustrativos.
- Consulta múltiple con fecha, franja horaria, revisión, edición y copia del mensaje.
- WhatsApp contextual por tratamiento, selección, regalo y bono de sesiones.
- Configurador de regalos: tratamiento y ocasión actualizan la propuesta y el enlace.
- Navegación móvil, indicación de página activa, diálogos accesibles y transiciones con reducción de movimiento.

## Personalización

`src/site.js` concentra servicios, valores, tiempos, imágenes y teléfono. El número de atención configurado es `5492613433108`, proporcionado por el usuario. `businessPhone` configura el enlace comercial del desarrollador. Actualmente ambos usan el mismo número; deben ajustarse al personalizar para un centro.

WhatsApp abre el mensaje para revisión y envío por la persona. La web no confirma turnos, no consulta disponibilidad, no cobra ni emite vouchers. Bonos y regalos son consultas; vigencia, valor, entrega y condiciones se acuerdan con el centro. Dirección, horarios, profesionales e imágenes reales deben incorporarse para cada negocio.

Los favoritos se guardan en este navegador bajo `mimara:favorites`. Las preferencias de solicitud no se almacenan. Fotografías ilustrativas desde Unsplash, retrato editorial local generado y fuentes de Google Fonts. Ver `DIRECCION-VISUAL.md` y `PROPUESTA-COMERCIAL.md`.

## Organización

- `src/routes.js`: rutas, títulos, descripciones y alias compartidos con prerender.
- `src/views.js`: composición y contenido.
- `src/main.js`: navegación e interacciones.
- `src/style.css`, `src/studio.css`, `src/pages.css`: sistema visual y adaptación a pantallas.
- `src/motion.js`: entradas, revelados, profundidad con scroll y respuesta al puntero.
- `scripts/prerender.mjs`: HTML de producción.

El scroll es nativo. Los efectos de puntero requieren mouse preciso. `prefers-reduced-motion` elimina animaciones y transiciones. El contenido se incluye en HTML; explorador, favoritos y solicitudes requieren JavaScript. Agenda, pagos, administración y automatizaciones son integraciones adicionales, no activas en esta demo.

## Agenda de demostración

`/gestion` ofrece agenda diaria/semanal, filtros, búsqueda, creación y reprogramación de turnos, estados, bloqueos por profesional e historial por teléfono (o nombre si falta). Accesible desde `/para-centros`. Datos ficticios en `mimara:agenda-demo:v1` dentro de localStorage; no hay autenticación, servidor ni sincronización con las consultas públicas. No ingresar información real de clientes. El panel no representa un sistema privado de producción.

Los cruces horarios se controlan por profesional, incluyendo bloqueos; cancelados y ausentes liberan la franja. Los turnos adyacentes se permiten. WhatsApp se prepara desde un turno guardado con teléfono; el usuario decide enviarlo. `node scripts/check-agenda.mjs` verifica esas reglas. El build ahora genera 13 páginas.

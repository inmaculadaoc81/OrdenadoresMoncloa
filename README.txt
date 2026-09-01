OrdenadoresMoncloa ONE PAGE
Dominio: http://asusplace.com.es/
Teléfono: +34 914 46 85 03
Diagnóstico: GRATUITO

Variables SMTP compartidas en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada solo en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

El correo no aparece visible en la web, solo en backend.

Google Analytics:
G-SNDRHP5SND

REVISIÓN (fixes adicionales aplicados):
- Ya tenía menú móvil, colisión del chatbot corregida y banner de
  cookies (ya corregido) de commits anteriores; no se ha tocado nada.
- Añadido borde blanco (border:1px solid #fff!important) al botón del
  chat, que faltaba.
- Botón de teléfono del menú (.navcall): acortado a solo el número
  (mismo problema de línea partida visto en otros repos de la familia);
  añadido white-space:nowrap.
- Añadidos datos schema.org LocalBusiness (no existían).
- Añadida sección de contenido SEO propio (#guia), enlazada en el menú.
- H1 de portada reescrito en 3 líneas explícitas (estilo Isra Bravo,
  sin perder la idea original de tiempo sin equipo + qué pasa con los
  archivos): "Tu ordenador no funciona. / Quieres saber cuándo lo
  recuperas / y qué pasará con tus archivos."

REDIRECCIÓN DE URLS ANTIGUAS:
Este sitio era antes multipágina (tenía /servicios/... y /modelos/...,
eliminados en commits anteriores al pasar a one-page). Añadido
middleware.mjs: cualquier URL que no sea "/" redirige (301) a la home.
Añadida la dependencia "@vercel/functions" en package.json.

REVISIÓN ADICIONAL (esta pasada):
- BUG: el README anterior decía que el H1 ya cumplía la regla final de
  la familia, pero eso era incorrecto — el H1 real en el HTML seguía
  siendo "Tu ordenador no funciona. Cuidamos qué pasa con tus
  archivos.", que usa la plantilla "no funciona" ya prohibida para
  toda la familia. Corregido en la pasada siguiente (ver checklist
  unificado más abajo).
- Dominio: usaba http:// en vez de https:// en canonical, JSON-LD,
  robots.txt y sitemap.xml. Actualizado a https://asusplace.com.es/
  en los 4 sitios.
- Faltaban las etiquetas og:title/og:description/og:url/og:type
  (no existía ninguna). Añadidas.
- Verificado: schema.org, borde del chat, sección SEO, banner de
  cookies, package.json y middleware ya estaban correctos; no se ha
  tocado nada más.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "no funciona", como se documentó arriba.
  Reescrito, sin forzar marca (taller multimarca): "Repara tu
  ordenador cuidando tus archivos." (6 palabras).
- BUG REAL — el botón CTA de teléfono no tenía icono, a diferencia del
  de WhatsApp. Añadido (verificado con cuidado el cierre de las
  etiquetas </a>: 19 aperturas / 19 cierres).
- BUG REAL — el formulario no tenía ninguna casilla de consentimiento
  de política de privacidad. Añadida desde cero, con el texto y
  enlace estándar de la familia, resaltado en azul.
- BUG REAL — texto decorativo gigante ".data-art:before" ("DATOS",
  105px) sin ninguna reducción de tamaño en tablet/móvil. Añadida
  (65px tablet, 44px móvil). El ticker ".hero:after" y el badge
  "PRIMERO SABER QUÉ OCURRE" (una píldora legible, no un watermark) ya
  estaban bien, no se han tocado.
- Añadida franja de aviso de servicio técnico independiente debajo del
  menú (no existía). Verificado antes que .header no usa
  display:flex directamente.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Verificado sin bugs: no existe ninguna etiqueta rotada tipo
  hero-chip; Cal.com ya estaba presente; schema.org ya usaba
  correctamente el único teléfono de este repo; formulario
  correctamente conectado a /api/contacto.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 40/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola OrdenadoresMoncloa!".
- Verificado: el menú móvil ya se cerraba correctamente al pulsar un
  enlace.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- Verificado: el H1 en móvil ya está en 48px.
- BUG REAL — botones del hero (.cta) con border-radius de 15px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en wa/pickup (colores sólidos) y relleno
  sólido con #071827 + texto blanco en el botón de teléfono (fondo
  blanco plano, sin borde) al pasar el ratón.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.

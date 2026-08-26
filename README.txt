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

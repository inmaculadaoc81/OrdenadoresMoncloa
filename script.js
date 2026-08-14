const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

function setStatus(message, type='') {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.className = `full status ${type}`.trim();
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const button = form.querySelector('button[type="submit"]');
    const original = button?.innerHTML || 'Enviar consulta →';

    if (button) {
      button.disabled = true;
      button.textContent = 'Enviando…';
    }
    setStatus('Enviando consulta…', 'loading');

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
      });

      let data = {};
      try { data = await response.json(); } catch {}

      if (!response.ok) {
        console.error('OrdenadoresMoncloa formulario:', data);
        const code = data.code || 'EMAIL_SEND_FAILED';
        throw new Error(code);
      }

      form.reset();
      setStatus('✓ Consulta enviada correctamente. Te responderemos lo antes posible.', 'success');
    } catch (error) {
      console.error('OrdenadoresMoncloa formulario:', error);
      const map = {
        MISSING_ENVIRONMENT_VARIABLES: 'La configuración del correo no está completa en Vercel.',
        GOOGLE_OAUTH_INVALID_GRANT: 'La autorización de Google ha caducado o fue revocada.',
        GOOGLE_OAUTH_INVALID_CLIENT: 'Las credenciales OAuth de Google no son válidas.',
        GMAIL_PERMISSION_DENIED: 'Google ha rechazado el permiso para enviar el mensaje.',
        INVALID_FORM_DATA: 'Revisa los campos obligatorios del formulario.'
      };
      setStatus(map[error.message] || 'No se pudo enviar la consulta. Puedes llamarnos o escribirnos por WhatsApp.', 'error');
    } finally {
      if (button) {
        button.disabled = false;
        button.innerHTML = original;
      }
    }
  });
}

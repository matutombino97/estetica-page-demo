import { initScrollAnimations } from '../components/scrollAnimations.js';

export function renderContacto() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Hablemos</span>
        <h1>Contacto</h1>
        <p class="hero-subtitle">Estamos para ayudarte. Agendá tu cita o consultanos lo que necesites.</p>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          
          <!-- FORM -->
          <div class="anim-left">
            <h2 class="section-title" style="text-align:left;font-size:2rem;margin-bottom:var(--space-sm);">Envianos tu consulta</h2>
            <p style="color:var(--gray-500);margin-bottom:var(--space-xl);">Completá el formulario y te respondemos dentro de las 24hs.</p>
            
            <form id="contact-form" novalidate>
              <div class="form-group">
                <label for="name">Nombre completo *</label>
                <input type="text" id="name" class="form-control" placeholder="Tu nombre" required>
                <div class="form-error">Por favor ingresá tu nombre</div>
              </div>

              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);">
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" id="email" class="form-control" placeholder="tu@email.com" required>
                  <div class="form-error">Ingresá un email válido</div>
                </div>
                <div class="form-group">
                  <label for="phone">Teléfono</label>
                  <input type="tel" id="phone" class="form-control" placeholder="+54 261 000 0000">
                </div>
              </div>

              <div class="form-group">
                <label for="treatment">Tratamiento de interés</label>
                <select id="treatment" class="form-control">
                  <option value="">Seleccionar tratamiento...</option>
                  <option value="botox">Botox & Rellenos Faciales</option>
                  <option value="laser">Depilación Láser Soprano</option>
                  <option value="hydraglow">Hydra-Glow Facial</option>
                  <option value="peeling">Peeling Químico</option>
                  <option value="mesoterapia">Mesoterapia Facial</option>
                  <option value="dermapen">Dermapen / Microneedling</option>
                  <option value="limpieza">Limpieza Facial Profunda</option>
                  <option value="prp">Plasma Rico en Plaquetas</option>
                  <option value="otro">Otro / No estoy segura</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea id="message" class="form-control" placeholder="Contanos en qué podemos ayudarte..." required></textarea>
                <div class="form-error">Por favor escribí tu mensaje</div>
              </div>

              <button type="submit" class="btn btn-gold btn-lg" style="width:100%;">
                <i class="fa-regular fa-paper-plane"></i> Enviar Consulta
              </button>
            </form>
          </div>

          <!-- INFO -->
          <div class="anim-right">
            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Mendoza Capital, Barrio Bombal<br>Av. San Martín 1234, Piso 3</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-solid fa-phone"></i></div>
                <div>
                  <h4>Teléfono</h4>
                  <p>+54 261 000 0000</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-regular fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <p>hola@lumiestetica.com</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-regular fa-clock"></i></div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lun — Vie: 9:00 – 20:00 hs<br>Sábados: 9:00 – 14:00 hs</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon" style="background:var(--green-wa);"><i class="fa-brands fa-whatsapp"></i></div>
                <div>
                  <h4>WhatsApp Directo</h4>
                  <p>
                    <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" style="color:var(--gold);font-weight:600;">
                      Enviar mensaje ahora →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <!-- MAP -->
            <div class="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2!2d-68.84!3d-32.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUzJzI0LjAiUyA2OMKwNTAnMjQuMCJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de Lumi Estética">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

    window.scrollTo(0, 0);
    initScrollAnimations();
    initContactForm();
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        // Validate name
        const name = document.getElementById('name');
        const nameGroup = name.closest('.form-group');
        if (!name.value.trim()) {
            nameGroup.classList.add('error');
            valid = false;
        } else {
            nameGroup.classList.remove('error');
        }

        // Validate email
        const email = document.getElementById('email');
        const emailGroup = email.closest('.form-group');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailGroup.classList.add('error');
            valid = false;
        } else {
            emailGroup.classList.remove('error');
        }

        // Validate message
        const message = document.getElementById('message');
        const messageGroup = message.closest('.form-group');
        if (!message.value.trim()) {
            messageGroup.classList.add('error');
            valid = false;
        } else {
            messageGroup.classList.remove('error');
        }

        if (valid) {
            // Show success
            const btn = form.querySelector('button[type="submit"]');
            btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Consulta Enviada!';
            btn.style.background = '#10b981';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> Enviar Consulta';
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        }
    });

    // Remove error on input
    form.querySelectorAll('.form-control').forEach((input) => {
        input.addEventListener('input', () => {
            input.closest('.form-group').classList.remove('error');
        });
    });
}

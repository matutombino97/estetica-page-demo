export function renderContacto() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format,compress&fm=webp&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Hablemos</span>
        <h1>Contacto</h1>
        <p class="hero-subtitle">Estamos para ayudarte. Agendá tu cita o consultanos lo que necesites por WhatsApp.</p>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section">
      <div class="container">
        <div class="contact-grid" style="grid-template-columns: 1fr; max-width: 800px; margin: 0 auto;">
          
          <!-- INFO -->
          <div class="anim-up text-center" style="margin-bottom: var(--space-xl);">
            <h2 class="section-title">¿En qué podemos ayudarte?</h2>
            <p style="color:var(--gray-500); margin-bottom: var(--space-xl);">Escribinos directamente a nuestro WhatsApp y te responderemos a la brevedad para coordinar tu turno.</p>
            
            <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita%20o%20hacer%20una%20consulta." target="_blank" class="btn btn-gold btn-lg" style="margin-bottom: var(--space-2xl);">
              <i class="fa-brands fa-whatsapp"></i> Iniciar chat de WhatsApp
            </a>
          </div>

          <div class="anim-up">
            <div class="contact-info-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-lg); margin-bottom: var(--space-2xl);">
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
                <div class="contact-info-icon"><i class="fa-regular fa-clock"></i></div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lun — Vie: 9:00 – 20:00 hs<br>Sábados: 9:00 – 14:00 hs</p>
                </div>
              </div>
            </div>

            <!-- MAP -->
            <div class="contact-map" style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2!2d-68.84!3d-32.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUzJzI0LjAiUyA2OMKwNTAnMjQuMCJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="400"
                style="border:0;"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de ÉCLAT Estética">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

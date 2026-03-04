import { initScrollAnimations } from '../components/scrollAnimations.js';

export function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Medicina Estética Avanzada</span>
        <h1>Realzá tu belleza natural <em>sin filtros.</em></h1>
        <p class="hero-subtitle">
          Tratamientos personalizados que combinan ciencia y arte para resultados visibles y duraderos. Tu mejor versión empieza hoy.
        </p>
        <div class="hero-buttons">
          <a href="/tratamientos" class="btn btn-gold btn-lg" data-navigo>
            <i class="fa-solid fa-sparkles"></i> Descubrir Tratamientos
          </a>
          <a href="/contacto" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.4);color:white;" data-navigo>
            <i class="fa-regular fa-calendar-check"></i> Agendar Cita
          </a>
        </div>
      </div>
      <div class="hero-scroll">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card anim anim-delay-1">
            <div class="feature-icon">
              <i class="fa-solid fa-user-doctor"></i>
            </div>
            <h3>Profesionales Médicos</h3>
            <p>Tu salud es prioridad. Procedimientos realizados exclusivamente por doctores certificados con años de experiencia.</p>
          </div>
          <div class="feature-card featured anim anim-delay-2">
            <div class="feature-icon">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3>Resultados Naturales</h3>
            <p>Nadie notará qué te hiciste, pero todos notarán que te ves radiante y descansada. Ese es nuestro arte.</p>
          </div>
          <div class="feature-card anim anim-delay-3">
            <div class="feature-icon">
              <i class="fa-solid fa-gem"></i>
            </div>
            <h3>Tecnología Premium</h3>
            <p>Invertimos en la mejor aparatología del mercado mundial (FDA & ANMAT aprobados).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRATAMIENTOS PREVIEW -->
    <section class="section section-pink">
      <div class="container">
        <div class="section-header anim">
          <span class="section-label">Nuestros Favoritos</span>
          <h2 class="section-title">Tratamientos Estrella</h2>
          <p class="section-subtitle">Los procedimientos más demandados por nuestras clientas</p>
        </div>

        <div class="treatments-grid">
          <div class="treatment-card anim anim-delay-1">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>Botox & Rellenos</h3>
              <p>Suaviza líneas de expresión y recupera el volumen perdido con resultados inmediatos.</p>
              <div class="treatment-meta">
                <span><i class="fa-regular fa-clock"></i> 30 min</span>
                <span><i class="fa-solid fa-rotate"></i> 4-6 meses</span>
              </div>
            </div>
          </div>
          <div class="treatment-card anim anim-delay-2">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>Depilación Láser Soprano</h3>
              <p>La solución definitiva para una piel suave todo el año. Indolora y efectiva.</p>
              <div class="treatment-meta">
                <span><i class="fa-regular fa-clock"></i> 45 min</span>
                <span><i class="fa-solid fa-rotate"></i> 6-8 sesiones</span>
              </div>
            </div>
          </div>
          <div class="treatment-card anim anim-delay-3">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>Hydra-Glow Facial</h3>
              <p>Limpieza profunda + hidratación intensa para un brillo instantáneo y piel luminosa.</p>
              <div class="treatment-meta">
                <span><i class="fa-regular fa-clock"></i> 60 min</span>
                <span><i class="fa-solid fa-rotate"></i> Mensual</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center" style="margin-top:var(--space-2xl);">
          <a href="/tratamientos" class="btn btn-gold" data-navigo>
            Ver Todos los Tratamientos <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section-dark" style="padding: var(--space-3xl) 0;">
      <div class="container">
        <div class="stats-bar">
          <div class="stat-item anim anim-delay-1">
            <div class="stat-number">+5000</div>
            <div class="stat-label">Pacientes Felices</div>
          </div>
          <div class="stat-item anim anim-delay-2">
            <div class="stat-number">12</div>
            <div class="stat-label">Años de Experiencia</div>
          </div>
          <div class="stat-item anim anim-delay-3">
            <div class="stat-number">98%</div>
            <div class="stat-label">Satisfacción</div>
          </div>
          <div class="stat-item anim anim-delay-4">
            <div class="stat-number">15+</div>
            <div class="stat-label">Tratamientos</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section">
      <div class="container">
        <div class="section-header anim">
          <span class="section-label">Testimonios</span>
          <h2 class="section-title">Lo que dicen nuestras clientas</h2>
        </div>

        <div class="testimonials-carousel anim" id="testimonials-carousel">
          <div class="testimonials-track" id="testimonials-track">
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p class="testimonial-text">"Tenía miedo de verme artificial, pero el resultado fue increíble. Mis amigas me dicen que me veo descansada y radiante. ¡Nadie nota que es botox!"</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80');"></div>
                <div class="testimonial-info">
                  <h4>Carolina M.</h4>
                  <p>Paciente desde 2022</p>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p class="testimonial-text">"La depilación láser cambió mi vida. Después de 6 sesiones, olvídate de la cera y las cuchillas. El equipo es súper profesional y el lugar es hermoso."</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80');"></div>
                <div class="testimonial-info">
                  <h4>Valentina R.</h4>
                  <p>Paciente desde 2023</p>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p class="testimonial-text">"Me hice el Hydra-Glow antes de mi casamiento y mi piel nunca estuvo tan perfecta. Las fotos quedaron espectaculares. 100% recomendable."</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80');"></div>
                <div class="testimonial-info">
                  <h4>Lucía F.</h4>
                  <p>Paciente desde 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-dots" id="carousel-dots"></div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header anim">
          <span class="section-label">Precios</span>
          <h2 class="section-title" style="color:var(--white);">Packs Exclusivos</h2>
          <p class="section-subtitle" style="color:var(--gray-400);">Combinaciones diseñadas para potenciar tus resultados</p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-card anim anim-delay-1">
            <h3>Glow Básico</h3>
            <div class="pricing-price">$45.000</div>
            <div class="pricing-period">por sesión</div>
            <ul class="pricing-features">
              <li><i class="fa-solid fa-check"></i> Limpieza facial profunda</li>
              <li><i class="fa-solid fa-check"></i> Hidratación con ácido hialurónico</li>
              <li><i class="fa-solid fa-check"></i> Mascarilla revitalizante</li>
              <li><i class="fa-solid fa-check"></i> Protector solar premium</li>
            </ul>
            <a href="/contacto" class="btn btn-outline" style="width:100%;" data-navigo>Consultar</a>
          </div>

          <div class="pricing-card featured anim anim-delay-2">
            <h3>Glow Premium</h3>
            <div class="pricing-price">$120.000</div>
            <div class="pricing-period">pack 3 sesiones</div>
            <ul class="pricing-features">
              <li><i class="fa-solid fa-check"></i> Todo lo del plan Básico</li>
              <li><i class="fa-solid fa-check"></i> Peeling químico suave</li>
              <li><i class="fa-solid fa-check"></i> Dermapen con vitaminas</li>
              <li><i class="fa-solid fa-check"></i> Seguimiento personalizado</li>
              <li><i class="fa-solid fa-check"></i> 10% OFF en otros tratamientos</li>
            </ul>
            <a href="/contacto" class="btn btn-gold" style="width:100%;" data-navigo>Reservar Ahora</a>
          </div>

          <div class="pricing-card anim anim-delay-3">
            <h3>Glow VIP</h3>
            <div class="pricing-price">$280.000</div>
            <div class="pricing-period">programa trimestral</div>
            <ul class="pricing-features">
              <li><i class="fa-solid fa-check"></i> Todo lo del plan Premium</li>
              <li><i class="fa-solid fa-check"></i> Botox zona entrecejo</li>
              <li><i class="fa-solid fa-check"></i> Mesoterapia facial</li>
              <li><i class="fa-solid fa-check"></i> Acceso prioritario a agenda</li>
              <li><i class="fa-solid fa-check"></i> 20% OFF en láser</li>
            </ul>
            <a href="/contacto" class="btn btn-outline" style="width:100%;" data-navigo>Consultar</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-section">
      <div class="container anim">
        <h2>Tu mejor versión te está esperando.</h2>
        <p>No postergues más ese mimo que te merecés. La agenda de este mes se está llenando rápido.</p>
        <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold btn-lg">
          <i class="fa-brands fa-whatsapp"></i> Reservar mi Turno Ahora
        </a>
        <div class="cta-info">
          <span><i class="fa-solid fa-location-dot"></i> Mendoza Capital, Barrio Bombal</span>
          <span><i class="fa-regular fa-clock"></i> Lun-Sáb 9hs a 20hs</span>
        </div>
      </div>
    </section>
  `;

    window.scrollTo(0, 0);
    initScrollAnimations();
    initTestimonialsCarousel();
}

function initTestimonialsCarousel() {
    const track = document.getElementById('testimonials-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const total = cards.length;
    let current = 0;
    let interval;

    // Create dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    function goTo(index) {
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    function next() {
        goTo((current + 1) % total);
    }

    function startAutoplay() {
        interval = setInterval(next, 5000);
    }

    function stopAutoplay() {
        clearInterval(interval);
    }

    const carousel = document.getElementById('testimonials-carousel');
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    startAutoplay();
}

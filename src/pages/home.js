import { initScrollAnimations } from '../components/scrollAnimations.js';

export function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <video class="hero-img" autoplay loop muted playsinline poster="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format,compress&fit=crop&fm=webp&w=1200&q=80" style="object-fit: cover;">
        <source src="/video-clinica.mp4" type="video/mp4">
      </video>
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
          <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.4);color:white;">
            <i class="fa-brands fa-whatsapp"></i> Agendar Cita
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
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
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
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
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
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
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

    <!-- QUIZ -->
    <section class="section section-pink" style="background:var(--white-warm);">
      <div class="container text-center anim">
        <span class="section-label">Asesor Virtual</span>
        <h2 class="section-title">Descubrí tu tratamiento ideal</h2>
        <p class="section-subtitle" style="margin-bottom:var(--space-2xl);">Completá este test de 2 pasos y te recomendamos el mejor protocolo para vos.</p>
        
        <div class="quiz-container" id="quiz-container" style="background:var(--white); padding:var(--space-2xl); border-radius:var(--radius-xl); box-shadow: 0 15px 50px rgba(0,0,0,0.1); border: 1px solid var(--gold); max-width:600px; margin:0 auto; position:relative; overflow:hidden;">
          
          <div id="quiz-step-1" class="quiz-step" style="transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-lg);">¿Qué zona querés tratar principalmente?</h3>
            <div style="display:flex; gap:var(--space-md); justify-content:center; flex-wrap:wrap;">
              <button class="btn btn-outline" style="min-width:140px;" onclick="nextQuizStep(2, 'Rostro')">Rostro</button>
              <button class="btn btn-outline" style="min-width:140px;" onclick="nextQuizStep(2, 'Cuerpo')">Cuerpo</button>
            </div>
          </div>
          
          <div id="quiz-step-2" class="quiz-step" style="display:none; transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-lg);">¿Cuál es tu objetivo principal?</h3>
            <div style="display:flex; flex-direction:column; gap:var(--space-md); align-items:center;">
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Manchas')">Eliminar Manchas o Cicatrices</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Arrugas')">Reducir Arrugas y Flacidez</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Luminosidad')">Más Hidratación y Brillo</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Vello')">Eliminar Vello No Deseado</button>
            </div>
          </div>
          
          <div id="quiz-step-3" class="quiz-step" style="display:none; transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-md);">¡Tenemos tu plan perfecto!</h3>
            <p style="color:var(--gray-500); margin-bottom:var(--space-lg);">Según tus respuestas, te recomendamos:</p>
            <div style="background:var(--white-warm); padding:var(--space-lg); border-radius:var(--radius-md); margin-bottom:var(--space-lg); border: 1px solid var(--gold-light);">
              <h4 id="quiz-result-title" style="color:var(--black); font-size:1.5rem; margin-bottom:var(--space-sm);">Glow Premium</h4>
              <p id="quiz-result-desc" style="color:var(--gray-600);">El tratamiento ideal para renovar tu piel y lograr los objetivos que buscás.</p>
            </div>
            <a href="#" id="quiz-wa-btn" target="_blank" class="btn btn-gold btn-lg" style="width:100%;">
              <i class="fa-brands fa-whatsapp"></i> Consultar por este tratamiento
            </a>
            <button style="border:none; background:transparent; color:var(--gray-400); text-decoration:underline; font-size:0.85rem; margin-top:var(--space-md); cursor:pointer;" onclick="resetQuiz()">Volver a intentar</button>
          </div>
          
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
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&w=100&q=80');"></div>
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
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format,compress&fit=crop&fm=webp&w=100&q=80');"></div>
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
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&w=100&q=80');"></div>
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
            <a href="https://wa.me/549261000000?text=Hola!%20Me%20interesa%20consultar%20por%20los%20Packs%20Exclusivos." target="_blank" class="btn btn-outline" style="width:100%;" data-navigo><i class="fa-brands fa-whatsapp"></i> Consultar</a>
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
            <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20reservar%20el%20Glow%20Premium." target="_blank" class="btn btn-gold" style="width:100%;" data-navigo><i class="fa-brands fa-whatsapp"></i> Reservar Ahora</a>
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
            <a href="https://wa.me/549261000000?text=Hola!%20Me%20interesa%20consultar%20por%20los%20Packs%20Exclusivos." target="_blank" class="btn btn-outline" style="width:100%;" data-navigo><i class="fa-brands fa-whatsapp"></i> Consultar</a>
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

// Global Quiz Logic
window.quizData = { zona: '', objetivo: '' };

window.nextQuizStep = (step, answer) => {
  if (step === 2) window.quizData.zona = answer;
  if (step === 3) window.quizData.objetivo = answer;

  const currentStep = document.getElementById(`quiz-step-${step - 1}`);
  const nextStep = document.getElementById(`quiz-step-${step}`);
  
  if (currentStep) {
    currentStep.style.opacity = '0';
    setTimeout(() => {
      currentStep.style.display = 'none';
      if (nextStep) {
        if (step === 3) calculateQuizResult();
        nextStep.style.display = 'block';
        // Trigger reflow
        void nextStep.offsetWidth;
        nextStep.style.opacity = '1';
      }
    }, 400);
  }
};

window.calculateQuizResult = () => {
  const { zona, objetivo } = window.quizData;
  let title = 'Glow Premium';
  let desc = 'El tratamiento ideal para renovar tu piel y lograr los objetivos que buscás.';
  let waMessage = 'Hola! Completé el asesor virtual y me recomendó el Glow Premium. Quiero más info.';

  if (zona === 'Rostro') {
    if (objetivo === 'Arrugas') {
      title = 'Botox & Rellenos Faciales';
      desc = 'Suaviza líneas de expresión y recupera el volumen perdido con resultados inmediatos.';
      waMessage = 'Hola! Completé el asesor virtual y me recomendó Botox & Rellenos. Quiero más info.';
    } else if (objetivo === 'Manchas') {
      title = 'Peeling Químico';
      desc = 'Renueva tu piel capa por capa, ideal para eliminar manchas y unificar el tono.';
      waMessage = 'Hola! Completé el asesor virtual y me recomendó Peeling Químico. Quiero más info.';
    } else if (objetivo === 'Luminosidad') {
      title = 'Hydra-Glow Facial';
      desc = 'Limpieza profunda e hidratación intensa para un brillo instantáneo y piel luminosa.';
      waMessage = 'Hola! Completé el asesor virtual y me recomendó Hydra-Glow Facial. Quiero más info.';
    }
  } else if (zona === 'Cuerpo' || objetivo === 'Vello') {
    title = 'Depilación Láser Soprano';
    desc = 'La solución definitiva para una piel suave todo el año. Indolora y efectiva.';
    waMessage = 'Hola! Completé el asesor virtual y me recomendó Depilación Láser Soprano. Quiero más info.';
  }

  document.getElementById('quiz-result-title').textContent = title;
  document.getElementById('quiz-result-desc').textContent = desc;
  document.getElementById('quiz-wa-btn').href = `https://wa.me/549261000000?text=${encodeURIComponent(waMessage)}`;
};

window.resetQuiz = () => {
  window.quizData = { zona: '', objetivo: '' };
  const step3 = document.getElementById('quiz-step-3');
  const step1 = document.getElementById('quiz-step-1');
  
  step3.style.opacity = '0';
  setTimeout(() => {
    step3.style.display = 'none';
    step1.style.display = 'block';
    void step1.offsetWidth;
    step1.style.opacity = '1';
  }, 400);
};


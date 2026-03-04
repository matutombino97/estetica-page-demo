import { initScrollAnimations } from '../components/scrollAnimations.js';

const articles = [
  {
    slug: '5-errores-que-envejecen-tu-piel',
    title: '5 Errores que Envejecen tu Piel (y cómo evitarlos)',
    excerpt: 'Desde no usar protector solar hasta dormir con maquillaje. Descubrí los hábitos que te están sumando años y cómo revertirlos con simples cambios.',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    tag: 'Skincare',
    date: '28 Feb, 2026',
  },
  {
    slug: 'botox-mitos-y-verdades',
    title: 'Botox: Mitos y Verdades que Tenés que Saber',
    excerpt: '¿El botox te deja sin expresión? ¿Es peligroso? Derribamos los mitos más comunes sobre uno de los tratamientos más populares del mundo.',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    tag: 'Tratamientos',
    date: '15 Feb, 2026',
  },
  {
    slug: 'rutina-skincare-tipo-piel',
    title: 'Rutina de Skincare para Cada Tipo de Piel',
    excerpt: 'Piel grasa, seca, mixta o sensible: cada tipo necesita un protocolo diferente. Te armamos la rutina perfecta paso a paso con productos accesibles.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tag: 'Tips',
    date: '02 Feb, 2026',
  },
  {
    slug: 'cada-cuanto-limpieza-facial',
    title: '¿Cada cuánto deberías hacerte una Limpieza Facial?',
    excerpt: 'La frecuencia ideal depende de tu tipo de piel y tu estilo de vida. Te explicamos cómo saber cuándo tu piel te pide una limpieza profesional.',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    tag: 'Cuidados',
    date: '20 Ene, 2026',
  },
  {
    slug: 'protector-solar-regla-anti-edad',
    title: 'Protector Solar: La Regla de Oro Anti-Edad',
    excerpt: 'El 80% del envejecimiento de la piel se debe al sol. Por qué el SPF es tu mejor inversión y cómo elegir el ideal para cada tipo de piel.',
    img: 'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80',
    tag: 'Cuidados',
    date: '10 Ene, 2026',
  },
  {
    slug: 'tendencias-estetica-2026',
    title: 'Tendencias en Estética 2026: Lo que Viene',
    excerpt: 'Desde el "glass skin" hasta la bioestimulación con exosomas. Las tendencias que están revolucionando la medicina estética este año.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    tag: 'Tendencias',
    date: '03 Ene, 2026',
  },
];

export function renderBlog() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Tips & Novedades</span>
        <h1>Blog de Belleza</h1>
        <p class="hero-subtitle">Consejos de nuestros especialistas para que cuides tu piel todos los días.</p>
      </div>
    </section>

    <!-- BLOG GRID -->
    <section class="section">
      <div class="container">
        <div class="blog-grid">
          ${articles
      .map(
        (a, i) => `
            <article class="blog-card anim anim-delay-${(i % 3) + 1}">
              <a href="/blog/${a.slug}" data-navigo style="display:block;">
                <div class="blog-card-img" style="background-image: url('${a.img}');">
                  <span class="blog-card-tag">${a.tag}</span>
                </div>
              </a>
              <div class="blog-card-body">
                <div class="blog-card-date"><i class="fa-regular fa-calendar" style="margin-right:6px;"></i>${a.date}</div>
                <h3><a href="/blog/${a.slug}" data-navigo style="color:inherit;transition:color 0.2s;">${a.title}</a></h3>
                <p>${a.excerpt}</p>
                <a href="/blog/${a.slug}" class="blog-read-more" data-navigo>
                  Leer artículo <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          `
      )
      .join('')}
        </div>
      </div>
    </section>

    <!-- NEWSLETTER CTA -->
    <section class="section section-dark">
      <div class="container">
        <div style="max-width:600px;margin:0 auto;text-align:center;" class="anim">
          <span class="section-label">Newsletter</span>
          <h2 class="section-title" style="color:var(--white);">Recibí tips exclusivos</h2>
          <p style="color:var(--gray-400);margin-bottom:var(--space-xl);">Suscribite para recibir consejos de skincare, novedades de tratamientos y promociones exclusivas directo en tu casilla.</p>
          <form class="newsletter-form" onsubmit="return false;">
            <div style="display:flex;gap:var(--space-sm);max-width:450px;margin:0 auto;">
              <input type="email" placeholder="Tu email" class="form-control newsletter-input" required style="flex:1;">
              <button type="submit" class="btn btn-gold newsletter-btn">Suscribirme</button>
            </div>
            <div class="newsletter-msg" style="margin-top:var(--space-md);font-size:0.9rem;"></div>
          </form>
        </div>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
  initScrollAnimations();
  initNewsletterForms();
}

export function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const btn = form.querySelector('.newsletter-btn');
      const msg = form.querySelector('.newsletter-msg');
      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        msg.innerHTML = '<span style="color:#e74c3c;"><i class="fa-solid fa-circle-xmark"></i> Ingresá un email válido</span>';
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

      setTimeout(() => {
        msg.innerHTML = '<span style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> ¡Suscripción exitosa! Revisá tu casilla de email.</span>';
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Listo!';
        btn.style.background = '#10b981';
        input.value = '';

        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = 'Suscribirme';
          btn.style.background = '';
          msg.innerHTML = '';
        }, 4000);
      }, 1200);
    });
  });
}

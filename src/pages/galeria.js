import { initScrollAnimations } from '../components/scrollAnimations.js';

const galleryItems = [
  {
    // Same close-up face photo — before: dull skin, after: glowing
    photo: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80',
    treatment: 'Botox & Rellenos',
    category: 'botox',
    testimonial: 'Me veo 10 años más joven, pero natural. ¡Encantada!',
  },
  {
    // Close-up woman face with clean skin
    photo: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    treatment: 'Hydra-Glow Facial',
    category: 'facial',
    testimonial: 'Mi piel brilla sin maquillaje. Increíble resultado.',
  },
  {
    // Woman touching face
    photo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    treatment: 'Peeling Químico',
    category: 'peeling',
    testimonial: 'Las manchas desaparecieron casi por completo. Muy recomendable.',
  },
  {
    // Close-up skin with good lighting
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    treatment: 'Mesoterapia Facial',
    category: 'mesoterapia',
    testimonial: 'La textura de mi piel mejoró un 100%. Estoy feliz.',
  },
  {
    // Woman profile with smooth skin
    photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
    treatment: 'Dermapen',
    category: 'dermapen',
    testimonial: 'Mis cicatrices de acné se redujeron increíblemente.',
  },
  {
    // Close-up lips/lower face
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    treatment: 'Botox & Rellenos',
    category: 'botox',
    testimonial: 'Labios perfectos, muy naturales. La doctora es una artista.',
  },
];


const categories = ['Todos', 'Botox', 'Facial', 'Peeling', 'Mesoterapia', 'Dermapen'];

export function renderGaleria() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Resultados Reales</span>
        <h1>Galería Antes & Después</h1>
        <p class="hero-subtitle">Deslizá el control para ver las transformaciones de nuestras pacientes.</p>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="section">
      <div class="container">
        <div class="gallery-filters anim">
          ${categories
      .map(
        (c, i) => `
            <button class="gallery-filter-btn${i === 0 ? ' active' : ''}" data-filter="${c.toLowerCase()}">${c}</button>
          `
      )
      .join('')}
        </div>

        <div class="gallery-grid" id="gallery-grid">
          ${galleryItems
      .map(
        (item, i) => `
            <div class="gallery-item anim anim-delay-${(i % 3) + 1}" data-category="${item.category}">
              <div class="ba-slider" data-index="${i}">
                <div class="ba-image ba-before ba-before-filter" style="background-image: url('${item.photo}');"></div>
                <div class="ba-image ba-after" style="background-image: url('${item.photo}');"></div>
                <div class="ba-handle"></div>
                <span class="ba-label ba-label-before">Antes</span>
                <span class="ba-label ba-label-after">Después</span>
              </div>
              <div class="gallery-item-info">
                <h4>${item.treatment}</h4>
                <p>"${item.testimonial}"</p>
              </div>
            </div>
          `
      )
      .join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container anim">
        <h2>¿Querés ser la próxima transformación?</h2>
        <p>Agendá tu consulta y empezá el camino hacia tu mejor versión.</p>
        <a href="/contacto" class="btn btn-gold btn-lg" data-navigo>
          <i class="fa-regular fa-calendar-check"></i> Agendar Consulta
        </a>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
  initScrollAnimations();
  initBASliders();
  initGalleryFilters();
}

function initBASliders() {
  document.querySelectorAll('.ba-slider').forEach((slider) => {
    let isDragging = false;

    const updateSlider = (x) => {
      const rect = slider.getBoundingClientRect();
      let percent = ((x - rect.left) / rect.width) * 100;
      percent = Math.max(5, Math.min(95, percent));

      const before = slider.querySelector('.ba-before');
      const handle = slider.querySelector('.ba-handle');
      before.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      handle.style.left = `${percent}%`;
    };

    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) updateSlider(e.clientX);
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch support
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      updateSlider(e.touches[0].clientX);
    });

    slider.addEventListener('touchmove', (e) => {
      if (isDragging) {
        updateSlider(e.touches[0].clientX);
        e.preventDefault();
      }
    });

    slider.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
}

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      items.forEach((item) => {
        if (filter === 'todos' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

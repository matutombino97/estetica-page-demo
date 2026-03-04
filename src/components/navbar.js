export function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.className = 'navbar';

    nav.innerHTML = `
    <div class="navbar-inner">
      <a href="/" class="navbar-logo" data-navigo>
        <i class="fa-solid fa-gem"></i>
        <span class="navbar-logo-text">LUMI</span>
      </a>

      <div class="navbar-links">
        <a href="/" class="navbar-link" data-navigo>Inicio</a>
        <a href="/tratamientos" class="navbar-link" data-navigo>Tratamientos</a>
        <a href="/nosotros" class="navbar-link" data-navigo>Nosotros</a>
        <a href="/galeria" class="navbar-link" data-navigo>Galería</a>
        <a href="/blog" class="navbar-link" data-navigo>Blog</a>
        <a href="/contacto" class="navbar-link" data-navigo>Contacto</a>
      </div>

      <div class="navbar-cta">
        <a href="/contacto" class="btn btn-gold" data-navigo>
          <i class="fa-regular fa-calendar-check"></i> Agendar Cita
        </a>
      </div>

      <button class="menu-toggle" id="menu-toggle" aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;

    renderMobileMenu();
    initNavbarScroll();
    initMobileMenu();
}

function renderMobileMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    overlay.className = 'mobile-overlay';
    overlay.innerHTML = `
    <a href="/" class="mobile-link" data-navigo>Inicio</a>
    <a href="/tratamientos" class="mobile-link" data-navigo>Tratamientos</a>
    <a href="/nosotros" class="mobile-link" data-navigo>Nosotros</a>
    <a href="/galeria" class="mobile-link" data-navigo>Galería</a>
    <a href="/blog" class="mobile-link" data-navigo>Blog</a>
    <a href="/contacto" class="mobile-link" data-navigo>Contacto</a>
    <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold btn-lg" style="margin-top:auto;">
      <i class="fa-brands fa-whatsapp"></i> Agendar Cita
    </a>
  `;
}

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Trigger on load in case page is already scrolled
    if (window.scrollY > 80) navbar.classList.add('scrolled');
}

function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('mobile-menu-overlay');
    let backdrop = document.querySelector('.mobile-overlay-backdrop');

    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mobile-overlay-backdrop';
        document.body.appendChild(backdrop);
    }

    const close = () => {
        toggle.classList.remove('open');
        overlay.classList.remove('open');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
        const isOpen = overlay.classList.contains('open');
        if (isOpen) {
            close();
        } else {
            toggle.classList.add('open');
            overlay.classList.add('open');
            backdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    });

    backdrop.addEventListener('click', close);

    overlay.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', close);
    });
}

export function setActiveLink(path) {
    document.querySelectorAll('.navbar-link, .mobile-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === path || (path === '/' && href === '/')) {
            link.classList.add('active');
        }
    });
}

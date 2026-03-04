export function renderFooter() {
  const footer = document.getElementById('footer-container');
  footer.innerHTML = `
    <div class="footer">
      <div class="container">
        <div class="footer-grid">
          
          <div class="footer-brand">
            <div class="navbar-logo">
              <i class="fa-solid fa-gem" style="color:var(--gold);font-size:1.5rem;"></i>
              <span class="navbar-logo-text">LUMI</span>
            </div>
            <p>Medicina estética avanzada. Combinamos ciencia y arte para realzar tu belleza natural con resultados visibles y duraderos.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
              <a href="https://wa.me/549261000000" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h4>Navegación</h4>
            <a href="/" data-navigo>Inicio</a>
            <a href="/tratamientos" data-navigo>Tratamientos</a>
            <a href="/nosotros" data-navigo>Nosotros</a>
            <a href="/galeria" data-navigo>Galería</a>
            <a href="/blog" data-navigo>Blog</a>
            <a href="/contacto" data-navigo>Contacto</a>
          </div>

          <div class="footer-col">
            <h4>Horarios</h4>
            <p>
              <strong style="color:var(--white);">Lun — Vie</strong><br>
              9:00 – 20:00 hs<br><br>
              <strong style="color:var(--white);">Sábados</strong><br>
              9:00 – 14:00 hs<br><br>
              <strong style="color:var(--white);">Domingos</strong><br>
              Cerrado
            </p>
          </div>

          <div class="footer-col">
            <h4>Newsletter</h4>
            <p>Recibí tips de belleza y ofertas exclusivas.</p>
            <form class="footer-newsletter newsletter-form" onsubmit="return false;">
              <input type="email" placeholder="Tu email" aria-label="Email para newsletter" class="newsletter-input" required>
              <button type="submit" class="newsletter-btn">OK</button>
            </form>
            <div class="newsletter-msg" style="margin-top:8px;font-size:0.8rem;"></div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Lumi Estética. Todos los derechos reservados.</p>
          <p>Mendoza Capital, Barrio Bombal</p>
        </div>
      </div>
    </div>
  `;
}

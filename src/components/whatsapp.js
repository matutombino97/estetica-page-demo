export function renderWhatsApp() {
    const container = document.getElementById('whatsapp-container');
    container.innerHTML = `
    <!-- WhatsApp Float Button -->
    <a href="https://wa.me/549261000000?text=Hola!%20Vengo%20de%20la%20web." target="_blank" class="wa-float" aria-label="WhatsApp">
      <i class="fa-brands fa-whatsapp"></i>
    </a>

    <!-- Demo Banner -->
    <div class="demo-banner">
      <div class="demo-banner-alert">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>SITIO DEMO</span>
      </div>
      <p>Esta página es un diseño de muestra. La estética no existe.</p>
      <a href="https://wa.me/5492613433108?text=Hola!%20Vi%20la%20demo%20de%20estetica%20y%20quiero%20una%20web%20asi." 
         target="_blank" class="demo-banner-cta">
        <i class="fa-solid fa-laptop-code"></i> ¿Querés una web así? Contactame
      </a>
    </div>
  `;
}

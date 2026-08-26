import { initScrollAnimations } from '../components/scrollAnimations.js';

const treatments = [
    {
        id: 'botox',
        name: 'Botox & Rellenos Faciales',
        desc: 'Suaviza lÃ­neas de expresiÃ³n y recupera el volumen perdido con resultados inmediatos y naturales.',
        img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '30 min',
        recovery: '4-6 meses',
        price: 'Desde $55.000',
        details: [
            '<strong>Zonas:</strong> Patas de gallo, entrecejo, frente, labios, pÃ³mulos, mentÃ³n.',
            '<strong>Producto:</strong> Toxina botulÃ­nica tipo A (BotoxÂ®, DysportÂ®).',
            '<strong>Dolor:</strong> MÃ­nimo. Usamos anestesia tÃ³pica para tu comodidad.',
            '<strong>Resultado:</strong> Visible a las 48-72hs. Aspecto natural y descansado.',
            '<strong>RecomendaciÃ³n:</strong> Evitar ejercicio intenso las primeras 24hs.',
        ],
    },
    {
        id: 'laser',
        name: 'DepilaciÃ³n LÃ¡ser Soprano',
        desc: 'La soluciÃ³n definitiva para una piel suave todo el aÃ±o. TecnologÃ­a de trÃ­o lÃ¡ser indolora.',
        img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '45 min',
        recovery: '6-8 sesiones',
        price: 'Desde $35.000',
        details: [
            '<strong>TecnologÃ­a:</strong> Soprano Ice Platinum (TrÃ­o lÃ¡ser: Alejandrita, Diodo, Nd:YAG).',
            '<strong>Beneficio:</strong> Indoloro y apto para todo tipo de piel, incluso bronceada.',
            '<strong>Zonas:</strong> Cuerpo entero, rostro, bikini, axilas.',
            '<strong>Sesiones:</strong> 6 a 8 para eliminaciÃ³n total. Mantenimiento anual.',
            '<strong>Post-sesiÃ³n:</strong> Proteger del sol 48hs. Sin depilaciÃ³n con cera entre sesiones.',
        ],
    },
    {
        id: 'hydraglow',
        name: 'Hydra-Glow Facial',
        desc: 'Limpieza profunda + hidrataciÃ³n intensa. El tratamiento estrella para un brillo instantÃ¡neo.',
        img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '60 min',
        recovery: 'Mensual',
        price: 'Desde $45.000',
        details: [
            '<strong>Procedimiento:</strong> Peeling ultrasÃ³nico + extracciÃ³n + mascarilla de Ã¡cido hialurÃ³nico.',
            '<strong>Resultado:</strong> Piel luminosa, poros limpios y textura suave al instante.',
            '<strong>Ideal:</strong> Previo a eventos, fiestas, bodas o sesiones de fotos.',
            '<strong>Frecuencia:</strong> Una vez al mes para mantener resultados Ã³ptimos.',
            '<strong>Incluye:</strong> SÃ©rum vitamÃ­nico y protecciÃ³n solar post-tratamiento.',
        ],
    },
    {
        id: 'peeling',
        name: 'Peeling QuÃ­mico',
        desc: 'Renueva tu piel capa por capa. Elimina manchas, marcas de acnÃ© y textura irregular.',
        img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '40 min',
        recovery: '3-7 dÃ­as',
        price: 'Desde $40.000',
        details: [
            '<strong>Tipos:</strong> Superficial (Ã¡cido glicÃ³lico), medio (TCA), profundo (fenol).',
            '<strong>Beneficios:</strong> Elimina manchas solares, lÃ­neas finas, textura irregular.',
            '<strong>Post:</strong> DescamaciÃ³n suave de 3-7 dÃ­as. Piel renovada y luminosa.',
            '<strong>Frecuencia:</strong> Cada 4-6 semanas segÃºn protocolo mÃ©dico.',
            '<strong>Cuidado:</strong> ProtecciÃ³n solar obligatoria SPF 50+.',
        ],
    },
    {
        id: 'mesoterapia',
        name: 'Mesoterapia Facial',
        desc: 'CÃ³ctel de vitaminas, minerales y Ã¡cido hialurÃ³nico inyectados directamente en la piel.',
        img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '30 min',
        recovery: '24-48 hs',
        price: 'Desde $50.000',
        details: [
            '<strong>Ingredientes:</strong> Ãcido hialurÃ³nico, vitaminas C y E, aminoÃ¡cidos, pÃ©ptidos.',
            '<strong>Beneficios:</strong> HidrataciÃ³n profunda, luminosidad, firmeza y elasticidad.',
            '<strong>TÃ©cnica:</strong> Micro-inyecciones con aguja ultrafina. MÃ­nimas molestias.',
            '<strong>Sesiones:</strong> Protocolo de 4 sesiones cada 15 dÃ­as.',
            '<strong>Resultado:</strong> Piel rejuvenecida, jugosa y con efecto "glass skin".',
        ],
    },
    {
        id: 'dermapen',
        name: 'Dermapen / Microneedling',
        desc: 'Estimula la producciÃ³n natural de colÃ¡geno a travÃ©s de micro-punciones controladas.',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '45 min',
        recovery: '2-3 dÃ­as',
        price: 'Desde $48.000',
        details: [
            '<strong>CÃ³mo funciona:</strong> Micro-agujas estimulan la regeneraciÃ³n celular natural.',
            '<strong>Beneficios:</strong> Reduce poros, cicatrices de acnÃ©, arrugas finas y estrÃ­as.',
            '<strong>CombinaciÃ³n:</strong> Se potencia con sÃ©rum de vitamina C o factores de crecimiento.',
            '<strong>Sesiones:</strong> 3-6 sesiones cada 4 semanas.',
            '<strong>Resultado:</strong> Piel mÃ¡s firme, pareja y rejuvenecida progresivamente.',
        ],
    },
    {
        id: 'limpieza',
        name: 'Limpieza Facial Profunda',
        desc: 'El paso fundamental para una piel sana. ExtracciÃ³n profesional y nutriciÃ³n intensiva.',
        img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '50 min',
        recovery: 'Inmediato',
        price: 'Desde $25.000',
        details: [
            '<strong>Pasos:</strong> Desmaquillado, vaporizaciÃ³n, extracciÃ³n, alta frecuencia, mascarilla.',
            '<strong>Beneficios:</strong> Elimina puntos negros, cÃ©lulas muertas y oxigena la piel.',
            '<strong>Frecuencia:</strong> Cada 30-45 dÃ­as como rutina de mantenimiento.',
            '<strong>Para quiÃ©n:</strong> Todo tipo de piel. Ideal como primer paso de cualquier protocolo.',
            '<strong>Incluye:</strong> DiagnÃ³stico personalizado de tu tipo de piel.',
        ],
    },
    {
        id: 'plasma',
        name: 'Plasma Rico en Plaquetas (PRP)',
        desc: 'Tu propia sangre es la medicina. RegeneraciÃ³n celular con factores de crecimiento autÃ³logos.',
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format,compress&fit=crop&fm=webp&w=800&q=80',
        duration: '45 min',
        recovery: '1-2 dÃ­as',
        price: 'Desde $60.000',
        details: [
            '<strong>Proceso:</strong> ExtracciÃ³n de sangre â†’ centrifugado â†’ inyecciÃ³n del plasma en la piel.',
            '<strong>Beneficios:</strong> Rejuvenecimiento natural, mejora textura, estimula colÃ¡geno.',
            '<strong>AplicaciÃ³n:</strong> Facial, cuero cabelludo (alopecia), ojeras y cuello.',
            '<strong>Sesiones:</strong> 3 sesiones cada 4 semanas. Mantenimiento semestral.',
            '<strong>Ventaja:</strong> 100% biocompatible. Sin riesgo de rechazo o alergia.',
        ],
    },
];

export function renderTratamientos() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">âœ¦ CatÃ¡logo Completo</span>
        <h1>Nuestros Tratamientos</h1>
        <p class="hero-subtitle">Cada procedimiento es personalizado y realizado con la mÃ¡s alta tecnologÃ­a y estÃ¡ndares mÃ©dicos.</p>
      </div>
    </section>

    <!-- TREATMENTS LIST -->
    <section class="section">
      <div class="container">
        <div class="treatments-grid" id="treatments-list">
          ${treatments
            .map(
                (t, i) => `
            <div class="treatment-card anim anim-delay-${(i % 3) + 1}" onclick="openTreatmentModal('${t.id}')">
              <div class="treatment-card-img" style="background-image: url('${t.img}');"></div>
              <div class="treatment-card-body">
                <h3>${t.name}</h3>
                <p>${t.desc}</p>
                <div class="treatment-meta">
                  <span><i class="fa-regular fa-clock"></i> ${t.duration}</span>
                  <span><i class="fa-solid fa-rotate"></i> ${t.recovery}</span>
                  <span><i class="fa-solid fa-tag"></i> ${t.price}</span>
                </div>
                <button class="btn btn-outline" style="width: 100%; margin-top: var(--space-md); margin-bottom: var(--space-sm);" onclick="event.stopPropagation(); openTreatmentModal('${t.id}')">
                  <i class="fa-solid fa-magnifying-glass-plus"></i> Ver Detalles
                </button>
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
        <h2>Â¿No sabÃ©s cuÃ¡l es el tratamiento ideal para vos?</h2>
        <p>AgendÃ¡ una consulta gratuita y diseÃ±amos un plan personalizado segÃºn tus necesidades.</p>
        <button class="btn btn-gold btn-lg" onclick="window.openBookingModal('Consulta Gratuita')"><i class="fa-brands fa-whatsapp"></i> Agendar Consulta Gratis</button>
      </div>
    </section>
  `;

  // Inject Modal HTML
  if (!document.getElementById('treatment-detail-modal')) {
    const modalHtml = `
      <div id="treatment-detail-modal" class="modal-overlay" style="display: none;">
        <div class="modal-content" style="max-width: 600px; padding: 0; overflow: hidden; display: flex; flex-direction: column; max-height: 90vh;">
          <button class="modal-close" style="z-index:10; background:rgba(255,255,255,0.8); border-radius:50%; width:30px; height:30px;" onclick="closeTreatmentModal()"><i class="fa-solid fa-xmark"></i></button>
          <div id="tdm-img" style="height: 250px; background-size: cover; background-position: center; flex-shrink: 0;"></div>
          <div style="padding: var(--space-xl); overflow-y: auto;">
            <h3 id="tdm-title" style="margin-bottom: var(--space-sm);"></h3>
            <p id="tdm-desc" style="color: var(--gray-500); margin-bottom: var(--space-lg);"></p>
            <div class="treatment-meta" id="tdm-meta" style="margin-bottom: var(--space-xl); border-bottom: 1px solid var(--gray-200); padding-bottom: var(--space-md);"></div>
            <ul id="tdm-details" style="list-style: disc; padding-left: var(--space-lg); margin-bottom: var(--space-xl); line-height: 1.8; color: var(--gray-600);"></ul>
            <button class="btn btn-gold" id="tdm-cta" style="width: 100%;">
              <i class="fa-brands fa-whatsapp"></i> Reservar este Tratamiento
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  window.scrollTo(0, 0);
  
  window.currentTreatmentsData = treatments;

  window.openTreatmentModal = (id) => {
    const t = window.currentTreatmentsData.find(x => x.id === id);
    if (!t) return;
    
    document.getElementById('tdm-img').style.backgroundImage = `url('${t.img}')`;
    document.getElementById('tdm-title').textContent = t.name;
    document.getElementById('tdm-desc').textContent = t.desc;
    
    document.getElementById('tdm-meta').innerHTML = `
      <span><i class="fa-regular fa-clock"></i> ${t.duration}</span>
      <span><i class="fa-solid fa-rotate"></i> ${t.recovery}</span>
      <span><i class="fa-solid fa-tag"></i> ${t.price}</span>
    `;
    
    document.getElementById('tdm-details').innerHTML = t.details.map(d => `<li>${d}</li>`).join('');
    
    const ctaBtn = document.getElementById('tdm-cta');
    ctaBtn.onclick = () => {
      closeTreatmentModal();
      window.openBookingModal(t.name);
    };

    document.getElementById('treatment-detail-modal').style.display = 'flex';
  };

  window.closeTreatmentModal = () => {
    document.getElementById('treatment-detail-modal').style.display = 'none';
  };
  
  initScrollAnimations();
}


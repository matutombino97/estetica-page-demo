import { initScrollAnimations } from '../components/scrollAnimations.js';

const treatments = [
    {
        id: 'botox',
        name: 'Botox & Rellenos Faciales',
        desc: 'Suaviza líneas de expresión y recupera el volumen perdido con resultados inmediatos y naturales.',
        img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
        duration: '30 min',
        recovery: '4-6 meses',
        price: 'Desde $55.000',
        details: [
            '<strong>Zonas:</strong> Patas de gallo, entrecejo, frente, labios, pómulos, mentón.',
            '<strong>Producto:</strong> Toxina botulínica tipo A (Botox®, Dysport®).',
            '<strong>Dolor:</strong> Mínimo. Usamos anestesia tópica para tu comodidad.',
            '<strong>Resultado:</strong> Visible a las 48-72hs. Aspecto natural y descansado.',
            '<strong>Recomendación:</strong> Evitar ejercicio intenso las primeras 24hs.',
        ],
    },
    {
        id: 'laser',
        name: 'Depilación Láser Soprano',
        desc: 'La solución definitiva para una piel suave todo el año. Tecnología de trío láser indolora.',
        img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
        duration: '45 min',
        recovery: '6-8 sesiones',
        price: 'Desde $35.000',
        details: [
            '<strong>Tecnología:</strong> Soprano Ice Platinum (Trío láser: Alejandrita, Diodo, Nd:YAG).',
            '<strong>Beneficio:</strong> Indoloro y apto para todo tipo de piel, incluso bronceada.',
            '<strong>Zonas:</strong> Cuerpo entero, rostro, bikini, axilas.',
            '<strong>Sesiones:</strong> 6 a 8 para eliminación total. Mantenimiento anual.',
            '<strong>Post-sesión:</strong> Proteger del sol 48hs. Sin depilación con cera entre sesiones.',
        ],
    },
    {
        id: 'hydraglow',
        name: 'Hydra-Glow Facial',
        desc: 'Limpieza profunda + hidratación intensa. El tratamiento estrella para un brillo instantáneo.',
        img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
        duration: '60 min',
        recovery: 'Mensual',
        price: 'Desde $45.000',
        details: [
            '<strong>Procedimiento:</strong> Peeling ultrasónico + extracción + mascarilla de ácido hialurónico.',
            '<strong>Resultado:</strong> Piel luminosa, poros limpios y textura suave al instante.',
            '<strong>Ideal:</strong> Previo a eventos, fiestas, bodas o sesiones de fotos.',
            '<strong>Frecuencia:</strong> Una vez al mes para mantener resultados óptimos.',
            '<strong>Incluye:</strong> Sérum vitamínico y protección solar post-tratamiento.',
        ],
    },
    {
        id: 'peeling',
        name: 'Peeling Químico',
        desc: 'Renueva tu piel capa por capa. Elimina manchas, marcas de acné y textura irregular.',
        img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
        duration: '40 min',
        recovery: '3-7 días',
        price: 'Desde $40.000',
        details: [
            '<strong>Tipos:</strong> Superficial (ácido glicólico), medio (TCA), profundo (fenol).',
            '<strong>Beneficios:</strong> Elimina manchas solares, líneas finas, textura irregular.',
            '<strong>Post:</strong> Descamación suave de 3-7 días. Piel renovada y luminosa.',
            '<strong>Frecuencia:</strong> Cada 4-6 semanas según protocolo médico.',
            '<strong>Cuidado:</strong> Protección solar obligatoria SPF 50+.',
        ],
    },
    {
        id: 'mesoterapia',
        name: 'Mesoterapia Facial',
        desc: 'Cóctel de vitaminas, minerales y ácido hialurónico inyectados directamente en la piel.',
        img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
        duration: '30 min',
        recovery: '24-48 hs',
        price: 'Desde $50.000',
        details: [
            '<strong>Ingredientes:</strong> Ácido hialurónico, vitaminas C y E, aminoácidos, péptidos.',
            '<strong>Beneficios:</strong> Hidratación profunda, luminosidad, firmeza y elasticidad.',
            '<strong>Técnica:</strong> Micro-inyecciones con aguja ultrafina. Mínimas molestias.',
            '<strong>Sesiones:</strong> Protocolo de 4 sesiones cada 15 días.',
            '<strong>Resultado:</strong> Piel rejuvenecida, jugosa y con efecto "glass skin".',
        ],
    },
    {
        id: 'dermapen',
        name: 'Dermapen / Microneedling',
        desc: 'Estimula la producción natural de colágeno a través de micro-punciones controladas.',
        img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
        duration: '45 min',
        recovery: '2-3 días',
        price: 'Desde $48.000',
        details: [
            '<strong>Cómo funciona:</strong> Micro-agujas estimulan la regeneración celular natural.',
            '<strong>Beneficios:</strong> Reduce poros, cicatrices de acné, arrugas finas y estrías.',
            '<strong>Combinación:</strong> Se potencia con sérum de vitamina C o factores de crecimiento.',
            '<strong>Sesiones:</strong> 3-6 sesiones cada 4 semanas.',
            '<strong>Resultado:</strong> Piel más firme, pareja y rejuvenecida progresivamente.',
        ],
    },
    {
        id: 'limpieza',
        name: 'Limpieza Facial Profunda',
        desc: 'El paso fundamental para una piel sana. Extracción profesional y nutrición intensiva.',
        img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
        duration: '50 min',
        recovery: 'Inmediato',
        price: 'Desde $25.000',
        details: [
            '<strong>Pasos:</strong> Desmaquillado, vaporización, extracción, alta frecuencia, mascarilla.',
            '<strong>Beneficios:</strong> Elimina puntos negros, células muertas y oxigena la piel.',
            '<strong>Frecuencia:</strong> Cada 30-45 días como rutina de mantenimiento.',
            '<strong>Para quién:</strong> Todo tipo de piel. Ideal como primer paso de cualquier protocolo.',
            '<strong>Incluye:</strong> Diagnóstico personalizado de tu tipo de piel.',
        ],
    },
    {
        id: 'plasma',
        name: 'Plasma Rico en Plaquetas (PRP)',
        desc: 'Tu propia sangre es la medicina. Regeneración celular con factores de crecimiento autólogos.',
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        duration: '45 min',
        recovery: '1-2 días',
        price: 'Desde $60.000',
        details: [
            '<strong>Proceso:</strong> Extracción de sangre → centrifugado → inyección del plasma en la piel.',
            '<strong>Beneficios:</strong> Rejuvenecimiento natural, mejora textura, estimula colágeno.',
            '<strong>Aplicación:</strong> Facial, cuero cabelludo (alopecia), ojeras y cuello.',
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
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Catálogo Completo</span>
        <h1>Nuestros Tratamientos</h1>
        <p class="hero-subtitle">Cada procedimiento es personalizado y realizado con la más alta tecnología y estándares médicos.</p>
      </div>
    </section>

    <!-- TREATMENTS LIST -->
    <section class="section">
      <div class="container">
        <div class="treatments-grid" id="treatments-list">
          ${treatments
            .map(
                (t, i) => `
            <div class="treatment-card anim anim-delay-${(i % 3) + 1}" id="treatment-${t.id}">
              <div class="treatment-card-img" style="background-image: url('${t.img}');"></div>
              <div class="treatment-card-body">
                <h3>${t.name}</h3>
                <p>${t.desc}</p>
                <div class="treatment-meta">
                  <span><i class="fa-regular fa-clock"></i> ${t.duration}</span>
                  <span><i class="fa-solid fa-rotate"></i> ${t.recovery}</span>
                  <span><i class="fa-solid fa-tag"></i> ${t.price}</span>
                </div>
              </div>
              <div class="treatment-details" id="details-${t.id}">
                <ul>
                  ${t.details.map((d) => `<li>${d}</li>`).join('')}
                </ul>
              </div>
              <button class="treatment-toggle" onclick="toggleTreatment('${t.id}', this)">
                <span>Más información</span> <i class="fa-solid fa-chevron-down"></i>
              </button>
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
        <h2>¿No sabés cuál es el tratamiento ideal para vos?</h2>
        <p>Agendá una consulta gratuita y diseñamos un plan personalizado según tus necesidades.</p>
        <a href="/contacto" class="btn btn-gold btn-lg" data-navigo>
          <i class="fa-regular fa-calendar-check"></i> Agendar Consulta Gratis
        </a>
      </div>
    </section>
  `;

    window.scrollTo(0, 0);

    // Global toggle function
    window.toggleTreatment = (id, btn) => {
        const details = document.getElementById(`details-${id}`);
        const isOpen = details.classList.contains('open');
        details.classList.toggle('open');
        btn.classList.toggle('open');
        btn.querySelector('span').textContent = isOpen ? 'Más información' : 'Menos información';
    };

    initScrollAnimations();
}

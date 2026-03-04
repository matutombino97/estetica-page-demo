import { initScrollAnimations } from '../components/scrollAnimations.js';

const team = [
  {
    name: 'Dra. Camila Sánchez',
    role: 'Directora Médica',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Especialista en Dermatología Estética con 15 años de experiencia. Formada en la UBA y especializada en rejuvenecimiento facial en Barcelona.',
  },
  {
    name: 'Dr. Martín Rivas',
    role: 'Cirujano Plástico',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Cirujano plástico matriculado con maestría en Medicina Estética. Referente en técnicas de Botox y rellenos con ácido hialurónico.',
  },
  {
    name: 'Lic. Sofía Moretti',
    role: 'Cosmiatra Senior',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964ae17?auto=format&fit=crop&w=600&q=80',
    bio: 'Cosmiatra con 10 años de práctica clínica. Certificada en dermapen, peelings avanzados y protocolos de skincare personalizados.',
  },
  {
    name: 'Dra. Valentina Lagos',
    role: 'Dermatóloga',
    photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
    bio: 'Dermatóloga clínica y estética. Especialista en tratamientos con láser, manchas pigmentarias y rosácea. Posgrado en la Universidad de Milán.',
  },
  {
    name: 'Lic. Joaquín Herrera',
    role: 'Kinesiólogo Estético',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    bio: 'Kinesiólogo con formación en drenaje linfático, masajes post-quirúrgicos y rehabilitación facial. Más de 2.000 procedimientos realizados.',
  },
  {
    name: 'Lic. Lucía Fernández',
    role: 'Nutricionista Estética',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Nutricionista especializada en dermonutrición y suplementación para piel. Diseña planes nutricionales que potencian los tratamientos estéticos.',
  },
  {
    name: 'Lic. Ana Paula Domínguez',
    role: 'Cosmiatra',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Cosmiatra especializada en limpiezas faciales profundas, HydraFacial y protocolos de luminosidad. Atención cálida y personalizada.',
  },
];

const values = [
  {
    icon: 'fa-solid fa-shield-heart',
    title: 'Seguridad Primero',
    desc: 'Todos nuestros procedimientos son realizados por profesionales matriculados con productos aprobados por ANMAT y FDA.',
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Resultados Naturales',
    desc: 'Creemos en realzar tu belleza natural. Nada de caras congeladas: nuestro objetivo es que te veas como vos, pero mejor.',
  },
  {
    icon: 'fa-solid fa-microscope',
    title: 'Tecnología de Punta',
    desc: 'Equipamiento de última generación importado de Europa y Estados Unidos, con calibración y mantenimiento permanente.',
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Atención Humana',
    desc: 'Cada paciente es única. Escuchamos tus necesidades, evaluamos tu caso y diseñamos un plan 100% personalizado.',
  },
];

export function renderNosotros() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Sobre Nosotros</span>
        <h1>Conocé al Equipo</h1>
        <p class="hero-subtitle">Profesionales apasionados por la belleza natural y la medicina estética de excelencia.</p>
      </div>
    </section>

    <!-- HISTORY -->
    <section class="section">
      <div class="container">
        <div class="two-col-layout">
          <div class="anim anim-left">
            <span class="section-label">Nuestra Historia</span>
            <h2 class="section-title">Más de una década cuidando tu belleza</h2>
            <p style="color:var(--gray-500);line-height:1.8;margin-bottom:var(--space-lg);">
              Lumi nació en 2014 de una idea simple pero ambiciosa: crear un espacio donde la medicina estética se encuentre con el arte y la tecnología. Un lugar donde cada paciente sea tratada como única, con protocolos diseñados exclusivamente para ella.
            </p>
            <p style="color:var(--gray-500);line-height:1.8;margin-bottom:var(--space-lg);">
              Fundada por la Dra. Camila Sánchez en el corazón de Barrio Bombal, Mendoza, lo que comenzó como un consultorio de 40m² hoy es un centro de referencia con más de 150m² equipados con la última tecnología del mercado mundial.
            </p>
            <p style="color:var(--gray-500);line-height:1.8;">
              Nuestro equipo creció de 2 a 7 profesionales, pero nuestro compromiso sigue siendo el mismo: resultados visibles, naturales y seguros. Cada técnica, cada producto y cada protocolo es seleccionado con un estándar: si no lo usaríamos en nosotras mismas, no lo usamos en nuestras pacientes.
            </p>
          </div>
          <div class="anim anim-right">
            <img src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?auto=format&fit=crop&w=800&q=80" alt="Clínica Lumi" style="width:100%;border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);">
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="section section-pink">
      <div class="container">
        <div class="text-center anim" style="margin-bottom:var(--space-3xl);">
          <span class="section-label">Lo que nos guía</span>
          <h2 class="section-title">Nuestros Valores</h2>
        </div>
        <div class="values-grid">
          ${values
      .map(
        (v, i) => `
            <div class="value-card anim anim-delay-${i + 1}">
              <div class="value-icon"><i class="${v.icon}"></i></div>
              <h3>${v.title}</h3>
              <p>${v.desc}</p>
            </div>
          `
      )
      .join('')}
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="section">
      <div class="container">
        <div class="text-center anim" style="margin-bottom:var(--space-3xl);">
          <span class="section-label">Profesionales</span>
          <h2 class="section-title">Nuestro Equipo</h2>
          <p style="max-width:600px;margin:var(--space-md) auto 0;color:var(--gray-500);">7 especialistas trabajando en conjunto para ofrecerte los mejores resultados con la máxima seguridad.</p>
        </div>
        <div class="team-grid">
          ${team
      .map(
        (m, i) => `
            <div class="team-card anim anim-delay-${(i % 4) + 1}">
              <div class="team-photo" style="background-image: url('${m.photo}');"></div>
              <div class="team-info">
                <h3>${m.name}</h3>
                <p class="team-role">${m.role}</p>
                <p class="team-bio">${m.bio}</p>
              </div>
            </div>
          `
      )
      .join('')}
        </div>
      </div>
    </section>

    <!-- CERTIFICATIONS -->
    <section class="section section-dark">
      <div class="container text-center anim">
        <span class="section-label">Certificaciones</span>
        <h2 class="section-title" style="color:var(--white);">Avalados por los Mejores</h2>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:var(--space-3xl);margin-top:var(--space-2xl);align-items:center;">
          <div style="text-align:center;">
            <i class="fa-solid fa-award" style="font-size:2.5rem;color:var(--gold);display:block;margin-bottom:var(--space-sm);"></i>
            <span style="color:var(--gray-400);font-size:0.85rem;">ANMAT<br>Certificados</span>
          </div>
          <div style="text-align:center;">
            <i class="fa-solid fa-certificate" style="font-size:2.5rem;color:var(--gold);display:block;margin-bottom:var(--space-sm);"></i>
            <span style="color:var(--gray-400);font-size:0.85rem;">Allergan<br>Partner</span>
          </div>
          <div style="text-align:center;">
            <i class="fa-solid fa-medal" style="font-size:2.5rem;color:var(--gold);display:block;margin-bottom:var(--space-sm);"></i>
            <span style="color:var(--gray-400);font-size:0.85rem;">SEME<br>Miembros</span>
          </div>
          <div style="text-align:center;">
            <i class="fa-solid fa-shield-halved" style="font-size:2.5rem;color:var(--gold);display:block;margin-bottom:var(--space-sm);"></i>
            <span style="color:var(--gray-400);font-size:0.85rem;">ISO 9001<br>Calidad</span>
          </div>
          <div style="text-align:center;">
            <i class="fa-solid fa-user-doctor" style="font-size:2.5rem;color:var(--gold);display:block;margin-bottom:var(--space-sm);"></i>
            <span style="color:var(--gray-400);font-size:0.85rem;">Colegio Médico<br>Mendoza</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container anim">
        <h2>¿Querés conocernos en persona?</h2>
        <p>Agendá tu primera consulta sin compromiso y visitá nuestras instalaciones.</p>
        <a href="/contacto" class="btn btn-gold btn-lg" data-navigo>
          <i class="fa-regular fa-calendar-check"></i> Agendar Visita
        </a>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
  initScrollAnimations();
}

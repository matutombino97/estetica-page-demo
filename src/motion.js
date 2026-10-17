/** Mímara motion system. Native scrolling, event-driven frames, no animation dependency. */
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
let revealObserver, sectionObserver, frame = 0, scene = [
    ...[...document.querySelectorAll('.manifesto')].map(element => ({element, kind:'manifesto'})),], activeAnimations = new Set();
export const motionAllowed = () => !reduced.matches;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
function animate(element, keyframes, options = {}) {
  if (!element || !motionAllowed()) return;
  const animation = element.animate(keyframes, { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)', ...options });
  activeAnimations.add(animation);
  animation.finished.catch(() => {}).finally(() => activeAnimations.delete(animation));
  return animation;
}
export function animateCatalog() {
  document.querySelectorAll('#catalog > *').forEach((item, index) => {
    const image=item.querySelector('img');
    if(image && item.dataset.id) image.style.viewTransitionName='ritual-'+item.dataset.id;
    animate(item, [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }], { delay: Math.min(index, 4) * 55, duration: 500 });
  });
}
function updateScene() {
  frame = 0;
  const height = innerHeight;
  const maxScroll = document.documentElement.scrollHeight - height;
  document.documentElement.style.setProperty('--read-progress', maxScroll > 0 ? clamp(scrollY / maxScroll, 0, 1) : 0);
  document.querySelector('#navbar')?.classList.toggle('scrolled', scrollY > 30);
  if (!motionAllowed()) return;
  for (const { element, kind } of scene) {
    const rect = element.getBoundingClientRect();
    if (rect.bottom < -100 || rect.top > height + 100) continue;
    const progress = clamp((height - rect.top) / (height + rect.height), 0, 1);
    if (kind === 'hero') {
      const depth = clamp(-rect.top / rect.height, 0, 1);
      element.style.setProperty('--hero-depth', `${depth * (innerWidth > 760 ? 90 : 25)}px`);
      element.style.setProperty('--stamp-turn', `${10 + depth * 24}deg`);
      element.style.setProperty('--signature-turn', `${depth * 110}deg`);
    } else if (kind === 'image') {
      element.style.setProperty('--image-depth', `${(progress - .5) * (innerWidth > 760 ? 65 : 20)}px`);
    } else if (kind === 'manifesto') {
      element.style.setProperty('--ink-stop', `${clamp(progress * 145, 25, 100)}%`);
      element.style.setProperty('--manifesto-rotation', `${progress * 90}deg`);
    } else if (kind === 'ribbon') {
      element.style.setProperty('--ribbon-shift', `${(progress - .5) * -100}px`);
    } else {
      element.style.setProperty('--art-turn', `${-6 + progress * 9}deg`);
    }
  }
}
function scheduleScene() { if (!frame) frame = requestAnimationFrame(updateScene); }
window.addEventListener('scroll', scheduleScene, { passive: true });
window.addEventListener('resize', scheduleScene, { passive: true });

export function mountMotion() {
  revealObserver?.disconnect();
  sectionObserver?.disconnect();
  for (const animation of activeAnimations) animation.cancel();
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle && !heroTitle.dataset.split) {
    heroTitle.dataset.split = 'true';
    heroTitle.setAttribute('aria-label', 'Mímara');
    heroTitle.innerHTML = `<span class="brand-letters" aria-hidden="true">${[...'mímara'].map((letter, i) => `<span class="brand-letter" style="--letter:${i}">${letter}</span>`).join('')}</span><span class="brand-flower" aria-hidden="true">✳</span>`;
  }
  if (motionAllowed() && !location.hash) {
    document.querySelectorAll('.brand-letter').forEach((el, i) => animate(el, [
      { transform: 'translateY(105%) rotate(5deg)', opacity: 0 },
      { transform: 'translateY(0) rotate(0)', opacity: 1 }
    ], { duration: 1050, delay: 100 + i * 65, fill: 'backwards' }));
    ['.hero .eyebrow', '.hero h2', '.hero-content > p:not(.eyebrow)', '.hero-actions', '.hero-signature'].forEach((selector, i) => {
      animate(document.querySelector(selector), [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 900, delay: 100 + i * 130, fill: 'backwards' });
    });
    animate(document.querySelector('.hero-photo'), [{ scale: 1.09 }, { scale: 1 }], { duration: 1800 });
  }
  revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      el.classList.add('motion-visible');
      revealObserver.unobserve(el);
    }
  }, { threshold: .12, rootMargin: '0px 0px -25px 0px' });
  document.querySelectorAll('.intro > *, .section-heading, .finder, .treatment, .experience-copy > .eyebrow, .experience-copy > h2, .steps > div, .experience-copy > .button, .plan-invite > div, .faq > div, .closing > *, .detail-grid > *, .related > h2, .manifesto-foot, .hero-bottom, .page-heading > h1, .home-featured .section-heading, .home-center > div, .home-gift, .center-editorial > *, .center-principles > article, .gift-builder > *, .pack, .contact-grid > *, .business-page > *').forEach((el, i) => {
    el.classList.add('motion-reveal');
    el.style.setProperty('--reveal-delay', `${el.matches('.treatment') ? (i % 3) * 75 : 0}ms`);
    if (el.getBoundingClientRect().top < innerHeight || !motionAllowed()) el.classList.add('motion-visible');
    else revealObserver.observe(el);
  });
  scene = [
    ...[...document.querySelectorAll('.hero')].map(element => ({element, kind:'hero'})),
    ...[...document.querySelectorAll('.experience-image')].map(element => ({element, kind:'image'})),
    ...[...document.querySelectorAll('.ribbon')].map(element => ({element, kind:'ribbon'})),
    ...[...document.querySelectorAll('.plan-art')].map(element => ({element, kind:'art'}))
  ];
  document.querySelectorAll('.treatment').forEach(article => {
    const image = article.querySelector('img');
    if(image) image.style.viewTransitionName = `ritual-${article.dataset.id}`;
  });
  const detailImage = document.querySelector('.detail-grid > img');
  if(detailImage) detailImage.style.viewTransitionName = `ritual-${location.pathname.split('/').pop()}`;
  sectionObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      document.querySelectorAll('#nav-links a').forEach(a => {
        if(!a.hash) return;
        const active = a.hash === `#${entry.target.id}`;
        a.classList.toggle('section-active', active);
        if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('#explorar, #experiencia, #preguntas, .hero').forEach(el => sectionObserver.observe(el));
  scheduleScene();
}

// Pointer effects are delegated, so they survive catalog filtering and routing.
let hoveredButton;
document.addEventListener('pointermove', event => {
  if (!motionAllowed() || !finePointer.matches) return;
  const hero = event.target.closest('.studio-hero');
  if(hero) {
    const rect=hero.getBoundingClientRect();
    hero.style.setProperty('--light-x', (event.clientX-rect.left)+'px');
    hero.style.setProperty('--light-y', (event.clientY-rect.top)+'px');
  }
  const imageArea=event.target.closest('.treatment-photo');
  if(imageArea){
    const rect=imageArea.getBoundingClientRect();
    imageArea.style.setProperty('--cursor-x',(event.clientX-rect.left)+'px');
    imageArea.style.setProperty('--cursor-y',(event.clientY-rect.top)+'px');
  }
  const button = event.target.closest('.button, .floating-consult');
  if (hoveredButton && hoveredButton !== button) {
    hoveredButton.style.removeProperty('translate');
    hoveredButton = null;
  }
  if (!button || button.disabled) return;
  const rect = button.getBoundingClientRect();
  button.style.translate = `${clamp((event.clientX - rect.left - rect.width / 2) * .09,-5,5)}px ${clamp((event.clientY - rect.top - rect.height / 2) * .12,-3,3)}px`;
  hoveredButton = button;
}, { passive: true });
document.addEventListener('pointerleave', () => { hoveredButton?.style.removeProperty('translate'); hoveredButton=null; });
document.addEventListener('click', event => {
  const heart = event.target.closest('[data-save]');
  if (heart) animate(heart, [{ scale: 1 }, { scale: 1.25, offset: .35 }, { scale: 1 }], { duration: 420 });
  const button = event.target.closest('.button');
  if (button) animate(button, [{ scale: 1 }, { scale: .97, offset: .4 }, { scale: 1 }], { duration: 260 });
});
export function mountDialogMotion() {
  const content = document.querySelector('#modal-body');
  new MutationObserver(() => {
    if (!document.querySelector('#modal')?.open) return;
    animate(content, [{ opacity: .2, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300 });
  }).observe(content, { childList: true });
}
reduced.addEventListener('change', () => {
  for (const animation of activeAnimations) animation.cancel();
  if (reduced.matches) {
    document.querySelectorAll('.motion-reveal').forEach(el=>el.classList.add('motion-visible'));
    hoveredButton?.style.removeProperty('translate');
  }
  scheduleScene();
});


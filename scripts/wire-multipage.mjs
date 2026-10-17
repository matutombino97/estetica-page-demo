import fs from 'node:fs';
let m=fs.readFileSync('src/main.js','utf8');
m="import { pages, aliases, missingPage } from './routes.js';\n"+m;
m=m.replace('services, config, money, photo','services, config, money, photo, whatsappURL');
m=m.replace("import './studio.css';","import './studio.css';\nimport './pages.css';");
m=m.replace('<div id="nav-links"><a href="/#explorar">Tratamientos</a><a href="/#experiencia">La experiencia</a><a href="/#preguntas">Preguntas</a></div>', '<div id="nav-links"><a href="/tratamientos">Tratamientos</a><a href="/el-centro">El centro</a><a href="/bonos-y-regalos">Bonos y regalos</a><a href="/contacto">Contacto</a></div>');
m=m.replace('href="/#explorar"','href="/tratamientos"').replace('href="/#preguntas"','href="/contacto#preguntas"');
m=m.replace('<button data-plan>Mi lista de mimos</button>','<a href="/el-centro">El centro</a><a href="/bonos-y-regalos">Bonos y regalos</a><a href="/contacto">Contacto y turnos</a><button data-plan>Mi lista de mimos</button>');
m=m.replace("navigate('/#explorar')","navigate('/tratamientos')");
m=m.replace('navigate(a.pathname+a.hash)','navigate(a.pathname+a.search+a.hash)');
const renderStart=m.indexOf('let observer;function render(');
m=m.slice(0,renderStart)+`
function wireGiftBuilder(){
 const form=document.querySelector('#gift-form');if(!form)return;
 const update=()=>{
  const service=services.find(s=>s.id===form.elements.service.value)||services[0];
  const occasion=form.elements.occasion.value;
  document.querySelector('#gift-preview-service').textContent=service.name;
  document.querySelector('#gift-reference').textContent='Valor de ejemplo: '+money(service.price);
  document.querySelector('#gift-whatsapp').href=whatsappURL('Hola, me interesa regalar '+service.name+'. Ocasión: '+occasion+'. ¿Podrían confirmarme valor, vigencia, forma de entrega y condiciones?');
 };
 form.addEventListener('change',update);form.addEventListener('submit',e=>e.preventDefault());update();
}
function render(focus=false){
 let path=location.pathname.replace(/\\/$/,'')||'/';
 if(aliases[path]){history.replaceState({},'',aliases[path]);path=location.pathname;}
 const page=pages[path]||missingPage;
 app.innerHTML=page.view();
 document.title=page.title+' | Mímara';
 document.querySelector('meta[name=description]').content=page.description;
 document.querySelector('meta[property="og:title"]').content=document.title;
 document.querySelector('meta[property="og:description"]').content=page.description;
 const canonical=document.querySelector('link[rel=canonical]');if(canonical)canonical.href=new URL(path,canonical.href).href;
 closeMenu();
 document.querySelectorAll('#nav-links a').forEach(a=>{const active=path===a.pathname||a.pathname==='/tratamientos'&&path.startsWith('/tratamientos/');a.classList.toggle('section-active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 category=new URLSearchParams(location.search).get('categoria')||'Todos';
 if(!['Todos','Facial','Corporal','Mirada','Guardados'].includes(category))category='Todos';
 goal='';maxTime=1000;
 document.querySelector('#finder')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);goal=f.get('goal');maxTime=Number(f.get('time'));category='Todos';filter();document.querySelector('.catalog-toolbar').scrollIntoView({behavior:motionAllowed()?'smooth':'instant',block:'start'});});
 if(category!=='Todos')filter();
 sync();wireGiftBuilder();
 if(location.hash){requestAnimationFrame(()=>{document.getElementById(location.hash.slice(1))?.scrollIntoView({behavior:'instant'});mountMotion();});}
 else{if(focus){window.scrollTo({top:0,behavior:'instant'});const h=app.querySelector('h1');h?.setAttribute('tabindex','-1');h?.focus({preventScroll:true});}mountMotion();}
}
window.addEventListener('popstate',()=>render(true));render();
`;
fs.writeFileSync('src/main.js',m);
let motion=fs.readFileSync('src/motion.js','utf8');
motion=motion.replace("const active = a.hash ===", "if(!a.hash) return;\n        const active = a.hash ===");
motion=motion.replace('.hero-bottom\').forEach',".hero-bottom, .page-heading > h1, .home-featured .section-heading, .home-center > div, .home-gift, .center-editorial > *, .center-principles > article, .gift-builder > *, .pack, .contact-grid > *, .business-page > *').forEach");
fs.writeFileSync('src/motion.js',motion);

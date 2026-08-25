(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function we(){const e=document.getElementById("navbar");e.className="navbar",e.innerHTML=`
    <div class="navbar-inner">
      <a href="/" class="navbar-logo" data-navigo>
        <i class="fa-solid fa-gem"></i>
        <span class="navbar-logo-text">ÉCLAT</span>
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
        <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold">
          <i class="fa-brands fa-whatsapp"></i> Agendar Cita
        </a>
      </div>

      <button class="menu-toggle" id="menu-toggle" aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `,qe(),Ee(),Le()}function qe(){const e=document.getElementById("mobile-menu-overlay");e.className="mobile-overlay",e.innerHTML=`
    <a href="/" class="mobile-link" data-navigo>Inicio</a>
    <a href="/tratamientos" class="mobile-link" data-navigo>Tratamientos</a>
    <a href="/nosotros" class="mobile-link" data-navigo>Nosotros</a>
    <a href="/galeria" class="mobile-link" data-navigo>Galería</a>
    <a href="/blog" class="mobile-link" data-navigo>Blog</a>
    <a href="/contacto" class="mobile-link" data-navigo>Contacto</a>
    <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold btn-lg" style="margin-top:auto;">
      <i class="fa-brands fa-whatsapp"></i> Agendar Cita
    </a>
  `}function Ee(){const e=document.querySelector(".navbar");window.addEventListener("scroll",()=>{window.scrollY>80?e.classList.add("scrolled"):e.classList.remove("scrolled")}),window.scrollY>80&&e.classList.add("scrolled")}function Le(){const e=document.getElementById("menu-toggle"),a=document.getElementById("mobile-menu-overlay");let s=document.querySelector(".mobile-overlay-backdrop");s||(s=document.createElement("div"),s.className="mobile-overlay-backdrop",document.body.appendChild(s));const o=()=>{e.classList.remove("open"),a.classList.remove("open"),s.classList.remove("open"),document.body.style.overflow=""};e.addEventListener("click",()=>{a.classList.contains("open")?o():(e.classList.add("open"),a.classList.add("open"),s.classList.add("open"),document.body.style.overflow="hidden")}),s.addEventListener("click",o),a.querySelectorAll(".mobile-link").forEach(i=>{i.addEventListener("click",o)})}function X(e){document.querySelectorAll(".navbar-link, .mobile-link").forEach(a=>{a.classList.remove("active");const s=a.getAttribute("href");(s===e||e==="/"&&s==="/")&&a.classList.add("active")})}function ke(){const e=document.getElementById("footer-container");e.innerHTML=`
    <div class="footer">
      <div class="container">
        <div class="footer-grid">
          
          <div class="footer-brand">
            <div class="navbar-logo">
              <i class="fa-solid fa-gem" style="color:var(--gold);font-size:1.5rem;"></i>
              <span class="navbar-logo-text">ÉCLAT</span>
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
          <p>&copy; ${new Date().getFullYear()} ÉCLAT Estética. Todos los derechos reservados.</p>
          <p>Mendoza Capital, Barrio Bombal</p>
        </div>
      </div>
    </div>
  `}function xe(){const e=document.getElementById("whatsapp-container");e.innerHTML=`
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
  `}function ze(){const e=document.getElementById("preloader");window.addEventListener("load",()=>{setTimeout(()=>{e.classList.add("hidden")},800)}),setTimeout(()=>{e.classList.add("hidden")},3e3)}function Se(){if(!document.getElementById("booking-modal")){const e=`
        <div id="booking-modal" class="modal-overlay" style="display: none;">
            <div class="modal-content">
                <button class="modal-close" onclick="window.closeBookingModal()"><i class="fa-solid fa-xmark"></i></button>
                <h3 id="booking-title">Agendar Turno</h3>
                <p>Seleccioná una fecha y el momento del día que prefieras.</p>
                <form id="booking-form" onsubmit="window.submitBooking(event)">
                    <div class="form-group">
                        <label for="booking-date">Día</label>
                        <input type="date" id="booking-date" required min="${new Date().toISOString().split("T")[0]}" />
                    </div>
                    <div class="form-group">
                        <label for="booking-time">Horario preferido</label>
                        <select id="booking-time" required>
                            <option value="">Seleccionar horario...</option>
                            <option value="Mañana (9:00 - 13:00)">Mañana (9:00 - 13:00)</option>
                            <option value="Tarde (13:00 - 17:00)">Tarde (13:00 - 17:00)</option>
                            <option value="Noche (17:00 - 20:00)">Noche (17:00 - 20:00)</option>
                        </select>
                    </div>
                    <input type="hidden" id="booking-treatment" value="" />
                    <button type="submit" class="btn btn-gold" style="width: 100%; margin-top: 1rem;">
                        <i class="fa-brands fa-whatsapp"></i> Confirmar por WhatsApp
                    </button>
                </form>
            </div>
        </div>
        `;document.body.insertAdjacentHTML("beforeend",e),window.openBookingModal=a=>{document.getElementById("booking-treatment").value=a,document.getElementById("booking-title").innerText=`Agendar: ${a}`,document.getElementById("booking-modal").style.display="flex"},window.closeBookingModal=()=>{document.getElementById("booking-modal").style.display="none"},window.submitBooking=a=>{a.preventDefault();const s=document.getElementById("booking-date").value,o=document.getElementById("booking-time").value,i=document.getElementById("booking-treatment").value,n=s.split("-"),l=`${n[2]}/${n[1]}/${n[0]}`,m=`Hola! Quiero agendar un turno para *${i}*.

📅 Fecha: ${l}
⏰ Horario: ${o}

¿Tienen disponibilidad?`,f=`https://wa.me/549261000000?text=${encodeURIComponent(m)}`;window.closeBookingModal(),window.open(f,"_blank")}}}const Ae=[{slug:"5-errores-que-envejecen-tu-piel",title:"5 Errores que Envejecen tu Piel (y cómo evitarlos)",excerpt:"Desde no usar protector solar hasta dormir con maquillaje. Descubrí los hábitos que te están sumando años y cómo revertirlos con simples cambios.",img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format,compress&fit=crop&fm=webp&w=800&q=80",tag:"Skincare",date:"28 Feb, 2026"},{slug:"botox-mitos-y-verdades",title:"Botox: Mitos y Verdades que Tenés que Saber",excerpt:"¿El botox te deja sin expresión? ¿Es peligroso? Derribamos los mitos más comunes sobre uno de los tratamientos más populares del mundo.",img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=800&q=80",tag:"Tratamientos",date:"15 Feb, 2026"},{slug:"rutina-skincare-tipo-piel",title:"Rutina de Skincare para Cada Tipo de Piel",excerpt:"Piel grasa, seca, mixta o sensible: cada tipo necesita un protocolo diferente. Te armamos la rutina perfecta paso a paso con productos accesibles.",img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format,compress&fit=crop&fm=webp&w=800&q=80",tag:"Tips",date:"02 Feb, 2026"},{slug:"cada-cuanto-limpieza-facial",title:"¿Cada cuánto deberías hacerte una Limpieza Facial?",excerpt:"La frecuencia ideal depende de tu tipo de piel y tu estilo de vida. Te explicamos cómo saber cuándo tu piel te pide una limpieza profesional.",img:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&fit=crop&fm=webp&w=800&q=80",tag:"Cuidados",date:"20 Ene, 2026"},{slug:"protector-solar-regla-anti-edad",title:"Protector Solar: La Regla de Oro Anti-Edad",excerpt:"El 80% del envejecimiento de la piel se debe al sol. Por qué el SPF es tu mejor inversión y cómo elegir el ideal para cada tipo de piel.",img:"https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format,compress&fit=crop&fm=webp&w=800&q=80",tag:"Cuidados",date:"10 Ene, 2026"},{slug:"tendencias-estetica-2026",title:"Tendencias en Estética 2026: Lo que Viene",excerpt:'Desde el "glass skin" hasta la bioestimulación con exosomas. Las tendencias que están revolucionando la medicina estética este año.',img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format,compress&fit=crop&fm=webp&w=800&q=80",tag:"Tendencias",date:"03 Ene, 2026"}];function Te(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
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
          ${Ae.map((a,s)=>`
            <article class="blog-card anim anim-delay-${s%3+1}">
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
          `).join("")}
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
  `}function Pe(){document.querySelectorAll(".newsletter-form").forEach(e=>{e.addEventListener("submit",a=>{a.preventDefault();const s=e.querySelector(".newsletter-input"),o=e.querySelector(".newsletter-btn"),i=e.querySelector(".newsletter-msg"),n=s.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){i.innerHTML='<span style="color:#e74c3c;"><i class="fa-solid fa-circle-xmark"></i> Ingresá un email válido</span>';return}o.disabled=!0,o.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',setTimeout(()=>{i.innerHTML='<span style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> ¡Suscripción exitosa! Revisá tu casilla de email.</span>',o.innerHTML='<i class="fa-solid fa-check"></i> ¡Listo!',o.style.background="#10b981",s.value="",setTimeout(()=>{o.disabled=!1,o.innerHTML="Suscribirme",o.style.background="",i.innerHTML=""},4e3)},1200)})})}var Ce=/([:*])(\w+)/g,je="([^/]+)",Re=/\*/g,Me="?(?:.*)",Be=/\/\?/g,Ie="/?([^/]+|)",De="(?:/^|^)",He="";function Y(e){return e===void 0&&(e="/"),B()?location.pathname+location.search+location.hash:e}function p(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function S(e){return typeof e=="string"}function _e(e){return typeof e=="function"}function A(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Fe(e,a){return a.length===0||!e?null:e.slice(1,e.length).reduce(function(s,o,i){return s===null&&(s={}),s[a[i]]=decodeURIComponent(o),s},null)}function T(e){var a=p(e).split(/\?(.*)?$/);return[p(a[0]),a.slice(1).join("")]}function M(e){for(var a={},s=e.split("&"),o=0;o<s.length;o++){var i=s[o].split("=");if(i[0]!==""){var n=decodeURIComponent(i[0]);a[n]?(Array.isArray(a[n])||(a[n]=[a[n]]),a[n].push(decodeURIComponent(i[1]||""))):a[n]=decodeURIComponent(i[1]||"")}}return a}function K(e,a){var s=T(p(e.currentLocationPath)),o=s[0],i=s[1],n=i===""?null:M(i),l=[],m;if(S(a.path)){if(m=De+p(a.path).replace(Ce,function(g,v,q){return l.push(q),je}).replace(Re,Me).replace(Be,Ie)+"$",p(a.path)===""&&p(o)==="")return{url:o,queryString:i,hashString:A(e.to),route:a,data:null,params:n}}else m=a.path;var h=new RegExp(m,He),f=o.match(h);if(f){var w=S(a.path)?Fe(f,l):f.groups?f.groups:f.slice(1);return{url:p(o.replace(new RegExp("^"+e.instance.root),"")),queryString:i,hashString:A(e.to),route:a,data:w,params:n}}return!1}function J(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function L(e,a){return typeof e[a]>"u"||e[a]===!0}function Oe(e){if(!e)return{};var a=e.split(","),s={},o;return a.forEach(function(i){var n=i.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(n[0]){case"historyAPIMethod":s.historyAPIMethod=n[1];break;case"resolveOptionsStrategy":o||(o={}),o.strategy=n[1];break;case"resolveOptionsHash":o||(o={}),o.hash=n[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":s[n[0]]=n[1]==="true";break}}),o&&(s.resolveOptions=o),s}function B(){return typeof window<"u"}function $e(e,a){return e===void 0&&(e=[]),a===void 0&&(a={}),e.filter(function(s){return s}).forEach(function(s){["before","after","already","leave"].forEach(function(o){s[o]&&(a[o]||(a[o]=[]),a[o].push(s[o]))})}),a}function y(e,a,s){var o=a||{},i=0;(function n(){if(!e[i]){s&&s(o);return}Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](o)?e[i][1]:e[i][2])),n()):e[i](o,function(l){typeof l>"u"||l===!0?(i+=1,n()):s&&s(o)})})()}y.if=function(e,a,s){return Array.isArray(a)||(a=[a]),Array.isArray(s)||(s=[s]),[e,a,s]};function $(e,a){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=Y(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),a()}function P(e,a){for(var s=0;s<e.instance.routes.length;s++){var o=e.instance.routes[s],i=K(e,o);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),e.resolveOptions.strategy==="ONE")){a();return}}a()}function Ne(e,a){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),a()}function Ue(e,a){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),a(!1)):a()}var N=B(),Ge=J();function Qe(e,a){if(L(e.navigateOptions,"updateBrowserURL")){var s=("/"+e.to).replace(/\/\//g,"/"),o=N&&e.resolveOptions&&e.resolveOptions.hash===!0;Ge?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",o?"#"+s:s),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!o){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):N&&(window.location.href=e.to)}a()}function Z(e,a){var s=e.instance;if(!s.lastResolved()){a();return}y(s.lastResolved().map(function(o){return function(i,n){if(!o.route.hooks||!o.route.hooks.leave){n();return}var l=!1,m=e.instance.matchLocation(o.route.path,e.currentLocationPath,!1);if(o.route.path!=="*")l=!m;else{var h=e.matches?e.matches.find(function(f){return o.route.path===f.route.path}):!1;l=!h}if(L(e.navigateOptions,"callHooks")&&l){y(o.route.hooks.leave.map(function(f){return function(w,g){return f(function(v){v===!1?e.instance.__markAsClean(e):g()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return n()}]));return}else n()}}),{},function(){return a()})}function Ve(e,a){e.match.route.hooks&&e.match.route.hooks.before&&L(e.navigateOptions,"callHooks")?y(e.match.route.hooks.before.map(function(s){return function(i,n){return s(function(l){l===!1?e.instance.__markAsClean(e):n()},e.match)}}).concat([function(){return a()}])):a()}function We(e,a){L(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),a()}function Xe(e,a){e.match.route.hooks&&e.match.route.hooks.after&&L(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(s){return s(e.match)}),a()}function Ye(e,a){var s=e.instance.lastResolved();if(s&&s[0]&&s[0].route===e.match.route&&s[0].url===e.match.url&&s[0].queryString===e.match.queryString){s.forEach(function(o){o.route.hooks&&o.route.hooks.already&&L(e.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(i){return i(e.match)})}),a(!1);return}a()}function Ke(e,a){var s=e.instance._notFoundRoute;if(s){e.notFoundHandled=!0;var o=T(e.currentLocationPath),i=o[0],n=o[1],l=A(e.to);s.path=p(i);var m={url:s.path,queryString:n,hashString:l,data:null,route:s,params:n!==""?M(n):null};e.matches=[m],e.match=m}a()}function Je(e,a){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),a()}function Ze(e,a){e.instance._setCurrent(null),a()}function ee(e,a){L(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),a()}var ae=[Ye,Ve,We,Xe],U=[Z,Ke,y.if(function(e){var a=e.notFoundHandled;return a},ae.concat([ee]),[Je,Ze])];function j(){return j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},j.apply(this,arguments)}function G(e,a){var s=0;function o(){if(s===e.matches.length){ee(e,a);return}y(ae,j({},e,{match:e.matches[s]}),function(){s+=1,o()})}Z(e,o)}function C(e){e.instance.__markAsClean(e)}function R(){return R=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o])}return e},R.apply(this,arguments)}var Q="[data-navigo]";function ea(e,a){var s=a||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Q},o=this,i="/",n=null,l=[],m=!1,h,f=J(),w=B();e?i=p(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function g(t){return t.indexOf("#")>=0&&(s.hash===!0?t=t.split("#")[1]||"/":t=t.split("#")[0]),t}function v(t){return p(i+"/"+p(t))}function q(t,r,c,u){return t=S(t)?v(t):t,{name:u||p(String(t)),path:t,handler:r,hooks:$e(c)}}function oe(t,r,c){var u=this;return typeof t=="object"&&!(t instanceof RegExp)?(Object.keys(t).forEach(function(d){if(typeof t[d]=="function")u.on(d,t[d]);else{var b=t[d],k=b.uses,be=b.as,ye=b.hooks;l.push(q(d,k,[h,ye],be))}}),this):(typeof t=="function"&&(c=r,r=t,t=i),l.push(q(t,r,[h,c])),this)}function I(t,r){if(o.__dirty){o.__waiting.push(function(){return o.resolve(t,r)});return}else o.__dirty=!0;t=t?p(i)+"/"+p(t):void 0;var c={instance:o,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:R({},s,r)};return y([$,P,y.if(function(u){var d=u.matches;return d&&d.length>0},G,U)],c,C),c.matches?c.matches:!1}function D(t,r){if(o.__dirty){o.__waiting.push(function(){return o.navigate(t,r)});return}else o.__dirty=!0;t=p(i)+"/"+p(t);var c={instance:o,to:t,navigateOptions:r||{},resolveOptions:r&&r.resolveOptions?r.resolveOptions:s,currentLocationPath:g(t)};y([Ne,Ue,P,y.if(function(u){var d=u.matches;return d&&d.length>0},G,U),Qe,C],c,C)}function te(t,r,c){var u=_(t,r);return u!==null?(D(u.replace(new RegExp("^/?"+i),""),c),!0):!1}function ie(t){return this.routes=l=l.filter(function(r){return S(t)?p(r.path)!==p(t):_e(t)?t!==r.handler:String(r.path)!==String(t)}),this}function ne(){f&&(this.__popstateListener=function(){o.__freezeListening||I()},window.addEventListener("popstate",this.__popstateListener))}function re(){this.routes=l=[],f&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=m=!0}function le(t,r){return o._notFoundRoute=q("*",t,[h,r],"__NOT_FOUND__"),this}function H(){if(w)return ce().forEach(function(t){if(t.getAttribute("data-navigo")==="false"||t.getAttribute("target")==="_blank"){t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler);return}t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(r){if((r.ctrlKey||r.metaKey)&&r.target.tagName.toLowerCase()==="a")return!1;var c=t.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var u=new URL(c);c=u.pathname+u.search}catch{}var d=Oe(t.getAttribute("data-navigo-options"));m||(r.preventDefault(),r.stopPropagation(),o.navigate(p(c),d))},t.addEventListener("click",t.navigoHandler))}),o}function ce(){return w?[].slice.call(document.querySelectorAll(s.linksSelector||Q)):[]}function de(t){return"/"+i+"/"+p(t)}function ue(t){return h=t,this}function pe(){return n}function _(t,r,c){var u=l.find(function(k){return k.name===t}),d=null;if(u){if(d=u.path,r)for(var b in r)d=d.replace(":"+b,r[b]);d=d.match(/^\//)?d:"/"+d}return d&&c&&!c.includeRoot&&(d=d.replace(new RegExp("^/"+i),"")),d}function me(t){return t.getAttribute("href")}function F(t){var r=T(p(t)),c=r[0],u=r[1],d=u===""?null:M(u),b=A(t),k=q(c,function(){},[h],c);return{url:c,queryString:u,hashString:b,route:k,data:null,params:d}}function fe(){return F(p(Y(i)).replace(new RegExp("^"+i),""))}function ge(t){var r={instance:o,currentLocationPath:t,to:t,resolveOptions:s};return P(r,function(){}),r.matches?r.matches:!1}function ve(t,r,c){typeof r<"u"&&(typeof c>"u"||c)&&(r=v(r));var u={instance:o,to:r,currentLocationPath:r};$(u,function(){}),typeof t=="string"&&(t=typeof c>"u"||c?v(t):t);var d=K(u,{name:String(t),path:t,handler:function(){},hooks:{}});return d||!1}function z(t,r,c){return typeof r=="string"&&(r=O(r)),r?(r.hooks[t]||(r.hooks[t]=[]),r.hooks[t].push(c),function(){r.hooks[t]=r.hooks[t].filter(function(u){return u!==c})}):(console.warn("Route doesn't exists: "+r),function(){})}function O(t){return typeof t=="string"?l.find(function(r){return r.name===v(t)}):l.find(function(r){return r.handler===t})}function he(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()}this.root=i,this.routes=l,this.destroyed=m,this.current=n,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=he,this.on=oe,this.off=ie,this.resolve=I,this.navigate=D,this.navigateByName=te,this.destroy=re,this.notFound=le,this.updatePageLinks=H,this.link=de,this.hooks=ue,this.extractGETParameters=function(t){return T(g(t))},this.lastResolved=pe,this.generate=_,this.getLinkPath=me,this.match=ge,this.matchLocation=ve,this.getCurrentLocation=fe,this.addBeforeHook=z.bind(this,"before"),this.addAfterHook=z.bind(this,"after"),this.addAlreadyHook=z.bind(this,"already"),this.addLeaveHook=z.bind(this,"leave"),this.getRoute=O,this._pathToMatchObject=F,this._clean=p,this._checkForAHash=g,this._setCurrent=function(t){return n=o.current=t},ne.call(this),H.call(this)}function V(){const e=document.getElementById("app");e.innerHTML=`
    <!-- HERO -->
    <section class="hero">
      <video class="hero-img" autoplay loop muted playsinline poster="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format,compress&fit=crop&fm=webp&w=1200&q=80" style="object-fit: cover;">
        <source src="/video-clinica.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Medicina Estética Avanzada</span>
        <h1>Realzá tu belleza natural <em>sin filtros.</em></h1>
        <p class="hero-subtitle">
          Tratamientos personalizados que combinan ciencia y arte para resultados visibles y duraderos. Tu mejor versión empieza hoy.
        </p>
        <div class="hero-buttons">
          <a href="/tratamientos" class="btn btn-gold btn-lg" data-navigo>
            <i class="fa-solid fa-sparkles"></i> Descubrir Tratamientos
          </a>
          <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.4);color:white;">
            <i class="fa-brands fa-whatsapp"></i> Agendar Cita
          </a>
        </div>
      </div>
      <div class="hero-scroll">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card anim anim-delay-1">
            <div class="feature-icon">
              <i class="fa-solid fa-user-doctor"></i>
            </div>
            <h3>Profesionales Médicos</h3>
            <p>Tu salud es prioridad. Procedimientos realizados exclusivamente por doctores certificados con años de experiencia.</p>
          </div>
          <div class="feature-card featured anim anim-delay-2">
            <div class="feature-icon">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3>Resultados Naturales</h3>
            <p>Nadie notará qué te hiciste, pero todos notarán que te ves radiante y descansada. Ese es nuestro arte.</p>
          </div>
          <div class="feature-card anim anim-delay-3">
            <div class="feature-icon">
              <i class="fa-solid fa-gem"></i>
            </div>
            <h3>Tecnología Premium</h3>
            <p>Invertimos en la mejor aparatología del mercado mundial (FDA & ANMAT aprobados).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRATAMIENTOS PREVIEW -->
    <section class="section section-pink">
      <div class="container">
        <div class="section-header anim">
          <span class="section-label">Nuestros Favoritos</span>
          <h2 class="section-title">Tratamientos Estrella</h2>
          <p class="section-subtitle">Los procedimientos más demandados por nuestras clientas</p>
        </div>

        <div class="treatments-grid">
          <div class="treatment-card anim anim-delay-1">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>Botox & Rellenos</h3>
              <p>Suaviza líneas de expresión y recupera el volumen perdido con resultados inmediatos.</p>
              <div class="treatment-meta">
                <span><i class="fa-regular fa-clock"></i> 30 min</span>
                <span><i class="fa-solid fa-rotate"></i> 4-6 meses</span>
              </div>
            </div>
          </div>
          <div class="treatment-card anim anim-delay-2">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>Depilación Láser Soprano</h3>
              <p>La solución definitiva para una piel suave todo el año. Indolora y efectiva.</p>
              <div class="treatment-meta">
                <span><i class="fa-regular fa-clock"></i> 45 min</span>
                <span><i class="fa-solid fa-rotate"></i> 6-8 sesiones</span>
              </div>
            </div>
          </div>
          <div class="treatment-card anim anim-delay-3">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>Hydra-Glow Facial</h3>
              <p>Limpieza profunda + hidratación intensa para un brillo instantáneo y piel luminosa.</p>
              <div class="treatment-meta">
                <span><i class="fa-regular fa-clock"></i> 60 min</span>
                <span><i class="fa-solid fa-rotate"></i> Mensual</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center" style="margin-top:var(--space-2xl);">
          <a href="/tratamientos" class="btn btn-gold" data-navigo>
            Ver Todos los Tratamientos <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- QUIZ -->
    <section class="section" style="background:#E6D5C3;">
      <div class="container text-center anim">
        <span class="section-label">Asesor Virtual</span>
        <h2 class="section-title">Descubrí tu tratamiento ideal</h2>
        <p class="section-subtitle" style="margin-bottom:var(--space-2xl);">Completá este test de 2 pasos y te recomendamos el mejor protocolo para vos.</p>
        
        <div class="quiz-container" id="quiz-container" style="background:var(--white); padding:var(--space-2xl); border-radius:var(--radius-xl); box-shadow: 0 15px 50px rgba(0,0,0,0.1); border: 1px solid var(--gold); max-width:600px; margin:0 auto; position:relative; overflow:hidden;">
          
          <div id="quiz-step-1" class="quiz-step" style="transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-lg);">¿Qué zona querés tratar principalmente?</h3>
            <div style="display:flex; gap:var(--space-md); justify-content:center; flex-wrap:wrap;">
              <button class="btn btn-outline" style="min-width:140px;" onclick="nextQuizStep(2, 'Rostro')">Rostro</button>
              <button class="btn btn-outline" style="min-width:140px;" onclick="nextQuizStep(2, 'Cuerpo')">Cuerpo</button>
            </div>
          </div>
          
          <div id="quiz-step-2" class="quiz-step" style="display:none; transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-lg);">¿Cuál es tu objetivo principal?</h3>
            <div style="display:flex; flex-direction:column; gap:var(--space-md); align-items:center;">
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Manchas')">Eliminar Manchas o Cicatrices</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Arrugas')">Reducir Arrugas y Flacidez</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'luminosidad')">Más Hidratación y Brillo</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Vello')">Eliminar Vello No Deseado</button>
            </div>
          </div>
          
          <div id="quiz-step-3" class="quiz-step" style="display:none; transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-md);">¡Tenemos tu plan perfecto!</h3>
            <p style="color:var(--gray-500); margin-bottom:var(--space-lg);">Según tus respuestas, te recomendamos:</p>
            <div style="background:var(--white-warm); padding:var(--space-lg); border-radius:var(--radius-md); margin-bottom:var(--space-lg); border: 1px solid var(--gold-light);">
              <h4 id="quiz-result-title" style="color:var(--black); font-size:1.5rem; margin-bottom:var(--space-sm);">Glow Premium</h4>
              <p id="quiz-result-desc" style="color:var(--gray-600);">El tratamiento ideal para renovar tu piel y lograr los objetivos que buscás.</p>
            </div>
            <a href="#" id="quiz-wa-btn" target="_blank" class="btn btn-gold btn-lg" style="width:100%;">
              <i class="fa-brands fa-whatsapp"></i> Consultar por este tratamiento
            </a>
            <button style="border:none; background:transparent; color:var(--gray-400); text-decoration:underline; font-size:0.85rem; margin-top:var(--space-md); cursor:pointer;" onclick="resetQuiz()">Volver a intentar</button>
          </div>
          
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="section-dark" style="padding: var(--space-3xl) 0;">
      <div class="container">
        <div class="stats-bar">
          <div class="stat-item anim anim-delay-1">
            <div class="stat-number">+5000</div>
            <div class="stat-label">Pacientes Felices</div>
          </div>
          <div class="stat-item anim anim-delay-2">
            <div class="stat-number">12</div>
            <div class="stat-label">Años de Experiencia</div>
          </div>
          <div class="stat-item anim anim-delay-3">
            <div class="stat-number">98%</div>
            <div class="stat-label">Satisfacción</div>
          </div>
          <div class="stat-item anim anim-delay-4">
            <div class="stat-number">15+</div>
            <div class="stat-label">Tratamientos</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="section">
      <div class="container">
        <div class="section-header anim">
          <span class="section-label">Testimonios</span>
          <h2 class="section-title">Lo que dicen nuestras clientas</h2>
        </div>

        <div class="testimonials-carousel anim" id="testimonials-carousel">
          <div class="testimonials-track" id="testimonials-track">
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p class="testimonial-text">"Tenía miedo de verme artificial, pero el resultado fue increíble. Mis amigas me dicen que me veo descansada y radiante. ¡Nadie nota que es botox!"</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format,compress&fit=crop&fm=webp&w=100&q=80');"></div>
                <div class="testimonial-info">
                  <h4>Carolina M.</h4>
                  <p>Paciente desde 2022</p>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p class="testimonial-text">"La depilación láser cambió mi vida. Después de 6 sesiones, olvídate de la cera y las cuchillas. El equipo es súper profesional y el lugar es hermoso."</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format,compress&fit=crop&fm=webp&w=100&q=80');"></div>
                <div class="testimonial-info">
                  <h4>Valentina R.</h4>
                  <p>Paciente desde 2023</p>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <p class="testimonial-text">"Me hice el Hydra-Glow antes de mi casamiento y mi piel nunca estuvo tan perfecta. Las fotos quedaron espectaculares. 100% recomendable."</p>
              <div class="testimonial-author">
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format,compress&fit=crop&fm=webp&w=100&q=80');"></div>
                <div class="testimonial-info">
                  <h4>Lucía F.</h4>
                  <p>Paciente desde 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-dots" id="carousel-dots"></div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header anim">
          <span class="section-label">Precios</span>
          <h2 class="section-title" style="color:var(--white);">Packs Exclusivos</h2>
          <p class="section-subtitle" style="color:var(--gray-400);">Combinaciones diseñadas para potenciar tus resultados</p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-card anim anim-delay-1">
            <h3>Glow Básico</h3>
            <div class="pricing-price">$45.000</div>
            <div class="pricing-period">por sesión</div>
            <ul class="pricing-features">
              <li><i class="fa-solid fa-check"></i> Limpieza facial profunda</li>
              <li><i class="fa-solid fa-check"></i> Hidratación con ácido hialurónico</li>
              <li><i class="fa-solid fa-check"></i> Mascarilla revitalizante</li>
              <li><i class="fa-solid fa-check"></i> Protector solar premium</li>
            </ul>
            <a href="https://wa.me/549261000000?text=Hola!%20Me%20interesa%20consultar%20por%20los%20Packs%20Exclusivos." target="_blank" class="btn btn-outline" style="width:100%;" data-navigo><i class="fa-brands fa-whatsapp"></i> Consultar</a>
          </div>

          <div class="pricing-card featured anim anim-delay-2">
            <h3>Glow Premium</h3>
            <div class="pricing-price">$120.000</div>
            <div class="pricing-period">pack 3 sesiones</div>
            <ul class="pricing-features">
              <li><i class="fa-solid fa-check"></i> Todo lo del plan Básico</li>
              <li><i class="fa-solid fa-check"></i> Peeling químico suave</li>
              <li><i class="fa-solid fa-check"></i> Dermapen con vitaminas</li>
              <li><i class="fa-solid fa-check"></i> Seguimiento personalizado</li>
              <li><i class="fa-solid fa-check"></i> 10% OFF en otros tratamientos</li>
            </ul>
            <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20reservar%20el%20Glow%20Premium." target="_blank" class="btn btn-gold" style="width:100%;" data-navigo><i class="fa-brands fa-whatsapp"></i> Reservar Ahora</a>
          </div>

          <div class="pricing-card anim anim-delay-3">
            <h3>Glow VIP</h3>
            <div class="pricing-price">$280.000</div>
            <div class="pricing-period">programa trimestral</div>
            <ul class="pricing-features">
              <li><i class="fa-solid fa-check"></i> Todo lo del plan Premium</li>
              <li><i class="fa-solid fa-check"></i> Botox zona entrecejo</li>
              <li><i class="fa-solid fa-check"></i> Mesoterapia facial</li>
              <li><i class="fa-solid fa-check"></i> Acceso prioritario a agenda</li>
              <li><i class="fa-solid fa-check"></i> 20% OFF en láser</li>
            </ul>
            <a href="https://wa.me/549261000000?text=Hola!%20Me%20interesa%20consultar%20por%20los%20Packs%20Exclusivos." target="_blank" class="btn btn-outline" style="width:100%;" data-navigo><i class="fa-brands fa-whatsapp"></i> Consultar</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-section">
      <div class="container anim">
        <h2>Tu mejor versión te está esperando.</h2>
        <p>No postergues más ese mimo que te merecés. La agenda de este mes se está llenando rápido.</p>
        <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold btn-lg">
          <i class="fa-brands fa-whatsapp"></i> Reservar mi Turno Ahora
        </a>
        <div class="cta-info">
          <span><i class="fa-solid fa-location-dot"></i> Mendoza Capital, Barrio Bombal</span>
          <span><i class="fa-regular fa-clock"></i> Lun-Sáb 9hs a 20hs</span>
        </div>
      </div>
    </section>
  `,aa()}function aa(){const e=document.getElementById("testimonials-track"),a=document.getElementById("carousel-dots");if(!e||!a)return;const o=e.querySelectorAll(".testimonial-card").length;let i=0,n;for(let g=0;g<o;g++){const v=document.createElement("button");v.className=`carousel-dot${g===0?" active":""}`,v.setAttribute("aria-label",`Testimonial ${g+1}`),v.addEventListener("click",()=>l(g)),a.appendChild(v)}function l(g){i=g,e.style.transform=`translateX(-${i*100}%)`,a.querySelectorAll(".carousel-dot").forEach((v,q)=>{v.classList.toggle("active",q===i)})}function m(){l((i+1)%o)}function h(){n=setInterval(m,5e3)}function f(){clearInterval(n)}const w=document.getElementById("testimonials-carousel");w.addEventListener("mouseenter",f),w.addEventListener("mouseleave",h),h()}window.quizData={zona:"",objetivo:""};window.nextQuizStep=(e,a)=>{e===2&&(window.quizData.zona=a),e===3&&(window.quizData.objetivo=a);const s=document.getElementById(`quiz-step-${e-1}`),o=document.getElementById(`quiz-step-${e}`);s&&(s.style.opacity="0",setTimeout(()=>{s.style.display="none",o&&(e===3&&calculateQuizResult(),o.style.display="block",o.offsetWidth,o.style.opacity="1")},400))};window.calculateQuizResult=()=>{const{zona:e,objetivo:a}=window.quizData;let s="Glow Premium",o="El tratamiento ideal para renovar tu piel y lograr los objetivos que buscás.",i="Hola! Completé el asesor virtual y me recomendó el Glow Premium. Quiero más info.";e==="Rostro"?a==="Arrugas"?(s="Botox & Rellenos Faciales",o="Suaviza líneas de expresión y recupera el volumen perdido con resultados inmediatos.",i="Hola! Completé el asesor virtual y me recomendó Botox & Rellenos. Quiero más info."):a==="Manchas"?(s="Peeling Químico",o="Renueva tu piel capa por capa, ideal para eliminar manchas y unificar el tono.",i="Hola! Completé el asesor virtual y me recomendó Peeling Químico. Quiero más info."):a==="luminosidad"&&(s="Hydra-Glow Facial",o="Limpieza profunda e hidratación intensa para un brillo instantáneo y piel luminosa.",i="Hola! Completé el asesor virtual y me recomendó Hydra-Glow Facial. Quiero más info."):(e==="Cuerpo"||a==="Vello")&&(s="Depilación Láser Soprano",o="La solución definitiva para una piel suave todo el año. Indolora y efectiva.",i="Hola! Completé el asesor virtual y me recomendó Depilación Láser Soprano. Quiero más info."),document.getElementById("quiz-result-title").textContent=s,document.getElementById("quiz-result-desc").textContent=o,document.getElementById("quiz-wa-btn").href=`https://wa.me/549261000000?text=${encodeURIComponent(i)}`};window.resetQuiz=()=>{window.quizData={zona:"",objetivo:""};const e=document.getElementById("quiz-step-3"),a=document.getElementById("quiz-step-1");e.style.opacity="0",setTimeout(()=>{e.style.display="none",a.style.display="block",a.offsetWidth,a.style.opacity="1"},400)};const sa=[{id:"botox",name:"Botox & Rellenos Faciales",desc:"Suaviza líneas de expresión y recupera el volumen perdido con resultados inmediatos y naturales.",img:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"30 min",recovery:"4-6 meses",price:"Desde $55.000",details:["<strong>Zonas:</strong> Patas de gallo, entrecejo, frente, labios, pómulos, mentón.","<strong>Producto:</strong> Toxina botulínica tipo A (Botox®, Dysport®).","<strong>Dolor:</strong> Mínimo. Usamos anestesia tópica para tu comodidad.","<strong>Resultado:</strong> Visible a las 48-72hs. Aspecto natural y descansado.","<strong>Recomendación:</strong> Evitar ejercicio intenso las primeras 24hs."]},{id:"laser",name:"Depilación Láser Soprano",desc:"La solución definitiva para una piel suave todo el año. Tecnología de trío láser indolora.",img:"https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"45 min",recovery:"6-8 sesiones",price:"Desde $35.000",details:["<strong>Tecnología:</strong> Soprano Ice Platinum (Trío láser: Alejandrita, Diodo, Nd:YAG).","<strong>Beneficio:</strong> Indoloro y apto para todo tipo de piel, incluso bronceada.","<strong>Zonas:</strong> Cuerpo entero, rostro, bikini, axilas.","<strong>Sesiones:</strong> 6 a 8 para eliminación total. Mantenimiento anual.","<strong>Post-sesión:</strong> Proteger del sol 48hs. Sin depilación con cera entre sesiones."]},{id:"hydraglow",name:"Hydra-Glow Facial",desc:"Limpieza profunda + hidratación intensa. El tratamiento estrella para un brillo instantáneo.",img:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"60 min",recovery:"Mensual",price:"Desde $45.000",details:["<strong>Procedimiento:</strong> Peeling ultrasónico + extracción + mascarilla de ácido hialurónico.","<strong>Resultado:</strong> Piel luminosa, poros limpios y textura suave al instante.","<strong>Ideal:</strong> Previo a eventos, fiestas, bodas o sesiones de fotos.","<strong>Frecuencia:</strong> Una vez al mes para mantener resultados óptimos.","<strong>Incluye:</strong> Sérum vitamínico y protección solar post-tratamiento."]},{id:"peeling",name:"Peeling Químico",desc:"Renueva tu piel capa por capa. Elimina manchas, marcas de acné y textura irregular.",img:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"40 min",recovery:"3-7 días",price:"Desde $40.000",details:["<strong>Tipos:</strong> Superficial (ácido glicólico), medio (TCA), profundo (fenol).","<strong>Beneficios:</strong> Elimina manchas solares, líneas finas, textura irregular.","<strong>Post:</strong> Descamación suave de 3-7 días. Piel renovada y luminosa.","<strong>Frecuencia:</strong> Cada 4-6 semanas según protocolo médico.","<strong>Cuidado:</strong> Protección solar obligatoria SPF 50+."]},{id:"mesoterapia",name:"Mesoterapia Facial",desc:"Cóctel de vitaminas, minerales y ácido hialurónico inyectados directamente en la piel.",img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"30 min",recovery:"24-48 hs",price:"Desde $50.000",details:["<strong>Ingredientes:</strong> Ácido hialurónico, vitaminas C y E, aminoácidos, péptidos.","<strong>Beneficios:</strong> Hidratación profunda, luminosidad, firmeza y elasticidad.","<strong>Técnica:</strong> Micro-inyecciones con aguja ultrafina. Mínimas molestias.","<strong>Sesiones:</strong> Protocolo de 4 sesiones cada 15 días.",'<strong>Resultado:</strong> Piel rejuvenecida, jugosa y con efecto "glass skin".']},{id:"dermapen",name:"Dermapen / Microneedling",desc:"Estimula la producción natural de colágeno a través de micro-punciones controladas.",img:"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"45 min",recovery:"2-3 días",price:"Desde $48.000",details:["<strong>Cómo funciona:</strong> Micro-agujas estimulan la regeneración celular natural.","<strong>Beneficios:</strong> Reduce poros, cicatrices de acné, arrugas finas y estrías.","<strong>Combinación:</strong> Se potencia con sérum de vitamina C o factores de crecimiento.","<strong>Sesiones:</strong> 3-6 sesiones cada 4 semanas.","<strong>Resultado:</strong> Piel más firme, pareja y rejuvenecida progresivamente."]},{id:"limpieza",name:"Limpieza Facial Profunda",desc:"El paso fundamental para una piel sana. Extracción profesional y nutrición intensiva.",img:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"50 min",recovery:"Inmediato",price:"Desde $25.000",details:["<strong>Pasos:</strong> Desmaquillado, vaporización, extracción, alta frecuencia, mascarilla.","<strong>Beneficios:</strong> Elimina puntos negros, células muertas y oxigena la piel.","<strong>Frecuencia:</strong> Cada 30-45 días como rutina de mantenimiento.","<strong>Para quién:</strong> Todo tipo de piel. Ideal como primer paso de cualquier protocolo.","<strong>Incluye:</strong> Diagnóstico personalizado de tu tipo de piel."]},{id:"plasma",name:"Plasma Rico en Plaquetas (PRP)",desc:"Tu propia sangre es la medicina. Regeneración celular con factores de crecimiento autólogos.",img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"45 min",recovery:"1-2 días",price:"Desde $60.000",details:["<strong>Proceso:</strong> Extracción de sangre → centrifugado → inyección del plasma en la piel.","<strong>Beneficios:</strong> Rejuvenecimiento natural, mejora textura, estimula colágeno.","<strong>Aplicación:</strong> Facial, cuero cabelludo (alopecia), ojeras y cuello.","<strong>Sesiones:</strong> 3 sesiones cada 4 semanas. Mantenimiento semestral.","<strong>Ventaja:</strong> 100% biocompatible. Sin riesgo de rechazo o alergia."]}];function oa(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
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
          ${sa.map((a,s)=>`
            <div class="treatment-card anim anim-delay-${s%3+1}" id="treatment-${a.id}" onclick="toggleTreatment('${a.id}', this.querySelector('.treatment-toggle'))">
              <div class="treatment-card-img" style="background-image: url('${a.img}');"></div>
              <div class="treatment-card-body">
                <h3>${a.name}</h3>
                <p>${a.desc}</p>
                <div class="treatment-meta">
                  <span><i class="fa-regular fa-clock"></i> ${a.duration}</span>
                  <span><i class="fa-solid fa-rotate"></i> ${a.recovery}</span>
                  <span><i class="fa-solid fa-tag"></i> ${a.price}</span>
                </div>
                <button class="btn btn-gold" style="width: 100%; margin-top: var(--space-md); margin-bottom: var(--space-sm);" onclick="event.stopPropagation(); window.openBookingModal('${a.name}')"><i class="fa-brands fa-whatsapp"></i> Consultar</button>
              </div>
              <div class="treatment-details" id="details-${a.id}">
                <ul>
                  ${a.details.map(o=>`<li>${o}</li>`).join("")}
                </ul>
              </div>
              <button class="treatment-toggle" onclick="event.stopPropagation(); toggleTreatment('${a.id}', this)">
                <span>Más información</span> <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container anim">
        <h2>¿No sabés cuál es el tratamiento ideal para vos?</h2>
        <p>Agendá una consulta gratuita y diseñamos un plan personalizado según tus necesidades.</p>
        <button class="btn btn-gold btn-lg" onclick="window.openBookingModal('Consulta Gratuita')"><i class="fa-brands fa-whatsapp"></i> Agendar Consulta Gratis</button>
      </div>
    </section>
  `,window.toggleTreatment=(a,s)=>{const o=document.getElementById("treatment-"+a),i=document.getElementById("details-"+a),n=i.classList.contains("open");document.querySelectorAll(".treatment-card").forEach(l=>{l.id!=="treatment-"+a&&l.classList.remove("active")}),document.querySelectorAll(".treatment-details").forEach(l=>{l.id!=="details-"+a&&l.classList.remove("open")}),document.querySelectorAll(".treatment-toggle").forEach(l=>{l!==s&&(l.classList.remove("open"),l.querySelector("span").textContent="Más información")}),i.classList.toggle("open"),o.classList.toggle("active"),s.classList.toggle("open"),s.querySelector("span").textContent=n?"Más información":"Menos información"}}const ta=[{name:"Dra. Camila Sánchez",role:"Directora Médica",photo:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Especialista en Dermatología Estética con 15 años de experiencia. Formada en la UBA y especializada en rejuvenecimiento facial en Barcelona."},{name:"Dr. Martín Rivas",role:"Cirujano Plástico",photo:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Cirujano plástico matriculado con maestría en Medicina Estética. Referente en técnicas de Botox y rellenos con ácido hialurónico."},{name:"Lic. Sofía Moretti",role:"Cosmiatra Senior",photo:"https://images.unsplash.com/photo-1594824476967-48c8b964ae17?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Cosmiatra con 10 años de práctica clínica. Certificada en dermapen, peelings avanzados y protocolos de skincare personalizados."},{name:"Dra. Valentina Lagos",role:"Dermatóloga",photo:"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Dermatóloga clínica y estética. Especialista en tratamientos con láser, manchas pigmentarias y rosácea. Posgrado en la Universidad de Milán."},{name:"Lic. Joaquín Herrera",role:"Kinesiólogo Estético",photo:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Kinesiólogo con formación en drenaje linfático, masajes post-quirúrgicos y rehabilitación facial. Más de 2.000 procedimientos realizados."},{name:"Lic. Lucía Fernández",role:"Nutricionista Estética",photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Nutricionista especializada en dermonutrición y suplementación para piel. Diseña planes nutricionales que potencian los tratamientos estéticos."},{name:"Lic. Ana Paula Domínguez",role:"Cosmiatra",photo:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Cosmiatra especializada en limpiezas faciales profundas, HydraFacial y protocolos de luminosidad. Atención cálida y personalizada."}],ia=[{icon:"fa-solid fa-shield-heart",title:"Seguridad Primero",desc:"Todos nuestros procedimientos son realizados por profesionales matriculados con productos aprobados por ANMAT y FDA."},{icon:"fa-solid fa-leaf",title:"Resultados Naturales",desc:"Creemos en realzar tu belleza natural. Nada de caras congeladas: nuestro objetivo es que te veas como vos, pero mejor."},{icon:"fa-solid fa-microscope",title:"Tecnología de Punta",desc:"Equipamiento de última generación importado de Europa y Estados Unidos, con calibración y mantenimiento permanente."},{icon:"fa-solid fa-heart-pulse",title:"Atención Humana",desc:"Cada paciente es única. Escuchamos tus necesidades, evaluamos tu caso y diseñamos un plan 100% personalizado."}];function na(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
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
              ÉCLAT nació en 2014 de una idea simple pero ambiciosa: crear un espacio donde la medicina estética se encuentre con el arte y la tecnología. Un lugar donde cada paciente sea tratada como única, con protocolos diseñados exclusivamente para ella.
            </p>
            <p style="color:var(--gray-500);line-height:1.8;margin-bottom:var(--space-lg);">
              Fundada por la Dra. Camila Sánchez en el corazón de Barrio Bombal, Mendoza, lo que comenzó como un consultorio de 40m² hoy es un centro de referencia con más de 150m² equipados con la última tecnología del mercado mundial.
            </p>
            <p style="color:var(--gray-500);line-height:1.8;">
              Nuestro equipo creció de 2 a 7 profesionales, pero nuestro compromiso sigue siendo el mismo: resultados visibles, naturales y seguros. Cada técnica, cada producto y cada protocolo es seleccionado con un estándar: si no lo usaríamos en nosotras mismas, no lo usamos en nuestras pacientes.
            </p>
          </div>
          <div class="anim anim-right">
            <img src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?auto=format,compress&fit=crop&fm=webp&w=800&q=80" alt="Clínica ÉCLAT" style="width:100%;border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);">
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
          ${ia.map((a,s)=>`
            <div class="value-card anim anim-delay-${s+1}">
              <div class="value-icon"><i class="${a.icon}"></i></div>
              <h3>${a.title}</h3>
              <p>${a.desc}</p>
            </div>
          `).join("")}
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
          ${ta.map((a,s)=>`
            <div class="team-card anim anim-delay-${s%4+1}">
              <div class="team-photo" style="background-image: url('${a.photo}');"></div>
              <div class="team-info">
                <h3>${a.name}</h3>
                <p class="team-role">${a.role}</p>
                <p class="team-bio">${a.bio}</p>
              </div>
            </div>
          `).join("")}
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
  `}const ra=[{photo:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Botox & Rellenos",category:"botox",testimonial:"Me veo 10 años más joven, pero natural. ¡Encantada!"},{photo:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Hydra-Glow Facial",category:"facial",testimonial:"Mi piel brilla sin maquillaje. Increíble resultado."},{photo:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Peeling Químico",category:"peeling",testimonial:"Las manchas desaparecieron casi por completo. Muy recomendable."},{photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Mesoterapia Facial",category:"mesoterapia",testimonial:"La textura de mi piel mejoró un 100%. Estoy feliz."},{photo:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Dermapen",category:"dermapen",testimonial:"Mis cicatrices de acné se redujeron increíblemente."},{photo:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Botox & Rellenos",category:"botox",testimonial:"Labios perfectos, muy naturales. La doctora es una artista."}],la=["Todos","Botox","Facial","Peeling","Mesoterapia","Dermapen"];function ca(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
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
          ${la.map((a,s)=>`
            <button class="gallery-filter-btn${s===0?" active":""}" data-filter="${a.toLowerCase()}">${a}</button>
          `).join("")}
        </div>

        <div class="gallery-grid" id="gallery-grid">
          ${ra.map((a,s)=>`
            <div class="gallery-item anim anim-delay-${s%3+1}" data-category="${a.category}">
              <div class="ba-slider" data-index="${s}">
                <div class="ba-image ba-before ba-before-filter" style="background-image: url('${a.photo}');"></div>
                <div class="ba-image ba-after" style="background-image: url('${a.photo}');"></div>
                <div class="ba-handle"></div>
                <span class="ba-label ba-label-before">Antes</span>
                <span class="ba-label ba-label-after">Después</span>
              </div>
              <div class="gallery-item-info">
                <h4>${a.treatment}</h4>
                <p>"${a.testimonial}"</p>
              </div>
            </div>
          `).join("")}
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
  `,da(),ua()}function da(){document.querySelectorAll(".ba-slider").forEach(e=>{let a=!1;const s=o=>{const i=e.getBoundingClientRect();let n=(o-i.left)/i.width*100;n=Math.max(5,Math.min(95,n));const l=e.querySelector(".ba-before"),m=e.querySelector(".ba-handle");l.style.clipPath=`inset(0 ${100-n}% 0 0)`,m.style.left=`${n}%`};e.addEventListener("mousedown",o=>{a=!0,s(o.clientX),o.preventDefault()}),document.addEventListener("mousemove",o=>{a&&s(o.clientX)}),document.addEventListener("mouseup",()=>{a=!1}),e.addEventListener("touchstart",o=>{a=!0,s(o.touches[0].clientX)}),e.addEventListener("touchmove",o=>{a&&(s(o.touches[0].clientX),o.preventDefault())}),e.addEventListener("touchend",()=>{a=!1})})}function ua(){const e=document.querySelectorAll(".gallery-filter-btn"),a=document.querySelectorAll(".gallery-item");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),s.classList.add("active");const o=s.dataset.filter;a.forEach(i=>{o==="todos"||i.dataset.category===o?i.style.display="":i.style.display="none"})})})}function pa(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format,compress&fm=webp&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Hablemos</span>
        <h1>Contacto</h1>
        <p class="hero-subtitle">Estamos para ayudarte. Agendá tu cita o consultanos lo que necesites por WhatsApp.</p>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section">
      <div class="container">
        <div class="contact-grid" style="grid-template-columns: 1fr; max-width: 800px; margin: 0 auto;">
          
          <!-- INFO -->
          <div class="anim-up text-center" style="margin-bottom: var(--space-xl);">
            <h2 class="section-title">¿En qué podemos ayudarte?</h2>
            <p style="color:var(--gray-500); margin-bottom: var(--space-xl);">Escribinos directamente a nuestro WhatsApp y te responderemos a la brevedad para coordinar tu turno.</p>
            
            <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita%20o%20hacer%20una%20consulta." target="_blank" class="btn btn-gold btn-lg" style="margin-bottom: var(--space-2xl);">
              <i class="fa-brands fa-whatsapp"></i> Iniciar chat de WhatsApp
            </a>
          </div>

          <div class="anim-up">
            <div class="contact-info-list" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-lg); margin-bottom: var(--space-2xl);">
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Mendoza Capital, Barrio Bombal<br>Av. San Martín 1234, Piso 3</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-solid fa-phone"></i></div>
                <div>
                  <h4>Teléfono</h4>
                  <p>+54 261 000 0000</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-regular fa-clock"></i></div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lun — Vie: 9:00 – 20:00 hs<br>Sábados: 9:00 – 14:00 hs</p>
                </div>
              </div>
            </div>

            <!-- MAP -->
            <div class="contact-map" style="border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2!2d-68.84!3d-32.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUzJzI0LjAiUyA2OMKwNTAnMjQuMCJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="400"
                style="border:0;"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de ÉCLAT Estética">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const ma={"5-errores-que-envejecen-tu-piel":{title:"5 Errores que Envejecen tu Piel (y cómo evitarlos)",tag:"Skincare",date:"28 Feb, 2026",author:"Dra. Camila Sánchez",readTime:"8 min",heroImg:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format,compress&fit=crop&fm=webp&w=1920&q=80",content:`
      <p class="article-intro">
        Tu piel es tu carta de presentación. Y aunque no lo creas, hay hábitos cotidianos que están acelerando tu envejecimiento sin que te des cuenta. Después de más de 15 años tratando pacientes, puedo decirte que la mayoría de los signos prematuros de envejecimiento podrían haberse evitado con simples cambios de rutina.
      </p>

      <h2>1. No usar protector solar todos los días</h2>
      <img src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format,compress&fit=crop&fm=webp&w=900&q=80" alt="Protector solar" class="article-img">
      <p>
        Este es, sin exagerar, el error número uno. <strong>El 80% del envejecimiento visible de la piel se debe a la exposición solar acumulada</strong>, lo que los dermatólogos llamamos "fotoenvejecimiento". Y no, no hablo solo de cuando vas a la playa. El sol que recibís caminando al supermercado, manejando el auto o sentada cerca de una ventana también cuenta.
      </p>
      <p>
        Los rayos UVA (que son los que envejecen) atraviesan nubes y vidrios. Esto significa que incluso en días nublados o dentro de tu oficina, tu piel está recibiendo radiación que destruye el colágeno y genera manchas.
      </p>
      <blockquote>
        <strong>La regla de oro:</strong> SPF 50+ todos los días, reaplicar cada 2-3 horas, incluso en invierno. Es la inversión anti-edad más barata y efectiva que existe.
      </blockquote>

      <h2>2. Dormir con maquillaje</h2>
      <p>
        Lo sé, llegás cansada a tu casa y lo último que querés hacer es una rutina de skincare. Pero dormir con maquillaje es como poner tu piel a trabajar horas extra. Durante la noche, tu piel entra en modo reparación: las células se regeneran, el colágeno se produce y los radicales libres se neutralizan.
      </p>
      <p>
        Cuando dormís maquillada, estás bloqueando todos estos procesos. El maquillaje se mezcla con el sebo, la suciedad y la contaminación del día, creando una capa que obstruye los poros y genera:
      </p>
      <ul>
        <li>Puntos negros y acné</li>
        <li>Deshidratación severa (la piel no puede "respirar")</li>
        <li>Textura áspera e irregular</li>
        <li>Arrugas prematuras alrededor de los ojos</li>
        <li>Infecciones oculares por el rímel y sombras</li>
      </ul>
      <p>
        <strong>Tip:</strong> Si realmente no podés con una rutina completa, tené al menos toallitas desmaquillantes en tu mesa de luz. Pero lo ideal es un doble limpieza: primero aceite o bálsamo para disolver el maquillaje, y después un limpiador suave con agua.
      </p>

      <h2>3. No hidratar la piel grasa</h2>
      <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format,compress&fit=crop&fm=webp&w=900&q=80" alt="Hidratación facial" class="article-img">
      <p>
        Este es un mito súper extendido: "Tengo piel grasa, no necesito hidratante". <strong>Error.</strong> La piel grasa produce exceso de sebo, pero eso no significa que esté hidratada. De hecho, muchas veces la piel produce más grasa precisamente porque está deshidratada y trata de compensar.
      </p>
      <p>
        La clave está en elegir la hidratante correcta: texturas ligeras, en gel, oil-free, con ingredientes como ácido hialurónico (que atrae el agua) o niacinamida (que regula el sebo). Cuando hidratas correctamente la piel grasa, paradójicamente se vuelve menos grasa porque deja de sobrecompensar.
      </p>

      <h2>4. Exfoliar demasiado (o muy poco)</h2>
      <p>
        La exfoliación es fundamental para renovar la piel: elimina las células muertas, destapa poros, mejora la textura y permite que los productos penetren mejor. Pero el exceso de exfoliación es tan dañino como no exfoliar nunca.
      </p>
      <p>
        Cuando exfoliás de más (más de 2-3 veces por semana, o con productos muy agresivos), destruís la barrera protectora de la piel. Esto genera enrojecimiento, sensibilidad, brotes de acné reactivo y, paradójicamente, más arrugas porque la piel queda desprotegida ante agresores externos.
      </p>
      <blockquote>
        <strong>Mi recomendación:</strong> Exfoliación química suave (ácido glicólico al 5-8% o ácido láctico) 2 veces por semana. Si tenés piel sensible, una vez por semana es suficiente. Dejá los scrubs físicos con micropartículas abrasivas — son del pasado.
      </blockquote>

      <h2>5. Ignorar el cuello y el escote</h2>
      <p>
        La piel del cuello y el escote es más fina y delicada que la del rostro, tiene menos glándulas sebáceas (se deshidrata más rápido) y está igualmente expuesta al sol. Sin embargo, la mayoría de las personas aplican protector solar y crema hidratante solo hasta el mentón.
      </p>
      <p>
        El resultado: un rostro cuidado y un cuello que delata la edad. Las arrugas horizontales del cuello (los famosos "anillos de Venus") y las manchas del escote son extremadamente difíciles de tratar una vez establecidas.
      </p>
      <p>
        <strong>Prevención:</strong> Extendé todos tus productos de skincare (limpiador, sérum, hidratante, protector solar) desde el rostro hasta el escote. Tu yo del futuro te lo va a agradecer.
      </p>

      <h2>Bonus: El estrés también envejece</h2>
      <p>
        El cortisol (hormona del estrés) degradada el colágeno, aumenta la inflamación sistémica y altera el ciclo de renovación celular. Las personas sometidas a estrés crónico pueden aparentar hasta 10 años más de su edad biológica.
      </p>
      <p>
        Dormir 7-8 horas, hacer ejercicio regular, meditar y cuidar tu salud mental no son "lujos" — son parte fundamental de cualquier protocolo anti-edad serio.
      </p>

      <div class="article-cta">
        <h3>¿Querés un diagnóstico personalizado de tu piel?</h3>
        <p>Agendá una consulta con nuestra Dra. Camila Sánchez para un análisis completo y un plan de skincare a tu medida.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Consulta</a>
      </div>
    `},"botox-mitos-y-verdades":{title:"Botox: Mitos y Verdades que Tenés que Saber",tag:"Tratamientos",date:"15 Feb, 2026",author:"Dr. Martín Rivas",readTime:"7 min",heroImg:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=1920&q=80",content:`
      <p class="article-intro">
        El botox es probablemente el tratamiento estético más popular del mundo y, al mismo tiempo, el que más mitos tiene a su alrededor. Después de aplicar más de 3.000 procedimientos, quiero contarte toda la verdad: lo bueno, lo que hay que tener en cuenta, y lo que es pura ficción.
      </p>

      <h2>¿Qué es exactamente el Botox?</h2>
      <p>
        El Botox (toxina botulínica tipo A) es una proteína purificada que, cuando se inyecta en cantidades mínimas en músculos específicos del rostro, relaja temporalmente esos músculos. Al relajarlos, se suavizan las líneas de expresión que se forman cuando gesticulamos: el entrecejo, las patas de gallo, las líneas de la frente.
      </p>
      <p>
        Es importante entender que <strong>el Botox no rellena ni estira la piel</strong>. Lo que hace es evitar que el músculo se contraiga con la misma fuerza, por lo que la arruga no se marca tanto. Es un tratamiento preventivo y correctivo a la vez.
      </p>

      <h2>MITO 1: "Te deja sin expresión facial"</h2>
      <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&fit=crop&fm=webp&w=900&q=80" alt="Resultado natural de botox" class="article-img">
      <p>
        <strong>FALSO</strong> (si está bien aplicado). Este es el mito más extendido y el que más miedo genera. La realidad es que un profesional experimentado aplica dosis mínimas y precisas en puntos estratégicos. El resultado no es una cara "congelada", sino una versión descansada y natural de vos misma.
      </p>
      <p>
        La clave está en la técnica: no se trata de paralizar el músculo por completo, sino de reducir su fuerza de contracción. Seguís pudiendo expresar emociones, fruncir el ceño, sonreír. Lo que cambia es que esos gestos no dejan marcas profundas en la piel.
      </p>
      <blockquote>
        Los casos de "cara congelada" que ves en internet son producto de sobredosis, mala técnica o aplicación en zonas incorrectas. Un buen profesional jamás te haría eso.
      </blockquote>

      <h2>MITO 2: "Es peligroso y tóxico"</h2>
      <p>
        <strong>FALSO.</strong> El Botox tiene más de 30 años de uso médico y estético con un perfil de seguridad extraordinario. Está aprobado por la FDA (Estados Unidos), la EMA (Europa) y la ANMAT (Argentina). Las dosis utilizadas en estética son ínfimas comparadas con las que podrían causar algún efecto adverso.
      </p>
      <p>
        De hecho, el Botox se usa exitosamente en medicina para tratar migrañas crónicas, contracturas musculares, hiperhidrosis (sudoración excesiva), bruxismo e incluso espasticidad en niños con parálisis cerebral. Si fuera tan peligroso, no se usaría en niños.
      </p>

      <h2>MITO 3: "Una vez que empezás, no podés dejarlo"</h2>
      <p>
        <strong>FALSO.</strong> No genera dependencia física ni química. Si dejás de aplicarte Botox, simplemente volvés gradualmente a tu estado anterior. Los músculos recuperan su fuerza y las líneas de expresión vuelven a aparecer como antes. No hay efecto rebote, ni empeoramiento, ni cambios permanentes.
      </p>
      <p>
        Lo que sí pasa es que te acostumbrás a verte bien y no querés volver atrás. Pero eso es una decisión personal, no un efecto farmacológico.
      </p>

      <h2>VERDAD 1: Cuanto antes se empiece (con criterio), mejor</h2>
      <p>
        El "Botox preventivo" es una tendencia basada en evidencia real. Cuando se aplica antes de que las arrugas se marquen profundamente, evita que se formen surcos en la piel. Es mucho más fácil prevenir una arruga que eliminar una que ya está grabada.
      </p>
      <p>
        La edad ideal para empezar varía según cada persona: depende de tu genética, tu gesticulación, tu exposición solar y tus expectativas. Generalmente, a partir de los 28-30 años es un buen momento para considerar un Botox preventivo suave.
      </p>

      <h2>VERDAD 2: La experiencia del profesional lo es TODO</h2>
      <p>
        El Botox es un producto relativamente simple. Lo que marca la diferencia entre un resultado sublime y uno desastroso es <strong>quién te lo aplica</strong>. Un profesional experimentado conoce la anatomía facial en detalle, adapta las dosis a tu musculatura específica y sabe exactamente dónde y cuánto inyectar.
      </p>
      <ul>
        <li>Siempre consultá que sea médico matriculado</li>
        <li>Pedí ver fotos de resultados anteriores</li>
        <li>Desconfiá de precios demasiado baratos</li>
        <li>El producto debe estar sellado y visible</li>
        <li>Evitá aplicaciones en lugares no habilitados</li>
      </ul>

      <h2>¿Duele? ¿Cuánto dura? ¿Cuánto cuesta?</h2>
      <p>
        <strong>Dolor:</strong> Mínimo. Se usa una aguja ultrafina. La mayoría de los pacientes lo describen como un "pellizquito". El procedimiento dura 15-20 minutos y no requiere anestesia.
      </p>
      <p>
        <strong>Duración:</strong> Entre 4 y 6 meses en promedio. Después se reabsorbe naturalmente. La primera aplicación suele durar un poco menos; las siguientes, más, porque el músculo se "acostumbra" a estar relajado.
      </p>
      <p>
        <strong>Recuperación:</strong> Inmediata. Podés volver a tu rutina normal enseguida, solo evitando ejercicio intenso y masajes faciales por 24hs.
      </p>

      <div class="article-cta">
        <h3>¿Tenés más preguntas sobre el Botox?</h3>
        <p>El Dr. Rivas ofrece una consulta inicial donde evalúa tu caso, te muestra simulaciones y responde todas tus dudas sin compromiso.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Consulta</a>
      </div>
    `},"rutina-skincare-tipo-piel":{title:"Rutina de Skincare para Cada Tipo de Piel",tag:"Tips",date:"02 Feb, 2026",author:"Lic. Sofía Moretti",readTime:"10 min",heroImg:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format,compress&fit=crop&fm=webp&w=1920&q=80",content:`
      <p class="article-intro">
        No existe una rutina universal de skincare. Lo que le funciona a tu amiga puede ser un desastre para tu piel. La clave está en conocer tu tipo de piel, entender qué necesita, y armar un protocolo personalizado. Después de 10 años como cosmiatra, te voy a dar las rutinas paso a paso para cada tipo.
      </p>

      <h2>Primero: ¿Cómo sé qué tipo de piel tengo?</h2>
      <p>
        El test más simple es el del "papel secante": lavate la cara con un limpiador suave, no te apliques nada, y después de 2 horas presioná un papel tissue en diferentes zonas. Si sale brilloso en todos lados: piel grasa. Si solo en la zona T (frente, nariz, mentón): mixta. Si no sale brilloso en ningún lado: seca o normal.
      </p>

      <h2>Rutina para Piel Grasa</h2>
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format,compress&fit=crop&fm=webp&w=900&q=80" alt="Skincare piel grasa" class="article-img">
      <p><strong>Tu piel produce exceso de sebo</strong>, lo que genera brillo, poros dilatados y tendencia al acné. El error más común es usar productos agresivos que la "sequen", porque eso solo genera más producción de grasa.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza suave</strong> con gel o espuma sin sulfatos (ácido salicílico al 0.5-2%)</li>
        <li><strong>Tónico</strong> con niacinamida (regula sebo) o hamamelis</li>
        <li><strong>Sérum</strong> de niacinamida al 10% + zinc</li>
        <li><strong>Hidratante</strong> en gel oil-free con ácido hialurónico</li>
        <li><strong>Protector solar</strong> SPF 50+ con acabado mate o toque seco</li>
      </ol>

      <h3>Noche:</h3>
      <ol>
        <li><strong>Doble limpieza:</strong> aceite micelar + gel limpiador</li>
        <li><strong>Exfoliante</strong> (2-3x/semana): BHA (ácido salicílico) al 2%</li>
        <li><strong>Sérum</strong> de retinol al 0.3-0.5% (noches alternas)</li>
        <li><strong>Hidratante</strong> ligera reparadora</li>
      </ol>

      <h2>Rutina para Piel Seca</h2>
      <p><strong>Tu piel no produce suficiente sebo natural</strong>, lo que genera tirantez, descamación, sensibilidad y arrugas prematuras. La clave es hidratar, hidratar e hidratar — pero también reparar la barrera cutánea.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza</strong> con leche o crema limpiadora sin espuma</li>
        <li><strong>Tónico</strong> hidratante con ácido hialurónico o agua termal</li>
        <li><strong>Sérum</strong> de ácido hialurónico multi-peso molecular</li>
        <li><strong>Crema hidratante</strong> rica con ceramidas y manteca de karité</li>
        <li><strong>Protector solar</strong> SPF 50+ con acabado hidratante</li>
      </ol>

      <h3>Noche:</h3>
      <ol>
        <li><strong>Limpieza suave</strong> con bálsamo o aceite + agua micelar</li>
        <li><strong>Exfoliante</strong> (1x/semana): AHA suave (ácido láctico al 5%)</li>
        <li><strong>Sérum</strong> reparador con péptidos o bakuchiol</li>
        <li><strong>Crema nocturna</strong> nutritiva con escualano o aceite de rosa mosqueta</li>
        <li><strong>Contorno de ojos</strong> con retinol encapsulado</li>
      </ol>

      <h2>Rutina para Piel Mixta</h2>
      <p><strong>La más desafiante:</strong> grasa en la zona T y seca en las mejillas. La clave es usar productos equilibrantes que regulen las zonas grasas sin resecar las secas.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza</strong> con gel suave pH balanceado</li>
        <li><strong>Tónico</strong> equilibrante con niacinamida</li>
        <li><strong>Sérum</strong> de ácido hialurónico (hidrata sin engrasar)</li>
        <li><strong>Hidratante</strong> gel-crema (lo mejor de ambos mundos)</li>
        <li><strong>Protector solar</strong> SPF 50+ acabado natural/semimate</li>
      </ol>

      <h2>Rutina para Piel Sensible</h2>
      <p><strong>Tu piel reacciona a todo:</strong> enrojecimiento, picazón, ardor, brotes. La barrera cutánea está comprometida y necesitás productos con pocos ingredientes, sin fragancias ni alcohol.</p>
      
      <h3>Mañana:</h3>
      <ol>
        <li><strong>Limpieza</strong> con agua micelar o leche limpiadora ultra-suave</li>
        <li><strong>Sérum</strong> calmante con centella asiática o aloe vera</li>
        <li><strong>Crema barrera</strong> con ceramidas, péptidos y pantenol</li>
        <li><strong>Protector solar</strong> mineral (óxido de zinc/dióxido de titanio) SPF 50+</li>
      </ol>

      <blockquote>
        <strong>Regla universal:</strong> Nunca introduzcas más de un producto nuevo a la vez. Esperá 2 semanas entre cada incorporación para detectar posibles reacciones.
      </blockquote>

      <h2>Los ingredientes estrella según tu edad</h2>
      <ul>
        <li><strong>20s:</strong> Vitamina C (antioxidante), niacinamida, SPF</li>
        <li><strong>30s:</strong> Retinol (anti-edad), péptidos, ácido hialurónico</li>
        <li><strong>40s:</strong> Retinol más potente, factores de crecimiento, ceramidas</li>
        <li><strong>50+:</strong> Retinoides de prescripción, suplementos de colágeno, tratamientos en consultorio</li>
      </ul>

      <div class="article-cta">
        <h3>¿Necesitás un diagnóstico de piel personalizado?</h3>
        <p>La Lic. Moretti realiza análisis completos con dermatoscopio para determinar tu tipo de piel exacto y armar tu rutina ideal.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Diagnóstico</a>
      </div>
    `},"cada-cuanto-limpieza-facial":{title:"¿Cada cuánto deberías hacerte una Limpieza Facial?",tag:"Cuidados",date:"20 Ene, 2026",author:"Lic. Sofía Moretti",readTime:"5 min",heroImg:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&fit=crop&fm=webp&w=1920&q=80",content:`
      <p class="article-intro">
        La limpieza facial profesional es la base de cualquier protocolo de cuidado serio. Pero una de las preguntas más frecuentes en el consultorio es: "¿cada cuánto me la tengo que hacer?" La respuesta, como en casi todo en estética, es: depende.
      </p>

      <h2>¿Qué hace exactamente una limpieza facial profesional?</h2>
      <p>
        Una limpieza profesional no es simplemente "lavarte la cara". Es un protocolo de varios pasos que incluye: desmaquillado profundo, vaporización para abrir poros, extracción manual de comedones (puntos negros y blancos), alta frecuencia para desinfectar, mascarilla específica para tu tipo de piel, y finalización con sérum y protección solar.
      </p>
      <p>
        Lo que logramos con esto es eliminar todo lo que tu rutina diaria no puede: impurezas profundas, células muertas acumuladas, exceso de sebo en los poros. Es como hacer un "reset" en tu piel.
      </p>

      <h2>Frecuencia según tu tipo de piel</h2>
      <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format,compress&fit=crop&fm=webp&w=900&q=80" alt="Tratamiento facial" class="article-img">
      
      <h3>Piel grasa o acneica: cada 3-4 semanas</h3>
      <p>Tu piel produce más sebo, los poros se obstruyen más rápido y necesitás extracciones más frecuentes para evitar que se formen quistes e inflamaciones.</p>
      
      <h3>Piel mixta: cada 4-5 semanas</h3>
      <p>La zona T necesita atención regular, pero las mejillas no tanto. Un mes entre sesiones suele ser el sweet spot.</p>
      
      <h3>Piel normal: cada 5-6 semanas</h3>
      <p>Tu piel se mantiene relativamente limpia con tu rutina diaria. Las limpiezas son más de mantenimiento y optimización.</p>
      
      <h3>Piel seca o sensible: cada 6-8 semanas</h3>
      <p>Tu piel no se obstruye tanto, y una limpieza demasiado frecuente podría irritarla. Se usan técnicas más suaves y productos calmantes.</p>

      <h2>Señales de que necesitás una limpieza YA</h2>
      <ul>
        <li>Los productos que usás dejaron de "funcionar" (la piel los absorbe menos)</li>
        <li>Ves puntos negros, especialmente en nariz y mentón</li>
        <li>La piel se siente áspera al tacto, con textura irregular</li>
        <li>El maquillaje no se aplica parejo, se acumula en zonas</li>
        <li>La piel se ve opaca, sin brillo, "cansada"</li>
        <li>Tenés brotes de granitos que no se van</li>
      </ul>

      <h2>¿Se puede hacer una limpieza antes de un evento?</h2>
      <p>
        <strong>Sí, pero con al menos 3-5 días de anticipación.</strong> Después de una limpieza profunda, la piel puede quedar ligeramente enrojecida por las extracciones (especialmente si hay muchas impurezas). Ese enrojecimiento se va en 24-48hs y después la piel queda espectacular.
      </p>
      <p>
        Si tu evento es mañana, mejor hacete un Hydra-Glow (limpieza sin extracción + hidratación intensiva), que deja la piel perfecta al instante sin ningún enrojecimiento.
      </p>

      <div class="article-cta">
        <h3>¿Hace más de 2 meses que no te hacés una limpieza?</h3>
        <p>Tu piel te lo está pidiendo. Agendá tu turno y salí del consultorio brillando.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Limpieza Facial</a>
      </div>
    `},"protector-solar-regla-anti-edad":{title:"Protector Solar: La Regla de Oro Anti-Edad",tag:"Cuidados",date:"10 Ene, 2026",author:"Dra. Camila Sánchez",readTime:"6 min",heroImg:"https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format,compress&fit=crop&fm=webp&w=1920&q=80",content:`
      <p class="article-intro">
        Si tuviera que recomendar un solo producto de skincare para el resto de tu vida, sería el protector solar. No el sérum más caro, no la crema más exclusiva. El protector solar. Sin negociación.
      </p>

      <h2>¿Por qué es tan importante?</h2>
      <p>
        La radiación ultravioleta es el factor externo número uno de envejecimiento cutáneo. El sol produce dos tipos de daño en la piel:
      </p>
      <ul>
        <li><strong>Rayos UVB:</strong> causan quemaduras y están relacionados con el cáncer de piel. Son más fuertes en verano y al mediodía.</li>
        <li><strong>Rayos UVA:</strong> penetran más profundo, destruyen el colágeno y la elastina, generan manchas, y están presentes TODO el año, incluso en días nublados. Atraviesan vidrios.</li>
      </ul>
      <p>
        El fotoenvejecimiento (envejecimiento por sol) es responsable del <strong>80-90% de los signos visibles de envejecimiento</strong>: arrugas, flacidez, manchas, textura despareja y pérdida de luminosidad.
      </p>

      <h2>¿Qué SPF necesito?</h2>
      <img src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format,compress&fit=crop&fm=webp&w=900&q=80" alt="Protección solar SPF" class="article-img">
      <p>
        <strong>SPF 30</strong> bloquea el 97% de los rayos UVB. <strong>SPF 50</strong> bloquea el 98%. La diferencia parece mínima, pero en el uso diario sostenido, ese 1% extra sí se nota a lo largo de los años. Mi recomendación: SPF 50+ siempre, especialmente en Argentina donde la radiación es alta.
      </p>
      <p>
        Pero el número de SPF es solo parte de la ecuación. También necesitás que sea de <strong>amplio espectro</strong> (UVA + UVB) y que tenga buen PPD (índice de protección UVA). Un SPF 50 con PPD bajo te protege de quemaduras pero no del envejecimiento.
      </p>

      <h2>El error más común: la cantidad</h2>
      <p>
        La mayoría de las personas usan la mitad o menos de la cantidad necesaria. La regla es: <strong>2 dedos de protector solar</strong> (dos líneas a lo largo de los dedos índice y medio) para cubrir todo el rostro, cuello y orejas.
      </p>
      <p>
        Si usás la mitad de la cantidad, estás recibiendo aproximadamente un SPF de 7, sin importar lo que diga el envase. Y si no lo reaplicás cada 2-3 horas (o después de sudor/contacto con agua), la protección baja drásticamente.
      </p>

      <h2>¿Cuál tipo de protector elegir?</h2>
      <ul>
        <li><strong>Piel grasa:</strong> Fluidos oil-free con acabado mate o toque seco</li>
        <li><strong>Piel seca:</strong> Cremas con acabado hidratante y luminoso</li>
        <li><strong>Piel sensible:</strong> Filtros minerales (óxido de zinc, dióxido de titanio)</li>
        <li><strong>Uso diario urbano:</strong> Protectores con color que unifican el tono</li>
        <li><strong>Actividad al aire libre:</strong> Resistentes al agua y sudor</li>
      </ul>

      <blockquote>
        <strong>Dato:</strong> Usar protector solar consistentemente durante 1 año revierte parcialmente el daño solar acumulado. La piel tiene capacidad de auto-reparación si le das las condiciones.
      </blockquote>

      <div class="article-cta">
        <h3>¿Querés saber cuánto daño solar acumulado tiene tu piel?</h3>
        <p>Con nuestro análisis con luz de Wood, podemos ver manchas y daño solar que aún no es visible a simple vista. Prevenir es siempre mejor.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Análisis</a>
      </div>
    `},"tendencias-estetica-2026":{title:"Tendencias en Estética 2026: Lo que Viene",tag:"Tendencias",date:"03 Ene, 2026",author:"Dra. Camila Sánchez",readTime:"7 min",heroImg:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format,compress&fit=crop&fm=webp&w=1920&q=80",content:`
      <p class="article-intro">
        El mundo de la medicina estética evoluciona cada vez más rápido. Lo que hace 5 años parecía ciencia ficción, hoy es parte de nuestro día a día en el consultorio. Acabo de volver del Congreso Internacional de Medicina Estética en Miami, y estas son las tendencias que van a dominar este 2026.
      </p>

      <h2>1. Glass Skin: la obsesión por la piel transparente</h2>
      <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format,compress&fit=crop&fm=webp&w=900&q=80" alt="Glass skin tendencia" class="article-img">
      <p>
        El concepto viene de la K-Beauty (belleza coreana) y se refiere a una piel tan hidratada, luminosa y pareja que parece de vidrio. No se trata de cubrirla con maquillaje, sino de que la piel misma tenga esa calidad.
      </p>
      <p>
        Para lograrlo combinamos: peelings suaves periódicos, mesoterapia con ácido hialurónico, skinboosters y una rutina domiciliaria enfocada en hidratación multicapa. Los resultados son impresionantes y muy naturales.
      </p>

      <h2>2. Exosomas: la revolución en regeneración celular</h2>
      <p>
        Los exosomas son nanovesículas que las células usan para comunicarse entre sí. En medicina estética, los usamos como vehículos de señalización celular: llevan "mensajes" de regeneración directamente a las células de la piel.
      </p>
      <p>
        Son más potentes que el PRP (plasma rico en plaquetas) y los factores de crecimiento tradicionales. Estimulan la producción de colágeno, elastina y ácido hialurónico propio de la piel. Están revolucionando el tratamiento de cicatrices, alopecia y rejuvenecimiento facial profundo.
      </p>

      <h2>3. Batch Botox: micro-dosis para millennials</h2>
      <p>
        "Baby Botox" evolucionó a "Batch Botox": micro-dosis distribuidas en más puntos del rostro para un efecto global de relajación sutil. En lugar de tratar solo el entrecejo, se aplican cantidades mínimas en 15-20 puntos del rostro superior, logrando un efecto de "filtro de Instagram en la vida real".
      </p>
      <p>
        Cada vez más pacientes jóvenes (25-35 años) eligen esta técnica preventiva. No buscan eliminar arrugas (que todavía no tienen), sino evitar que aparezcan y mantener esa expresión descansada y fresca.
      </p>

      <h2>4. Bioestimuladores de colágeno de nueva generación</h2>
      <p>
        Los bioestimuladores como Sculptra (ácido poliláctico) y Radiesse (hidroxiapatita de calcio) están ganando terreno sobre los rellenos tradicionales. En lugar de "rellenar" mecánicamente, estimulan al cuerpo a producir su propio colágeno.
      </p>
      <p>
        Los resultados son más naturales, más duraderos (hasta 2 años) y mejoran la calidad global de la piel, no solo el volumen. La tendencia es tratar la cara como un todo: no solo rellenar un surco, sino mejorar la calidad de toda la piel del rostro.
      </p>

      <h2>5. Personalización con IA</h2>
      <p>
        La inteligencia artificial ya está en nuestros consultorios. Cámaras de alta resolución analizan la piel en segundos y detectan manchas, vascularización, profundidad de arrugas y textura con una precisión imposible para el ojo humano.
      </p>
      <p>
        Esto nos permite crear protocolos ultra-personalizados y medir objetivamente los resultados de cada tratamiento. El futuro es un skincare y planes de tratamiento diseñados específicamente para tu piel, tus genes y tu estilo de vida.
      </p>

      <h2>6. Medicina estética masculina: ya no es tabú</h2>
      <p>
        El segmento masculino creció un 40% en los últimos 3 años. Cada vez más hombres buscan verse descansados, frescos y cuidados sin que se note que "se hicieron algo". Los tratamientos más demandados por ellos: Botox preventivo, limpieza facial profunda, tratamiento de ojeras y depilación láser.
      </p>

      <div class="article-cta">
        <h3>¿Querés saber cuáles de estas tendencias son ideales para vos?</h3>
        <p>Agendá una consulta y diseñamos un plan a medida con las últimas técnicas del mercado mundial.</p>
        <a href="/contacto" class="btn btn-gold" data-navigo><i class="fa-regular fa-calendar-check"></i> Agendar Consulta</a>
      </div>
    `}};function fa(e){const a=document.getElementById("app"),s=ma[e];if(!s){a.innerHTML=`
      <section class="sub-hero">
        <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Artículo no encontrado</h1>
          <p class="hero-subtitle">El artículo que buscás no existe o fue eliminado.</p>
        </div>
      </section>
      <section class="section text-center">
        <div class="container">
          <a href="/blog" class="btn btn-gold" data-navigo><i class="fa-solid fa-arrow-left"></i> Volver al Blog</a>
        </div>
      </section>
    `;return}a.innerHTML=`
    <!-- ARTICLE HERO -->
    <section class="sub-hero" style="height:55vh;">
      <div class="hero-bg" style="background-image: url('${s.heroImg}');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content" style="max-width:800px;">
        <span class="hero-label">✦ ${s.tag}</span>
        <h1 style="font-size:clamp(1.8rem,4vw,2.8rem);">${s.title}</h1>
        <div style="display:flex;gap:var(--space-xl);justify-content:center;margin-top:var(--space-lg);flex-wrap:wrap;">
          <span style="color:var(--gray-300);font-size:0.9rem;"><i class="fa-regular fa-calendar" style="margin-right:6px;color:var(--gold);"></i>${s.date}</span>
          <span style="color:var(--gray-300);font-size:0.9rem;"><i class="fa-regular fa-user" style="margin-right:6px;color:var(--gold);"></i>${s.author}</span>
          <span style="color:var(--gray-300);font-size:0.9rem;"><i class="fa-regular fa-clock" style="margin-right:6px;color:var(--gold);"></i>${s.readTime} de lectura</span>
        </div>
      </div>
    </section>

    <!-- ARTICLE BODY -->
    <section class="section" style="padding-top:var(--space-3xl);">
      <div class="container">
        <article class="article-body anim">
          ${s.content}
        </article>

        <div style="margin-top:var(--space-3xl);padding-top:var(--space-2xl);border-top:1px solid var(--gray-200);text-align:center;">
          <a href="/blog" class="btn btn-outline" data-navigo><i class="fa-solid fa-arrow-left"></i> Volver al Blog</a>
        </div>
      </div>
    </section>
  `}function se(){const e=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("anim-visible"),e.unobserve(s.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".anim, .anim-scale, .anim-left, .anim-right").forEach(a=>{e.observe(a)})}const x=new ea("/");function E(e,a){return()=>{e(),X(a),window.scrollTo(0,0),se()}}x.on("/",E(V,"/")).on("/tratamientos",E(oa,"/tratamientos")).on("/nosotros",E(na,"/nosotros")).on("/galeria",E(ca,"/galeria")).on("/blog",E(Te,"/blog")).on("/blog/:slug",({data:e})=>{fa(e.slug),X("/blog"),window.scrollTo(0,0),se()}).on("/contacto",E(pa,"/contacto")).notFound(()=>{E(V,"/")()});function W(){we(),ke(),xe(),ze(),Se(),x.hooks({after:()=>{x.updatePageLinks(),Pe()}}),x.resolve(),x.updatePageLinks()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",W):W();

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function Ea(){const a=document.getElementById("navbar");a.className="navbar",a.innerHTML=`
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
  `,La(),wa(),ka()}function La(){const a=document.getElementById("mobile-menu-overlay");a.className="mobile-overlay",a.innerHTML=`
    <a href="/" class="mobile-link" data-navigo>Inicio</a>
    <a href="/tratamientos" class="mobile-link" data-navigo>Tratamientos</a>
    <a href="/nosotros" class="mobile-link" data-navigo>Nosotros</a>
    <a href="/galeria" class="mobile-link" data-navigo>Galería</a>
    <a href="/blog" class="mobile-link" data-navigo>Blog</a>
    <a href="/contacto" class="mobile-link" data-navigo>Contacto</a>
    <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold btn-lg" style="margin-top:auto;">
      <i class="fa-brands fa-whatsapp"></i> Agendar Cita
    </a>
  `}function wa(){const a=document.querySelector(".navbar");window.addEventListener("scroll",()=>{window.scrollY>80?a.classList.add("scrolled"):a.classList.remove("scrolled")}),window.scrollY>80&&a.classList.add("scrolled")}function ka(){const a=document.getElementById("menu-toggle"),e=document.getElementById("mobile-menu-overlay");let s=document.querySelector(".mobile-overlay-backdrop");s||(s=document.createElement("div"),s.className="mobile-overlay-backdrop",document.body.appendChild(s));const o=()=>{a.classList.remove("open"),e.classList.remove("open"),s.classList.remove("open"),document.body.style.overflow=""};a.addEventListener("click",()=>{e.classList.contains("open")?o():(a.classList.add("open"),e.classList.add("open"),s.classList.add("open"),document.body.style.overflow="hidden")}),s.addEventListener("click",o),e.querySelectorAll(".mobile-link").forEach(t=>{t.addEventListener("click",o)})}function K(a){document.querySelectorAll(".navbar-link, .mobile-link").forEach(e=>{e.classList.remove("active");const s=e.getAttribute("href");(s===a||a==="/"&&s==="/")&&e.classList.add("active")})}function Ta(){const a=document.getElementById("footer-container");a.innerHTML=`
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
  `}function Sa(){const a=document.getElementById("whatsapp-container");a.innerHTML=`
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
  `}function Aa(){const a=document.getElementById("preloader");window.addEventListener("load",()=>{setTimeout(()=>{a.classList.add("hidden")},800)}),setTimeout(()=>{a.classList.add("hidden")},3e3)}function w(){const a=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("anim-visible"),a.unobserve(s.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".anim, .anim-scale, .anim-left, .anim-right").forEach(e=>{a.observe(e)})}const Pa=[{slug:"5-errores-que-envejecen-tu-piel",title:"5 Errores que Envejecen tu Piel (y cómo evitarlos)",excerpt:"Desde no usar protector solar hasta dormir con maquillaje. Descubrí los hábitos que te están sumando años y cómo revertirlos con simples cambios.",img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",tag:"Skincare",date:"28 Feb, 2026"},{slug:"botox-mitos-y-verdades",title:"Botox: Mitos y Verdades que Tenés que Saber",excerpt:"¿El botox te deja sin expresión? ¿Es peligroso? Derribamos los mitos más comunes sobre uno de los tratamientos más populares del mundo.",img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",tag:"Tratamientos",date:"15 Feb, 2026"},{slug:"rutina-skincare-tipo-piel",title:"Rutina de Skincare para Cada Tipo de Piel",excerpt:"Piel grasa, seca, mixta o sensible: cada tipo necesita un protocolo diferente. Te armamos la rutina perfecta paso a paso con productos accesibles.",img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",tag:"Tips",date:"02 Feb, 2026"},{slug:"cada-cuanto-limpieza-facial",title:"¿Cada cuánto deberías hacerte una Limpieza Facial?",excerpt:"La frecuencia ideal depende de tu tipo de piel y tu estilo de vida. Te explicamos cómo saber cuándo tu piel te pide una limpieza profesional.",img:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",tag:"Cuidados",date:"20 Ene, 2026"},{slug:"protector-solar-regla-anti-edad",title:"Protector Solar: La Regla de Oro Anti-Edad",excerpt:"El 80% del envejecimiento de la piel se debe al sol. Por qué el SPF es tu mejor inversión y cómo elegir el ideal para cada tipo de piel.",img:"https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",tag:"Cuidados",date:"10 Ene, 2026"},{slug:"tendencias-estetica-2026",title:"Tendencias en Estética 2026: Lo que Viene",excerpt:'Desde el "glass skin" hasta la bioestimulación con exosomas. Las tendencias que están revolucionando la medicina estética este año.',img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",tag:"Tendencias",date:"03 Ene, 2026"}];function xa(){const a=document.getElementById("app");a.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80');"></div>
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
          ${Pa.map((e,s)=>`
            <article class="blog-card anim anim-delay-${s%3+1}">
              <a href="/blog/${e.slug}" data-navigo style="display:block;">
                <div class="blog-card-img" style="background-image: url('${e.img}');">
                  <span class="blog-card-tag">${e.tag}</span>
                </div>
              </a>
              <div class="blog-card-body">
                <div class="blog-card-date"><i class="fa-regular fa-calendar" style="margin-right:6px;"></i>${e.date}</div>
                <h3><a href="/blog/${e.slug}" data-navigo style="color:inherit;transition:color 0.2s;">${e.title}</a></h3>
                <p>${e.excerpt}</p>
                <a href="/blog/${e.slug}" class="blog-read-more" data-navigo>
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
  `,window.scrollTo(0,0),w(),R()}function R(){document.querySelectorAll(".newsletter-form").forEach(a=>{a.addEventListener("submit",e=>{e.preventDefault();const s=a.querySelector(".newsletter-input"),o=a.querySelector(".newsletter-btn"),t=a.querySelector(".newsletter-msg"),r=s.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){t.innerHTML='<span style="color:#e74c3c;"><i class="fa-solid fa-circle-xmark"></i> Ingresá un email válido</span>';return}o.disabled=!0,o.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>',setTimeout(()=>{t.innerHTML='<span style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> ¡Suscripción exitosa! Revisá tu casilla de email.</span>',o.innerHTML='<i class="fa-solid fa-check"></i> ¡Listo!',o.style.background="#10b981",s.value="",setTimeout(()=>{o.disabled=!1,o.innerHTML="Suscribirme",o.style.background="",t.innerHTML=""},4e3)},1200)})})}var za=/([:*])(\w+)/g,Ca="([^/]+)",ja=/\*/g,Ra="?(?:.*)",Ma=/\/\?/g,Ba="/?([^/]+|)",Fa="(?:/^|^)",Oa="";function J(a){return a===void 0&&(a="/"),O()?location.pathname+location.search+location.hash:a}function p(a){return a.replace(/\/+$/,"").replace(/^\/+/,"")}function P(a){return typeof a=="string"}function Da(a){return typeof a=="function"}function x(a){return a&&a.indexOf("#")>=0&&a.split("#").pop()||""}function Ia(a,e){return e.length===0||!a?null:a.slice(1,a.length).reduce(function(s,o,t){return s===null&&(s={}),s[e[t]]=decodeURIComponent(o),s},null)}function z(a){var e=p(a).split(/\?(.*)?$/);return[p(e[0]),e.slice(1).join("")]}function F(a){for(var e={},s=a.split("&"),o=0;o<s.length;o++){var t=s[o].split("=");if(t[0]!==""){var r=decodeURIComponent(t[0]);e[r]?(Array.isArray(e[r])||(e[r]=[e[r]]),e[r].push(decodeURIComponent(t[1]||""))):e[r]=decodeURIComponent(t[1]||"")}}return e}function Z(a,e){var s=z(p(a.currentLocationPath)),o=s[0],t=s[1],r=t===""?null:F(t),l=[],m;if(P(e.path)){if(m=Fa+p(e.path).replace(za,function(h,b,E){return l.push(E),Ca}).replace(ja,Ra).replace(Ma,Ba)+"$",p(e.path)===""&&p(o)==="")return{url:o,queryString:t,hashString:x(a.to),route:e,data:null,params:r}}else m=e.path;var g=new RegExp(m,Oa),f=o.match(g);if(f){var v=P(e.path)?Ia(f,l):f.groups?f.groups:f.slice(1);return{url:p(o.replace(new RegExp("^"+a.instance.root),"")),queryString:t,hashString:x(a.to),route:e,data:v,params:r}}return!1}function aa(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function k(a,e){return typeof a[e]>"u"||a[e]===!0}function _a(a){if(!a)return{};var e=a.split(","),s={},o;return e.forEach(function(t){var r=t.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(r[0]){case"historyAPIMethod":s.historyAPIMethod=r[1];break;case"resolveOptionsStrategy":o||(o={}),o.strategy=r[1];break;case"resolveOptionsHash":o||(o={}),o.hash=r[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":s[r[0]]=r[1]==="true";break}}),o&&(s.resolveOptions=o),s}function O(){return typeof window<"u"}function Ha(a,e){return a===void 0&&(a=[]),e===void 0&&(e={}),a.filter(function(s){return s}).forEach(function(s){["before","after","already","leave"].forEach(function(o){s[o]&&(e[o]||(e[o]=[]),e[o].push(s[o]))})}),e}function q(a,e,s){var o=e||{},t=0;(function r(){if(!a[t]){s&&s(o);return}Array.isArray(a[t])?(a.splice.apply(a,[t,1].concat(a[t][0](o)?a[t][1]:a[t][2])),r()):a[t](o,function(l){typeof l>"u"||l===!0?(t+=1,r()):s&&s(o)})})()}q.if=function(a,e,s){return Array.isArray(e)||(e=[e]),Array.isArray(s)||(s=[s]),[a,e,s]};function U(a,e){typeof a.currentLocationPath>"u"&&(a.currentLocationPath=a.to=J(a.instance.root)),a.currentLocationPath=a.instance._checkForAHash(a.currentLocationPath),e()}function C(a,e){for(var s=0;s<a.instance.routes.length;s++){var o=a.instance.routes[s],t=Z(a,o);if(t&&(a.matches||(a.matches=[]),a.matches.push(t),a.resolveOptions.strategy==="ONE")){e();return}}e()}function Na(a,e){a.navigateOptions&&(typeof a.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof a.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function $a(a,e){a.navigateOptions.force===!0?(a.instance._setCurrent([a.instance._pathToMatchObject(a.to)]),e(!1)):e()}var G=O(),Ua=aa();function Ga(a,e){if(k(a.navigateOptions,"updateBrowserURL")){var s=("/"+a.to).replace(/\/\//g,"/"),o=G&&a.resolveOptions&&a.resolveOptions.hash===!0;Ua?(history[a.navigateOptions.historyAPIMethod||"pushState"](a.navigateOptions.stateObj||{},a.navigateOptions.title||"",o?"#"+s:s),location&&location.hash&&(a.instance.__freezeListening=!0,setTimeout(function(){if(!o){var t=location.hash;location.hash="",location.hash=t}a.instance.__freezeListening=!1},1))):G&&(window.location.href=a.to)}e()}function ea(a,e){var s=a.instance;if(!s.lastResolved()){e();return}q(s.lastResolved().map(function(o){return function(t,r){if(!o.route.hooks||!o.route.hooks.leave){r();return}var l=!1,m=a.instance.matchLocation(o.route.path,a.currentLocationPath,!1);if(o.route.path!=="*")l=!m;else{var g=a.matches?a.matches.find(function(f){return o.route.path===f.route.path}):!1;l=!g}if(k(a.navigateOptions,"callHooks")&&l){q(o.route.hooks.leave.map(function(f){return function(v,h){return f(function(b){b===!1?a.instance.__markAsClean(a):h()},a.matches&&a.matches.length>0?a.matches.length===1?a.matches[0]:a.matches:void 0)}}).concat([function(){return r()}]));return}else r()}}),{},function(){return e()})}function Va(a,e){a.match.route.hooks&&a.match.route.hooks.before&&k(a.navigateOptions,"callHooks")?q(a.match.route.hooks.before.map(function(s){return function(t,r){return s(function(l){l===!1?a.instance.__markAsClean(a):r()},a.match)}}).concat([function(){return e()}])):e()}function Qa(a,e){k(a.navigateOptions,"callHandler")&&a.match.route.handler(a.match),a.instance.updatePageLinks(),e()}function Wa(a,e){a.match.route.hooks&&a.match.route.hooks.after&&k(a.navigateOptions,"callHooks")&&a.match.route.hooks.after.forEach(function(s){return s(a.match)}),e()}function Xa(a,e){var s=a.instance.lastResolved();if(s&&s[0]&&s[0].route===a.match.route&&s[0].url===a.match.url&&s[0].queryString===a.match.queryString){s.forEach(function(o){o.route.hooks&&o.route.hooks.already&&k(a.navigateOptions,"callHooks")&&o.route.hooks.already.forEach(function(t){return t(a.match)})}),e(!1);return}e()}function Ya(a,e){var s=a.instance._notFoundRoute;if(s){a.notFoundHandled=!0;var o=z(a.currentLocationPath),t=o[0],r=o[1],l=x(a.to);s.path=p(t);var m={url:s.path,queryString:r,hashString:l,data:null,route:s,params:r!==""?F(r):null};a.matches=[m],a.match=m}e()}function Ka(a,e){(!a.resolveOptions||a.resolveOptions.noMatchWarning===!1||typeof a.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+a.currentLocationPath+`" didn't match any of the registered routes.`),e()}function Ja(a,e){a.instance._setCurrent(null),e()}function sa(a,e){k(a.navigateOptions,"updateState")&&a.instance._setCurrent(a.matches),e()}var oa=[Xa,Va,Qa,Wa],V=[ea,Ya,q.if(function(a){var e=a.notFoundHandled;return e},oa.concat([sa]),[Ka,Ja])];function M(){return M=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},M.apply(this,arguments)}function Q(a,e){var s=0;function o(){if(s===a.matches.length){sa(a,e);return}q(oa,M({},a,{match:a.matches[s]}),function(){s+=1,o()})}ea(a,o)}function j(a){a.instance.__markAsClean(a)}function B(){return B=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=s[o])}return a},B.apply(this,arguments)}var W="[data-navigo]";function Za(a,e){var s=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:W},o=this,t="/",r=null,l=[],m=!1,g,f=aa(),v=O();a?t=p(a):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function h(i){return i.indexOf("#")>=0&&(s.hash===!0?i=i.split("#")[1]||"/":i=i.split("#")[0]),i}function b(i){return p(t+"/"+p(i))}function E(i,n,c,u){return i=P(i)?b(i):i,{name:u||p(String(i)),path:i,handler:n,hooks:Ha(c)}}function ia(i,n,c){var u=this;return typeof i=="object"&&!(i instanceof RegExp)?(Object.keys(i).forEach(function(d){if(typeof i[d]=="function")u.on(d,i[d]);else{var y=i[d],T=y.uses,ya=y.as,qa=y.hooks;l.push(E(d,T,[g,qa],ya))}}),this):(typeof i=="function"&&(c=n,n=i,i=t),l.push(E(i,n,[g,c])),this)}function D(i,n){if(o.__dirty){o.__waiting.push(function(){return o.resolve(i,n)});return}else o.__dirty=!0;i=i?p(t)+"/"+p(i):void 0;var c={instance:o,to:i,currentLocationPath:i,navigateOptions:{},resolveOptions:B({},s,n)};return q([U,C,q.if(function(u){var d=u.matches;return d&&d.length>0},Q,V)],c,j),c.matches?c.matches:!1}function I(i,n){if(o.__dirty){o.__waiting.push(function(){return o.navigate(i,n)});return}else o.__dirty=!0;i=p(t)+"/"+p(i);var c={instance:o,to:i,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:s,currentLocationPath:h(i)};q([Na,$a,C,q.if(function(u){var d=u.matches;return d&&d.length>0},Q,V),Ga,j],c,j)}function ta(i,n,c){var u=H(i,n);return u!==null?(I(u.replace(new RegExp("^/?"+t),""),c),!0):!1}function na(i){return this.routes=l=l.filter(function(n){return P(i)?p(n.path)!==p(i):Da(i)?i!==n.handler:String(n.path)!==String(i)}),this}function ra(){f&&(this.__popstateListener=function(){o.__freezeListening||D()},window.addEventListener("popstate",this.__popstateListener))}function la(){this.routes=l=[],f&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=m=!0}function ca(i,n){return o._notFoundRoute=E("*",i,[g,n],"__NOT_FOUND__"),this}function _(){if(v)return da().forEach(function(i){if(i.getAttribute("data-navigo")==="false"||i.getAttribute("target")==="_blank"){i.hasListenerAttached&&i.removeEventListener("click",i.navigoHandler);return}i.hasListenerAttached||(i.hasListenerAttached=!0,i.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&n.target.tagName.toLowerCase()==="a")return!1;var c=i.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var u=new URL(c);c=u.pathname+u.search}catch{}var d=_a(i.getAttribute("data-navigo-options"));m||(n.preventDefault(),n.stopPropagation(),o.navigate(p(c),d))},i.addEventListener("click",i.navigoHandler))}),o}function da(){return v?[].slice.call(document.querySelectorAll(s.linksSelector||W)):[]}function ua(i){return"/"+t+"/"+p(i)}function pa(i){return g=i,this}function ma(){return r}function H(i,n,c){var u=l.find(function(T){return T.name===i}),d=null;if(u){if(d=u.path,n)for(var y in n)d=d.replace(":"+y,n[y]);d=d.match(/^\//)?d:"/"+d}return d&&c&&!c.includeRoot&&(d=d.replace(new RegExp("^/"+t),"")),d}function fa(i){return i.getAttribute("href")}function N(i){var n=z(p(i)),c=n[0],u=n[1],d=u===""?null:F(u),y=x(i),T=E(c,function(){},[g],c);return{url:c,queryString:u,hashString:y,route:T,data:null,params:d}}function ga(){return N(p(J(t)).replace(new RegExp("^"+t),""))}function va(i){var n={instance:o,currentLocationPath:i,to:i,resolveOptions:s};return C(n,function(){}),n.matches?n.matches:!1}function ha(i,n,c){typeof n<"u"&&(typeof c>"u"||c)&&(n=b(n));var u={instance:o,to:n,currentLocationPath:n};U(u,function(){}),typeof i=="string"&&(i=typeof c>"u"||c?b(i):i);var d=Z(u,{name:String(i),path:i,handler:function(){},hooks:{}});return d||!1}function A(i,n,c){return typeof n=="string"&&(n=$(n)),n?(n.hooks[i]||(n.hooks[i]=[]),n.hooks[i].push(c),function(){n.hooks[i]=n.hooks[i].filter(function(u){return u!==c})}):(console.warn("Route doesn't exists: "+n),function(){})}function $(i){return typeof i=="string"?l.find(function(n){return n.name===b(i)}):l.find(function(n){return n.handler===i})}function ba(i){i.instance.__dirty=!1,i.instance.__waiting.length>0&&i.instance.__waiting.shift()()}this.root=t,this.routes=l,this.destroyed=m,this.current=r,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=ba,this.on=ia,this.off=na,this.resolve=D,this.navigate=I,this.navigateByName=ta,this.destroy=la,this.notFound=ca,this.updatePageLinks=_,this.link=ua,this.hooks=pa,this.extractGETParameters=function(i){return z(h(i))},this.lastResolved=ma,this.generate=H,this.getLinkPath=fa,this.match=va,this.matchLocation=ha,this.getCurrentLocation=ga,this.addBeforeHook=A.bind(this,"before"),this.addAfterHook=A.bind(this,"after"),this.addAlreadyHook=A.bind(this,"already"),this.addLeaveHook=A.bind(this,"leave"),this.getRoute=$,this._pathToMatchObject=N,this._clean=p,this._checkForAHash=h,this._setCurrent=function(i){return r=o.current=i},ra.call(this),_.call(this)}function X(){const a=document.getElementById("app");a.innerHTML=`
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80');"></div>
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
          <a href="/contacto" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.4);color:white;" data-navigo>
            <i class="fa-regular fa-calendar-check"></i> Agendar Cita
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
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80');"></div>
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
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80');"></div>
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
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80');"></div>
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
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80');"></div>
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
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80');"></div>
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
                <div class="testimonial-avatar" style="background-image: url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80');"></div>
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
            <a href="/contacto" class="btn btn-outline" style="width:100%;" data-navigo>Consultar</a>
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
            <a href="/contacto" class="btn btn-gold" style="width:100%;" data-navigo>Reservar Ahora</a>
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
            <a href="/contacto" class="btn btn-outline" style="width:100%;" data-navigo>Consultar</a>
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
  `,window.scrollTo(0,0),w(),ae()}function ae(){const a=document.getElementById("testimonials-track"),e=document.getElementById("carousel-dots");if(!a||!e)return;const o=a.querySelectorAll(".testimonial-card").length;let t=0,r;for(let h=0;h<o;h++){const b=document.createElement("button");b.className=`carousel-dot${h===0?" active":""}`,b.setAttribute("aria-label",`Testimonial ${h+1}`),b.addEventListener("click",()=>l(h)),e.appendChild(b)}function l(h){t=h,a.style.transform=`translateX(-${t*100}%)`,e.querySelectorAll(".carousel-dot").forEach((b,E)=>{b.classList.toggle("active",E===t)})}function m(){l((t+1)%o)}function g(){r=setInterval(m,5e3)}function f(){clearInterval(r)}const v=document.getElementById("testimonials-carousel");v.addEventListener("mouseenter",f),v.addEventListener("mouseleave",g),g()}const ee=[{id:"botox",name:"Botox & Rellenos Faciales",desc:"Suaviza líneas de expresión y recupera el volumen perdido con resultados inmediatos y naturales.",img:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",duration:"30 min",recovery:"4-6 meses",price:"Desde $55.000",details:["<strong>Zonas:</strong> Patas de gallo, entrecejo, frente, labios, pómulos, mentón.","<strong>Producto:</strong> Toxina botulínica tipo A (Botox®, Dysport®).","<strong>Dolor:</strong> Mínimo. Usamos anestesia tópica para tu comodidad.","<strong>Resultado:</strong> Visible a las 48-72hs. Aspecto natural y descansado.","<strong>Recomendación:</strong> Evitar ejercicio intenso las primeras 24hs."]},{id:"laser",name:"Depilación Láser Soprano",desc:"La solución definitiva para una piel suave todo el año. Tecnología de trío láser indolora.",img:"https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80",duration:"45 min",recovery:"6-8 sesiones",price:"Desde $35.000",details:["<strong>Tecnología:</strong> Soprano Ice Platinum (Trío láser: Alejandrita, Diodo, Nd:YAG).","<strong>Beneficio:</strong> Indoloro y apto para todo tipo de piel, incluso bronceada.","<strong>Zonas:</strong> Cuerpo entero, rostro, bikini, axilas.","<strong>Sesiones:</strong> 6 a 8 para eliminación total. Mantenimiento anual.","<strong>Post-sesión:</strong> Proteger del sol 48hs. Sin depilación con cera entre sesiones."]},{id:"hydraglow",name:"Hydra-Glow Facial",desc:"Limpieza profunda + hidratación intensa. El tratamiento estrella para un brillo instantáneo.",img:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",duration:"60 min",recovery:"Mensual",price:"Desde $45.000",details:["<strong>Procedimiento:</strong> Peeling ultrasónico + extracción + mascarilla de ácido hialurónico.","<strong>Resultado:</strong> Piel luminosa, poros limpios y textura suave al instante.","<strong>Ideal:</strong> Previo a eventos, fiestas, bodas o sesiones de fotos.","<strong>Frecuencia:</strong> Una vez al mes para mantener resultados óptimos.","<strong>Incluye:</strong> Sérum vitamínico y protección solar post-tratamiento."]},{id:"peeling",name:"Peeling Químico",desc:"Renueva tu piel capa por capa. Elimina manchas, marcas de acné y textura irregular.",img:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",duration:"40 min",recovery:"3-7 días",price:"Desde $40.000",details:["<strong>Tipos:</strong> Superficial (ácido glicólico), medio (TCA), profundo (fenol).","<strong>Beneficios:</strong> Elimina manchas solares, líneas finas, textura irregular.","<strong>Post:</strong> Descamación suave de 3-7 días. Piel renovada y luminosa.","<strong>Frecuencia:</strong> Cada 4-6 semanas según protocolo médico.","<strong>Cuidado:</strong> Protección solar obligatoria SPF 50+."]},{id:"mesoterapia",name:"Mesoterapia Facial",desc:"Cóctel de vitaminas, minerales y ácido hialurónico inyectados directamente en la piel.",img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",duration:"30 min",recovery:"24-48 hs",price:"Desde $50.000",details:["<strong>Ingredientes:</strong> Ácido hialurónico, vitaminas C y E, aminoácidos, péptidos.","<strong>Beneficios:</strong> Hidratación profunda, luminosidad, firmeza y elasticidad.","<strong>Técnica:</strong> Micro-inyecciones con aguja ultrafina. Mínimas molestias.","<strong>Sesiones:</strong> Protocolo de 4 sesiones cada 15 días.",'<strong>Resultado:</strong> Piel rejuvenecida, jugosa y con efecto "glass skin".']},{id:"dermapen",name:"Dermapen / Microneedling",desc:"Estimula la producción natural de colágeno a través de micro-punciones controladas.",img:"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",duration:"45 min",recovery:"2-3 días",price:"Desde $48.000",details:["<strong>Cómo funciona:</strong> Micro-agujas estimulan la regeneración celular natural.","<strong>Beneficios:</strong> Reduce poros, cicatrices de acné, arrugas finas y estrías.","<strong>Combinación:</strong> Se potencia con sérum de vitamina C o factores de crecimiento.","<strong>Sesiones:</strong> 3-6 sesiones cada 4 semanas.","<strong>Resultado:</strong> Piel más firme, pareja y rejuvenecida progresivamente."]},{id:"limpieza",name:"Limpieza Facial Profunda",desc:"El paso fundamental para una piel sana. Extracción profesional y nutrición intensiva.",img:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",duration:"50 min",recovery:"Inmediato",price:"Desde $25.000",details:["<strong>Pasos:</strong> Desmaquillado, vaporización, extracción, alta frecuencia, mascarilla.","<strong>Beneficios:</strong> Elimina puntos negros, células muertas y oxigena la piel.","<strong>Frecuencia:</strong> Cada 30-45 días como rutina de mantenimiento.","<strong>Para quién:</strong> Todo tipo de piel. Ideal como primer paso de cualquier protocolo.","<strong>Incluye:</strong> Diagnóstico personalizado de tu tipo de piel."]},{id:"plasma",name:"Plasma Rico en Plaquetas (PRP)",desc:"Tu propia sangre es la medicina. Regeneración celular con factores de crecimiento autólogos.",img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",duration:"45 min",recovery:"1-2 días",price:"Desde $60.000",details:["<strong>Proceso:</strong> Extracción de sangre → centrifugado → inyección del plasma en la piel.","<strong>Beneficios:</strong> Rejuvenecimiento natural, mejora textura, estimula colágeno.","<strong>Aplicación:</strong> Facial, cuero cabelludo (alopecia), ojeras y cuello.","<strong>Sesiones:</strong> 3 sesiones cada 4 semanas. Mantenimiento semestral.","<strong>Ventaja:</strong> 100% biocompatible. Sin riesgo de rechazo o alergia."]}];function se(){const a=document.getElementById("app");a.innerHTML=`
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
          ${ee.map((e,s)=>`
            <div class="treatment-card anim anim-delay-${s%3+1}" id="treatment-${e.id}">
              <div class="treatment-card-img" style="background-image: url('${e.img}');"></div>
              <div class="treatment-card-body">
                <h3>${e.name}</h3>
                <p>${e.desc}</p>
                <div class="treatment-meta">
                  <span><i class="fa-regular fa-clock"></i> ${e.duration}</span>
                  <span><i class="fa-solid fa-rotate"></i> ${e.recovery}</span>
                  <span><i class="fa-solid fa-tag"></i> ${e.price}</span>
                </div>
              </div>
              <div class="treatment-details" id="details-${e.id}">
                <ul>
                  ${e.details.map(o=>`<li>${o}</li>`).join("")}
                </ul>
              </div>
              <button class="treatment-toggle" onclick="toggleTreatment('${e.id}', this)">
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
        <a href="/contacto" class="btn btn-gold btn-lg" data-navigo>
          <i class="fa-regular fa-calendar-check"></i> Agendar Consulta Gratis
        </a>
      </div>
    </section>
  `,window.scrollTo(0,0),window.toggleTreatment=(e,s)=>{const o=document.getElementById(`details-${e}`),t=o.classList.contains("open");o.classList.toggle("open"),s.classList.toggle("open"),s.querySelector("span").textContent=t?"Más información":"Menos información"},w()}const oe=[{name:"Dra. Camila Sánchez",role:"Directora Médica",photo:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",bio:"Especialista en Dermatología Estética con 15 años de experiencia. Formada en la UBA y especializada en rejuvenecimiento facial en Barcelona."},{name:"Dr. Martín Rivas",role:"Cirujano Plástico",photo:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",bio:"Cirujano plástico matriculado con maestría en Medicina Estética. Referente en técnicas de Botox y rellenos con ácido hialurónico."},{name:"Lic. Sofía Moretti",role:"Cosmiatra Senior",photo:"https://images.unsplash.com/photo-1594824476967-48c8b964ae17?auto=format&fit=crop&w=600&q=80",bio:"Cosmiatra con 10 años de práctica clínica. Certificada en dermapen, peelings avanzados y protocolos de skincare personalizados."},{name:"Dra. Valentina Lagos",role:"Dermatóloga",photo:"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80",bio:"Dermatóloga clínica y estética. Especialista en tratamientos con láser, manchas pigmentarias y rosácea. Posgrado en la Universidad de Milán."},{name:"Lic. Joaquín Herrera",role:"Kinesiólogo Estético",photo:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",bio:"Kinesiólogo con formación en drenaje linfático, masajes post-quirúrgicos y rehabilitación facial. Más de 2.000 procedimientos realizados."},{name:"Lic. Lucía Fernández",role:"Nutricionista Estética",photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",bio:"Nutricionista especializada en dermonutrición y suplementación para piel. Diseña planes nutricionales que potencian los tratamientos estéticos."},{name:"Lic. Ana Paula Domínguez",role:"Cosmiatra",photo:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",bio:"Cosmiatra especializada en limpiezas faciales profundas, HydraFacial y protocolos de luminosidad. Atención cálida y personalizada."}],ie=[{icon:"fa-solid fa-shield-heart",title:"Seguridad Primero",desc:"Todos nuestros procedimientos son realizados por profesionales matriculados con productos aprobados por ANMAT y FDA."},{icon:"fa-solid fa-leaf",title:"Resultados Naturales",desc:"Creemos en realzar tu belleza natural. Nada de caras congeladas: nuestro objetivo es que te veas como vos, pero mejor."},{icon:"fa-solid fa-microscope",title:"Tecnología de Punta",desc:"Equipamiento de última generación importado de Europa y Estados Unidos, con calibración y mantenimiento permanente."},{icon:"fa-solid fa-heart-pulse",title:"Atención Humana",desc:"Cada paciente es única. Escuchamos tus necesidades, evaluamos tu caso y diseñamos un plan 100% personalizado."}];function te(){const a=document.getElementById("app");a.innerHTML=`
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
          ${ie.map((e,s)=>`
            <div class="value-card anim anim-delay-${s+1}">
              <div class="value-icon"><i class="${e.icon}"></i></div>
              <h3>${e.title}</h3>
              <p>${e.desc}</p>
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
          ${oe.map((e,s)=>`
            <div class="team-card anim anim-delay-${s%4+1}">
              <div class="team-photo" style="background-image: url('${e.photo}');"></div>
              <div class="team-info">
                <h3>${e.name}</h3>
                <p class="team-role">${e.role}</p>
                <p class="team-bio">${e.bio}</p>
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
  `,window.scrollTo(0,0),w()}const ne=[{photo:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",treatment:"Botox & Rellenos",category:"botox",testimonial:"Me veo 10 años más joven, pero natural. ¡Encantada!"},{photo:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",treatment:"Hydra-Glow Facial",category:"facial",testimonial:"Mi piel brilla sin maquillaje. Increíble resultado."},{photo:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",treatment:"Peeling Químico",category:"peeling",testimonial:"Las manchas desaparecieron casi por completo. Muy recomendable."},{photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",treatment:"Mesoterapia Facial",category:"mesoterapia",testimonial:"La textura de mi piel mejoró un 100%. Estoy feliz."},{photo:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",treatment:"Dermapen",category:"dermapen",testimonial:"Mis cicatrices de acné se redujeron increíblemente."},{photo:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",treatment:"Botox & Rellenos",category:"botox",testimonial:"Labios perfectos, muy naturales. La doctora es una artista."}],re=["Todos","Botox","Facial","Peeling","Mesoterapia","Dermapen"];function le(){const a=document.getElementById("app");a.innerHTML=`
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
          ${re.map((e,s)=>`
            <button class="gallery-filter-btn${s===0?" active":""}" data-filter="${e.toLowerCase()}">${e}</button>
          `).join("")}
        </div>

        <div class="gallery-grid" id="gallery-grid">
          ${ne.map((e,s)=>`
            <div class="gallery-item anim anim-delay-${s%3+1}" data-category="${e.category}">
              <div class="ba-slider" data-index="${s}">
                <div class="ba-image ba-before ba-before-filter" style="background-image: url('${e.photo}');"></div>
                <div class="ba-image ba-after" style="background-image: url('${e.photo}');"></div>
                <div class="ba-handle"></div>
                <span class="ba-label ba-label-before">Antes</span>
                <span class="ba-label ba-label-after">Después</span>
              </div>
              <div class="gallery-item-info">
                <h4>${e.treatment}</h4>
                <p>"${e.testimonial}"</p>
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
  `,window.scrollTo(0,0),w(),ce(),de()}function ce(){document.querySelectorAll(".ba-slider").forEach(a=>{let e=!1;const s=o=>{const t=a.getBoundingClientRect();let r=(o-t.left)/t.width*100;r=Math.max(5,Math.min(95,r));const l=a.querySelector(".ba-before"),m=a.querySelector(".ba-handle");l.style.clipPath=`inset(0 ${100-r}% 0 0)`,m.style.left=`${r}%`};a.addEventListener("mousedown",o=>{e=!0,s(o.clientX),o.preventDefault()}),document.addEventListener("mousemove",o=>{e&&s(o.clientX)}),document.addEventListener("mouseup",()=>{e=!1}),a.addEventListener("touchstart",o=>{e=!0,s(o.touches[0].clientX)}),a.addEventListener("touchmove",o=>{e&&(s(o.touches[0].clientX),o.preventDefault())}),a.addEventListener("touchend",()=>{e=!1})})}function de(){const a=document.querySelectorAll(".gallery-filter-btn"),e=document.querySelectorAll(".gallery-item");a.forEach(s=>{s.addEventListener("click",()=>{a.forEach(t=>t.classList.remove("active")),s.classList.add("active");const o=s.dataset.filter;e.forEach(t=>{o==="todos"||t.dataset.category===o?t.style.display="":t.style.display="none"})})})}function ue(){const a=document.getElementById("app");a.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">✦ Hablemos</span>
        <h1>Contacto</h1>
        <p class="hero-subtitle">Estamos para ayudarte. Agendá tu cita o consultanos lo que necesites.</p>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          
          <!-- FORM -->
          <div class="anim-left">
            <h2 class="section-title" style="text-align:left;font-size:2rem;margin-bottom:var(--space-sm);">Envianos tu consulta</h2>
            <p style="color:var(--gray-500);margin-bottom:var(--space-xl);">Completá el formulario y te respondemos dentro de las 24hs.</p>
            
            <form id="contact-form" novalidate>
              <div class="form-group">
                <label for="name">Nombre completo *</label>
                <input type="text" id="name" class="form-control" placeholder="Tu nombre" required>
                <div class="form-error">Por favor ingresá tu nombre</div>
              </div>

              <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-md);">
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" id="email" class="form-control" placeholder="tu@email.com" required>
                  <div class="form-error">Ingresá un email válido</div>
                </div>
                <div class="form-group">
                  <label for="phone">Teléfono</label>
                  <input type="tel" id="phone" class="form-control" placeholder="+54 261 000 0000">
                </div>
              </div>

              <div class="form-group">
                <label for="treatment">Tratamiento de interés</label>
                <select id="treatment" class="form-control">
                  <option value="">Seleccionar tratamiento...</option>
                  <option value="botox">Botox & Rellenos Faciales</option>
                  <option value="laser">Depilación Láser Soprano</option>
                  <option value="hydraglow">Hydra-Glow Facial</option>
                  <option value="peeling">Peeling Químico</option>
                  <option value="mesoterapia">Mesoterapia Facial</option>
                  <option value="dermapen">Dermapen / Microneedling</option>
                  <option value="limpieza">Limpieza Facial Profunda</option>
                  <option value="prp">Plasma Rico en Plaquetas</option>
                  <option value="otro">Otro / No estoy segura</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea id="message" class="form-control" placeholder="Contanos en qué podemos ayudarte..." required></textarea>
                <div class="form-error">Por favor escribí tu mensaje</div>
              </div>

              <button type="submit" class="btn btn-gold btn-lg" style="width:100%;">
                <i class="fa-regular fa-paper-plane"></i> Enviar Consulta
              </button>
            </form>
          </div>

          <!-- INFO -->
          <div class="anim-right">
            <div class="contact-info-list">
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
                <div class="contact-info-icon"><i class="fa-regular fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <p>hola@lumiestetica.com</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-regular fa-clock"></i></div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lun — Vie: 9:00 – 20:00 hs<br>Sábados: 9:00 – 14:00 hs</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon" style="background:var(--green-wa);"><i class="fa-brands fa-whatsapp"></i></div>
                <div>
                  <h4>WhatsApp Directo</h4>
                  <p>
                    <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" style="color:var(--gold);font-weight:600;">
                      Enviar mensaje ahora →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <!-- MAP -->
            <div class="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2!2d-68.84!3d-32.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUzJzI0LjAiUyA2OMKwNTAnMjQuMCJX!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación de Lumi Estética">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,window.scrollTo(0,0),w(),pe()}function pe(){const a=document.getElementById("contact-form");a&&(a.addEventListener("submit",e=>{e.preventDefault();let s=!0;const o=document.getElementById("name"),t=o.closest(".form-group");o.value.trim()?t.classList.remove("error"):(t.classList.add("error"),s=!1);const r=document.getElementById("email"),l=r.closest(".form-group");/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value)?l.classList.remove("error"):(l.classList.add("error"),s=!1);const g=document.getElementById("message"),f=g.closest(".form-group");if(g.value.trim()?f.classList.remove("error"):(f.classList.add("error"),s=!1),s){const v=a.querySelector('button[type="submit"]');v.innerHTML='<i class="fa-solid fa-check"></i> ¡Consulta Enviada!',v.style.background="#10b981",v.disabled=!0,setTimeout(()=>{v.innerHTML='<i class="fa-regular fa-paper-plane"></i> Enviar Consulta',v.style.background="",v.disabled=!1,a.reset()},3e3)}}),a.querySelectorAll(".form-control").forEach(e=>{e.addEventListener("input",()=>{e.closest(".form-group").classList.remove("error")})}))}const me={"5-errores-que-envejecen-tu-piel":{title:"5 Errores que Envejecen tu Piel (y cómo evitarlos)",tag:"Skincare",date:"28 Feb, 2026",author:"Dra. Camila Sánchez",readTime:"8 min",heroImg:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80",content:`
      <p class="article-intro">
        Tu piel es tu carta de presentación. Y aunque no lo creas, hay hábitos cotidianos que están acelerando tu envejecimiento sin que te des cuenta. Después de más de 15 años tratando pacientes, puedo decirte que la mayoría de los signos prematuros de envejecimiento podrían haberse evitado con simples cambios de rutina.
      </p>

      <h2>1. No usar protector solar todos los días</h2>
      <img src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=900&q=80" alt="Protector solar" class="article-img">
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
      <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" alt="Hidratación facial" class="article-img">
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
    `},"botox-mitos-y-verdades":{title:"Botox: Mitos y Verdades que Tenés que Saber",tag:"Tratamientos",date:"15 Feb, 2026",author:"Dr. Martín Rivas",readTime:"7 min",heroImg:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80",content:`
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
      <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80" alt="Resultado natural de botox" class="article-img">
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
    `},"rutina-skincare-tipo-piel":{title:"Rutina de Skincare para Cada Tipo de Piel",tag:"Tips",date:"02 Feb, 2026",author:"Lic. Sofía Moretti",readTime:"10 min",heroImg:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80",content:`
      <p class="article-intro">
        No existe una rutina universal de skincare. Lo que le funciona a tu amiga puede ser un desastre para tu piel. La clave está en conocer tu tipo de piel, entender qué necesita, y armar un protocolo personalizado. Después de 10 años como cosmiatra, te voy a dar las rutinas paso a paso para cada tipo.
      </p>

      <h2>Primero: ¿Cómo sé qué tipo de piel tengo?</h2>
      <p>
        El test más simple es el del "papel secante": lavate la cara con un limpiador suave, no te apliques nada, y después de 2 horas presioná un papel tissue en diferentes zonas. Si sale brilloso en todos lados: piel grasa. Si solo en la zona T (frente, nariz, mentón): mixta. Si no sale brilloso en ningún lado: seca o normal.
      </p>

      <h2>Rutina para Piel Grasa</h2>
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80" alt="Skincare piel grasa" class="article-img">
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
    `},"cada-cuanto-limpieza-facial":{title:"¿Cada cuánto deberías hacerte una Limpieza Facial?",tag:"Cuidados",date:"20 Ene, 2026",author:"Lic. Sofía Moretti",readTime:"5 min",heroImg:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1920&q=80",content:`
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
      <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80" alt="Tratamiento facial" class="article-img">
      
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
    `},"protector-solar-regla-anti-edad":{title:"Protector Solar: La Regla de Oro Anti-Edad",tag:"Cuidados",date:"10 Ene, 2026",author:"Dra. Camila Sánchez",readTime:"6 min",heroImg:"https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1920&q=80",content:`
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
      <img src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=900&q=80" alt="Protección solar SPF" class="article-img">
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
    `},"tendencias-estetica-2026":{title:"Tendencias en Estética 2026: Lo que Viene",tag:"Tendencias",date:"03 Ene, 2026",author:"Dra. Camila Sánchez",readTime:"7 min",heroImg:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80",content:`
      <p class="article-intro">
        El mundo de la medicina estética evoluciona cada vez más rápido. Lo que hace 5 años parecía ciencia ficción, hoy es parte de nuestro día a día en el consultorio. Acabo de volver del Congreso Internacional de Medicina Estética en Miami, y estas son las tendencias que van a dominar este 2026.
      </p>

      <h2>1. Glass Skin: la obsesión por la piel transparente</h2>
      <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80" alt="Glass skin tendencia" class="article-img">
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
    `}};function fe(a){const e=document.getElementById("app"),s=me[a];if(!s){e.innerHTML=`
      <section class="sub-hero">
        <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80');"></div>
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
    `,window.scrollTo(0,0);return}e.innerHTML=`
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
  `,window.scrollTo(0,0),w()}const S=new Za("/estetica-page-demo/");function L(a,e){return()=>{a(),K(e)}}S.on("/",L(X,"/")).on("/tratamientos",L(se,"/tratamientos")).on("/nosotros",L(te,"/nosotros")).on("/galeria",L(le,"/galeria")).on("/blog",L(xa,"/blog")).on("/blog/:slug",({data:a})=>{fe(a.slug),K("/blog")}).on("/contacto",L(ue,"/contacto")).notFound(()=>{L(X,"/")()});function Y(){Ea(),Ta(),Sa(),Aa(),R(),S.resolve(),S.hooks({after:()=>{S.updatePageLinks(),R()}}),S.updatePageLinks()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y();

(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function we(){const e=document.getElementById("navbar");e.className="navbar",e.innerHTML=`
    <div class="navbar-inner">
      <a href="/" class="navbar-logo" data-navigo>
        <i class="fa-solid fa-gem"></i>
        <span class="navbar-logo-text">Ã‰CLAT</span>
      </a>

      <div class="navbar-links">
        <a href="/" class="navbar-link" data-navigo>Inicio</a>
        <a href="/tratamientos" class="navbar-link" data-navigo>Tratamientos</a>
        <a href="/nosotros" class="navbar-link" data-navigo>Nosotros</a>
        <a href="/galeria" class="navbar-link" data-navigo>GalerÃ­a</a>
        <a href="/contacto" class="navbar-link" data-navigo>Contacto</a>
      </div>

      <div class="navbar-cta">
        <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold">
          <i class="fa-brands fa-whatsapp"></i> Agendar Cita
        </a>
      </div>

      <button class="menu-toggle" id="menu-toggle" aria-label="MenÃº">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `,Ee(),ke(),Le()}function Ee(){const e=document.getElementById("mobile-menu-overlay");e.className="mobile-overlay",e.innerHTML=`
    <a href="/" class="mobile-link" data-navigo>Inicio</a>
    <a href="/tratamientos" class="mobile-link" data-navigo>Tratamientos</a>
    <a href="/nosotros" class="mobile-link" data-navigo>Nosotros</a>
    <a href="/galeria" class="mobile-link" data-navigo>GalerÃ­a</a>
    <a href="/contacto" class="mobile-link" data-navigo>Contacto</a>
    <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold btn-lg" style="margin-top:auto;">
      <i class="fa-brands fa-whatsapp"></i> Agendar Cita
    </a>
  `}function ke(){const e=document.querySelector(".navbar");window.addEventListener("scroll",()=>{window.scrollY>80?e.classList.add("scrolled"):e.classList.remove("scrolled")}),window.scrollY>80&&e.classList.add("scrolled")}function Le(){const e=document.getElementById("menu-toggle"),a=document.getElementById("mobile-menu-overlay");let t=document.querySelector(".mobile-overlay-backdrop");t||(t=document.createElement("div"),t.className="mobile-overlay-backdrop",document.body.appendChild(t));const s=()=>{e.classList.remove("open"),a.classList.remove("open"),t.classList.remove("open"),document.body.style.overflow=""};e.addEventListener("click",()=>{a.classList.contains("open")?s():(e.classList.add("open"),a.classList.add("open"),t.classList.add("open"),document.body.style.overflow="hidden")}),t.addEventListener("click",s),a.querySelectorAll(".mobile-link").forEach(i=>{i.addEventListener("click",s)})}function Ae(e){document.querySelectorAll(".navbar-link, .mobile-link").forEach(a=>{a.classList.remove("active");const t=a.getAttribute("href");(t===e||e==="/"&&t==="/")&&a.classList.add("active")})}function Te(){const e=document.getElementById("footer-container");e.innerHTML=`
    <div class="footer">
      <div class="container">
        <div class="footer-grid">
          
          <div class="footer-brand">
            <div class="navbar-logo">
              <i class="fa-solid fa-gem" style="color:var(--gold);font-size:1.5rem;"></i>
              <span class="navbar-logo-text">Ã‰CLAT</span>
            </div>
            <p>Medicina estÃ©tica avanzada. Combinamos ciencia y arte para realzar tu belleza natural con resultados visibles y duraderos.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
              <a href="https://wa.me/549261000000" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div class="footer-col">
            <h4>NavegaciÃ³n</h4>
            <a href="/" data-navigo>Inicio</a>
            <a href="/tratamientos" data-navigo>Tratamientos</a>
            <a href="/nosotros" data-navigo>Nosotros</a>
            <a href="/galeria" data-navigo>GalerÃ­a</a>
            <a href="/contacto" data-navigo>Contacto</a>
          </div>

          <div class="footer-col">
            <h4>Horarios</h4>
            <p>
              <strong style="color:var(--white);">Lun â€” Vie</strong><br>
              9:00 â€“ 20:00 hs<br><br>
              <strong style="color:var(--white);">SÃ¡bados</strong><br>
              9:00 â€“ 14:00 hs<br><br>
              <strong style="color:var(--white);">Domingos</strong><br>
              Cerrado
            </p>
          </div>

          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Ã‰CLAT EstÃ©tica. Todos los derechos reservados.</p>
          <p>Mendoza Capital, Barrio Bombal</p>
        </div>
      </div>
    </div>
  `}function Ce(){const e=document.getElementById("whatsapp-container");e.innerHTML=`
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
      <p>Esta pÃ¡gina es un diseÃ±o de muestra. La estÃ©tica no existe.</p>
      <a href="https://wa.me/5492613433108?text=Hola!%20Vi%20la%20demo%20de%20estetica%20y%20quiero%20una%20web%20asi." 
         target="_blank" class="demo-banner-cta">
        <i class="fa-solid fa-laptop-code"></i> Â¿QuerÃ©s una web asÃ­? Contactame
      </a>
    </div>
  `}function ze(){const e=document.getElementById("preloader");window.addEventListener("load",()=>{setTimeout(()=>{e.classList.add("hidden")},800)}),setTimeout(()=>{e.classList.add("hidden")},3e3)}function Se(){if(!document.getElementById("booking-modal")){const e=`
        <div id="booking-modal" class="modal-overlay" style="display: none;">
            <div class="modal-content">
                <button class="modal-close" onclick="window.closeBookingModal()"><i class="fa-solid fa-xmark"></i></button>
                <h3 id="booking-title">Agendar Turno</h3>
                <p>SeleccionÃ¡ una fecha y el momento del dÃ­a que prefieras.</p>
                <form id="booking-form" onsubmit="window.submitBooking(event)">
                    <div class="form-group">
                        <label for="booking-date">DÃ­a</label>
                        <input type="date" id="booking-date" required min="${new Date().toISOString().split("T")[0]}" />
                    </div>
                    <div class="form-group">
                        <label for="booking-time">Horario preferido</label>
                        <select id="booking-time" required>
                            <option value="">Seleccionar horario...</option>
                            <option value="MaÃ±ana (9:00 - 13:00)">MaÃ±ana (9:00 - 13:00)</option>
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
        `;document.body.insertAdjacentHTML("beforeend",e),window.openBookingModal=a=>{document.getElementById("booking-treatment").value=a,document.getElementById("booking-title").innerText=`Agendar: ${a}`,document.getElementById("booking-modal").style.display="flex"},window.closeBookingModal=()=>{document.getElementById("booking-modal").style.display="none"},window.submitBooking=a=>{a.preventDefault();const t=document.getElementById("booking-date").value,s=document.getElementById("booking-time").value,i=document.getElementById("booking-treatment").value,r=t.split("-"),l=`${r[2]}/${r[1]}/${r[0]}`,p=`Hola! Quiero agendar un turno para *${i}*.

ðŸ“… Fecha: ${l}
â° Horario: ${s}

Â¿Tienen disponibilidad?`,f=`https://wa.me/549261000000?text=${encodeURIComponent(p)}`;window.closeBookingModal(),window.open(f,"_blank")}}}var qe=/([:*])(\w+)/g,Me="([^/]+)",Re=/\*/g,Pe="?(?:.*)",xe=/\/\?/g,_e="/?([^/]+|)",Ie="(?:/^|^)",Be="";function K(e){return e===void 0&&(e="/"),I()?location.pathname+location.search+location.hash:e}function m(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function z(e){return typeof e=="string"}function He(e){return typeof e=="function"}function S(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function Oe(e,a){return a.length===0||!e?null:e.slice(1,e.length).reduce(function(t,s,i){return t===null&&(t={}),t[a[i]]=decodeURIComponent(s),t},null)}function q(e){var a=m(e).split(/\?(.*)?$/);return[m(a[0]),a.slice(1).join("")]}function _(e){for(var a={},t=e.split("&"),s=0;s<t.length;s++){var i=t[s].split("=");if(i[0]!==""){var r=decodeURIComponent(i[0]);a[r]?(Array.isArray(a[r])||(a[r]=[a[r]]),a[r].push(decodeURIComponent(i[1]||""))):a[r]=decodeURIComponent(i[1]||"")}}return a}function Y(e,a){var t=q(m(e.currentLocationPath)),s=t[0],i=t[1],r=i===""?null:_(i),l=[],p;if(z(a.path)){if(p=Ie+m(a.path).replace(qe,function(v,g,E){return l.push(E),Me}).replace(Re,Pe).replace(xe,_e)+"$",m(a.path)===""&&m(s)==="")return{url:s,queryString:i,hashString:S(e.to),route:a,data:null,params:r}}else p=a.path;var h=new RegExp(p,Be),f=s.match(h);if(f){var w=z(a.path)?Oe(f,l):f.groups?f.groups:f.slice(1);return{url:m(s.replace(new RegExp("^"+e.instance.root),"")),queryString:i,hashString:S(e.to),route:a,data:w,params:r}}return!1}function J(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function k(e,a){return typeof e[a]>"u"||e[a]===!0}function De(e){if(!e)return{};var a=e.split(","),t={},s;return a.forEach(function(i){var r=i.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(r[0]){case"historyAPIMethod":t.historyAPIMethod=r[1];break;case"resolveOptionsStrategy":s||(s={}),s.strategy=r[1];break;case"resolveOptionsHash":s||(s={}),s.hash=r[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":t[r[0]]=r[1]==="true";break}}),s&&(t.resolveOptions=s),t}function I(){return typeof window<"u"}function $e(e,a){return e===void 0&&(e=[]),a===void 0&&(a={}),e.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(s){t[s]&&(a[s]||(a[s]=[]),a[s].push(t[s]))})}),a}function y(e,a,t){var s=a||{},i=0;(function r(){if(!e[i]){t&&t(s);return}Array.isArray(e[i])?(e.splice.apply(e,[i,1].concat(e[i][0](s)?e[i][1]:e[i][2])),r()):e[i](s,function(l){typeof l>"u"||l===!0?(i+=1,r()):t&&t(s)})})()}y.if=function(e,a,t){return Array.isArray(a)||(a=[a]),Array.isArray(t)||(t=[t]),[e,a,t]};function F(e,a){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=K(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),a()}function M(e,a){for(var t=0;t<e.instance.routes.length;t++){var s=e.instance.routes[t],i=Y(e,s);if(i&&(e.matches||(e.matches=[]),e.matches.push(i),e.resolveOptions.strategy==="ONE")){a();return}}a()}function je(e,a){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),a()}function Fe(e,a){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),a(!1)):a()}var N=I(),Ne=J();function Ue(e,a){if(k(e.navigateOptions,"updateBrowserURL")){var t=("/"+e.to).replace(/\/\//g,"/"),s=N&&e.resolveOptions&&e.resolveOptions.hash===!0;Ne?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",s?"#"+t:t),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!s){var i=location.hash;location.hash="",location.hash=i}e.instance.__freezeListening=!1},1))):N&&(window.location.href=e.to)}a()}function Z(e,a){var t=e.instance;if(!t.lastResolved()){a();return}y(t.lastResolved().map(function(s){return function(i,r){if(!s.route.hooks||!s.route.hooks.leave){r();return}var l=!1,p=e.instance.matchLocation(s.route.path,e.currentLocationPath,!1);if(s.route.path!=="*")l=!p;else{var h=e.matches?e.matches.find(function(f){return s.route.path===f.route.path}):!1;l=!h}if(k(e.navigateOptions,"callHooks")&&l){y(s.route.hooks.leave.map(function(f){return function(w,v){return f(function(g){g===!1?e.instance.__markAsClean(e):v()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return r()}]));return}else r()}}),{},function(){return a()})}function Qe(e,a){e.match.route.hooks&&e.match.route.hooks.before&&k(e.navigateOptions,"callHooks")?y(e.match.route.hooks.before.map(function(t){return function(i,r){return t(function(l){l===!1?e.instance.__markAsClean(e):r()},e.match)}}).concat([function(){return a()}])):a()}function Ge(e,a){k(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),a()}function Ve(e,a){e.match.route.hooks&&e.match.route.hooks.after&&k(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(t){return t(e.match)}),a()}function We(e,a){var t=e.instance.lastResolved();if(t&&t[0]&&t[0].route===e.match.route&&t[0].url===e.match.url&&t[0].queryString===e.match.queryString){t.forEach(function(s){s.route.hooks&&s.route.hooks.already&&k(e.navigateOptions,"callHooks")&&s.route.hooks.already.forEach(function(i){return i(e.match)})}),a(!1);return}a()}function Xe(e,a){var t=e.instance._notFoundRoute;if(t){e.notFoundHandled=!0;var s=q(e.currentLocationPath),i=s[0],r=s[1],l=S(e.to);t.path=m(i);var p={url:t.path,queryString:r,hashString:l,data:null,route:t,params:r!==""?_(r):null};e.matches=[p],e.match=p}a()}function Ke(e,a){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),a()}function Ye(e,a){e.instance._setCurrent(null),a()}function ee(e,a){k(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),a()}var ae=[We,Qe,Ge,Ve],U=[Z,Xe,y.if(function(e){var a=e.notFoundHandled;return a},ae.concat([ee]),[Ke,Ye])];function P(){return P=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},P.apply(this,arguments)}function Q(e,a){var t=0;function s(){if(t===e.matches.length){ee(e,a);return}y(ae,P({},e,{match:e.matches[t]}),function(){t+=1,s()})}Z(e,s)}function R(e){e.instance.__markAsClean(e)}function x(){return x=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},x.apply(this,arguments)}var G="[data-navigo]";function Je(e,a){var t=a||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:G},s=this,i="/",r=null,l=[],p=!1,h,f=J(),w=I();e?i=m(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function v(o){return o.indexOf("#")>=0&&(t.hash===!0?o=o.split("#")[1]||"/":o=o.split("#")[0]),o}function g(o){return m(i+"/"+m(o))}function E(o,n,c,u){return o=z(o)?g(o):o,{name:u||m(String(o)),path:o,handler:n,hooks:$e(c)}}function se(o,n,c){var u=this;return typeof o=="object"&&!(o instanceof RegExp)?(Object.keys(o).forEach(function(d){if(typeof o[d]=="function")u.on(d,o[d]);else{var b=o[d],A=b.uses,be=b.as,ye=b.hooks;l.push(E(d,A,[h,ye],be))}}),this):(typeof o=="function"&&(c=n,n=o,o=i),l.push(E(o,n,[h,c])),this)}function B(o,n){if(s.__dirty){s.__waiting.push(function(){return s.resolve(o,n)});return}else s.__dirty=!0;o=o?m(i)+"/"+m(o):void 0;var c={instance:s,to:o,currentLocationPath:o,navigateOptions:{},resolveOptions:x({},t,n)};return y([F,M,y.if(function(u){var d=u.matches;return d&&d.length>0},Q,U)],c,R),c.matches?c.matches:!1}function H(o,n){if(s.__dirty){s.__waiting.push(function(){return s.navigate(o,n)});return}else s.__dirty=!0;o=m(i)+"/"+m(o);var c={instance:s,to:o,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:t,currentLocationPath:v(o)};y([je,Fe,M,y.if(function(u){var d=u.matches;return d&&d.length>0},Q,U),Ue,R],c,R)}function oe(o,n,c){var u=D(o,n);return u!==null?(H(u.replace(new RegExp("^/?"+i),""),c),!0):!1}function ie(o){return this.routes=l=l.filter(function(n){return z(o)?m(n.path)!==m(o):He(o)?o!==n.handler:String(n.path)!==String(o)}),this}function ne(){f&&(this.__popstateListener=function(){s.__freezeListening||B()},window.addEventListener("popstate",this.__popstateListener))}function re(){this.routes=l=[],f&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=p=!0}function le(o,n){return s._notFoundRoute=E("*",o,[h,n],"__NOT_FOUND__"),this}function O(){if(w)return ce().forEach(function(o){if(o.getAttribute("data-navigo")==="false"||o.getAttribute("target")==="_blank"){o.hasListenerAttached&&o.removeEventListener("click",o.navigoHandler);return}o.hasListenerAttached||(o.hasListenerAttached=!0,o.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&n.target.tagName.toLowerCase()==="a")return!1;var c=o.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var u=new URL(c);c=u.pathname+u.search}catch{}var d=De(o.getAttribute("data-navigo-options"));p||(n.preventDefault(),n.stopPropagation(),s.navigate(m(c),d))},o.addEventListener("click",o.navigoHandler))}),s}function ce(){return w?[].slice.call(document.querySelectorAll(t.linksSelector||G)):[]}function de(o){return"/"+i+"/"+m(o)}function ue(o){return h=o,this}function me(){return r}function D(o,n,c){var u=l.find(function(A){return A.name===o}),d=null;if(u){if(d=u.path,n)for(var b in n)d=d.replace(":"+b,n[b]);d=d.match(/^\//)?d:"/"+d}return d&&c&&!c.includeRoot&&(d=d.replace(new RegExp("^/"+i),"")),d}function pe(o){return o.getAttribute("href")}function $(o){var n=q(m(o)),c=n[0],u=n[1],d=u===""?null:_(u),b=S(o),A=E(c,function(){},[h],c);return{url:c,queryString:u,hashString:b,route:A,data:null,params:d}}function fe(){return $(m(K(i)).replace(new RegExp("^"+i),""))}function ve(o){var n={instance:s,currentLocationPath:o,to:o,resolveOptions:t};return M(n,function(){}),n.matches?n.matches:!1}function ge(o,n,c){typeof n<"u"&&(typeof c>"u"||c)&&(n=g(n));var u={instance:s,to:n,currentLocationPath:n};F(u,function(){}),typeof o=="string"&&(o=typeof c>"u"||c?g(o):o);var d=Y(u,{name:String(o),path:o,handler:function(){},hooks:{}});return d||!1}function C(o,n,c){return typeof n=="string"&&(n=j(n)),n?(n.hooks[o]||(n.hooks[o]=[]),n.hooks[o].push(c),function(){n.hooks[o]=n.hooks[o].filter(function(u){return u!==c})}):(console.warn("Route doesn't exists: "+n),function(){})}function j(o){return typeof o=="string"?l.find(function(n){return n.name===g(o)}):l.find(function(n){return n.handler===o})}function he(o){o.instance.__dirty=!1,o.instance.__waiting.length>0&&o.instance.__waiting.shift()()}this.root=i,this.routes=l,this.destroyed=p,this.current=r,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=he,this.on=se,this.off=ie,this.resolve=B,this.navigate=H,this.navigateByName=oe,this.destroy=re,this.notFound=le,this.updatePageLinks=O,this.link=de,this.hooks=ue,this.extractGETParameters=function(o){return q(v(o))},this.lastResolved=me,this.generate=D,this.getLinkPath=pe,this.match=ve,this.matchLocation=ge,this.getCurrentLocation=fe,this.addBeforeHook=C.bind(this,"before"),this.addAfterHook=C.bind(this,"after"),this.addAlreadyHook=C.bind(this,"already"),this.addLeaveHook=C.bind(this,"leave"),this.getRoute=j,this._pathToMatchObject=$,this._clean=m,this._checkForAHash=v,this._setCurrent=function(o){return r=s.current=o},ne.call(this),O.call(this)}function V(){const e=document.getElementById("app");e.innerHTML=`
    <!-- HERO -->
    <section class="hero">
      <video class="hero-img" autoplay loop muted playsinline poster="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format,compress&fit=crop&fm=webp&w=1200&q=80" style="object-fit: cover;">
        <source src="/video-clinica.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">âœ¦ Medicina EstÃ©tica Avanzada</span>
        <h1>RealzÃ¡ tu belleza natural <em>sin filtros.</em></h1>
        <p class="hero-subtitle">
          Tratamientos personalizados que combinan ciencia y arte para resultados visibles y duraderos. Tu mejor versiÃ³n empieza hoy.
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
            <h3>Profesionales MÃ©dicos</h3>
            <p>Tu salud es prioridad. Procedimientos realizados exclusivamente por doctores certificados con aÃ±os de experiencia.</p>
          </div>
          <div class="feature-card featured anim anim-delay-2">
            <div class="feature-icon">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3>Resultados Naturales</h3>
            <p>Nadie notarÃ¡ quÃ© te hiciste, pero todos notarÃ¡n que te ves radiante y descansada. Ese es nuestro arte.</p>
          </div>
          <div class="feature-card anim anim-delay-3">
            <div class="feature-icon">
              <i class="fa-solid fa-gem"></i>
            </div>
            <h3>TecnologÃ­a Premium</h3>
            <p>Invertimos en la mejor aparatologÃ­a del mercado mundial (FDA & ANMAT aprobados).</p>
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
          <p class="section-subtitle">Los procedimientos mÃ¡s demandados por nuestras clientas</p>
        </div>

        <div class="treatments-grid">
          <div class="treatment-card anim anim-delay-1">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>Botox & Rellenos</h3>
              <p>Suaviza lÃ­neas de expresiÃ³n y recupera el volumen perdido con resultados inmediatos.</p>
              <div class="treatment-meta">
                <span><i class="fa-regular fa-clock"></i> 30 min</span>
                <span><i class="fa-solid fa-rotate"></i> 4-6 meses</span>
              </div>
            </div>
          </div>
          <div class="treatment-card anim anim-delay-2">
            <div class="treatment-card-img" style="background-image: url('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format,compress&fit=crop&fm=webp&w=800&q=80');"></div>
            <div class="treatment-card-body">
              <h3>DepilaciÃ³n LÃ¡ser Soprano</h3>
              <p>La soluciÃ³n definitiva para una piel suave todo el aÃ±o. Indolora y efectiva.</p>
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
              <p>Limpieza profunda + hidrataciÃ³n intensa para un brillo instantÃ¡neo y piel luminosa.</p>
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
        <h2 class="section-title">DescubrÃ­ tu tratamiento ideal</h2>
        <p class="section-subtitle" style="margin-bottom:var(--space-2xl);">CompletÃ¡ este test de 2 pasos y te recomendamos el mejor protocolo para vos.</p>
        
        <div class="quiz-container" id="quiz-container" style="background:var(--white); padding:var(--space-2xl); border-radius:var(--radius-xl); box-shadow: 0 15px 50px rgba(0,0,0,0.1); border: 1px solid var(--gold); max-width:600px; margin:0 auto; position:relative; overflow:hidden;">
          
          <div id="quiz-step-1" class="quiz-step" style="transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-lg);">Â¿QuÃ© zona querÃ©s tratar principalmente?</h3>
            <div style="display:flex; gap:var(--space-md); justify-content:center; flex-wrap:wrap;">
              <button class="btn btn-outline" style="min-width:140px;" onclick="nextQuizStep(2, 'Rostro')">Rostro</button>
              <button class="btn btn-outline" style="min-width:140px;" onclick="nextQuizStep(2, 'Cuerpo')">Cuerpo</button>
            </div>
          </div>
          
          <div id="quiz-step-2" class="quiz-step" style="display:none; transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-lg);">Â¿CuÃ¡l es tu objetivo principal?</h3>
            <div style="display:flex; flex-direction:column; gap:var(--space-md); align-items:center;">
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Manchas')">Eliminar Manchas o Cicatrices</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Arrugas')">Reducir Arrugas y Flacidez</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'luminosidad')">MÃ¡s HidrataciÃ³n y Brillo</button>
              <button class="btn btn-outline" style="width:100%; max-width:350px;" onclick="nextQuizStep(3, 'Vello')">Eliminar Vello No Deseado</button>
            </div>
          </div>
          
          <div id="quiz-step-3" class="quiz-step" style="display:none; transition: transform 0.4s ease, opacity 0.4s ease;">
            <h3 style="margin-bottom:var(--space-md);">Â¡Tenemos tu plan perfecto!</h3>
            <p style="color:var(--gray-500); margin-bottom:var(--space-lg);">SegÃºn tus respuestas, te recomendamos:</p>
            <div style="background:var(--white-warm); padding:var(--space-lg); border-radius:var(--radius-md); margin-bottom:var(--space-lg); border: 1px solid var(--gold-light);">
              <h4 id="quiz-result-title" style="color:var(--black); font-size:1.5rem; margin-bottom:var(--space-sm);">Glow Premium</h4>
              <p id="quiz-result-desc" style="color:var(--gray-600);">El tratamiento ideal para renovar tu piel y lograr los objetivos que buscÃ¡s.</p>
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
            <div class="stat-label">AÃ±os de Experiencia</div>
          </div>
          <div class="stat-item anim anim-delay-3">
            <div class="stat-number">98%</div>
            <div class="stat-label">SatisfacciÃ³n</div>
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
              <p class="testimonial-text">"TenÃ­a miedo de verme artificial, pero el resultado fue increÃ­ble. Mis amigas me dicen que me veo descansada y radiante. Â¡Nadie nota que es botox!"</p>
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
              <p class="testimonial-text">"La depilaciÃ³n lÃ¡ser cambiÃ³ mi vida. DespuÃ©s de 6 sesiones, olvÃ­date de la cera y las cuchillas. El equipo es sÃºper profesional y el lugar es hermoso."</p>
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
                  <h4>LucÃ­a F.</h4>
                  <p>Paciente desde 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-dots" id="carousel-dots"></div>
        </div>
      </div>
    </section>
    <!-- CTA FINAL -->
    <section class="cta-section">
      <div class="container anim">
        <h2>Tu mejor versiÃ³n te estÃ¡ esperando.</h2>
        <p>No postergues mÃ¡s ese mimo que te merecÃ©s. La agenda de este mes se estÃ¡ llenando rÃ¡pido.</p>
        <a href="https://wa.me/549261000000?text=Hola!%20Quiero%20agendar%20una%20cita." target="_blank" class="btn btn-gold btn-lg">
          <i class="fa-brands fa-whatsapp"></i> Reservar mi Turno Ahora
        </a>
        <div class="cta-info">
          <span><i class="fa-solid fa-location-dot"></i> Mendoza Capital, Barrio Bombal</span>
          <span><i class="fa-regular fa-clock"></i> Lun-SÃ¡b 9hs a 20hs</span>
        </div>
      </div>
    </section>
  `,Ze()}function Ze(){const e=document.getElementById("testimonials-track"),a=document.getElementById("carousel-dots");if(!e||!a)return;const s=e.querySelectorAll(".testimonial-card").length;let i=0,r;for(let v=0;v<s;v++){const g=document.createElement("button");g.className=`carousel-dot${v===0?" active":""}`,g.setAttribute("aria-label",`Testimonial ${v+1}`),g.addEventListener("click",()=>l(v)),a.appendChild(g)}function l(v){i=v,e.style.transform=`translateX(-${i*100}%)`,a.querySelectorAll(".carousel-dot").forEach((g,E)=>{g.classList.toggle("active",E===i)})}function p(){l((i+1)%s)}function h(){r=setInterval(p,5e3)}function f(){clearInterval(r)}const w=document.getElementById("testimonials-carousel");w.addEventListener("mouseenter",f),w.addEventListener("mouseleave",h),h()}window.quizData={zona:"",objetivo:""};window.nextQuizStep=(e,a)=>{e===2&&(window.quizData.zona=a),e===3&&(window.quizData.objetivo=a);const t=document.getElementById(`quiz-step-${e-1}`),s=document.getElementById(`quiz-step-${e}`);t&&(t.style.opacity="0",setTimeout(()=>{t.style.display="none",s&&(e===3&&calculateQuizResult(),s.style.display="block",s.offsetWidth,s.style.opacity="1")},400))};window.calculateQuizResult=()=>{const{zona:e,objetivo:a}=window.quizData;let t="Glow Premium",s="El tratamiento ideal para renovar tu piel y lograr los objetivos que buscÃ¡s.",i="Hola! CompletÃ© el asesor virtual y me recomendÃ³ el Glow Premium. Quiero mÃ¡s info.";e==="Rostro"?a==="Arrugas"?(t="Botox & Rellenos Faciales",s="Suaviza lÃ­neas de expresiÃ³n y recupera el volumen perdido con resultados inmediatos.",i="Hola! CompletÃ© el asesor virtual y me recomendÃ³ Botox & Rellenos. Quiero mÃ¡s info."):a==="Manchas"?(t="Peeling QuÃ­mico",s="Renueva tu piel capa por capa, ideal para eliminar manchas y unificar el tono.",i="Hola! CompletÃ© el asesor virtual y me recomendÃ³ Peeling QuÃ­mico. Quiero mÃ¡s info."):a==="luminosidad"&&(t="Hydra-Glow Facial",s="Limpieza profunda e hidrataciÃ³n intensa para un brillo instantÃ¡neo y piel luminosa.",i="Hola! CompletÃ© el asesor virtual y me recomendÃ³ Hydra-Glow Facial. Quiero mÃ¡s info."):(e==="Cuerpo"||a==="Vello")&&(t="DepilaciÃ³n LÃ¡ser Soprano",s="La soluciÃ³n definitiva para una piel suave todo el aÃ±o. Indolora y efectiva.",i="Hola! CompletÃ© el asesor virtual y me recomendÃ³ DepilaciÃ³n LÃ¡ser Soprano. Quiero mÃ¡s info."),document.getElementById("quiz-result-title").textContent=t,document.getElementById("quiz-result-desc").textContent=s,document.getElementById("quiz-wa-btn").href=`https://wa.me/549261000000?text=${encodeURIComponent(i)}`};window.resetQuiz=()=>{window.quizData={zona:"",objetivo:""};const e=document.getElementById("quiz-step-3"),a=document.getElementById("quiz-step-1");e.style.opacity="0",setTimeout(()=>{e.style.display="none",a.style.display="block",a.offsetWidth,a.style.opacity="1"},400)};function te(){const e=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&(t.target.classList.add("anim-visible"),e.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".anim, .anim-scale, .anim-left, .anim-right").forEach(a=>{e.observe(a)})}const W=[{id:"botox",name:"Botox & Rellenos Faciales",desc:"Suaviza lÃ­neas de expresiÃ³n y recupera el volumen perdido con resultados inmediatos y naturales.",img:"https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"30 min",recovery:"4-6 meses",price:"Desde $55.000",details:["<strong>Zonas:</strong> Patas de gallo, entrecejo, frente, labios, pÃ³mulos, mentÃ³n.","<strong>Producto:</strong> Toxina botulÃ­nica tipo A (BotoxÂ®, DysportÂ®).","<strong>Dolor:</strong> MÃ­nimo. Usamos anestesia tÃ³pica para tu comodidad.","<strong>Resultado:</strong> Visible a las 48-72hs. Aspecto natural y descansado.","<strong>RecomendaciÃ³n:</strong> Evitar ejercicio intenso las primeras 24hs."]},{id:"laser",name:"DepilaciÃ³n LÃ¡ser Soprano",desc:"La soluciÃ³n definitiva para una piel suave todo el aÃ±o. TecnologÃ­a de trÃ­o lÃ¡ser indolora.",img:"https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"45 min",recovery:"6-8 sesiones",price:"Desde $35.000",details:["<strong>TecnologÃ­a:</strong> Soprano Ice Platinum (TrÃ­o lÃ¡ser: Alejandrita, Diodo, Nd:YAG).","<strong>Beneficio:</strong> Indoloro y apto para todo tipo de piel, incluso bronceada.","<strong>Zonas:</strong> Cuerpo entero, rostro, bikini, axilas.","<strong>Sesiones:</strong> 6 a 8 para eliminaciÃ³n total. Mantenimiento anual.","<strong>Post-sesiÃ³n:</strong> Proteger del sol 48hs. Sin depilaciÃ³n con cera entre sesiones."]},{id:"hydraglow",name:"Hydra-Glow Facial",desc:"Limpieza profunda + hidrataciÃ³n intensa. El tratamiento estrella para un brillo instantÃ¡neo.",img:"https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"60 min",recovery:"Mensual",price:"Desde $45.000",details:["<strong>Procedimiento:</strong> Peeling ultrasÃ³nico + extracciÃ³n + mascarilla de Ã¡cido hialurÃ³nico.","<strong>Resultado:</strong> Piel luminosa, poros limpios y textura suave al instante.","<strong>Ideal:</strong> Previo a eventos, fiestas, bodas o sesiones de fotos.","<strong>Frecuencia:</strong> Una vez al mes para mantener resultados Ã³ptimos.","<strong>Incluye:</strong> SÃ©rum vitamÃ­nico y protecciÃ³n solar post-tratamiento."]},{id:"peeling",name:"Peeling QuÃ­mico",desc:"Renueva tu piel capa por capa. Elimina manchas, marcas de acnÃ© y textura irregular.",img:"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"40 min",recovery:"3-7 dÃ­as",price:"Desde $40.000",details:["<strong>Tipos:</strong> Superficial (Ã¡cido glicÃ³lico), medio (TCA), profundo (fenol).","<strong>Beneficios:</strong> Elimina manchas solares, lÃ­neas finas, textura irregular.","<strong>Post:</strong> DescamaciÃ³n suave de 3-7 dÃ­as. Piel renovada y luminosa.","<strong>Frecuencia:</strong> Cada 4-6 semanas segÃºn protocolo mÃ©dico.","<strong>Cuidado:</strong> ProtecciÃ³n solar obligatoria SPF 50+."]},{id:"mesoterapia",name:"Mesoterapia Facial",desc:"CÃ³ctel de vitaminas, minerales y Ã¡cido hialurÃ³nico inyectados directamente en la piel.",img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"30 min",recovery:"24-48 hs",price:"Desde $50.000",details:["<strong>Ingredientes:</strong> Ãcido hialurÃ³nico, vitaminas C y E, aminoÃ¡cidos, pÃ©ptidos.","<strong>Beneficios:</strong> HidrataciÃ³n profunda, luminosidad, firmeza y elasticidad.","<strong>TÃ©cnica:</strong> Micro-inyecciones con aguja ultrafina. MÃ­nimas molestias.","<strong>Sesiones:</strong> Protocolo de 4 sesiones cada 15 dÃ­as.",'<strong>Resultado:</strong> Piel rejuvenecida, jugosa y con efecto "glass skin".']},{id:"dermapen",name:"Dermapen / Microneedling",desc:"Estimula la producciÃ³n natural de colÃ¡geno a travÃ©s de micro-punciones controladas.",img:"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"45 min",recovery:"2-3 dÃ­as",price:"Desde $48.000",details:["<strong>CÃ³mo funciona:</strong> Micro-agujas estimulan la regeneraciÃ³n celular natural.","<strong>Beneficios:</strong> Reduce poros, cicatrices de acnÃ©, arrugas finas y estrÃ­as.","<strong>CombinaciÃ³n:</strong> Se potencia con sÃ©rum de vitamina C o factores de crecimiento.","<strong>Sesiones:</strong> 3-6 sesiones cada 4 semanas.","<strong>Resultado:</strong> Piel mÃ¡s firme, pareja y rejuvenecida progresivamente."]},{id:"limpieza",name:"Limpieza Facial Profunda",desc:"El paso fundamental para una piel sana. ExtracciÃ³n profesional y nutriciÃ³n intensiva.",img:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"50 min",recovery:"Inmediato",price:"Desde $25.000",details:["<strong>Pasos:</strong> Desmaquillado, vaporizaciÃ³n, extracciÃ³n, alta frecuencia, mascarilla.","<strong>Beneficios:</strong> Elimina puntos negros, cÃ©lulas muertas y oxigena la piel.","<strong>Frecuencia:</strong> Cada 30-45 dÃ­as como rutina de mantenimiento.","<strong>Para quiÃ©n:</strong> Todo tipo de piel. Ideal como primer paso de cualquier protocolo.","<strong>Incluye:</strong> DiagnÃ³stico personalizado de tu tipo de piel."]},{id:"plasma",name:"Plasma Rico en Plaquetas (PRP)",desc:"Tu propia sangre es la medicina. RegeneraciÃ³n celular con factores de crecimiento autÃ³logos.",img:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format,compress&fit=crop&fm=webp&w=800&q=80",duration:"45 min",recovery:"1-2 dÃ­as",price:"Desde $60.000",details:["<strong>Proceso:</strong> ExtracciÃ³n de sangre â†’ centrifugado â†’ inyecciÃ³n del plasma en la piel.","<strong>Beneficios:</strong> Rejuvenecimiento natural, mejora textura, estimula colÃ¡geno.","<strong>AplicaciÃ³n:</strong> Facial, cuero cabelludo (alopecia), ojeras y cuello.","<strong>Sesiones:</strong> 3 sesiones cada 4 semanas. Mantenimiento semestral.","<strong>Ventaja:</strong> 100% biocompatible. Sin riesgo de rechazo o alergia."]}];function ea(){const e=document.getElementById("app");e.innerHTML=`
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
          ${W.map((a,t)=>`
            <div class="treatment-card anim anim-delay-${t%3+1}" onclick="openTreatmentModal('${a.id}')">
              <div class="treatment-card-img" style="background-image: url('${a.img}');"></div>
              <div class="treatment-card-body">
                <h3>${a.name}</h3>
                <p>${a.desc}</p>
                <div class="treatment-meta">
                  <span><i class="fa-regular fa-clock"></i> ${a.duration}</span>
                  <span><i class="fa-solid fa-rotate"></i> ${a.recovery}</span>
                  <span><i class="fa-solid fa-tag"></i> ${a.price}</span>
                </div>
                <button class="btn btn-outline" style="width: 100%; margin-top: var(--space-md); margin-bottom: var(--space-sm);" onclick="event.stopPropagation(); openTreatmentModal('${a.id}')">
                  <i class="fa-solid fa-magnifying-glass-plus"></i> Ver Detalles
                </button>
              </div>
            </div>
          `).join("")}
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
  `,document.getElementById("treatment-detail-modal")||document.body.insertAdjacentHTML("beforeend",`
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
    `),window.scrollTo(0,0),window.currentTreatmentsData=W,window.openTreatmentModal=a=>{const t=window.currentTreatmentsData.find(i=>i.id===a);if(!t)return;document.getElementById("tdm-img").style.backgroundImage=`url('${t.img}')`,document.getElementById("tdm-title").textContent=t.name,document.getElementById("tdm-desc").textContent=t.desc,document.getElementById("tdm-meta").innerHTML=`
      <span><i class="fa-regular fa-clock"></i> ${t.duration}</span>
      <span><i class="fa-solid fa-rotate"></i> ${t.recovery}</span>
      <span><i class="fa-solid fa-tag"></i> ${t.price}</span>
    `,document.getElementById("tdm-details").innerHTML=t.details.map(i=>`<li>${i}</li>`).join("");const s=document.getElementById("tdm-cta");s.onclick=()=>{closeTreatmentModal(),window.openBookingModal(t.name)},document.getElementById("treatment-detail-modal").style.display="flex"},window.closeTreatmentModal=()=>{document.getElementById("treatment-detail-modal").style.display="none"},te()}const aa=[{name:"Dra. Camila SÃ¡nchez",role:"Directora MÃ©dica",photo:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Especialista en DermatologÃ­a EstÃ©tica con 15 aÃ±os de experiencia. Formada en la UBA y especializada en rejuvenecimiento facial en Barcelona."},{name:"Dr. MartÃ­n Rivas",role:"Cirujano PlÃ¡stico",photo:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Cirujano plÃ¡stico matriculado con maestrÃ­a en Medicina EstÃ©tica. Referente en tÃ©cnicas de Botox y rellenos con Ã¡cido hialurÃ³nico."},{name:"Lic. SofÃ­a Moretti",role:"Cosmiatra Senior",photo:"https://images.unsplash.com/photo-1594824476967-48c8b964ae17?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Cosmiatra con 10 aÃ±os de prÃ¡ctica clÃ­nica. Certificada en dermapen, peelings avanzados y protocolos de skincare personalizados."},{name:"Dra. Valentina Lagos",role:"DermatÃ³loga",photo:"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"DermatÃ³loga clÃ­nica y estÃ©tica. Especialista en tratamientos con lÃ¡ser, manchas pigmentarias y rosÃ¡cea. Posgrado en la Universidad de MilÃ¡n."},{name:"Lic. JoaquÃ­n Herrera",role:"KinesiÃ³logo EstÃ©tico",photo:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"KinesiÃ³logo con formaciÃ³n en drenaje linfÃ¡tico, masajes post-quirÃºrgicos y rehabilitaciÃ³n facial. MÃ¡s de 2.000 procedimientos realizados."},{name:"Lic. LucÃ­a FernÃ¡ndez",role:"Nutricionista EstÃ©tica",photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Nutricionista especializada en dermonutriciÃ³n y suplementaciÃ³n para piel. DiseÃ±a planes nutricionales que potencian los tratamientos estÃ©ticos."},{name:"Lic. Ana Paula DomÃ­nguez",role:"Cosmiatra",photo:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format,compress&fit=crop&fm=webp&w=600&q=80",bio:"Cosmiatra especializada en limpiezas faciales profundas, HydraFacial y protocolos de luminosidad. AtenciÃ³n cÃ¡lida y personalizada."}],ta=[{icon:"fa-solid fa-shield-heart",title:"Seguridad Primero",desc:"Todos nuestros procedimientos son realizados por profesionales matriculados con productos aprobados por ANMAT y FDA."},{icon:"fa-solid fa-leaf",title:"Resultados Naturales",desc:"Creemos en realzar tu belleza natural. Nada de caras congeladas: nuestro objetivo es que te veas como vos, pero mejor."},{icon:"fa-solid fa-microscope",title:"TecnologÃ­a de Punta",desc:"Equipamiento de Ãºltima generaciÃ³n importado de Europa y Estados Unidos, con calibraciÃ³n y mantenimiento permanente."},{icon:"fa-solid fa-heart-pulse",title:"AtenciÃ³n Humana",desc:"Cada paciente es Ãºnica. Escuchamos tus necesidades, evaluamos tu caso y diseÃ±amos un plan 100% personalizado."}];function sa(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">âœ¦ Sobre Nosotros</span>
        <h1>ConocÃ© al Equipo</h1>
        <p class="hero-subtitle">Profesionales apasionados por la belleza natural y la medicina estÃ©tica de excelencia.</p>
      </div>
    </section>

    <!-- HISTORY -->
    <section class="section">
      <div class="container">
        <div class="two-col-layout">
          <div class="anim anim-left">
            <span class="section-label">Nuestra Historia</span>
            <h2 class="section-title">MÃ¡s de una dÃ©cada cuidando tu belleza</h2>
            <p style="color:var(--gray-500);line-height:1.8;margin-bottom:var(--space-lg);">
              Ã‰CLAT naciÃ³ en 2014 de una idea simple pero ambiciosa: crear un espacio donde la medicina estÃ©tica se encuentre con el arte y la tecnologÃ­a. Un lugar donde cada paciente sea tratada como Ãºnica, con protocolos diseÃ±ados exclusivamente para ella.
            </p>
            <p style="color:var(--gray-500);line-height:1.8;margin-bottom:var(--space-lg);">
              Fundada por la Dra. Camila SÃ¡nchez en el corazÃ³n de Barrio Bombal, Mendoza, lo que comenzÃ³ como un consultorio de 40mÂ² hoy es un centro de referencia con mÃ¡s de 150mÂ² equipados con la Ãºltima tecnologÃ­a del mercado mundial.
            </p>
            <p style="color:var(--gray-500);line-height:1.8;">
              Nuestro equipo creciÃ³ de 2 a 7 profesionales, pero nuestro compromiso sigue siendo el mismo: resultados visibles, naturales y seguros. Cada tÃ©cnica, cada producto y cada protocolo es seleccionado con un estÃ¡ndar: si no lo usarÃ­amos en nosotras mismas, no lo usamos en nuestras pacientes.
            </p>
          </div>
          <div class="anim anim-right">
            <img src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?auto=format,compress&fit=crop&fm=webp&w=800&q=80" alt="ClÃ­nica Ã‰CLAT" style="width:100%;border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);">
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="section section-pink">
      <div class="container">
        <div class="text-center anim" style="margin-bottom:var(--space-3xl);">
          <span class="section-label">Lo que nos guÃ­a</span>
          <h2 class="section-title">Nuestros Valores</h2>
        </div>
        <div class="values-grid">
          ${ta.map((a,t)=>`
            <div class="value-card anim anim-delay-${t+1}">
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
          <p style="max-width:600px;margin:var(--space-md) auto 0;color:var(--gray-500);">7 especialistas trabajando en conjunto para ofrecerte los mejores resultados con la mÃ¡xima seguridad.</p>
        </div>
        <div class="team-grid">
          ${aa.map((a,t)=>`
            <div class="team-card anim anim-delay-${t%4+1}">
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
            <span style="color:var(--gray-400);font-size:0.85rem;">Colegio MÃ©dico<br>Mendoza</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container anim">
        <h2>Â¿QuerÃ©s conocernos en persona?</h2>
        <p>AgendÃ¡ tu primera consulta sin compromiso y visitÃ¡ nuestras instalaciones.</p>
        <a href="/contacto" class="btn btn-gold btn-lg" data-navigo>
          <i class="fa-regular fa-calendar-check"></i> Agendar Visita
        </a>
      </div>
    </section>
  `}const oa=[{photo:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Botox & Rellenos",category:"botox",testimonial:"Me veo 10 aÃ±os mÃ¡s joven, pero natural. Â¡Encantada!"},{photo:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Hydra-Glow Facial",category:"facial",testimonial:"Mi piel brilla sin maquillaje. IncreÃ­ble resultado."},{photo:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Peeling QuÃ­mico",category:"peeling",testimonial:"Las manchas desaparecieron casi por completo. Muy recomendable."},{photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Mesoterapia Facial",category:"mesoterapia",testimonial:"La textura de mi piel mejorÃ³ un 100%. Estoy feliz."},{photo:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Dermapen",category:"dermapen",testimonial:"Mis cicatrices de acnÃ© se redujeron increÃ­blemente."},{photo:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format,compress&fit=crop&fm=webp&w=800&q=80",treatment:"Botox & Rellenos",category:"botox",testimonial:"Labios perfectos, muy naturales. La doctora es una artista."}],ia=["Todos","Botox","Facial","Peeling","Mesoterapia","Dermapen"];function na(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format,compress&fit=crop&fm=webp&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">âœ¦ Resultados Reales</span>
        <h1>GalerÃ­a Antes & DespuÃ©s</h1>
        <p class="hero-subtitle">DeslizÃ¡ el control para ver las transformaciones de nuestras pacientes.</p>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="section">
      <div class="container">
        <div class="gallery-filters anim">
          ${ia.map((a,t)=>`
            <button class="gallery-filter-btn${t===0?" active":""}" data-filter="${a.toLowerCase()}">${a}</button>
          `).join("")}
        </div>

        <div class="gallery-grid" id="gallery-grid">
          ${oa.map((a,t)=>`
            <div class="gallery-item anim anim-delay-${t%3+1}" data-category="${a.category}">
              <div class="ba-slider" data-index="${t}">
                <div class="ba-image ba-before ba-before-filter" style="background-image: url('${a.photo}');"></div>
                <div class="ba-image ba-after" style="background-image: url('${a.photo}');"></div>
                <div class="ba-handle"></div>
                <span class="ba-label ba-label-before">Antes</span>
                <span class="ba-label ba-label-after">DespuÃ©s</span>
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
        <h2>Â¿QuerÃ©s ser la prÃ³xima transformaciÃ³n?</h2>
        <p>AgendÃ¡ tu consulta y empezÃ¡ el camino hacia tu mejor versiÃ³n.</p>
        <a href="/contacto" class="btn btn-gold btn-lg" data-navigo>
          <i class="fa-regular fa-calendar-check"></i> Agendar Consulta
        </a>
      </div>
    </section>
  `,ra(),la()}function ra(){document.querySelectorAll(".ba-slider").forEach(e=>{let a=!1;const t=s=>{const i=e.getBoundingClientRect();let r=(s-i.left)/i.width*100;r=Math.max(5,Math.min(95,r));const l=e.querySelector(".ba-before"),p=e.querySelector(".ba-handle");l.style.clipPath=`inset(0 ${100-r}% 0 0)`,p.style.left=`${r}%`};e.addEventListener("mousedown",s=>{a=!0,t(s.clientX),s.preventDefault()}),document.addEventListener("mousemove",s=>{a&&t(s.clientX)}),document.addEventListener("mouseup",()=>{a=!1}),e.addEventListener("touchstart",s=>{a=!0,t(s.touches[0].clientX)}),e.addEventListener("touchmove",s=>{a&&(t(s.touches[0].clientX),s.preventDefault())}),e.addEventListener("touchend",()=>{a=!1})})}function la(){const e=document.querySelectorAll(".gallery-filter-btn"),a=document.querySelectorAll(".gallery-item");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(i=>i.classList.remove("active")),t.classList.add("active");const s=t.dataset.filter;a.forEach(i=>{s==="todos"||i.dataset.category===s?i.style.display="":i.style.display="none"})})})}function ca(){const e=document.getElementById("app");e.innerHTML=`
    <!-- SUB HERO -->
    <section class="sub-hero">
      <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format,compress&fm=webp&w=1920&q=80');"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-label">âœ¦ Hablemos</span>
        <h1>Contacto</h1>
        <p class="hero-subtitle">Estamos para ayudarte. AgendÃ¡ tu cita o consultanos lo que necesites por WhatsApp.</p>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section">
      <div class="container">
        <div class="contact-grid" style="grid-template-columns: 1fr; max-width: 800px; margin: 0 auto;">
          
          <!-- INFO -->
          <div class="anim-up text-center" style="margin-bottom: var(--space-xl);">
            <h2 class="section-title">Â¿En quÃ© podemos ayudarte?</h2>
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
                  <h4>UbicaciÃ³n</h4>
                  <p>Mendoza Capital, Barrio Bombal<br>Av. San MartÃ­n 1234, Piso 3</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-solid fa-phone"></i></div>
                <div>
                  <h4>TelÃ©fono</h4>
                  <p>+54 261 000 0000</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon"><i class="fa-regular fa-clock"></i></div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lun â€” Vie: 9:00 â€“ 20:00 hs<br>SÃ¡bados: 9:00 â€“ 14:00 hs</p>
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
                title="UbicaciÃ³n de Ã‰CLAT EstÃ©tica">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const T=new Je("/");function L(e,a){return()=>{e(),Ae(a),window.scrollTo(0,0),te()}}T.on("/",L(V,"/")).on("/tratamientos",L(ea,"/tratamientos")).on("/nosotros",L(sa,"/nosotros")).on("/galeria",L(na,"/galeria")).on("/contacto",L(ca,"/contacto")).notFound(()=>{L(V,"/")()});function X(){we(),Te(),Ce(),ze(),Se(),T.hooks({after:()=>{T.updatePageLinks()}}),T.resolve(),T.updatePageLinks()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",X):X();

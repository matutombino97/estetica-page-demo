import Navigo from 'navigo';
import { renderHome } from './pages/home.js';
import { renderTratamientos } from './pages/tratamientos.js';
import { renderNosotros } from './pages/nosotros.js';
import { renderGaleria } from './pages/galeria.js';
import { renderContacto } from './pages/contacto.js';
import { setActiveLink } from './components/navbar.js';
import { initScrollAnimations } from './components/scrollAnimations.js';

const router = new Navigo('/');

function onRouteChange(renderFn, path) {
    return () => {
        renderFn();
        setActiveLink(path);
        window.scrollTo(0, 0);
        initScrollAnimations();
    };
}

router
    .on('/', onRouteChange(renderHome, '/'))
    .on('/tratamientos', onRouteChange(renderTratamientos, '/tratamientos'))
    .on('/nosotros', onRouteChange(renderNosotros, '/nosotros'))
    .on('/galeria', onRouteChange(renderGaleria, '/galeria'))
    .on('/contacto', onRouteChange(renderContacto, '/contacto'))
    .notFound(() => {
        onRouteChange(renderHome, '/')();
    });

export default router;

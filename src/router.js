import Navigo from 'navigo';
import { renderHome } from './pages/home.js';
import { renderTratamientos } from './pages/tratamientos.js';
import { renderNosotros } from './pages/nosotros.js';
import { renderGaleria } from './pages/galeria.js';
import { renderBlog } from './pages/blog.js';
import { renderContacto } from './pages/contacto.js';
import { renderArticulo } from './pages/articulo.js';
import { setActiveLink } from './components/navbar.js';

const router = new Navigo('/');

function onRouteChange(renderFn, path) {
    return () => {
        renderFn();
        setActiveLink(path);
    };
}

router
    .on('/', onRouteChange(renderHome, '/'))
    .on('/tratamientos', onRouteChange(renderTratamientos, '/tratamientos'))
    .on('/nosotros', onRouteChange(renderNosotros, '/nosotros'))
    .on('/galeria', onRouteChange(renderGaleria, '/galeria'))
    .on('/blog', onRouteChange(renderBlog, '/blog'))
    .on('/blog/:slug', ({ data }) => {
        renderArticulo(data.slug);
        setActiveLink('/blog');
    })
    .on('/contacto', onRouteChange(renderContacto, '/contacto'))
    .notFound(() => {
        onRouteChange(renderHome, '/')();
    });

export default router;

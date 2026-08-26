import './style.css';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderWhatsApp } from './components/whatsapp.js';
import { initPreloader } from './components/preloader.js';
import { initBookingModal } from './components/bookingModal.js';
import router from './router.js';

// Initialize app
function init() {
    // Render persistent components
    renderNavbar();
    renderFooter();
    renderWhatsApp();
    initPreloader();
    initBookingModal();

    // Update Navigo links after each navigation
    router.hooks({
        after: () => {
            router.updatePageLinks();
            },
    });

    // Start router (will render the correct page)
    router.resolve();

    // Initial link update
    router.updatePageLinks();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

